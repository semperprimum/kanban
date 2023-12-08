import styled from "styled-components";

export const BoardContainer = styled.section`
  overflow: auto;
  padding: 1.5rem 1rem;
  display: flex;
  height: 100%;
  gap: 1.5rem;
  flex-shrink: 0;
  scrollbar-width: none; // Firefox
  -ms-overflow-style: none; // IE and Edge

  &::-webkit-scrollbar {
    display: none; // Chrome, Safari and Opera
  }

  & > div:nth-child(4n - 3) {
    --circle-color: hsla(193, 75%, 59%, 1);
  }
  & > div:nth-child(4n - 2) {
    --circle-color: hsla(249, 83%, 70%, 1);
  }
  & > div:nth-child(4n - 1) {
    --circle-color: hsla(154, 68%, 64%, 1);
  }
  & > div:nth-child(4n) {
    --circle-color: hsla(59, 100%, 75%);
  }
`;

export const ColumnContainer = styled.div`
  min-width: 17.5rem;
  max-width: 17.5rem;
  overflow: auto;
`;

export const ColumnName = styled.h3`
  display: flex;
  position: sticky;
  top: 0;
  padding-bottom: 1.5rem;
  align-items: center;
  gap: 0.75rem;
  color: var(--clr-neutral-100);
  font-size: var(--fs-100);
  font-weight: var(--fw-bold);
  text-transform: uppercase;
  letter-spacing: 0.15rem;
  line-height: normal;
  background-color: var(--clr-neutral-700);

  &:before {
    content: "";
    display: inline-block;
    width: 0.9375rem;
    height: 0.9375rem;
    background-color: var(--circle-color);
    border-radius: 100vmax;
  }
`;

export const TaskList = styled.ul`
  display: grid;
  padding: 0;
  margin: 0 0 0 0;
  gap: 1.25rem;
`;

export const TaskItem = styled.li`
  padding: 1.5rem 1rem;
  background-color: var(--clr-neutral-600);
  border-radius: 0.5rem;
  box-shadow: 0px 4px 6px 0px rgba(54, 78, 126, 0.1);
`;

export const TaskName = styled.p`
  font-weight: var(--fw-bold);
  margin-bottom: 0.5rem;
`;

export const Subtasks = styled.p`
  font-size: var(--fs-100);
  color: var(--clr-neutral-400);
  font-weight: var(--fw-bold);
`;

export const NewColumnBtn = styled.button`
  color: var(--clr-neutral-400);
  font-weight: var(--fw-bold);
  font-size: var(--fs-500);
  min-width: 17.5rem;
  border: none;
  border-radius: 0.375rem;
  background: linear-gradient(
    180deg,
    rgba(43, 44, 55, 0.25) 0%,
    rgba(43, 44, 55, 0.13) 100%
  );
`;

export const EmptyBoardContainer = styled.div`
  height: 100%;
  text-align: center;
  margin-inline: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const EmptyBoardText = styled.h2`
  font-size: var(--fs-400);
  font-weight: var(--fw-bold);
  color: var(--clr-neutral-400);
  margin-bottom: 1.5rem;
`;
