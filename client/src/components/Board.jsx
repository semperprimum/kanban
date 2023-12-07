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

export function Board({ board }) {
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

  const countCompletedTasks = (arr) => {
    const completedTasks = arr.filter((task) => task.isCompleted);
    return completedTasks.length;
  };
  return (
    <>
      {viewModal.isOpen && (
        <ViewTaskModal
          onEditTask={onEditTask}
          onDeleteTask={onDeleteTask}
          closeModal={viewModal.closeModal}
        />
      )}
      {editModal.isOpen && <EditTaskModal closeModal={editModal.closeModal} />}
      {deleteModal.isOpen && (
        <DeleteTaskModal closeModal={deleteModal.closeModal} />
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
                <TaskItem key={task._id}>
                  <TaskName>{task.title}</TaskName>
                  <Subtasks>
                    {countCompletedTasks(col.tasks)} of {col.tasks.length}{" "}
                    subtasks
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
