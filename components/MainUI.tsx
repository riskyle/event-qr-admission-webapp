import { useEffect, useState } from "react";
import { EmployeeType } from "../pages";



const MainUI = ({ picture, employee, queue, setQueue }) => {
    const [isProcessing, setIsProcessing] = useState(false);
    const [display, setDisplay] = useState<EmployeeType>({} as EmployeeType);

    useEffect(() => {
        if (!isProcessing && queue.length > 0) {
            setIsProcessing(true);

            console.log(queue);

            const currentDetails = queue[0] as EmployeeType;

            console.log(currentDetails);

            setDisplay({
                ...display,
                name: currentDetails.name,
                account: currentDetails.account,
                belongsTo: currentDetails.belongsTo,
                picture: currentDetails.picture,
            })

            setQueue(prevQueue => prevQueue.slice(1));

            setTimeout(() => setIsProcessing(false), 500);
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
                            <p className="table">{display.belongsTo}</p>
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