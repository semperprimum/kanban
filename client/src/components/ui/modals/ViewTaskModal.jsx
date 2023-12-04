import {
  Checkbox,
  FlexPair,
  Label,
  ModalHeader,
  Paragraph,
  SubtaskList,
  SubtaskItem,
  SubtaskText,
} from "../../styles/Modal.styled";
import Dropdown from "../Dropdown";
import ElipsisIcon from "../../../assets/icon-vertical-ellipsis.svg?react";
import { Modal } from "./Modal";

export default function ViewTaskModal({
  closeModal,
  onEditTask,
  onDeleteTask,
}) {
  return (
    <Modal closeModal={closeModal}>
      <FlexPair style={{ marginBottom: "1.5rem" }}>
        <ModalHeader style={{ margin: 0 }}>
          Research pricing points of various competitors and trial different
          business models
        </ModalHeader>
        <Dropdown
          icon={<ElipsisIcon />}
          dropdownFor={"Task"}
          onEdit={onEditTask}
          onDelete={onDeleteTask}
        />
      </FlexPair>
      <Paragraph>
        We know what we're planning to build for version one. Now we need to
        finalise the first pricing model we'll use. Keep iterating the subtasks
        until we have a coherent proposition.
      </Paragraph>
      <Label aria-hidden="true">Subtasks (2 of 3)</Label>

      <SubtaskList role="list">
        <SubtaskItem>
          <Checkbox defaultChecked={true} type="checkbox" />
          <SubtaskText>
            Research competitor pricing and business models
          </SubtaskText>
        </SubtaskItem>
        <SubtaskItem>
          <Checkbox defaultChecked={true} type="checkbox" />
          <SubtaskText>
            Outline a business model that works for our solution
          </SubtaskText>
        </SubtaskItem>
        <SubtaskItem>
          <Checkbox type="checkbox" />
          <SubtaskText>Surveying and testing</SubtaskText>
        </SubtaskItem>
      </SubtaskList>
    </Modal>
  );
}
