import { createContext, useState } from "react";
import { toast } from "react-toastify";
import api from "../../services/api";
import { orderBy } from "../../utils";

export const ModuleContext = createContext();

export const ModuleProvider = ({ children }) => {
  const [modules, setModules] = useState(null);
  const token = JSON.parse(localStorage.getItem("token"));

  const createModule = ({ title, description, courseId }) => {
    const params = { title, description, courseId };
    api
      .post("modules", params, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => {
        toast.success("Modulo criado com sucesso!");
      })
      .catch((err) => {
        console.log(err);
        toast.error("Erro ao criar modulo!");
      });
  };

  const getModules = () => {
    api
      .get("modules", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setModules(orderBy(res.data));
      })
      .catch((err) => console.log(err));
  };

  const updateModule = ({ id, title, description }) => {
    const params = { id, title, description };
    api.patch(`modules/${id}`, params, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then(() => toast.success("Deu certo!")).catch((err) => {
      console.log(err);
      toast.error("Ops, algo deu errado!")
    });
  };

  const deleteModule = ({ id }) => {
    api
      .delete(`modules/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => toast.success("Modulo excluído!"))
      .catch((err) => {
        console.log(err);
        toast.error("Houve um erro, tente novamente!");
      });
  };

  return (
    <ModuleContext.Provider
      value={{ modules, getModules, updateModule, deleteModule, createModule }}
    >
      {children}
    </ModuleContext.Provider>
  );
};
