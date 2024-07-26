import { useSelector } from "react-redux";
import { selectUser } from "../../features/auth/authSelectors";
import { Card } from "flowbite-react";
const TotalBalance = () => {
  const user = useSelector(selectUser);

  return (
    <div className="w-full h-[calc(100vh-56px)] flex items-center justify-center">
      <Card className="max-w-3xl mx-auto py-14 w-full" color="">
        <div className="flex flex-col justify-center items-center gap-4">
          {/* <FaBangladeshiTakaSign className="h-16 w-16  " /> */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold">
            Total Balance
          </h1>
          <h3 className="text-3xl sm:text-5xl md:text-7xl font-bold">
            {user.balance}tk
          </h3>
        </div>
      </Card>
    </div>
  );
};

export default TotalBalance;
