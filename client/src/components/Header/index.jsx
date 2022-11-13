import { Link, useNavigate } from "react-router-dom";
import Button from "../Button";
import { Container } from "./style";

const Header = ({ path = "/", name = "Sair" }) => {
  const navigation = useNavigate();
  const logoff = () => {
    localStorage.clear();
    navigation(path);
  };
  return (
    <Container>
      <h1>
        <Link to="/">{"<Treinadev 💻 />"}</Link>
      </h1>
      <Button onClick={logoff} purpleSchema>
        {name}
      </Button>
    </Container>
  );
};

export default Header;
