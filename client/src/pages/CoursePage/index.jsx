import { useContext, useEffect, useState } from "react";
import Header from "../../components/Header";
import { CourseContext } from "../../providers/course";
import { Container } from "./style";

const CoursePage = () => {
  const { courses, courseId, searchCourse } = useContext(CourseContext);
  const data = searchCourse(courseId);

  console.log(courses, courseId);

  return (
    <>
      <Header />
      <Container>
        {data && (
          <>
            <h1>{data.title}</h1>
            <p>{data.description}</p>
            <ul>
              {data.modules.map((module) => (
                <li key={module.id}>
                  <h3>{module.title}</h3>
                  <p>{module.description}</p>
                  {module.lesson.map((item) => (
                    <p>{item.title}</p>
                  ))}
                </li>
              ))}
            </ul>
          </>
        )}
      </Container>
    </>
  );
};

export default CoursePage;
