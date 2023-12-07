import { styled } from "styled-components";

export const AuthWrapper = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
`;

export const AuthContainer = styled.div`
  text-align: center;
  width: calc(100% - 2rem);
  max-width: 25rem;
  padding: 2rem;
  background-color: var(--clr-neutral-600);
  border-radius: 0.7rem;

  & > form {
    display: grid;
    gap: 1rem;
  }
`;

export const AuthHeader = styled.h1`
  font-size: 1.65rem;
  margin-block: 1rem;
`;

export const Paragraph = styled.p`
  margin-top: 1rem;

  & > a {
    color: var(--clr-primary-100);
  }
`;
