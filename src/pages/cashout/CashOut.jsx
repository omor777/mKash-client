import { useForm } from "react-hook-form";

import { Button, Card, Label, TextInput } from "flowbite-react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { TbPasswordUser, TbCoinTaka } from "react-icons/tb";
import { IoMdPhonePortrait } from "react-icons/io";
import { useCashOutMutation } from "../../services/transaction";

const CashOut = () => {
  const [cashOutFunc, { isLoading }] = useCashOutMutation();

  const { handleSubmit, register, reset } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (formData) => {
    try {
      const data = await cashOutFunc({
        ...formData,
        transaction_type: "cashOut",
      }).unwrap();
      if (data.success) {
        toast.success(data.message);
        reset();
        navigate("/home");
      }
    } catch (e) {
      console.log(e);
      toast.error(e.data.message);
    }
  };

  return (
    <div className="mt-20">
      <h1 className="text-[clamp(28px,5vw,64px)] font-bold text-center mb-5">
        <span className="text-teal-500">Cash</span> Out
      </h1>
      <Card className="max-w-4xl mx-auto">
        <form
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          className="space-y-5"
        >
          <div>
            <div className="mb-2 block">
              <Label htmlFor="agent_number" value="Agent number" />
            </div>
            <TextInput
              {...register("agent_number", { required: true })}
              id="agent_number"
              type="text"
              placeholder="Enter agent number"
              icon={IoMdPhonePortrait}
            />
          </div>

          <div>
            <div className="mb-2 block">
              <Label htmlFor="balance" value="Amount" />
            </div>
            <TextInput
              {...register("balance", { required: true, valueAsNumber: true })}
              type="number"
              id="balance"
              placeholder="Enter amount"
              icon={TbCoinTaka}
            />
          </div>

          <div>
            <div className="mb-2 block">
              <Label htmlFor="pin" value="Pin" />
            </div>
            <TextInput
              {...register("pin", { required: true })}
              type="text"
              id="pin"
              placeholder="Enter pin"
              icon={TbPasswordUser}
            />
          </div>

          <Button disabled={isLoading} type="submit" fullSized className="">
            Cashout
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default CashOut;
