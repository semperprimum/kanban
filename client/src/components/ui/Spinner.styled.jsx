import { AiOutlineLoading } from "react-icons/ai";
import { styled } from "styled-components";

export const SpinnerContainer = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
`;

export const Spinner = styled(AiOutlineLoading)`
  font-size: 4rem;
  animation: spin 1s infinite;
  @keyframes spin {
    from {
      rotate: 0deg;
    }
    to {
      rotate: 360deg;
    }
  }
`;
