import { Navigate } from "react-router-dom";

const useAuthentication = () => {
  const checkLocalStorage = () => {
    if (localStorage.getItem("token")) {
      return true;
    }
    return false;
  };

  const redirectToLandingPage = () => {
    localStorage.clear() 
    return <Navigate to="/" replace />;
  };

  return { checkLocalStorage, redirectToLandingPage };
};

export default useAuthentication;
