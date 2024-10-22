import { useEffect, useState } from "react";
import { EmployeeType } from "../pages";



const MainUI = ({ picture, employee, queue, setQueue }) => {
    const [isProcessing, setIsProcessing] = useState(false);
    const [display, setDisplay] = useState<EmployeeType>({} as EmployeeType);

    const getQueue = async (queue) => {
        for (let q of queue) {

            console.log(q);

            setDisplay({
                ...display,
                account: q.account,
                name: q.name,
                picture: q.picture,
                belongsTo: q.belongsTo,
            });

            await new Promise(resolve => setTimeout(resolve, 3000));

            console.log(queue);

            console.log("done")
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
                            style={{ backgroundImage: `url(${picture(queue.length > 0 ? display.picture : employee.picture)})` }}
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
                            <p className="name">{queue.length > 0 ? display.name : employee.name}</p>
                            <p className="account-name">{queue.length > 0 ? display.account : employee.account}</p>
                            <p className="table">{queue.length > 0 ? display.belongsTo : employee.belongsTo}</p>
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