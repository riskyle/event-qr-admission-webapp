import { useEffect, useRef, useState } from "react";
import "../firebase/index";
import { DocumentData, onSnapshot, QuerySnapshot } from "firebase/firestore";
import { queryEmployee } from "../firebase";
import MainUI from "../components/MainUI";
import StandByUI from "../components/StandByUI";

interface EmployeeType {
  account: string;
  name: string;
  picture: string;
  table: string;
}

const App = () => {
  const picture = (url: string) => {
    if (url) {
      return `https://storage.googleapis.com/event-qr-admission.appspot.com/${url}`;
    } else {
      return 'https://clipart-library.com/images/ATbrxjpyc.jpg';
    }
  };

  const [isStandby, setIsStandBy] = useState<boolean>(false);
  const standByTime = useRef<NodeJS.Timeout | null>(null)

  const [employee, setEmployee] = useState<EmployeeType>({
    account: "",
    name: "",
    picture: "",
    table: "",
  });

  const resetStandbyTimer = () => {
    if (standByTime.current) {
      clearTimeout(standByTime.current);
    }
    standByTime.current = setTimeout(() => {
      setIsStandBy(true);
    }, 10000);
  };

  const employeeDetails = (
    snapshot: QuerySnapshot<DocumentData, DocumentData>
  ) => {
    try {
      snapshot.docs.map((employee) => {
        setEmployee({
          account: employee.data()["account"],
          name: employee.data()["name"],
          picture: employee.data()["picture"],
          table: employee.data()["belongsTo"],
        });
      });
      setIsStandBy(false);
      resetStandbyTimer();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    onSnapshot(queryEmployee, (snapshot) => employeeDetails(snapshot));
  }, []);

  return isStandby ? (<StandByUI picture={picture} />) : (<MainUI picture={picture} employee={employee} />)
};

export default App;
