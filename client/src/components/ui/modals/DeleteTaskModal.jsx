import { useDispatch } from "react-redux";
import { ModalHeader, Paragraph } from "../../styles/Modal.styled";
import { Button } from "../Button.styled";
import { Modal } from "./Modal";
import { deleteTask } from "../../../features/boards/boardSlice";

export default function DeleteTaskModal({ closeModal, taskId, boardId }) {
  const dispatch = useDispatch();
  return (
    <Modal closeModal={closeModal}>
      <ModalHeader style={{ color: "var(--clr-accent-200)" }}>
        Delete this task?
      </ModalHeader>
      <Paragraph>
        Are you sure you want to delete the ‘Build settings UI’ task and its
        subtasks? This action cannot be reversed.
      </Paragraph>
      <Button
        onClick={() => dispatch(deleteTask({ boardId, taskId }))}
        $small
        $danger
        style={{ width: "100%", marginTop: "1.5rem" }}
      >
        Delete
      </Button>
      <Button
        onClick={() => closeModal()}
        $small
        $secondary
        style={{ width: "100%", marginTop: "1rem" }}
      >
        Cancel
      </Button>
    </Modal>
  );
}
