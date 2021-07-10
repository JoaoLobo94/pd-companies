import Modal from "react-bootstrap/Modal";
import LoginCard from "../../../components/Cards/LoginCard";

const LoginModal = (props) => {
  return (
    <Modal
      {...props}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
        <LoginCard />
      </Modal.Body>
    </Modal>
  );
};

export default LoginModal;
