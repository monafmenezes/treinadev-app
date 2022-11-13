import Button from "../../components/Button";
import Header from "../../components/Header";
import { Container, Content } from "./styles";
import ModalCourse from "../../components/ModalCourse";
import { useContext, useEffect, useState } from "react";
import { CourseContext } from "../../providers/course";
import CardCourse from "../../components/CardCourse";

const AdminPage = () => {
  const [registerCourse, setRegisterCourse] = useState(false);
  const { getCourses, courses } = useContext(CourseContext);

  useEffect(() => {
    getCourses();
  }, []);

  const handleRegister = () => {
    setRegisterCourse(true);
  };

  const handleClose = () => {
    setRegisterCourse(false);
    getCourses();
  };

  return (
    <>
      <Header />
      <Container>
        <h2>Admin Page</h2>
        <Content>
          <div>
            <Button onClick={handleRegister}>Cadastrar novo curso</Button>
          </div>
          <ul>
            {courses &&
              courses.map((course) => (
                <li key={course.id}>
                  <CardCourse
                    title={course.title}
                    description={course.description}
                    admin
                    id={course.id}
                  />
                </li>
              ))}
          </ul>

          <ModalCourse modalOpen={registerCourse} setModalOpen={handleClose} />
        </Content>
      </Container>
    </>
  );
};

export default AdminPage;
