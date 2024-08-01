import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../features/auth/authSelectors";
import { Navigate } from "react-router-dom";
import { logoutUser } from "../features/auth/authSlice";
import { persistor } from "../app/store";
import PropTypes from "prop-types";

const UserRoute = ({ children }) => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  if (user.role === "USER") {
    return children;
  }
  dispatch(logoutUser());
  persistor.purge();
  return <Navigate to={"/"} replace />;
};

UserRoute.propTypes = {
  children: PropTypes.node,
};
export default UserRoute;
