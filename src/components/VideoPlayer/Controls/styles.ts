import styled from "styled-components";

interface IContainer {
  fullScreen: boolean;
}

export const Container = styled.div<IContainer>`
  /* display: flex; */
  display: ${({ fullScreen }) => (fullScreen ? "flex" : "none")};
  opacity: ${({ fullScreen }) => (fullScreen ? 1 : 0)};
  position: ${({ fullScreen }) => (fullScreen ? "fixed" : "absolute")};

  transition: 0.3s;

  justify-content: space-between;

  width: 100%;
  min-height: 50px;

  background: var(--black);
  bottom: 0;
  left: 0;

  &:hover {
    display: flex;
    opacity: 1;
  }
`;

export const Box = styled.div`
  display: flex;
`;
