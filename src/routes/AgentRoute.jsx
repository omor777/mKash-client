import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../features/auth/authSelectors";
import { Navigate } from "react-router-dom";
import { logoutUser } from "../features/auth/authSlice";
import { persistor } from "../app/store";

const AgentRoute = ({ children }) => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  if (user.role === "AGENT") {
    return children;
  }
  dispatch(logoutUser());
  persistor.purge();
  return <Navigate to={"/"} replace />;
};

export default AgentRoute;
