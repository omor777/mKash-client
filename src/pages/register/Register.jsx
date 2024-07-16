import { Button, Card, Label, Select, TextInput } from "flowbite-react";
import { useForm } from "react-hook-form";
import useAxiosCommon from "../../hooks/useAxiosCommon";
import "react-toastify/dist/ReactToastify.css";

import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const axiosCommon = useAxiosCommon();
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  const onSubmit = async (userInfo) => {
    try {
      const { data } = await axiosCommon.post("/auth/register", userInfo);
      if (data.success) {
        toast.success("Registration successful");
        navigate("/");
      }
    } catch (e) {
      console.log(e.response);
      if (e.response.status === 400) {
        return toast.error("User already exist with this email");
      }
    }
  };

  return (
    <div className="flex items-center justify-center h-screen ">
      <Card className="w-full max-w-5xl mx-auto ">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-4"
          noValidate
        >
          <div>
            <div className="mb-2 block">
              <Label htmlFor="name" value="Name" />
            </div>
            <TextInput
              {...register("name", { required: true })}
              id="name"
              type="text"
              placeholder="Enter your name"
              required
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email" value="Email" />
            </div>
            <TextInput
              {...register("email", { required: true })}
              id="email"
              type="email"
              required
              placeholder="Enter your email"
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="mobile_number" value="Mobile" />
            </div>
            <TextInput
              {...register("mobile_number", { required: true })}
              id="mobile_number"
              type="text"
              required
              placeholder="Enter your mobile number"
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="role" value="Account type" />
            </div>
            <Select
              {...register("role", { required: true })}
              id="role"
              required
            >
              <option value={"USER"}>User</option>
              <option value={"AGENT"}>Agent</option>
            </Select>
          </div>

          <div>
            <div className="mb-2 block">
              <Label htmlFor="pin" value="Pin" />
            </div>
            <TextInput
              {...register("pin", { required: true })}
              id="pin"
              type="password"
              placeholder="Enter your pin"
              required
            />
          </div>
          <Button className="mt-3" type="submit">
            Sign Up
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default Register;
