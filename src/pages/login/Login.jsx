import { Button, Card, Label, TextInput } from "flowbite-react";
import useAxiosCommon from "../../hooks/useAxiosCommon";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { loginUser } from "../../features/auth/authSlice";

const Login = () => {
  // const { user } = useSelector((state) => state.auth);
  const axiosCommon = useAxiosCommon();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();

  const onSubmit = async (userInfo) => {
    try {
      const { data } = await axiosCommon.post("/auth/login", userInfo);

      let from;
      if (data?.user?.role === "ADMIN") {
        from = "/allUsers";
      }
      if (data?.user?.role === "USER" || data?.user?.role === "AGENT") {
        from = "/home";
      }
      // console.log(data);

      if (data.success) {
        localStorage.setItem("token", data.token);
        dispatch(loginUser(data.user));

        navigate(from);

        toast.success("Login successful");
      }
    } catch (e) {
      console.log(e);
      if (e?.response?.status === 404) {
        toast.error("Invalid credential");
      }
      if (e?.response.status === 401) {
        toast.error("Invalid credentials");
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
              <Label htmlFor="identifier" value="Mobile/Email" />
            </div>
            <TextInput
              {...register("identifier", { required: true })}
              id="identifier"
              type="text"
              placeholder="Enter your credential"
              required
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="pin" value="Pin" />
            </div>
            <TextInput
              {...register("pin", { required: true })}
              id="pin"
              type="password"
              required
              placeholder="Enter your pin"
            />
          </div>

          <Button className="mt-3" type="submit">
            Sign In
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default Login;
