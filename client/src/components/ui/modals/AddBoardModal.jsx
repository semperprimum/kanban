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
import { useSelector, useDispatch } from "react-redux";
import { createBoard } from "../../../features/boards/boardSlice";

export function AddBoardModal({ closeModal }) {
  const [formData, setFormData] = useState({
    name: "",
    columns: [{ name: "Todo" }, { name: "Done" }],
  });

  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();

    dispatch(createBoard(formData));
  };

  const handleAddColumn = () => {
    const newColumns = [...formData.columns, { name: "" }];

    setFormData({ name: formData.name, columns: newColumns });
  };

  const handleOnChange = (e, index) => {
    const changedColumns = formData.columns;
    changedColumns[index].name = e.target.value;

    setFormData({ name: formData.name, columns: changedColumns });
  };

  const handleOnDeleteColumn = (index) => {
    const newColumns = formData.columns.filter((_, i) => i !== index);

    setFormData({
      name: formData.name,
      columns: newColumns,
    });
  };

  return (
    <Modal closeModal={closeModal}>
      <ModalHeader>Add New Board</ModalHeader>
      <Label aria-hidden="true">Board Name</Label>
      <form onSubmit={onSubmit}>
        <Input
          aria-label="Board Name"
          name="name"
          id="name"
          value={formData.name}
          onChange={(e) =>
            setFormData({ name: e.target.value, columns: formData.columns })
          }
          placeholder="e.g. Web Design"
        />
        <Label aria-hidden="true">Board Collumns</Label>
        <InputContainer>
          {formData.columns.map((col, index) => (
            <FlexPair key={index}>
              <Input
                value={col.name}
                placeholder="Column name"
                name={col.name}
                id={col.name}
                onChange={(e) => handleOnChange(e, index)}
              />
              <SvgButton
                onClick={() => handleOnDeleteColumn(index)}
                type="button"
                aria-label={`delete column ${col}`}
              >
                <CrossIcon aria-hidden="true" />
              </SvgButton>
            </FlexPair>
          ))}
        </InputContainer>
        <Button
          $secondary
          $small
          type="button"
          style={{ width: "100%", marginTop: ".75rem" }}
          onClick={() => handleAddColumn()}
        >
          + Add New Column
        </Button>
        <Button $small style={{ width: "100%", marginTop: "1.5rem" }}>
          Create New Board
        </Button>
      </form>
    </Modal>
  );
}
