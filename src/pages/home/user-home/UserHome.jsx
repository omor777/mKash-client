import { Card } from "flowbite-react";
import { FaSackDollar } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { GiTakeMyMoney, GiWallet, GiPayMoney } from "react-icons/gi";
import { HiShoppingBag } from "react-icons/hi2";
import { MdEnergySavingsLeaf } from "react-icons/md";

const UserHome = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <Link to={"/balance"}>
        <Card className="py-10 ">
          <div className="flex flex-col justify-center items-center gap-4">
            <FaSackDollar className="h-16 w-16 text-green-500" />
            <p className="text-nowrap text-[clamp(30px,3vw,38px)] font-extrabold">
              Total Balance
            </p>
          </div>
        </Card>
      </Link>
      <Link to={"/sendMoney"}>
        <Card className="py-10">
          <div className="flex flex-col justify-center items-center gap-4">
            <GiPayMoney className="h-16 w-16 text-pink-500" />
            <p className="text-nowrap text-[clamp(30px,3vw,38px)] font-extrabold">
              Send Money
            </p>
          </div>
        </Card>
      </Link>
      <Link to={"/cashOut"}>
        <Card className="py-10">
          <div className="flex flex-col justify-center items-center gap-4">
            <GiTakeMyMoney className="h-16 w-16 text-orange-500" />
            <p className="text-nowrap text-[clamp(30px,3vw,38px)] font-extrabold">
              Cash Out
            </p>
          </div>
        </Card>
      </Link>
      <Link to={"/cashIn"}>
        <Card className="py-10">
          <div className="flex flex-col justify-center items-center gap-4">
            <GiWallet className="h-16 w-16 text-purple-500" />
            <p className="text-nowrap text-[clamp(30px,3vw,38px)] font-extrabold">
              Cash In
            </p>
          </div>
        </Card>
      </Link>
      <Link>
        <Card className="py-10">
          <div className="flex flex-col justify-center items-center gap-4">
            <HiShoppingBag className="h-16 w-16 text-sky-500" />
            <p className="text-nowrap text-[clamp(30px,3vw,38px)] font-extrabold">
              Payment
            </p>
          </div>
        </Card>
      </Link>
      <Link>
        <Card className="py-10">
          <div className="flex flex-col justify-center items-center gap-4">
            <MdEnergySavingsLeaf className="h-16 w-16 text-amber-500" />
            <p className="text-nowrap text-[clamp(30px,3vw,38px)] font-extrabold">
              Savings
            </p>
          </div>
        </Card>
      </Link>
    </div>
  );
};

export default UserHome;
