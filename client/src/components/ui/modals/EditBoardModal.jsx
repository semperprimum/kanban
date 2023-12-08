import {
  SvgButton,
  Input,
  InputContainer,
  FlexPair,
  Label,
  ModalHeader,
} from "../../styles/Modal.styled";
import CrossIcon from "../../../assets/icon-cross.svg?react";
import { Modal } from "./Modal";
import { Button } from "../Button.styled";
import { useState } from "react";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { editBoard } from "../../../features/boards/boardSlice";

export default function EditBoardModal({ closeModal, board }) {
  const [updatedBoard, setUpdatedBoard] = useState(board);

  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
  };

  const onNameChange = (e) => {
    setUpdatedBoard((prevState) => ({
      ...prevState,
      name: e.target.value,
    }));
  };

  const onColumnNameChange = (e, index) => {
    setUpdatedBoard((prevState) => {
      const updatedColumns = [...prevState.columns]; // Create a copy of the columns array
      updatedColumns[index] = {
        ...updatedColumns[index], // Create a copy of the specific column object
        name: e.target.value,
      };

      return { ...prevState, columns: updatedColumns }; // Create a copy of the board object
    });
  };

  const onDeleteColumn = (index) => {
    const column = updatedBoard.columns[index];

    if (column.tasks.length)
      return toast.error(
        "A column with tasks cannot be deleted. Remove all tasks first."
      );

    setUpdatedBoard((prevState) => {
      const updatedColumns = [...prevState.columns];
      updatedColumns.splice(index, 1);

      return { ...prevState, columns: updatedColumns };
    });
  };

  const onAddColumn = () => {
    setUpdatedBoard((prevState) => {
      return {
        ...prevState,
        columns: [...prevState.columns, { name: "New Column", tasks: [] }],
      };
    });
  };

  const updateBoard = () => {
    dispatch(editBoard(updatedBoard));
  };

  return (
    <Modal closeModal={closeModal}>
      <ModalHeader>Edit Board</ModalHeader>
      <Label aria-hidden="true">Board Name</Label>
      <form onSubmit={onSubmit}>
        <Input
          aria-label="Board Name"
          value={updatedBoard.name}
          onChange={(e) => onNameChange(e)}
          placeholder="e.g. Web Design"
        />
        <Label aria-hidden="true">Board Collumns</Label>
        <InputContainer>
          {updatedBoard.columns.map((col, index) => (
            <FlexPair key={index}>
              <Input
                onChange={(e) => onColumnNameChange(e, index)}
                value={col.name}
              />
              <SvgButton
                onClick={() => onDeleteColumn(index)}
                type="button"
                aria-label="Delete column"
              >
                <CrossIcon aria-hidden="true" />
              </SvgButton>
            </FlexPair>
          ))}
        </InputContainer>
        <Button
          onClick={() => onAddColumn()}
          $secondary
          $small
          style={{ width: "100%", marginTop: ".75rem" }}
        >
          + Add New Column
        </Button>
        <Button
          onClick={() => updateBoard()}
          $small
          style={{ width: "100%", marginTop: "1.5rem" }}
        >
          Save Changes
        </Button>
      </form>
    </Modal>
  );
}
