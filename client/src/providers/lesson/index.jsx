import { createContext, useState } from "react";
import { toast } from "react-toastify";
import api from "../../services/api";
import { orderBy } from "../../utils";

export const LessonContext = createContext();

export const LessonProvider = ({ children }) => {
  const [lessons, setLessons] = useState(null);
  const token = JSON.parse(localStorage.getItem("token"));

  const createLesson = ({ title, description, moduleId, date_lesson }) => {
    const params = { title, description, moduleId, date_lesson };

    api
      .post("lessons", params, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => {
        toast.success("Aula criada com sucesso!");
      })
      .catch((err) => {
        console.log(err);
        toast.error("Erro ao criar aula!");
      });
  };

  const getLessons = () => {
    api
      .get("lessons", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setLessons(orderBy(res.data));
      })
      .catch((err) => console.log(err));
  };

  const updateLesson = ({ id, title, description }) => {
    const params = { id, title, description };
    api
      .patch(`lessons/${id}`, params, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => toast.success("Aula atualizada!"))
      .catch(() => toast.error("Ops, houve um erro!"));
  };

  const deleteLesson = ({ id }) => {
    api
      .delete(`lessons/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => toast.success("Aula excluída!"))
      .catch((err) => toast.error("Houve um erro, tente novamente!"));
  };

  return (
    <LessonContext.Provider
      value={{
        lessons,
        getLessons,
        deleteLesson,
        updateLesson,
        createLesson,
      }}
    >
      {children}
    </LessonContext.Provider>
  );
};
