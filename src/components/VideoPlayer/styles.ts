import styled from "styled-components";

export const Video = styled.video`
  &:hover + .controls {
    display: flex;
    opacity: 1;
  }
`;
