import { Dialog, IconButton } from "@mui/material";
import { Box } from "@mui/system";
import CloseIcon from "@mui/icons-material/Close";
import { FaEdit, FaTrash } from "react-icons/fa";

const Lessons = ({ lesson, modalOpen, setModalOpen, isAdmin }) => {
  const handleCloseModal = () => {
    setModalOpen(false);
  };

  console.log(lesson);
  return (
    <Dialog open={modalOpen} onClose={handleCloseModal}>
      {handleCloseModal ? (
        <IconButton
          aria-label="close"
          onClick={handleCloseModal}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: "#FFFFFF",
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
      <Box
        sx={{
          width: 600,
          height: 500,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          margin: "auto",
          backgroundColor: "#1F1A38",
          color: "#FFFFFF",
        }}
      >
        <h2>Aulas do Módulo {module.title}</h2>
        <ul>
          {lesson.map((item) => (
            <li>
              <p>
                {item.title} - {item.description} - {item.date_lesson}
              </p>
              {isAdmin && (
                <div>
                  <FaEdit />
                  <FaTrash />
                </div>
              )}
            </li>
          ))}
        </ul>
      </Box>
    </Dialog>
  );
};

export default Lessons;
