import { Background, Container, Content, AnimationContainer } from "./style";
import { FiUser, FiLock } from "react-icons/fi";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { Link, useNavigate } from "react-router-dom";
import authService from "../../Auth";
import { toast } from "react-toastify";
import jwt_decode from "jwt-decode";
import { useContext } from "react";
import { UserContext } from "../../providers/user";

const Login = () => {
  const schema = yup.object().shape({
    username: yup.string().required("Campo obrigatório"),
    password: yup
      .string()
      .min(8, "mínimo 8 digitos")
      .required("Campo obrigatório"),
  });

  const { getUser, setAdmin } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const navigation = useNavigate();

  const submit = async ({ username, password }) => {
    try {
      const res = await authService.authenticate({ username, password });
      authService.setLoggedUser(res.data.token);
      const decode = jwt_decode(res.data.token);
      const user = await getUser(decode.sub, res.data.token);
      setAdmin(user.isAdmin)
      toast.success("Você está logado!");
      return navigation("/home");
    } catch (error) {
      console.log(error);
      toast.error(
        "Algo deu errado, verifique as informações e tente novamente!"
      );
    }
  };

  return (
    <Container>
      <Content>
        <AnimationContainer>
          <form onSubmit={handleSubmit(submit)}>
            <h1>
              <Link to="/">{"<Treinadev 💻 />"}</Link> Login
            </h1>

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

            <Button type="submit" purpleSchema>
              Enviar
            </Button>
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
