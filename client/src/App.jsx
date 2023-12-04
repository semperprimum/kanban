import { useState } from "react";
import { GlobalStyle } from "./globalStyles";
import { Board, Header, Nav } from "./components";
import { useModal } from "./hooks/useModal";
import { AddBoardModal } from "./components/ui/modals/AddBoardModal";

export default function App() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const createBoardModal = useModal();
  return (
    <>
      <GlobalStyle />
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
}
