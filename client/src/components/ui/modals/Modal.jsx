import { DarkBg, ModalContainer } from "../../styles/Modal.styled";
import { createPortal } from "react-dom";

export function Modal({ closeModal, children, onClose }) {
  return createPortal(
    <>
      <DarkBg
        onClick={() => {
          closeModal();
          {
            onClose && onClose();
          }
        }}
      />
      <ModalContainer>{children}</ModalContainer>
    </>,
    document.getElementById("portal")
  );
}
