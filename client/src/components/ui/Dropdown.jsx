import {
  ButtonToggle,
  DropdownContainer,
  DropdownItem,
  DropdownWrapper,
} from "../styles/Dropdown.styled";
import { useDropdown } from "../../hooks/useDropdown";

export default function Dropdown({ icon, dropdownFor, onEdit, onDelete }) {
  const { isOpen, setIsOpen, dropdownRef } = useDropdown(false);

  return (
    <DropdownWrapper ref={dropdownRef}>
      <ButtonToggle onClick={() => setIsOpen(!isOpen)}>{icon}</ButtonToggle>
      {isOpen && (
        <DropdownContainer>
          <DropdownItem
            onClick={() => {
              onEdit();
              setIsOpen(false);
            }}
          >
            Edit {dropdownFor}
          </DropdownItem>
          <DropdownItem
            onClick={() => {
              onDelete();
              setIsOpen(false);
            }}
            color="var(--clr-accent-200)"
          >
            Delete {dropdownFor}
          </DropdownItem>
        </DropdownContainer>
      )}
    </DropdownWrapper>
  );
}
