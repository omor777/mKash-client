import { useSelector } from "react-redux";
import { selectIsUserExist } from "../features/auth/authSelectors";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const isUserExist = useSelector(selectIsUserExist);
  const location = useLocation();

  if (isUserExist) {
    return children;
  }

  return <Navigate state={location.pathname} to={"/"} replace />;
};

export default PrivateRoute;
