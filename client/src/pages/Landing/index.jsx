import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import { Container, Content } from "./style";

const Landing = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <Container>
      <Content>
        <h1>{"< Treinadev 💻 />"}</h1>
        <span>Aprenda programação de forma fácil e efetiva</span>
        <div>
          <Button onClick={() => handleNavigation("/signup")} purpleSchema>
            Cadastre-se
          </Button>
          <Button onClick={() => handleNavigation("/login")}>Login</Button>
        </div>
      </Content>
    </Container>
  );
};

export default Landing;
