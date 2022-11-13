import { useContext, useEffect } from "react";
import CardCourse from "../../components/CardCourse";
import Header from "../../components/Header";
import { CourseContext } from "../../providers/course";
import { Container, Content } from "./style";


const Home = () => {
  const { getCourses, courses } = useContext(CourseContext);
  useEffect(() => {
    getCourses();
  });

  return (
    <>
      <Header />
      <Container>
        <h1>Cursos</h1>
        <Content>
          <ul>
            {courses && courses.map((course) => (
              <li key={course.id}>
                <CardCourse
                  title={course.title}
                  description={course.description}
                  id={course.id}
                />
              </li>
            ))}
          </ul>
        </Content>
      </Container>
    </>
  );
};

export default Home;
