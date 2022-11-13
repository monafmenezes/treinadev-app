import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CourseContext } from "../../providers/course";
import Button from "../Button";
import { Container, ContainerButton } from "./style";
import Box from "@mui/material/Box";
import Dialog from "@mui/material/Dialog";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Input from "../Input";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ModalModule from "../../components/ModalModule";

const CardCourse = ({ title, description, id, admin = false }) => {
  const { setCourseId, deleteCourse, updateCourse } = useContext(CourseContext);
  const [modalOpen, setModalOpen] = useState(false);
  const [moduleOpen, setModuleOpen] = useState(false);
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
      <Link to={`/module/${id}`}>
        <h3>{title}</h3>
      </Link>
      <p>{description}</p>
      {admin ? (
        <ContainerButton>
          <Button purpleSchema onClick={() => setModuleOpen(true)}>
            Criar Módulos
          </Button>
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
      <ModalModule
        modalOpen={moduleOpen}
        setModalOpen={setModuleOpen}
        courseId={id}
      />
    </Container>
  );
};

export default CardCourse;
