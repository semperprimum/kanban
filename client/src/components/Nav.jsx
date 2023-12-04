import {
  BoardItem,
  BoardsList,
  CreateBoardBtn,
  NavBtn,
  NavContainer,
  Paragraph,
} from "./styles/Nav.styled";
import { DarkBg } from "./styles/Modal.styled";
import IconBoard from "../assets/icon-board.svg?react";

export function Nav({ setIsOpen, openModal }) {
  return (
    <>
      <DarkBg aria-hidden="true" onClick={() => setIsOpen(false)} />
      <NavContainer>
        <Paragraph>All boards (3)</Paragraph>
        <BoardsList role="list">
          <BoardItem $active>
            <NavBtn>
              <IconBoard />
              Platform Launch
            </NavBtn>
          </BoardItem>
          <BoardItem>
            <NavBtn>
              <IconBoard />
              Marketing Plan
            </NavBtn>
          </BoardItem>
          <BoardItem>
            <NavBtn>
              <IconBoard />
              Roadmap
            </NavBtn>
          </BoardItem>
        </BoardsList>
        <CreateBoardBtn
          onClick={() => {
            openModal();
            setIsOpen(false);
          }}
        >
          <IconBoard />+ Create New Board
        </CreateBoardBtn>
      </NavContainer>
    </>
  );
}
