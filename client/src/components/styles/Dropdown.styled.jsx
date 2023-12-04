import styled from "styled-components";

export const ButtonToggle = styled.button`
  background: none;
  border: none;
  padding: 0;

  & > svg {
    display: block;
  }

  &:disabled {
    opacity: 0.25;
  }
`;

export const DropdownWrapper = styled.div`
  position: relative;
  display: grid;
  align-items: center;
`;

export const DropdownContainer = styled.div`
  background-color: var(--clr-neutral-700);
  box-shadow: 0px 10px 20px 0px rgba(54, 78, 126, 0.25);
  border-radius: 0.5rem;
  padding: 1rem;
  position: absolute;
  top: 3.5rem;
  width: 12rem;
  right: 0;
  display: grid;
`;

export const DropdownItem = styled.button`
  font-size: var(--fs-200);
  line-height: 1.76923;
  text-align: start;
  text-transform: capitalize;
  background: none;
  border: none;
  color: ${(props) => props.color || "var(--clr-neutral-400)"};
`;
