import styled, { keyframes } from "styled-components";
import { ITheme } from "../../../types/ITheme";

interface IContainer {
  duration: string;
  themeVideo: ITheme;
}

const fadeIn = keyframes`
  0% {
    transform: scale(0.8);
    opacity: 0;
  }
  50% {
    transform: scale(1.2);
    opacity: 1;
  }
  98% {
    transform: scale(1.5);
    opacity: 0;
  }
  100% {
    transform: scale(0);
    opacity: 1;
  }
`;

export const Container = styled.div<IContainer>`
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 3rem;
  color: ${({ themeVideo }) => themeVideo.controls.color};

  position: absolute;
  left: calc(50% - 3rem);
  top: calc(50% - 3rem);

  transform: scale(0);
  opacity: 1;

  &.active {
    animation: ${fadeIn} ${({ duration }) => duration} ease-in-out forwards;
  }
`;
