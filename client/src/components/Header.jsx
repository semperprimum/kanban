import {
  HeaderContainer,
  BoardName,
  RightContainer,
  LeftContainer,
} from "./styles/Header.styled";
import { Button } from "../components";
import LogoMobile from "../assets/logo-mobile.svg?react";
import AddMobileIcon from "../assets/icon-add-task-mobile.svg?react";
import MoreIcon from "../assets/icon-vertical-ellipsis.svg?react";
import ChevronDownIcon from "../assets/icon-chevron-down.svg?react";
import Dropdown from "./ui/Dropdown";
import { useState } from "react";
import AddTaskModal from "./ui/modals/AddTaskModal";
import { useModal } from "../hooks/useModal";
import EditBoardModal from "./ui/modals/EditBoardModal";
import DeleteBoardModal from "./ui/modals/DeleteBoardModal";

export function Header({ setIsNavOpen }) {
  const addModal = useModal();
  const editModal = useModal();
  const deleteModal = useModal();

  return (
    <>
      {addModal.isOpen && <AddTaskModal closeModal={addModal.closeModal} />}
      {editModal.isOpen && <EditBoardModal closeModal={editModal.closeModal} />}
      {deleteModal.isOpen && (
        <DeleteBoardModal closeModal={deleteModal.closeModal} />
      )}
      <HeaderContainer>
        <LeftContainer>
          <LogoMobile />
          <BoardName onClick={() => setIsNavOpen(true)}>
            Platform Launch <ChevronDownIcon />
          </BoardName>
        </LeftContainer>
        <RightContainer>
          <Button $small onClick={() => addModal.openModal()}>
            <AddMobileIcon />
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
