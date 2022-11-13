import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../../services/api";
export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [admin, setAdmin] = useState(false);

  const navigation = useNavigate();

  const createUser = ({ name, username, password, isAdmin = false }) => {
    const params = { name, username, password, isAdmin };
    api
      .post("users", params)
      .then(() => {
        toast.success("Sucesso ao criar a contar");
        navigation("/login");
      })
      .catch(() => {
        toast.error("Erro ao criar a conta, tente outro username");
      });
  };

  const getUser = async (id, token) => {
    return api.get(`users/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  };

  return (
    <UserContext.Provider
      value={{ user, setUser, createUser, getUser, admin, setAdmin }}
    >
      {children}
    </UserContext.Provider>
  );
};
