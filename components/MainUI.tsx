import { useEffect, useState } from "react";
import { EmployeeType } from "../pages";

const capitalizeFirstLetter = (str: string) =>
    str.toLowerCase()
        .split(" ")
        .map((word: string) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");

const MainUI = ({ picture, queue, setQueue }) => {
    const [display, setDisplay] = useState<EmployeeType>({} as EmployeeType);

    const getQueue = async (queue: any) => {
        console.log(queue);

        for (let q of queue) {

            console.log(q);

            setDisplay({
                ...display,
                account: q.account,
                name: q.name,
                picture: q.picture,
                belongsTo: q.belongsTo,
            });

            await new Promise(resolve => setTimeout(resolve, 10000));

            setQueue((prevQueue: any) => prevQueue.slice(1));
        }
    }

    useEffect(() => {
        getQueue(queue);
    }, [queue]);

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
                            <p className="account-name">{capitalizeFirstLetter(display.account ?? "")}</p>
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

