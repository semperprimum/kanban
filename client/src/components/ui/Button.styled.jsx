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
`;
