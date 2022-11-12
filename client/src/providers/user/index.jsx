import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../../services/api";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const navigation = useNavigate();

  const getUser = (id) => {
    api.get(`users/${id}`).then((response) => {
      console.log(response);
      setUser(response);
    });
  };

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

  const loginUser = ({ name, password, isAdmin }) => {
    const login = { name, password };
    api
      .post("login", login)
      .then((res) => {
        const { token } = res.token;
        localStorage.setItem("token", JSON.stringify(token));
        toast.success("Login realizado!");
        if (isAdmin) {
          return navigation("/admin");
        }
        return navigation("/home");
      })
      .catch(() => {
        toast.error("Email ou senha inválidos, tente novamente");
      });
  };

  return (
    <UserContext.Provider value={{ user, getUser, createUser, loginUser }}>
      {children}
    </UserContext.Provider>
  );
};
