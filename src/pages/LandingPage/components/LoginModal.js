import Modal from "react-bootstrap/Modal";
import "./LoginModal.css";
import LoginCard from "../../../components/Cards/LoginCard";


const LoginModal = (props) => {
  return (
    <Modal
      {...props}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <LoginCard />
    </Modal>
  );
};

export default LoginModal;
