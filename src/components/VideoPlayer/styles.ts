import styled, { css } from "styled-components";

interface IContainer {
  $fullscreen: boolean | undefined;
}

export const Container = styled.div<IContainer>`
  width: 100%;

  ${({ $fullscreen }) =>
    $fullscreen !== undefined &&
    $fullscreen.toString() === "true" &&
    css`
      position: fixed;
      left: 0;
      width: 100vw;
      height: 100vh;
      background: #000;
    `}
`;

export const Video = styled.video`
  margin: 0 auto;
  height: 100%;

  &:hover + .controls {
    display: flex;
    opacity: 1;
  }
`;
