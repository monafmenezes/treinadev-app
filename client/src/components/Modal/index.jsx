import Input from "../Input";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Button from "../Button";
import { useContext } from "react";
import { ModuleContext } from "../../providers/module";
import { Box, Dialog, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const ModalCourse = ({ modalOpen, setModalOpen, path, id }) => {
  const schema = yup.object().shape({
    title: yup.string().required("Campo obrigatório"),
    description: yup.string().required("Campo obrigatório"),
    lesson_data: yup.string().required("Campo obrigatório"),
  });

  const { createModule } = useContext();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const submit = ({ title, description }) => {
    createModule({ title, description, courseId });
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
        <h2>Crie um módulo</h2>
        <form onSubmit={handleSubmit(submit)}>
          <Input
            label="Módulo"
            register={register}
            name="title"
            error={errors.name?.message}
            placeholder="Nome do módulo"
          />
          <Input
            label="Descrição"
            register={register}
            name="description"
            error={errors.name?.message}
            placeholder="Descrição do módulo"
          />
          <Button type="submit" purpleSchema>
            Enviar
          </Button>
        </form>
      </Box>
    </Dialog>
  );
};

export default ModalCourse;
