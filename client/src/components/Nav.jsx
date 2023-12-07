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
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../features/auth/authSlice";

export function Nav({ setIsOpen, openModal }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/");
  };
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
        <NavBtn
          onClick={onLogout}
          style={{ marginTop: "1rem", color: "var(--clr-accent-200)" }}
        >
          Logout
        </NavBtn>
      </NavContainer>
    </>
  );
}
