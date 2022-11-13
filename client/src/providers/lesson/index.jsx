import { createContext, useState } from "react";
import { toast } from "react-toastify";
import api from "../../services/api";

export const CourseContext = createContext();

export const CourseProvider = ({ children }) => {
  const [courses, setCourses] = useState(null);
  const token = JSON.parse(localStorage.getItem("token"));

  const createCourse = ({ title, description }) => {
    const params = { title, description };
  

    api
      .post("courses", params, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => {
        toast.success("Curso criado com sucesso!");
      })
      .catch((err) => {
        console.log(err);
        toast.error("Erro ao criar curso!");
      });
  };

  const getCourses = () => {
    api
      .get("courses", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setCourses(res.data);
  
      })
      .catch((err) => console.log(err));
  };

  const updateCourse = ({ id, title, description }) => {
    const params = { id, title, description };
    api.patch(`courses/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params,
    });
  };

  const deleteCourse = ({ id }) => {
    const params = { id };
    api
      .patch(`courses/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params,
      })
      .then(() => toast.success("Curso excluído!"))
      .catch(() => toast.error("Houve um erro, tente novamente!"));
  };

  return (
    <CourseContext.Provider
      value={{
        courses,
        setCourses,
        createCourse,
        getCourses,
        updateCourse,
        deleteCourse,
      }}
    >
      {children}
    </CourseContext.Provider>
  );
};
