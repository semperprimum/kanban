import {
  Checkbox,
  FlexPair,
  Label,
  ModalHeader,
  Paragraph,
  SubtaskList,
  SubtaskItem,
  SubtaskText,
  SelectWrapper,
  Select,
} from "../../styles/Modal.styled";
import Dropdown from "../Dropdown";
import ElipsisIcon from "../../../assets/icon-vertical-ellipsis.svg?react";
import { Modal } from "./Modal";
import { countCompletedTasks } from "../../../utils/countTasks";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { editTask } from "../../../features/boards/boardSlice";

export default function ViewTaskModal({
  closeModal,
  onEditTask,
  onDeleteTask,
  task,
  board,
}) {
  const [updatedTask, setUpdatedTask] = useState(task);
  const dispatch = useDispatch();

  const updateTask = () => {
    dispatch(editTask({ boardId: board._id, taskData: updatedTask }));
  };

  const onUpdateStatus = (e) => {
    const newStatus = e.target.value;
    setUpdatedTask((prevState) => ({
      ...prevState,
      status: newStatus,
    }));
  };

  const onUpdateCompletion = (e, subtaskId) => {
    const subtaskIndex = updatedTask.subtasks.findIndex(
      (subtask) => subtask._id === subtaskId
    );

    if (subtaskIndex !== -1) {
      const updatedSubtasks = [...updatedTask.subtasks];
      updatedSubtasks[subtaskIndex] = {
        ...updatedSubtasks[subtaskIndex],
        isCompleted: e.target.checked,
      };
      setUpdatedTask((prevState) => ({
        ...prevState,
        subtasks: updatedSubtasks,
      }));
    }
  };

  return (
    <Modal onClose={updateTask} closeModal={closeModal}>
      <FlexPair style={{ marginBottom: "1.5rem" }}>
        <ModalHeader style={{ margin: 0 }}>{task.title}</ModalHeader>
        <Dropdown
          icon={<ElipsisIcon />}
          dropdownFor={"Task"}
          onEdit={onEditTask}
          onDelete={onDeleteTask}
        />
      </FlexPair>
      <Paragraph>{task.description}</Paragraph>
      <Label aria-hidden="true">
        Subtasks ({countCompletedTasks(task.subtasks)} of {task.subtasks.length}
        )
      </Label>

      <SubtaskList role="list">
        {task.subtasks.map((subtask) => (
          <SubtaskItem key={subtask._id}>
            <Checkbox
              type="checkbox"
              onChange={(e) => onUpdateCompletion(e, subtask._id)}
              defaultChecked={subtask.isCompleted}
            />
            <SubtaskText>{subtask.title}</SubtaskText>
          </SubtaskItem>
        ))}
      </SubtaskList>

      <Label aria-hidden={true}>Current Status</Label>
      <SelectWrapper>
        <Select
          value={updatedTask.status}
          onChange={onUpdateStatus}
          aria-label="Current Status"
        >
          {board.columns.map((col) => (
            <option key={col._id} value={col.name}>
              {col.name}
            </option>
          ))}
        </Select>
      </SelectWrapper>
    </Modal>
  );
}
