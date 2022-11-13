import RoutesPages from './shared/routes';
import GlobalStyle from './styles/global'
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { UserProvider } from './providers/user';
import { CourseProvider } from './providers/course';
import { ModuleProvider } from './providers/module';
import { LessonProvider } from './providers/lesson'


function App() {
  return (
    <>
      <UserProvider>
        <CourseProvider>
          <ModuleProvider>
            <LessonProvider>
              <GlobalStyle />
              <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
              />
              <RoutesPages />
            </LessonProvider>
          </ModuleProvider>
        </CourseProvider>
      </UserProvider>
    </>
  );
}

export default App;
