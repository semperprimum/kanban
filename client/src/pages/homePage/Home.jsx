import { AddBoardModal } from "../../components/ui/modals/AddBoardModal";
import { Nav, Header, Board } from "../../components";
import { useModal } from "../../hooks/useModal";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const createBoardModal = useModal();
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("user")) {
      navigate("/register");
    }
  });

  return (
    <>
      <header>
        <Header setIsNavOpen={setIsNavOpen} />
      </header>
      <main>
        {createBoardModal.isOpen && (
          <AddBoardModal closeModal={createBoardModal.closeModal} />
        )}
        {isNavOpen && (
          <Nav
            openModal={createBoardModal.openModal}
            setIsOpen={setIsNavOpen}
          />
        )}
        <Board />
      </main>
    </>
  );
};
