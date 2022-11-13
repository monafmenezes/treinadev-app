import { Routes, Route } from "react-router-dom";
import ProtectRoute from "../../components/ProtectRoute";
import Home from "../../pages/Home";
import Landing from "../../pages/Landing";
import Login from "../../pages/Login";
import Signup from "../../pages/Signup";
import AdminPage from "../../pages/AdminPage";
import CoursePage from "../../pages/CoursePage";
import ModulePage from "../../pages/ModulePage";

const RoutesPages = () => {
  return (
    <Routes>
      <Route index element={<Landing />} />
      <Route
        path="home"
        element={
          <ProtectRoute>
            <Home />
          </ProtectRoute>
        }
      />
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
        path="/admin"
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
