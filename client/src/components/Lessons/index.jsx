import { Dialog, IconButton } from "@mui/material";
import { Box } from "@mui/system";
import CloseIcon from "@mui/icons-material/Close";
import { FaEdit, FaTrash } from "react-icons/fa";
import { useContext, useState } from "react";
import { LessonContext } from "../../providers/lesson";
import { Container } from "./style";
import { CourseContext } from "../../providers/course";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Input from "../Input";
import { format } from "date-fns";
import Button from "../Button"

const Lessons = ({ lesson, modalOpen, setModalOpen, isAdmin = false }) => {
  const { deleteLesson, updateLesson } = useContext(LessonContext);
  const { getCourses } = useContext(CourseContext);
  const [edit, setEdit] = useState(false);
  const [id, setId] = useState(null);
  const schema = yup.object().shape({
    title: yup.string(),
    description: yup.string(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const submit = ({ title, description }) => {
    updateLesson({ id, title, description });
    getCourses();
  };
  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleDelete = (id) => {
    deleteLesson({ id });
    getCourses();
  };

  const handleCloseEdit = () => {
    setEdit(false);
    setId(null);
  };

  const handleEdit = (id) => {
    setId(id);
    setEdit(true);
  };

  return (
    <>
      <Dialog open={edit} onClose={handleCloseEdit}>
        {handleCloseEdit ? (
          <IconButton
            aria-label="close"
            onClick={handleCloseEdit}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: "#FFFFFF",
            }}
          >
            <CloseIcon />
          </IconButton>
        ) : null}
        <Box
          sx={{
            width: 400,
            height: 400,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "start",
            margin: "auto",
            backgroundColor: "#1F1A38",
            color: "#FFFFFF",
            padding: 5,
          }}
        >
          <h2>Edite a Aaula</h2>
          <form onSubmit={handleSubmit(submit)}>
            <Input
              label="Titulo"
              register={register}
              name="title"
              error={errors.name?.message}
            />
            <Input
              label="Descrição"
              register={register}
              name="description"
              error={errors.name?.message}
            />
            <Button type="submit">Enviar</Button>
          </form>
        </Box>
      </Dialog>

      <Dialog open={modalOpen} onClose={handleCloseModal}>
        {handleCloseModal ? (
          <IconButton
            aria-label="close"
            onClick={handleCloseModal}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: "#FFFFFF",
            }}
          >
            <CloseIcon />
          </IconButton>
        ) : null}
        <Box
          sx={{
            width: 600,
            height: 500,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "start",
            margin: "auto",
            backgroundColor: "#1F1A38",
            color: "#FFFFFF",
            padding: 5,
          }}
        >
          <Container>
            <h2>Aulas do Módulo {module.title}</h2>
            <ul>
              {lesson.map((item) => (
                <li key={item.id}>
                  <p>
                    📓 {item.title} - {item.description} -{" "}
                    {format(new Date(item.date_lesson), "MM/dd/yyyy")}
                  </p>
                  {isAdmin && (
                    <div>
                      <FaEdit onClick={() => handleEdit(item.id)} />
                      <FaTrash onClick={() => handleDelete(item.id)} />
                    </div>
                  )}
                </li>
              ))}
            </ul>
            {lesson.length === 0 && (
              <p>Ainda não tem curso cadastrado nesse módulo ;/</p>
            )}
          </Container>
        </Box>
      </Dialog>
    </>
  );
};

export default Lessons;
