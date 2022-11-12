import { Background, Container, Content, AnimationContainer } from "./style";
import { FiUser, FiLock } from "react-icons/fi";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { UserContext } from "../../providers/user";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { Link } from "react-router-dom";
const Login = () => {
  const schema = yup.object().shape({
    username: yup.string().required("Campo obrigatório"),
    password: yup
      .string()
      .min(8, "mínimo 8 digitos")
      .required("Campo obrigatório"),
  });

  const { loginUser } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const submit = ({ username, password }) => {
    loginUser({ username, password });
  };

  return (
    <Container>
      <Content>
        <AnimationContainer>
          <form onSubmit={handleSubmit(submit)}>
            <h1> {'<Treinadev />'} Login</h1>

            <Input
              icon={FiUser}
              label="Username"
              placeholder="Seu username"
              register={register}
              name="username"
              error={errors.username?.message}
            />
            <Input
              icon={FiLock}
              label="Senha"
              type="password"
              placeholder="Uma senha bem segura"
              register={register}
              error={errors.password?.message}
              name="password"
            />

            <Button type="submit" purpleSchema>Enviar</Button>
            <p>
              Não tem uma conta? Faça seu <Link to="/signup">cadastro</Link>
            </p>
          </form>
        </AnimationContainer>
      </Content>

      <Background />
    </Container>
  );
};

export default Login;
