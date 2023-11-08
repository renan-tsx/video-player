import styled from "styled-components";

interface IContainer {
  fullscreen: boolean | undefined;
  playing: "true" | "false";
}

export const Container = styled.div<IContainer>`
  display: ${({ fullscreen, playing }) => {
    return fullscreen || playing === "true" ? "none" : "flex";
  }};

  opacity: ${({ fullscreen, playing }) => {
    if (fullscreen && playing) return 0;
    return fullscreen || playing === "true" ? 0 : 1;
  }};

  position: ${({ fullscreen }) => {
    return fullscreen ? "fixed" : "absolute";
  }};

  transition: 0.3s;

  justify-content: space-between;

  width: 100%;
  min-height: 50px;

  background: ${({ theme }) => theme.controls.bg};
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

  span {
    color: ${({ theme }) => theme.controls.color};
  }

  .icoControls {
    background: ${({ theme }) => theme.icons.bg};
    color: ${({ theme }) => theme.controls.color};

    &:hover {
      background: ${({ theme }) => theme.icons.bgHover};
    }

    &.active {
      background: ${({ theme }) => theme.icons.bgHover};
    }
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
