import { useSelector } from "react-redux";
import MobileInput from "./components/MobileInput";
import { selectStatus } from "../../features/send-money/sendMoneySelectors";
import Amount from "./components/Amount";
import PinComponent from "./components/PinComponent";

const SendMoney = () => {
  const status = useSelector(selectStatus);

  return (
    <div className="mt-20">
      <h1 className="text-[clamp(28px,5vw,64px)] font-bold text-center mb-5">
        <span className="text-teal-500">Send</span> Money
      </h1>
      {status === "number" && <MobileInput />}
      {status === "amount" && <Amount />}
      {status === "pin" && <PinComponent />}
    </div>
  );
};

export default SendMoney;
