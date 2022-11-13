import { createContext, useState } from "react";
import { toast } from "react-toastify";
import api from "../../services/api";
import { orderBy } from "../../utils";

export const CourseContext = createContext();

export const CourseProvider = ({ children }) => {
  const [courses, setCourses] = useState(null);
  const [courseId, setCourseId] = useState(null);
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
        const course = orderBy(res.data);
        setCourses(course);
      })
      .catch((err) => console.log(err));
  };

  const updateCourse = ({ id, title, description }) => {
    const params = { id, title, description };
    api
      .patch(`courses/${id}`, params, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => {
        toast.success("Curso alterado!");
        getCourses();
      })
      .catch((err) => {
        toast.error("Houve um erro!");
      });
  };

  const deleteCourse = ({ id }) => {
    api
      .delete(`courses/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => toast.success("Curso excluído!"))
      .catch((err) => {
        toast.error("Houve um erro, tente novamente!");
      });
  };

  const searchCourse = (id) => {
    return courses.find((course) => course.id === id);
  };

  return (
    <CourseContext.Provider
      value={{
        courses,
        setCourses,
        courseId,
        setCourseId,
        createCourse,
        getCourses,
        updateCourse,
        deleteCourse,
        searchCourse,
      }}
    >
      {children}
    </CourseContext.Provider>
  );
};
