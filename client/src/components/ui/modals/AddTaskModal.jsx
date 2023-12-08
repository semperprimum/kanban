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
import { useDispatch, useSelector } from "react-redux";
import { createTask } from "../../../features/boards/boardSlice";
import { toast } from "react-toastify";

export default function AddTaskModal({ closeModal, board }) {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    status: board.columns[0].name,
    subtasks: [
      {
        title: "",
        isCompleted: false,
      },
    ],
  });

  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();

    dispatch(createTask({ boardId: board._id, taskData: formData }));
  };

  const handleInputChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleAddSubtask = () => {
    const newSubtasks = [
      ...formData.subtasks,
      { title: "", isCompleted: false },
    ];

    setFormData({ ...formData, subtasks: newSubtasks });
  };

  const handleSubtaskInputChange = (e, index) => {
    const changedSubtasks = formData.subtasks;
    changedSubtasks[index].title = e.target.value;

    setFormData({ ...formData, subtasks: changedSubtasks });
  };

  const handleOnDeleteSubtask = (index) => {
    const newSubtasks = formData.subtasks.filter((_, i) => i !== index);

    setFormData({
      ...formData,
      subtasks: newSubtasks,
    });
  };

  const { isError, message } = useSelector((state) => state.board);

  if (isError) {
    toast.error(message);
  }

  return (
    <Modal closeModal={closeModal}>
      <ModalHeader>Add New Task</ModalHeader>
      <form onSubmit={onSubmit}>
        <Label aria-hidden="true">Title</Label>
        <Input
          id="title"
          name="title"
          value={formData.title}
          onChange={handleInputChange}
          aria-label="Title"
          placeholder="e.g. Take coffee break"
        />
        <Label aria-hidden="true">Description</Label>
        <TextArea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleInputChange}
          aria-label="Description"
          rows={4}
          placeholder="e.g. It’s always good to take a break. This 
15 minute break will  recharge the batteries 
a little."
        />
        <Label>Subtasks</Label>
        <InputContainer>
          {formData.subtasks.map((subtask, index) => (
            <FlexPair key={index}>
              <Input
                onChange={(e) => handleSubtaskInputChange(e, index)}
                value={subtask.title}
                placeholder="e.g. Make coffee"
              />
              <SvgButton
                onClick={() => handleOnDeleteSubtask(index)}
                type="button"
                aria-label={`Delete subtask ${subtask.title}`}
              >
                <CrossIcon aria-hidden="true" />
              </SvgButton>
            </FlexPair>
          ))}
        </InputContainer>
        <Button
          type="button"
          onClick={() => handleAddSubtask()}
          $small
          $secondary
          style={{ width: "100%", marginTop: "0.75rem" }}
        >
          + Add New Subtask
        </Button>
        <Label aria-hidden="true">Status</Label>
        <SelectWrapper>
          <Select
            onChange={handleInputChange}
            value={formData.status}
            name="status"
            id="status"
          >
            {board.columns.map((col) => (
              <option key={col._id} value={col.name}>
                {col.name}
              </option>
            ))}
          </Select>
        </SelectWrapper>
        <Button $small style={{ width: "100%", marginTop: "1.5rem" }}>
          Create Task
        </Button>
      </form>
    </Modal>
  );
}
