import { Container, ContainerButton, IconContent, Text } from "./style";
import { MdOutlineOndemandVideo } from "react-icons/md";
import Button from "../Button";
import ModalLesson from "../ModalLesson";
import { useContext, useState } from "react";
import { ModuleContext } from "../../providers/module";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Input from "../Input";
import { Box, Dialog, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { CourseContext } from "../../providers/course";
import Lessons from "../Lessons";

const CardModule = ({ module, isAdmin }) => {
  const [lessonModal, setLessonModal] = useState(false);
  const { deleteModule, updateModule } = useContext(ModuleContext);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalLessons, setModalLessons] = useState(false);
  const { getCourses } = useContext(CourseContext);
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
    updateModule({ id: module.id, title, description });
    getCourses();
    setModalOpen(false);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleDelete = () => {
    deleteModule({ id: module.id });
  };

  const handleLesson = () => {
    setModalLessons(true);
    getCourses();
  };

  return (
    <Container>
      {isAdmin ? (
        <>
          <Text>
            <h2>{module.title}</h2>
            <p>{module.description}</p>
          </Text>
          <div>
            <ContainerButton>
              <Button onClick={() => setLessonModal(true)} purpleSchema>
                Nova Aula
              </Button>
            </ContainerButton>
            <ContainerButton>
              <Button purpleSchema onClick={() => setModalOpen(true)}>
                Editar
              </Button>
            </ContainerButton>
            <ContainerButton>
              <Button onClick={handleDelete} purpleSchema>
                Delete
              </Button>
            </ContainerButton>
          </div>
          <ModalLesson
            modalOpen={lessonModal}
            setModalOpen={setLessonModal}
            moduleId={module.id}
          />
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
                width: 400,
                height: 300,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-around",
                margin: "auto",
                backgroundColor: "#1F1A38",
                color: "#FFFFFF",
              }}
            >
              <h2>Edite o módulo</h2>
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
        </>
      ) : (
        <>
          <Text>
            <h2>{module.title}</h2>
            <p>{module.description}</p>
          </Text>

          <IconContent>
            <MdOutlineOndemandVideo size={25} />
            <span>
              {module.lesson.length}{" "}
              {module.lesson.length > 1 ? "Aulas" : "Aula"}
            </span>
          </IconContent>
        </>
      )}
      <Lessons
        modalOpen={modalLessons}
        setModalOpen={setModalLessons}
        lesson={module.lesson}
        isAdmin={isAdmin}
      />
      <ContainerButton>
        <Button onClick={handleLesson} purpleSchema>
          Aulas
        </Button>
      </ContainerButton>
    </Container>
  );
};

export default CardModule;
