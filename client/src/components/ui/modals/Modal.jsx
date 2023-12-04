import { DarkBg, ModalContainer } from "../../styles/Modal.styled";

export function Modal({ closeModal, children }) {
  return (
    <>
      <DarkBg onClick={() => closeModal()} />
      <ModalContainer>{children}</ModalContainer>
    </>
  );
}
