import { useEffect, useState } from "react";
import "../firebase/index";
import { DocumentData, onSnapshot, QuerySnapshot } from "firebase/firestore";
import { queryEmployee } from "../firebase";

interface EmployeeType {
  account: string;
  name: string;
  picture: string;
}

const App = () => {
  const picture = (url: string) => {
    if (url) {
      return 'https://storage.googleapis.com/event-qr-admission.appspot.com/' + url;
    } else {
      return 'https://clipart-library.com/images/ATbrxjpyc.jpg';
    }
  };

  const [employee, setEmployee] = useState<EmployeeType>({
    account: "",
    name: "",
    picture: "",
  });

  const employeeDetails = (
    snapshot: QuerySnapshot<DocumentData, DocumentData>
  ) => {
    try {
      snapshot.docs.map((employee) => {
        setEmployee({
          account: employee.data()["account"],
          name: employee.data()["name"],
          picture: employee.data()["picture"],
        });
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    onSnapshot(queryEmployee, (snapshot) => employeeDetails(snapshot));
  }, []);

  return (
    <>
      <div className="grid">
        <div className="left-section">
          <img src="" alt="" />
          <div className="container-picture" style={{ backgroundImage: `url(${picture(employee.picture)})` }}>
            <img className="sos" src={picture("img/sos.png")} alt="" />
            <img className="glitz-glam" src={picture("img/glitz-glam.png")} alt="" />
            <img className="tenyears" src={picture("img/10years.png")} alt="" />
            <img className="spark" src={picture("img/spark.png")} alt="" />
            <img className="spark1" src={picture("img/spark.png")} alt="" />
            <img className="spark2" src={picture("img/spark.png")} alt="" />
          </div>
        </div>

        <div className="right-section">

          <img className="staff" src={picture("img/staffplain.png")} alt="" />
          <div className="bottom-section">
            <p className="account-name">"{employee.account}"</p>
            <p className="name">{employee.name}</p>
            <p className="table">Table 1</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
