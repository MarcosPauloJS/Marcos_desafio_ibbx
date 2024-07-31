import ReactModal from "react-modal";
import { Close, ModalHeader, Title } from "./styled";

interface ModalProps {
  title: string;
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  children?: string | JSX.Element | JSX.Element[];
}

function Modal({ title, isOpen, setIsOpen, children }: ModalProps) {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: "fit-content",
      height: "fit-content",
      maxHeight: "80vh",
      maxWidth: "90vh",
      padding: "24px",
    },
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <ReactModal
        isOpen={isOpen}
        style={customStyles}
        onRequestClose={handleClose}
        shouldCloseOnOverlayClick={true}
      >
        <ModalHeader>
          <Title>{title}</Title>
          <Close onClick={handleClose} />
        </ModalHeader>
        {children}
      </ReactModal>
    </>
  );
}

export default Modal;
