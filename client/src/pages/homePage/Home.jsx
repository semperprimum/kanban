import { AddBoardModal } from "../../components/ui/modals/AddBoardModal";
import { Nav, Header, Board } from "../../components";
import { useModal } from "../../hooks/useModal";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getBoards, reset } from "../../features/boards/boardSlice";
import { Spinner, SpinnerContainer } from "../../components/ui/Spinner.styled";
import useMatchMedia from "../../hooks/useMatchMedia";
import { ShowSidebar } from "../../components/styles/Nav.styled";
import ShowSidebarIcon from "../../assets/icon-show-sidebar.svg?react";

export const Home = () => {
  const isNarrowScreen = useMatchMedia("(max-width: 37.5em)");

  const [isNavOpen, setIsNavOpen] = useState(isNarrowScreen ? false : true);
  const createBoardModal = useModal();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user } = useSelector((state) => state.auth);

  const { boards, isLoading, isError, message } = useSelector(
    (state) => state.board
  );

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
    dispatch(getBoards());

    return () => {
      dispatch(reset());
    };
  }, [user, navigate, dispatch]);

  const [activeBoard, setActiveBoard] = useState(0);

  const handleActiveBoardChange = (newIndex) => {
    setActiveBoard(newIndex);
  };

  if (isLoading) {
    return (
      <SpinnerContainer>
        <Spinner />
      </SpinnerContainer>
    );
  }

  return (
    <>
      <header>
        <Header
          activeBoard={activeBoard}
          boards={boards}
          handleActiveBoardChange={handleActiveBoardChange}
          setIsNavOpen={setIsNavOpen}
        />
      </header>
      <main>
        {createBoardModal.isOpen && (
          <AddBoardModal closeModal={createBoardModal.closeModal} />
        )}
        {isNavOpen && (
          <Nav
            handleActiveBoardChange={handleActiveBoardChange}
            activeBoard={activeBoard}
            boards={boards}
            openModal={createBoardModal.openModal}
            setIsOpen={setIsNavOpen}
          />
        )}
        {boards && boards.length && <Board board={boards[activeBoard]} />}
        {!isNarrowScreen && !isNavOpen && (
          <ShowSidebar onClick={() => setIsNavOpen(true)}>
            <ShowSidebarIcon />
          </ShowSidebar>
        )}
      </main>
    </>
  );
};
