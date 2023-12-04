import {
  SvgButton,
  Input,
  Label,
  ModalHeader,
  Select,
  SelectWrapper,
  InputContainer,
  FlexPair,
  TextArea,
} from "../../styles/Modal.styled";
import { Modal } from "./Modal";
import CrossIcon from "../../../assets/icon-cross.svg?react";
import { Button } from "../Button.styled";

export default function EditTaskModal({ closeModal }) {
  return (
    <Modal closeModal={closeModal}>
      <ModalHeader>Edit Task</ModalHeader>
      <Label aria-hidden="true">Title</Label>
      <Input
        aria-label="Title"
        defaultValue={"Add authentication endpoints"}
        placeholder="e.g. Take coffee break"
      />
      <Label aria-hidden="true">Description</Label>
      <TextArea
        aria-label="Description"
        rows={4}
        placeholder="e.g. It’s always good to take a break. This 
15 minute break will  recharge the batteries 
a little."
      />
      <Label>Subtasks</Label>
      <InputContainer>
        <FlexPair>
          <Input
            aria-label="Subtask 1"
            defaultValue={"Define user model"}
            placeholder="e.g. Make coffee"
          />
          <SvgButton aria-label="Delete Subtask 1">
            <CrossIcon aria-hidden="true" />
          </SvgButton>
        </FlexPair>
        <FlexPair>
          <Input
            aria-label="Subtask 2"
            placeholder="e.g. Drink coffee & smile"
            defaultValue={"Add auth endpoints"}
          />
          <SvgButton aria-label="Delete Subtask 2">
            <CrossIcon aria-hidden="true" />
          </SvgButton>
        </FlexPair>
      </InputContainer>
      <Button $small $secondary style={{ width: "100%", marginTop: "0.75rem" }}>
        + Add New Subtask
      </Button>
      <Label aria-hidden="true">Status</Label>
      <SelectWrapper>
        <Select defaultValue={"Doing"}>
          <option value="Todo">Todo</option>
          <option value="Doing">Doing</option>
          <option value="Done">Done</option>
        </Select>
      </SelectWrapper>
      <Button $small style={{ width: "100%", marginTop: "1.5rem" }}>
        Save Changes
      </Button>
    </Modal>
  );
}
