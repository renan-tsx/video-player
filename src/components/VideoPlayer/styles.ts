import styled, { css } from "styled-components";

interface IContainer {
  fullScreen?: boolean;
}

export const Container = styled.div<IContainer>`
  width: 100%;

  ${({ fullScreen }) =>
    fullScreen &&
    css`
      position: fixed;
      left: 0;
      width: 100vw;
      height: 100vh;
    `}
`;

export const Video = styled.video<IContainer>`
  margin: 0 auto;
  height: 100%;

  &:hover + .controls {
    display: flex;
    opacity: 1;
  }
`;
