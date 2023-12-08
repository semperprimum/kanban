import {
  HeaderContainer,
  BoardName,
  RightContainer,
  LeftContainer,
  LogoPicture,
} from "./styles/Header.styled";
import { useState, useEffect } from "react";
import { Button } from "../components";
import LogoMobile from "../assets/logo-mobile.svg";
import LogoLight from "../assets/logo-light.svg";
import AddMobileIcon from "../assets/icon-add-task-mobile.svg?react";
import MoreIcon from "../assets/icon-vertical-ellipsis.svg?react";
import ChevronDownIcon from "../assets/icon-chevron-down.svg?react";
import Dropdown from "./ui/Dropdown";
import AddTaskModal from "./ui/modals/AddTaskModal";
import { useModal } from "../hooks/useModal";
import EditBoardModal from "./ui/modals/EditBoardModal";
import DeleteBoardModal from "./ui/modals/DeleteBoardModal";
import useMatchMedia from "../hooks/useMatchMedia";

export function Header({
  setIsNavOpen,
  activeBoard,
  boards,
  handleActiveBoardChange,
}) {
  const addModal = useModal();
  const editModal = useModal();
  const deleteModal = useModal();

  const isNarrowScreen = useMatchMedia("(max-width: 37.5em)");

  return (
    <>
      {addModal.isOpen && (
        <AddTaskModal
          board={boards[activeBoard]}
          closeModal={addModal.closeModal}
        />
      )}
      {editModal.isOpen && (
        <EditBoardModal
          board={boards[activeBoard]}
          closeModal={editModal.closeModal}
        />
      )}
      {deleteModal.isOpen && (
        <DeleteBoardModal
          board={boards[activeBoard]}
          handleActiveBoardChange={handleActiveBoardChange}
          closeModal={deleteModal.closeModal}
        />
      )}
      <HeaderContainer>
        <LeftContainer>
          <LogoPicture>
            <source srcSet={LogoMobile} media="(max-width: 37.5em)" />
            <img src={LogoLight} alt="kanban" />
          </LogoPicture>
          <BoardName onClick={() => isNarrowScreen && setIsNavOpen(true)}>
            {boards.length && boards[activeBoard].name}{" "}
            {isNarrowScreen && <ChevronDownIcon />}
          </BoardName>
        </LeftContainer>
        <RightContainer>
          <Button $small={isNarrowScreen} onClick={() => addModal.openModal()}>
            {isNarrowScreen ? <AddMobileIcon /> : "+ Add New Task"}
          </Button>
          <Dropdown
            onDelete={deleteModal.openModal}
            onEdit={editModal.openModal}
            icon={<MoreIcon />}
            dropdownFor="board"
          />
        </RightContainer>
      </HeaderContainer>
    </>
  );
}
