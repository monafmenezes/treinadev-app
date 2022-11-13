import Input from "../Input";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Button from "../Button";
import { useContext, useEffect } from "react";
import { CourseContext } from "../../providers/course";
import { Container } from "./styles";


const ModalCourse = () => {
  const schema = yup.object().shape({
    title: yup.string().required("Campo obrigatório"),
    description: yup.string().required("Campo obrigatório"),
  });

  const { createCourse } = useContext(CourseContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const submit = ({ title, description }) => {
    createCourse({ title, description });
  };

  return (
    <Container>
      <form onSubmit={handleSubmit(submit)}>
        <Input
          label="Curso"
          placeholder="Nome do curso"
          register={register}
          name="title"
          error={errors.title?.message}
        />
        <Input
          label="Descrição"
          type="text-area"
          placeholder="Descrição do curso"
          register={register}
          name="description"
          error={errors.description?.message}
        />

        <Button type="submit" purpleSchema>
          Cadastrar
        </Button>
      </form>
    </Container>
  );
};

export default ModalCourse;
