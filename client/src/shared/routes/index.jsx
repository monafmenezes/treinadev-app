import { Routes, Route } from "react-router-dom";
import ProtectRoute from "../../components/ProtectRoute";
import Landing from "../../pages/Landing";
import Login from "../../pages/Login";
import Signup from "../../pages/Signup";
import AdminPage from "../../pages/AdminPage";
import CoursePage from "../../pages/CoursePage";
import ModulePage from "../../pages/ModulePage";
import jwt_decode from "jwt-decode";
import { useContext, useEffect } from "react";
import { UserContext } from "../../providers/user";

const RoutesPages = () => {
  const { getUser, setAdmin } = useContext(UserContext);

  const getAdmin = async () => {
    const decode = jwt_decode(JSON.stringify(localStorage.getItem("token")));
    const res = await getUser(
      decode.sub,
      JSON.parse(localStorage.getItem("token"))
    );
    setAdmin(res.data.isAdmin);
  };

  useEffect(() => {
    getAdmin();
  });

  return (
    <Routes>
      <Route index element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route
        path="/course/:title"
        element={
          <ProtectRoute>
            <CoursePage />
          </ProtectRoute>
        }
      />
      <Route
        path="/home"
        element={
          <ProtectRoute>
            <AdminPage />
          </ProtectRoute>
        }
      />
      <Route
        path="/module/:id"
        element={
          <ProtectRoute>
            <ModulePage />
          </ProtectRoute>
        }
      />
    </Routes>
  );
};

export default RoutesPages;
