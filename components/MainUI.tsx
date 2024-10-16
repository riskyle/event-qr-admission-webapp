
const MainUI = ({ picture, employee }) => {
    return (
        <>
            <div className="display">
                <div className="grid">
                    <div className="left-section">
                        <div
                            className="container-picture"
                            style={{ backgroundImage: `url(${picture(employee.picture)})` }}
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
                            <p className="name">{employee.name}</p>
                            <p className="account-name">{employee.account}</p>
                            <p className="table">Table 1</p>
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