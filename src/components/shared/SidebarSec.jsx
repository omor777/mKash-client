import { Button, Sidebar } from "flowbite-react";
import { NavLink, useNavigate } from "react-router-dom";
import { HiTable, HiArrowSmRight } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../features/auth/authSlice";
import { persistor } from "../../app/store";
import { MdOutlineLogout } from "react-icons/md";
import { FaBars, FaUsers } from "react-icons/fa";
import { toggleSidebar } from "../../features/toggle/toggleSlice";
const SidebarSec = () => {
  const { user, isUserExist } = useSelector((state) => state.auth);
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
                <Sidebar.Item href="#">Inbox</Sidebar.Item>
                <Sidebar.Item href="#">Users</Sidebar.Item>
                <Sidebar.Item href="#">Products</Sidebar.Item>
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
