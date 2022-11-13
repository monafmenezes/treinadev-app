import Input from "../Input";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Button from "../Button";
import { useContext } from "react";
import { CourseContext } from "../../providers/course";
import { Box, Dialog, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const ModalCourse = ({ modalOpen, setModalOpen }) => {
  const schema = yup.object().shape({
    title: yup.string().required("Campo obrigatório"),
    description: yup.string().required("Campo obrigatório"),
  });

  const { createCourse, getCourses } = useContext(CourseContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const submit = ({ title, description }) => {
    createCourse({ title, description });
    setModalOpen(false);
  };

  const handleCloseModal = () => {
    getCourses();
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
        <h2>Edite o curso</h2>
        <form onSubmit={handleSubmit(submit)}>
          <Input
            label="Curso"
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
          <Button type="submit" purpleSchema>
            Enviar
          </Button>
        </form>
      </Box>
    </Dialog>
  );
};

export default ModalCourse;
