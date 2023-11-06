import styled from "styled-components";

interface IContainer {
  fullScreen: boolean;
  playing: boolean;
}

export const Container = styled.div<IContainer>`
  display: ${({ fullScreen, playing }) => {
    return fullScreen || !playing ? "flex" : "none";
  }};

  opacity: ${({ fullScreen, playing }) => {
    if (fullScreen && playing) return 0;
    return fullScreen || !playing ? 1 : 0;
  }};

  position: ${({ fullScreen }) => {
    return fullScreen ? "fixed" : "absolute";
  }};

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

  .volume {
    display: flex;
    flex-direction: row-reverse;
  }
`;

export const Box = styled.div`
  display: flex;
  color: var(--white);

  span {
    align-self: center;
    padding: 0 0.5rem;
  }
`;
