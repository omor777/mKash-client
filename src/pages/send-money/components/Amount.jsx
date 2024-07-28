import { Button, TextInput, Card } from "flowbite-react";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { addAmount } from "../../../features/send-money/sendMoneySlice";
import { TbCoinTaka } from "react-icons/tb";
const Amount = () => {
  const [amount, setAmount] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setAmount(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addAmount(parseFloat(amount)));
    setAmount("");
  };
  return (
    <Card className="max-w-3xl w-full mx-auto">
      <form onSubmit={handleSubmit} className="flex items-center">
        <TextInput
          icon={TbCoinTaka}
          onChange={handleChange}
          value={amount}
          className="flex-1 input-radius"
          id="mobile_number"
          type="text"
          placeholder="Enter amount..."
          autoComplete="true"
        />
        <Button type="submit" className="rounded-none">
          <FaArrowRight className="h-5 w-5" />
        </Button>
      </form>
    </Card>
  );
};

export default Amount;
