import { Navigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
import { getUnixTime } from "date-fns";

const ProtectRoute = ({ redirectPath = "/", children }) => {
  const token = JSON.stringify(localStorage.getItem("token"));
  const decode = jwt_decode(token);
  const date = getUnixTime(new Date());

  if (decode.exp > date) return children;

  localStorage.clear();

  return <Navigate to={redirectPath} replace />;
};

export default ProtectRoute;
