import { styled, css } from "styled-components";

export const NavContainer = styled.div`
  position: relative;
  background: var(--clr-neutral-600);
  padding: 1rem;
  @media (max-width: 37.5rem) {
    position: fixed;
    top: 5rem;
    left: 50%;
    transform: translateX(-50%);
    width: 16.5rem;
    border-radius: 0.5rem;
  }
`;

export const Paragraph = styled.p`
  color: var(--clr-neutral-400);
  font-size: var(--fs-100);
  font-weight: var(--fw-bold);
  line-height: normal;
  letter-spacing: 0.15rem;
  text-transform: uppercase;
`;

export const BoardsList = styled.ul`
  padding: 0;
  margin: 1rem 0 0.75rem 0;
`;

export const BoardItem = styled.li`
  padding: 0.75rem 0;
  ${(props) =>
    props.$active &&
    css`
      &:before {
        content: "";
        position: absolute;
        left: 0;
        transform: translateY(-0.8rem);
        background: var(--clr-primary-200);
        height: 3rem;
        width: 15rem;
        z-index: -1;
        border-radius: 0rem 100vmax 100vmax 0rem;
      }
      & > * {
        color: var(--clr-neutral-100) !important;
      }
    `}
`;

export const NavBtn = styled.button`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  color: var(--clr-neutral-400);
  background: none;
  border: none;
  line-height: normal;
  font-weight: var(--fw-bold);
  font-size: var(--fs-300);
  & > svg {
    fill: currentColor;
  }
`;

export const CreateBoardBtn = styled(NavBtn)`
  color: var(--clr-primary-200);
`;
