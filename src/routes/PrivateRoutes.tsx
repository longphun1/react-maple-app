import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { selectCurrentUser } from "../store/user/user.selector";

const PrivateRoute = () => {
  const isAuthenticated = useSelector(selectCurrentUser);
  console.log(isAuthenticated);

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
