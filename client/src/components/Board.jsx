import {
  BoardContainer,
  ColumnContainer,
  ColumnName,
  TaskItem,
  TaskList,
  TaskName,
  Subtasks,
  NewColumnBtn,
} from "./styles/Board.styled";
import ViewTaskModal from "./ui/modals/ViewTaskModal";
import EditTaskModal from "./ui/modals/EditTaskModal";
import EditBoardModal from "./ui/modals/EditBoardModal";
import DeleteTaskModal from "./ui/modals/DeleteTaskModal";
import { useModal } from "../hooks/useModal";
import { useState } from "react";
import { countCompletedTasks } from "../utils/countTasks";

export function Board({ board }) {
  const [activeTask, setActiveTask] = useState(null);
  const viewModal = useModal();
  const editModal = useModal();
  const deleteModal = useModal();
  const editBoardModal = useModal();

  const onEditTask = () => {
    viewModal.closeModal();
    editModal.openModal();
  };

  const onDeleteTask = () => {
    viewModal.closeModal();
    deleteModal.openModal();
  };

  const onViewTask = (task) => {
    setActiveTask(task);
    viewModal.openModal();
  };

  return (
    <>
      {viewModal.isOpen && (
        <ViewTaskModal
          task={activeTask}
          board={board}
          onEditTask={onEditTask}
          onDeleteTask={onDeleteTask}
          closeModal={viewModal.closeModal}
        />
      )}
      {editModal.isOpen && <EditTaskModal closeModal={editModal.closeModal} />}
      {deleteModal.isOpen && (
        <DeleteTaskModal
          boardId={board._id}
          taskId={activeTask._id}
          closeModal={deleteModal.closeModal}
        />
      )}
      {editBoardModal.isOpen && (
        <EditBoardModal closeModal={editBoardModal.closeModal} />
      )}
      <BoardContainer>
        {board.columns.map((col) => (
          <ColumnContainer key={col._id}>
            <ColumnName>
              {col.name} ({col.tasks.length})
            </ColumnName>
            <TaskList role="list">
              {col.tasks.map((task) => (
                <TaskItem onClick={() => onViewTask(task)} key={task._id}>
                  <TaskName>{task.title}</TaskName>
                  <Subtasks>
                    {countCompletedTasks(task.subtasks)} of{" "}
                    {task.subtasks.length} subtasks
                  </Subtasks>
                </TaskItem>
              ))}
            </TaskList>
          </ColumnContainer>
        ))}
        <NewColumnBtn onClick={() => editBoardModal.openModal()}>
          + New Column
        </NewColumnBtn>
      </BoardContainer>
    </>
  );
}
