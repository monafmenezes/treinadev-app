import { Container, ContainerButton, IconContent, Text } from "./style";
import { MdOutlineOndemandVideo } from "react-icons/md";
import Button from "../Button";
import ModalLesson from "../ModalLesson";
import { useContext, useState } from "react";
import { ModuleContext } from "../../providers/module";

const CardModule = ({ module, isAdmin }) => {
  const [lessonModal, setLessonModal] = useState(false);
  const { deleteModule } = useContext(ModuleContext);

  console.log(module);
  const handleDelete = () => {
    deleteModule({ id: module.id });
  };

  return (
    <Container>
      {isAdmin ? (
        <>
          <Text>
            <h2>{module.title}</h2>
          </Text>
          <div>
            <ContainerButton>
              <Button onClick={() => setLessonModal(true)} purpleSchema>
                Nova Aula
              </Button>
            </ContainerButton>
            <ContainerButton>
              <Button purpleSchema>Editar</Button>
            </ContainerButton>
            <ContainerButton>
              <Button onClick={handleDelete} purpleSchema>
                Delete
              </Button>
            </ContainerButton>
          </div>
          <ModalLesson
            modalOpen={lessonModal}
            setModalOpen={setLessonModal}
            moduleId={module.id}
          />
        </>
      ) : (
        <>
          <Text>
            <h2>{module.title}</h2>
            <p>{module.description}</p>
          </Text>

          <IconContent>
            <MdOutlineOndemandVideo size={25} />
            <span>
              {module.lesson.length}{" "}
              {module.lesson.length > 1 ? "Aulas" : "Aula"}
            </span>
          </IconContent>
        </>
      )}
    </Container>
  );
};

export default CardModule;
