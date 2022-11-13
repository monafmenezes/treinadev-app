import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CourseContext } from "../../providers/course";
import Button from "../Button";
import { Container, ContainerButton } from "./style";
import Box from "@mui/material/Box";
import Dialog from "@mui/material/Dialog";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Input from "../Input";

const CardCourse = ({ title, description, id, admin = false }) => {
  const { setCourseId, deleteCourse, updateCourse } = useContext(CourseContext);
  const [modalOpen, setModalOpen] = useState(false);
  const navigate = useNavigate();

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
    updateCourse({ id, title, description });
    setModalOpen(false);
  };

  const handleCourse = () => {
    setCourseId(id);
    navigate(`/course/${title}`);
  };

  const handleDelete = () => {
    deleteCourse({ id });
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <Container>
      <h3>{title}</h3>
      <p>{description}</p>
      {admin ? (
        <ContainerButton>
          <Button purpleSchema>Criar Módulos</Button>
          <Button onClick={() => setModalOpen(true)} purpleSchema>
            Editar
          </Button>
          <Button onClick={handleDelete} purpleSchema>
            Excluir
          </Button>
        </ContainerButton>
      ) : (
        <Button onClick={handleCourse} purpleSchema>
          Saba mais
        </Button>
      )}

      <Dialog open={modalOpen} onClose={handleCloseModal}>
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
    </Container>
  );
};

export default CardCourse;
