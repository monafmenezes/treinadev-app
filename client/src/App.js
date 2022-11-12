import RoutesPages from './shared/routes';
import GlobalStyle from './styles/global'
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { UserProvider } from './providers/user';


function App() {
  return (
    <>
      <UserProvider>
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
      </UserProvider>
    </>
  );
}

export default App;
