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
import { useState } from "react";
import { useDispatch } from "react-redux";
import { editTask } from "../../../features/boards/boardSlice";

export default function EditTaskModal({ closeModal, task, board }) {
  const [updatedTask, setUpdatedTask] = useState(task);

  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
  };

  const onChangeTitle = (e) => {
    setUpdatedTask((prevState) => ({ ...prevState, title: e.target.value }));
  };

  const onChangeDescription = (e) => {
    setUpdatedTask((prevState) => ({
      ...prevState,
      description: e.target.value,
    }));
  };

  const onSubtaskNameChange = (e, index) => {
    setUpdatedTask((prevState) => {
      const updatedSubtasks = [...prevState.subtasks];
      updatedSubtasks[index] = {
        ...updatedSubtasks[index],
        title: e.target.value,
      };

      return { ...prevState, subtasks: updatedSubtasks };
    });
  };

  const onAddNewSubtask = () => {
    setUpdatedTask((prevState) => {
      const updatedSubtasks = [
        ...prevState.subtasks,
        { title: "", isCompleted: false },
      ];
      return { ...prevState, subtasks: updatedSubtasks };
    });
  };

  const onDeleteSubtask = (index) => {
    setUpdatedTask((prevState) => {
      const updatedSubtasks = [...prevState.subtasks];
      updatedSubtasks.splice(index, 1);
      return { ...prevState, subtasks: updatedSubtasks };
    });
  };

  const onStatusChange = (e) => {
    setUpdatedTask((prevState) => ({ ...prevState, status: e.target.value }));
  };

  const updateTask = () => [
    dispatch(editTask({ boardId: board._id, taskData: updatedTask })),
  ];

  return (
    <Modal closeModal={closeModal}>
      <ModalHeader>{task.title}</ModalHeader>
      <Label aria-hidden="true">Title</Label>
      <form onSubmit={onSubmit}>
        <Input
          aria-label="Title"
          onChange={onChangeTitle}
          value={updatedTask.title}
          placeholder="e.g. Take coffee break"
        />
        <Label aria-hidden="true">Description</Label>
        <TextArea
          aria-label="Description"
          onChange={onChangeDescription}
          value={updatedTask.description}
          rows={4}
          placeholder="e.g. It’s always good to take a break. This 
15 minute break will  recharge the batteries 
a little."
        />
        <Label>Subtasks</Label>
        <InputContainer>
          {updatedTask.subtasks.map((subtask, index) => (
            <FlexPair key={index}>
              <Input
                aria-label="Subtask"
                onChange={(e) => onSubtaskNameChange(e, index)}
                value={subtask.title}
              />
              <SvgButton
                onClick={() => onDeleteSubtask(index)}
                aria-label="Delete Subtask 1"
              >
                <CrossIcon aria-hidden="true" />
              </SvgButton>
            </FlexPair>
          ))}
        </InputContainer>
        <Button
          onClick={onAddNewSubtask}
          $small
          $secondary
          style={{ width: "100%", marginTop: "0.75rem" }}
        >
          + Add New Subtask
        </Button>
        <Label aria-hidden="true">Status</Label>
        <SelectWrapper>
          <Select onChange={onStatusChange} value={updatedTask.status}>
            {board.columns.map((col) => (
              <option key={col._id} value={col.name}>
                {col.name}
              </option>
            ))}
          </Select>
        </SelectWrapper>
        <Button
          onClick={updateTask}
          $small
          style={{ width: "100%", marginTop: "1.5rem" }}
        >
          Save Changes
        </Button>
      </form>
    </Modal>
  );
}
