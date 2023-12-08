import {
  BoardContainer,
  ColumnContainer,
  ColumnName,
  TaskItem,
  TaskList,
  TaskName,
  Subtasks,
  NewColumnBtn,
  EmptyBoardContainer,
  EmptyBoardText,
} from "./styles/Board.styled";
import ViewTaskModal from "./ui/modals/ViewTaskModal";
import EditTaskModal from "./ui/modals/EditTaskModal";
import EditBoardModal from "./ui/modals/EditBoardModal";
import DeleteTaskModal from "./ui/modals/DeleteTaskModal";
import { useModal } from "../hooks/useModal";
import { useState } from "react";
import { countCompletedTasks } from "../utils/countTasks";
import { Button } from "./ui/Button.styled";

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

  if (!board.columns.length) {
    return (
      <>
        {editBoardModal.isOpen && (
          <EditBoardModal
            board={board}
            closeModal={editBoardModal.closeModal}
          />
        )}

        <EmptyBoardContainer>
          <EmptyBoardText>
            This board is empty. Create a new column to get started.
          </EmptyBoardText>
          <Button onClick={() => editBoardModal.openModal()}>
            + Add New Column
          </Button>
        </EmptyBoardContainer>
      </>
    );
  }

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
      {editModal.isOpen && (
        <EditTaskModal
          task={activeTask}
          board={board}
          closeModal={editModal.closeModal}
        />
      )}
      {deleteModal.isOpen && (
        <DeleteTaskModal
          boardId={board._id}
          taskId={activeTask._id}
          closeModal={deleteModal.closeModal}
        />
      )}
      {editBoardModal.isOpen && (
        <EditBoardModal board={board} closeModal={editBoardModal.closeModal} />
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
