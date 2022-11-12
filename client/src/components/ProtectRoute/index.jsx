import { Navigate } from "react-router-dom";

const ProtectRoute = ({ redirectPath = "/", children }) => {
  if (localStorage.getItem("token")) {
    return children;
  }

  return <Navigate to={redirectPath} replace />;
};

export default ProtectRoute;
