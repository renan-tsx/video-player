import styled from "styled-components";

export const Container = styled.div`
  /* display: flex; */
  display: none;
  opacity: 0;
  transition: 0.3s;

  justify-content: space-between;

  width: 100%;
  min-height: 50px;

  background: var(--black);
  position: absolute;
  bottom: 0;

  &:hover {
    display: flex;
    opacity: 1;
  }
`;

export const Box = styled.div`
  display: flex;
`;
