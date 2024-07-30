import { Button, Sidebar } from "flowbite-react";
import { NavLink, useNavigate } from "react-router-dom";
import { HiTable, HiArrowSmRight } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../features/auth/authSlice";
import { persistor } from "../../app/store";
import { MdOutlineLogout } from "react-icons/md";
import { FaBars, FaDollarSign, FaFileInvoice, FaUsers } from "react-icons/fa";
import { TiHome } from "react-icons/ti";
import { toggleSidebar } from "../../features/toggle/toggleSlice";
import { GiTakeMyMoney, GiWallet, GiPayMoney } from "react-icons/gi";
import { FaSackDollar } from "react-icons/fa6";
import {
  selectIsUserExist,
  selectUser,
} from "../../features/auth/authSelectors";
import { BiDollarCircle } from "react-icons/bi";

const SidebarSec = () => {
  // const { user, isUserExist } = useSelector((state) => state.auth);
  const user = useSelector(selectUser);
  const isUserExist = useSelector(selectIsUserExist);

  const { isOpen } = useSelector((state) => state.toggle);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logoutUser());
    persistor.purge();
    localStorage.removeItem("token");
    navigate("/");
  };

  const handleToggle = () => {
    dispatch(toggleSidebar());
  };

  return (
    <div>
      <nav className="bg-white shadow-md h-14 flex items-center px-8 justify-between">
        <h1 className="text-2xl font-bold">mKash</h1>
        <Button onClick={handleToggle} className="md:hidden">
          <FaBars className="w-5 h-5" />
        </Button>
      </nav>
      <Sidebar
        className={`fixed left-0 z-50  ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 transition-transform duration-300 ease-in-out  text-white w-64`}
      >
        <Sidebar.Items className="">
          <Sidebar.ItemGroup>
            {isUserExist ? (
              <>
                {user.role === "ADMIN" && (
                  <>
                    <Sidebar.Item
                      onClick={handleToggle}
                      as={NavLink}
                      icon={FaUsers}
                      to="/allUsers"
                    >
                      All Users
                    </Sidebar.Item>
                  </>
                )}
                {user.role === "USER" && (
                  <>
                    <Sidebar.Item as={NavLink} to="/home" icon={TiHome}>
                      Home
                    </Sidebar.Item>
                    <Sidebar.Item
                      to="/balance"
                      as={NavLink}
                      icon={FaSackDollar}
                    >
                      Total Balance
                    </Sidebar.Item>
                    <Sidebar.Item
                      to="/sendMoney"
                      as={NavLink}
                      icon={GiPayMoney}
                    >
                      Send Money
                    </Sidebar.Item>
                    <Sidebar.Item
                      to="/cashOut"
                      as={NavLink}
                      icon={GiTakeMyMoney}
                    >
                      Cash Out
                    </Sidebar.Item>
                    <Sidebar.Item to="/cashIn" as={NavLink} icon={GiWallet}>
                      Cash In
                    </Sidebar.Item>
                  </>
                )}
                {user.role === "AGENT" && (
                  <>
                    <Sidebar.Item
                      to="/balance"
                      as={NavLink}
                      icon={FaDollarSign}
                    >
                      Total Balance
                    </Sidebar.Item>
                    <Sidebar.Item
                      to="/transactionManagement"
                      as={NavLink}
                      icon={BiDollarCircle}
                    >
                      Transaction Request
                    </Sidebar.Item>
                    <Sidebar.Item
                      to="/transaction-history"
                      as={NavLink}
                      icon={FaFileInvoice}
                    >
                      Transaction History
                    </Sidebar.Item>
                  </>
                )}
                <Sidebar.Item
                  onClick={handleLogout}
                  icon={MdOutlineLogout}
                  as="p"
                  className="cursor-pointer"
                >
                  Logout
                </Sidebar.Item>
              </>
            ) : (
              <>
                <Sidebar.Item as={NavLink} to="/" icon={HiArrowSmRight}>
                  Sing In
                </Sidebar.Item>
                <Sidebar.Item as={NavLink} to="/signUp" icon={HiTable}>
                  Sing Up
                </Sidebar.Item>
              </>
            )}
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    </div>
  );
};

export default SidebarSec;
