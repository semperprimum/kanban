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
import HideSidebarIcon from "../assets/icon-hide-sidebar.svg?react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../features/auth/authSlice";
import useMatchMedia from "../hooks/useMatchMedia";

export function Nav({
  setIsOpen,
  openModal,
  boards,
  activeBoard,
  handleActiveBoardChange,
}) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/login");
  };

  const isNarrowScreen = useMatchMedia("(max-width: 37.5em)");

  return (
    <>
      {isNarrowScreen && (
        <DarkBg aria-hidden="true" onClick={() => setIsOpen(false)} />
      )}
      <NavContainer>
        <div>
          <Paragraph>All boards (3)</Paragraph>
          <BoardsList role="list">
            {boards.map((board, index) => (
              <BoardItem key={board._id}>
                <NavBtn
                  $active={index === activeBoard}
                  onClick={() => {
                    handleActiveBoardChange(index);
                    {
                      isNarrowScreen && setIsOpen(false);
                    }
                  }}
                >
                  <IconBoard />
                  {board.name}
                </NavBtn>
              </BoardItem>
            ))}
          </BoardsList>
          <CreateBoardBtn
            onClick={() => {
              openModal();
              {
                isNarrowScreen && setIsOpen(false);
              }
            }}
          >
            <IconBoard />+ Create New Board
          </CreateBoardBtn>
        </div>
        <div>
          {!isNarrowScreen && (
            <NavBtn onClick={() => setIsOpen(false)}>
              <HideSidebarIcon /> Hide Sidebar
            </NavBtn>
          )}
          <NavBtn onClick={onLogout} style={{ color: "var(--clr-accent-200)" }}>
            Logout
          </NavBtn>
        </div>
      </NavContainer>
    </>
  );
}
