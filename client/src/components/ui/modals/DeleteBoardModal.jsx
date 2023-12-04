import { ModalHeader, Paragraph } from "../../styles/Modal.styled";
import { Button } from "../Button.styled";
import { Modal } from "./Modal";

export default function DeleteBoardModal({ closeModal }) {
  return (
    <Modal closeModal={closeModal}>
      <ModalHeader style={{ color: "var(--clr-accent-200)" }}>
        Delete this board?
      </ModalHeader>
      <Paragraph>
        Are you sure you want to delete the ‘Platform Launch’ board? This action
        will remove all columns and tasks and cannot be reversed.
      </Paragraph>
      <Button $small $danger style={{ width: "100%", marginTop: "1.5rem" }}>
        Delete
      </Button>
      <Button $small $secondary style={{ width: "100%", marginTop: "1rem" }}>
        Cancel
      </Button>
    </Modal>
  );
}
