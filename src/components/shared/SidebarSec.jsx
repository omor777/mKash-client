import { Sidebar } from "flowbite-react";
import { NavLink, useNavigate } from "react-router-dom";
import { HiTable, HiArrowSmRight } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../features/auth/authSlice";
import { persistor } from "../../app/store";
import { MdOutlineLogout } from "react-icons/md";

const SidebarSec = () => {
  const { isUserExist } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logoutUser());
    persistor.purge();
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <Sidebar className="h-screen         w-72">
      <Sidebar.Items className="">
        <Sidebar.ItemGroup>
          {isUserExist ? (
            <>
              <Sidebar.Item href="#">Dashboard</Sidebar.Item>
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
  );
};

export default SidebarSec;
