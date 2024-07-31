import { Button, Navbar } from "flowbite-react";
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar } from "../features/toggle/toggleSlice";
import { NavLink, useNavigate } from "react-router-dom";
import { selectIsUserExist, selectUser } from "../features/auth/authSelectors";
import { persistor } from "../app/store";
import { logoutUser } from "../features/auth/authSlice";

const NavbarSec = () => {
  const user = useSelector(selectUser);
  const isUserExist = useSelector(selectIsUserExist);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logoutUser());
    persistor.purge();
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <Navbar fluid="off" className="lg:ml-[255px] shadow-md">
      <Navbar.Brand>
        <span className=" text-center whitespace-nowrap text-xl font-semibold dark:text-white">
          mKash
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />

      <Navbar.Collapse className="lg:hidden">
        {isUserExist ? (
          <div className="flex items-center gap-4 flex-col md:flex-row">
            {user.role === "USER" && (
              <>
                <Navbar.Link
                  as={NavLink}
                  to="/home"
                  className="text-center cursor-pointer"
                >
                  Home
                </Navbar.Link>
                <Navbar.Link
                  as={NavLink}
                  to="/balance"
                  className="text-center cursor-pointer"
                >
                  Total Balance
                </Navbar.Link>
                <Navbar.Link
                  as={NavLink}
                  to="/sendMoney"
                  className="text-center cursor-pointer"
                >
                  Send Money
                </Navbar.Link>
                <Navbar.Link
                  as={NavLink}
                  to="/cashIn"
                  className="text-center cursor-pointer"
                >
                  Cash In
                </Navbar.Link>
                <Navbar.Link className="text-center cursor-pointer">
                  Cash Out
                </Navbar.Link>
              </>
            )}
            {user.role === "AGENT" && (
              <>
                <Navbar.Link
                  as={NavLink}
                  to="/balance"
                  className="text-center cursor-pointer"
                >
                  Total Balance
                </Navbar.Link>
                <Navbar.Link
                  as={NavLink}
                  to="/transactionManagement"
                  className="text-center cursor-pointer"
                >
                  Transaction Request
                </Navbar.Link>
                <Navbar.Link
                  as={NavLink}
                  to="/transaction-history"
                  className="text-center cursor-pointer"
                >
                  Transaction History
                </Navbar.Link>
              </>
            )}
            {user.role === "ADMIN" && (
              <>
                <Navbar.Link
                  as={NavLink}
                  to="/allUsers"
                  className="text-center cursor-pointer"
                >
                  All Users
                </Navbar.Link>
                <Navbar.Link
                  as={NavLink}
                  to="/transaction-history-admin"
                  className="text-center cursor-pointer"
                >
                  Transaction History
                </Navbar.Link>
              </>
            )}
            <Navbar.Link className="text-center cursor-pointer">
              <Button onClick={handleLogout} size="sm">
                Logout
              </Button>
            </Navbar.Link>
          </div>
        ) : (
          <>
            <Navbar.Link
              to="/"
              as={NavLink}
              className="text-center cursor-pointer"
            >
              Login
            </Navbar.Link>
            <Navbar.Link
              as={NavLink}
              to="/signUp"
              className="text-center cursor-pointer"
            >
              Sing Up
            </Navbar.Link>
          </>
        )}
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarSec;
