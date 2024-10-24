import { useEffect, useState } from "react";
import { EmployeeType } from "../pages";

const capitalizeFirstLetter = (str: string) =>
    str.toLowerCase()
        .split(" ")
        .map((word: string) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");

const MainUI = ({ picture, queue, setQueue, setIsStandBy, resetStandbyTimer }) => {
    const [display, setDisplay] = useState<EmployeeType>({} as EmployeeType);
    const [isProcessing, setIsProcessing] = useState(false);

    useEffect(() => {
        if (!isProcessing && queue.length > 0) {
            setIsProcessing(true);

            const currentDetails = queue[0] as EmployeeType;

            setDisplay({
                ...display,
                name: currentDetails.name,
                account: currentDetails.account,
                belongsTo: currentDetails.belongsTo,
                picture: currentDetails.picture,
            })

            setIsStandBy(false)
            resetStandbyTimer();

            setQueue((prevQueue: any) => prevQueue.slice(1));

            setTimeout(() => setIsProcessing(false), 5000);
        }
    }, [isProcessing, queue]);

    return (
        <>
            <div className="display">
                <div className="grid">
                    <div className="left-section">
                        <div
                            className="container-picture"
                            style={{ backgroundImage: `url(${picture(display.picture)})` }}
                        >
                            <img className="sos" src={picture("img/sos.png")} alt="" />
                            <img className="glitz-glam" src={picture("img/glamsparkingeffect.gif")} alt="" />
                            <img className="tenyears" src={picture("img/10yearsv2.gif")} alt="" />
                            <img className="spark" src={picture("img/spark2.gif")} alt="" />
                            <img className="spark1" src={picture("img/spark.gif")} alt="" />
                            <img className="spark2" src={picture("img/spark.gif")} alt="" />
                        </div>
                    </div>

                    <div className="right-section">

                        <img className="staff" src={picture("img/staffplain.png")} alt="" />
                        <div className="bottom-section">
                            <p className="name">{display.name}</p>
                            <p className="account-name">{display.account}</p>
                            <p className="table">{capitalizeFirstLetter(display.belongsTo ?? "")}</p>
                        </div>
                    </div>

                    <img src={picture("img/sparkling-stars-background.gif")} className="sparkling1" alt="" />
                    <img src={picture("img/sparkling-stars-background.gif")} className="sparkling2" alt="" />
                    <img src={picture("img/sparkling-stars-background.gif")} className="sparkling3" alt="" />
                    <img src={picture("img/sparkling-stars-background.gif")} className="sparkling4" alt="" />
                </div>
            </div>
        </>
    );
}

export default MainUI;

