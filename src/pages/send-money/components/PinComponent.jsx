import { Button, TextInput, Card } from "flowbite-react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

import { TbPasswordUser } from "react-icons/tb";
import { IoMdSend } from "react-icons/io";
import { useSendMoneyMutation } from "../../../services/sendMoneyApi";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { resetState } from "../../../features/send-money/sendMoneySlice";
const PinComponent = () => {
  const [pin, setPin] = useState("");
  const dispatch = useDispatch();
  const { mobile_number, amount: balance } = useSelector(
    (state) => state.sendMoney
  );
  const navigate = useNavigate();

  const [sendMoneyToUser, { isLoading, error }] = useSendMoneyMutation();

  useEffect(() => {
    if (error) {
      toast.error(error.data.message);
    }
  }, [error]);

  const handleChange = (e) => {
    setPin(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await sendMoneyToUser({
        pin,
        mobile_number,
        balance,
        transaction_type: "sendMoney",
      });

      if (data.success) {
        toast.success(data.message);
        navigate("/home");
        dispatch(resetState());
      }
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <Card className="max-w-3xl w-full mx-auto">
      <form onSubmit={handleSubmit}>
        <div className="flex items-center">
          <TextInput
            icon={TbPasswordUser}
            onChange={handleChange}
            value={pin}
            className="flex-1 input-radius"
            id="mobile_number"
            type="text"
            placeholder="Enter your pin..."
            autoComplete="true"
          />
          <Button disabled={isLoading} type="submit" className="rounded-none">
            <IoMdSend className="h-5 w-5" />
          </Button>
        </div>
        {/* {isError && (
          <div className="mt-1">
            <Alert color="failure" icon={HiInformationCircle}>
              {error.message}
            </Alert>
          </div>
        )} */}
      </form>
    </Card>
  );
};

export default PinComponent;
