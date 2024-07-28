import { useSelector } from "react-redux";
import MobileInput from "./components/MobileInput";
import { selectStatus } from "../../features/send-money/sendMoneySelectors";
import Amount from "./components/Amount";
import PinComponent from "./components/PinComponent";

const SendMoney = () => {
  const status = useSelector(selectStatus);

  return (
    <div className="h-[calc(100vh-56px)] flex items-center justify-center">
      {status === "number" && <MobileInput />}
      {status === "amount" && <Amount />}
      {status === "pin" && <PinComponent />}
    </div>
  );
};

export default SendMoney;
