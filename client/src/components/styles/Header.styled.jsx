import styled from "styled-components";

export const HeaderContainer = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: var(--clr-neutral-600);
`;

export const BoardName = styled.button`
  border: none;
  background: none;
  color: var(--clr-neutral-100);
  font-weight: var(--fw-bold);
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const RightContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const LeftContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;
