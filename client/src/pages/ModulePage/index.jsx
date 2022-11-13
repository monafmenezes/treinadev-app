import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import CardModule from "../../components/CardModule";
import Header from "../../components/Header";
import { CourseContext } from "../../providers/course";
import { Container, Content } from "./style";

const ModulePage = () => {
  const { searchCourse, getCourses } = useContext(CourseContext);
  const { id } = useParams();
  const data = searchCourse(id); 

  useEffect(() => {
    getCourses();
  }, []);

  return (
    <>
      <Header />
      <Container>
        <h1>Módulos do curso {data.title}</h1>
        <p>{data.description}</p>
        <Content>
          <ul>
            {data &&
              data.modules.map((module) => (
                <li key={module.id}>
                  <CardModule isAdmin module={module} />
                </li>
              ))}
          </ul>
        </Content>
      </Container>
    </>
  );
};

export default ModulePage;
