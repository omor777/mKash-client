import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../features/auth/authSelectors";
import { Navigate } from "react-router-dom";
import { logoutUser } from "../features/auth/authSlice";
import { persistor } from "../app/store";
import PropTypes from "prop-types";

const AdminRoute = ({ children }) => {
  const user = useSelector(selectUser);

  const dispatch = useDispatch();

  if (user.role === "ADMIN") {
    return children;
  }
  dispatch(logoutUser());
  persistor.pause();
  return <Navigate to={"/"} replace />;
};

AdminRoute.propTypes = {
  children: PropTypes.node,
};

export default AdminRoute;
