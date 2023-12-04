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

export function Board() {
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
        <ColumnContainer>
          <ColumnName>Todo (4)</ColumnName>
          <TaskList role="list">
            <TaskItem onClick={() => viewModal.openModal()}>
              <TaskName>Build UI for onboarding flow</TaskName>
              <Subtasks>0 of 3 subtasks</Subtasks>
            </TaskItem>
            <TaskItem>
              <TaskName>Build UI for search</TaskName>
              <Subtasks>0 of 1 subtasks</Subtasks>
            </TaskItem>
            <TaskItem>
              <TaskName>Build settings UI</TaskName>
              <Subtasks>0 of 2 subtasks</Subtasks>
            </TaskItem>
            <TaskItem>
              <TaskName>QA and test all major user journeys</TaskName>
              <Subtasks>0 of 2 subtasks</Subtasks>
            </TaskItem>
          </TaskList>
        </ColumnContainer>
        <ColumnContainer>
          <ColumnName>Doing (4)</ColumnName>
          <TaskList role="list">
            <TaskItem>
              <TaskName>Build UI for onboarding flow</TaskName>
              <Subtasks>0 of 3 subtasks</Subtasks>
            </TaskItem>
            <TaskItem>
              <TaskName>Build UI for search</TaskName>
              <Subtasks>0 of 1 subtasks</Subtasks>
            </TaskItem>
          </TaskList>
        </ColumnContainer>
        <ColumnContainer>
          <ColumnName>Done (4)</ColumnName>
          <TaskList role="list">
            <TaskItem>
              <TaskName>Build UI for onboarding flow</TaskName>
              <Subtasks>0 of 3 subtasks</Subtasks>
            </TaskItem>
            <TaskItem>
              <TaskName>Build UI for search</TaskName>
              <Subtasks>0 of 1 subtasks</Subtasks>
            </TaskItem>
            <TaskItem>
              <TaskName>Build settings UI</TaskName>
              <Subtasks>0 of 2 subtasks</Subtasks>
            </TaskItem>
            <TaskItem>
              <TaskName>QA and test all major user journeys</TaskName>
              <Subtasks>0 of 2 subtasks</Subtasks>
            </TaskItem>
            <TaskItem>
              <TaskName>Build UI for search</TaskName>
              <Subtasks>0 of 1 subtasks</Subtasks>
            </TaskItem>
          </TaskList>
        </ColumnContainer>
        <NewColumnBtn onClick={() => editBoardModal.openModal()}>
          + New Column
        </NewColumnBtn>
      </BoardContainer>
    </>
  );
}
