import { useEffect, useRef, useState } from "react";
import "../firebase/index";
import { DocumentData, onSnapshot, QuerySnapshot } from "firebase/firestore";
import { queryEmployee } from "../firebase";
import MainUI from "../components/MainUI";
import StandByUI from "../components/StandByUI";

export interface EmployeeType {
  account: string;
  name: string;
  picture: string;
  belongsTo: string;
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

  const [queue, setQueue] = useState<Array<EmployeeType>>([]);
  const [employee, setEmployee] = useState<EmployeeType>({
    account: "",
    name: "",
    picture: "",
    belongsTo: "",
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
        const emp = { ...employee.data() } as any;

        setQueue(prevQueue => [...prevQueue, emp]);

        setEmployee({
          account: emp.account,
          name: emp.name,
          picture: emp.picture,
          belongsTo: emp.belongsTo,
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

  return isStandby && queue.length == 0
    ? (<StandByUI picture={picture} />)
    : (<MainUI picture={picture} queue={queue} setQueue={setQueue} />)
};

export default App;
