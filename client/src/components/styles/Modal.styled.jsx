import { styled, css } from "styled-components";
import checkIcon from "../../assets/icon-check.svg";
import ChevronIcon from "../../assets/icon-chevron-down.svg";

export const DarkBg = styled.div`
  position: fixed;
  background-color: hsla(0, 0%, 0%, 0.5);
  inset: 0;
`;

export const ModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 1.5rem;
  background-color: var(--clr-neutral-600);
  border-radius: 0.375rem;
  width: calc(100% - 2rem);
`;

export const ModalHeader = styled.h3`
  font-size: var(--fs-400);
  font-weight: var(--fw-bold);
  line-height: normal;
  margin-bottom: 1.5rem;
`;
export const Label = styled.label`
  display: block;
  font-size: var(--fs-100);
  font-weight: var(--fw-bold);
  margin-bottom: 0.5rem;
  margin-top: 1.5rem;
`;

export const Paragraph = styled.p`
  color: var(--clr-neutral-400);
  font-size: var(--fs-200);
  line-height: 1.76923;
`;

const baseInputStyles = css`
  width: 100%;
  font-size: var(--fs-200);
  color: var(--clr-neutral-100);
  background: none;
  border: 1px solid rgba(130, 143, 163, 0.25);
  border-radius: 0.25rem;
  padding: 0.5rem 1rem;
  outline: none;

  &::placeholder {
    opacity: 0.25;
  }

  &:focus-visible,
  &:active {
    border: 1px solid var(--clr-primary-200);
  }
`;

export const Input = styled.input`
  ${baseInputStyles}
`;

export const TextArea = styled.textarea`
  ${baseInputStyles}
`;

export const Select = styled.select`
  width: 100%;
  font-size: var(--fs-200);
  color: var(--clr-neutral-100);
  background: none;
  border: 1px solid rgba(130, 143, 163, 0.25);
  border-radius: 0.25rem;
  padding: 0.5rem 1rem;
  outline: none;

  -webkit-appearance: none;
  appearance: none;
`;

export const SelectWrapper = styled.div`
  position: relative;

  &::after {
    content: url(${ChevronIcon});
    position: absolute;
    display: block;
    max-height: min-content;
    right: 1rem;
    top: 50%;
    transform: translateY(-60%);
    pointer-events: none;
  }
`;

export const SvgButton = styled.button`
  background: none;
  border: none;
  & > svg {
    display: block;
  }
`;

export const FlexPair = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

export const InputContainer = styled.div`
  display: grid;
  gap: 0.75rem;
`;

export const SubtaskList = styled.ul`
  margin: 1rem 0 0 0;
  padding: 0;
  display: grid;
  gap: 0.5rem;
`;

export const SubtaskItem = styled.li`
  display: flex;
  align-items: center;
  background: var(--clr-neutral-700);
  border-radius: 0.25rem;
  padding: 0.75rem 1rem;
  gap: 1rem;

  &:has(input[type="checkbox"]:checked) {
    & > p {
      opacity: 0.5;
      text-decoration: line-through;
    }
  }
`;

export const Checkbox = styled.input`
  -webkit-appearance: none;
  appearance: none;
  background-color: none;
  margin: 0;

  flex-shrink: 0;
  width: 1rem;
  height: 1rem;
  background: var(--clr-neutral-100);
  border: 1px solid rgba(130, 143, 163, 0.25);
  border-radius: 0.125rem;
  transition: background 150ms ease-in-out, border 150ms ease;

  display: grid;
  place-content: center;

  &:checked {
    background-color: var(--clr-primary-200);
    border: 1px solid var(--clr-primary-200);
    &::before {
      scale: 1;
    }
  }

  &::before {
    content: url(${checkIcon});
    display: block;
    transform: translateY(-0.115rem);
    scale: 0;
    transition: scale 150ms ease;
  }
`;

export const SubtaskText = styled.p`
  font-size: var(--fs-100);
  line-height: normal;
  transition: opacity 150ms ease;
`;
