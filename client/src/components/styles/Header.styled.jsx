import styled from "styled-components";

export const HeaderContainer = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: var(--clr-neutral-600);

  @media only screen and (min-width: 37.5em) {
    border-bottom: 0.0625rem solid var(--clr-neutral-500);
    position: sticky;
    left: 0;
    top: 0;
  }
`;

export const LogoPicture = styled.picture`
  @media only screen and (min-width: 37.5em) {
    position: relative;
    padding-right: 5rem;
    margin-left: 0.5rem;
    &::after {
      content: "";
      height: 5.3rem;
      position: absolute;
      width: 0.0625rem;
      background-color: var(--clr-neutral-500);
      right: 0;
      top: -1.8rem;
    }
  }
`;

export const BoardName = styled.button`
  font-size: var(--fs-500);
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
