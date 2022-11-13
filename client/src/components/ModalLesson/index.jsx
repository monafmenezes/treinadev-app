import Input from "../Input";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Button from "../Button";
import { useContext } from "react";
import { LessonContext } from "../../providers/lesson";
import { Box, Dialog, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const ModalLesson = ({ modalOpen, setModalOpen, moduleId }) => {
  const schema = yup.object().shape({
    title: yup.string().required("Campo obrigatório"),
    description: yup.string().required("Campo obrigatório"),
    date_lesson: yup.string().required("Campo obrigatório"),
  });

  const { createLesson } = useContext(LessonContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const submit = ({ title, description, date_lesson }) => {
    createLesson({ title, description, moduleId, date_lesson });
    setModalOpen(false);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
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
          height: 400,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-around",
          margin: "auto",
          backgroundColor: "#1F1A38",
          color: "#FFFFFF",
        }}
      >
        <h2>Crie uma aula</h2>
        <form onSubmit={handleSubmit(submit)}>
          <Input
            label="Aula"
            register={register}
            name="title"
            error={errors.name?.message}
            placeholder="Nome da Aula"
          />
          <Input
            label="Descrição"
            register={register}
            name="description"
            error={errors.name?.message}
            placeholder="Descrição da Aula"
          />
          <Input
            label="Data"
            register={register}
            name="date_lesson"
            error={errors.name?.message}
            placeholder="12/20/2022"
          />

          <Button type="submit" purpleSchema>
            Enviar
          </Button>
        </form>
      </Box>
    </Dialog>
  );
};

export default ModalLesson;
