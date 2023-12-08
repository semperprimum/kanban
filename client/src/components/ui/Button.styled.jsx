import styled, { css } from "styled-components";

export const Button = styled.button`
  font-size: ${(props) => (props.$small ? "var(--fs-200)" : "var(--fs-300)")};
  line-height: 1.4375rem;
  color: ${(props) =>
    props.$secondary ? "var(--clr-primary-200)" : "var(--clr-neutral-100)"};
  background-color: ${(props) =>
    props.$secondary
      ? "var(--clr-neutral-100)"
      : props.$danger
      ? "var(--clr-accent-200)"
      : "var(--clr-primary-200)"};
  border: none;
  border-radius: 100vmax;
  font-weight: var(--fw-bold);
  padding: ${(props) =>
    props.$small ? "0.62rem 1.13rem" : "0.94rem 1.13rem 0.87rem 1.06rem"};

  & > svg {
    display: block;
  }

  &:disabled {
    opacity: 0.25;
  }

  @media only screen and (min-width: 37.5em) {
    font-size: var(--fs-300);
    padding: ${(props) => (props.$small ? "0.50rem 1rem" : "0.9rem 1.5rem")};
  }

  @media only screen and (min-width: 60em) {
    cursor: pointer;
    transition: color 150ms ease, background-color 150ms ease;

    &:hover {
      background-color: var(--clr-primary-100);
    }

    ${(props) =>
      props.$secondary &&
      css`
        &:hover {
          color: var(--clr-primary-100);
          background-color: var(--clr-neutral-100);
        }
      `}
  }
`;
