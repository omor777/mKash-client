import { Button, TextInput, Card } from "flowbite-react";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { addMobileNumber } from "../../../features/send-money/sendMoneySlice";
import { IoMdPhonePortrait } from "react-icons/io";
const MobileInput = () => {
  const [mobileNumber, setMobileNumber] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setMobileNumber(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addMobileNumber(mobileNumber));
    setMobileNumber("");
  };

  return (
    <Card className="max-w-3xl w-full mx-auto">
      <form onSubmit={handleSubmit} className="flex items-center">
        <TextInput
          icon={IoMdPhonePortrait}
          onChange={handleChange}
          value={mobileNumber}
          className="flex-1 input-radius"
          id="mobile_number"
          type="text"
          placeholder="Enter mobile number..."
          autoComplete="true"
        />
        <Button type="submit" className="rounded-none">
          <FaArrowRight className="h-5 w-5" />
        </Button>
      </form>
    </Card>
  );
};

export default MobileInput;
