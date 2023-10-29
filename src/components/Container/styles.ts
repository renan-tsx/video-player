import styled from "styled-components";

interface ContentProps {
  bg?: string;
}

export const Content = styled.div<ContentProps>`
  max-width: 1140px;
  margin: 0 auto;
  background-color: ${(props) =>
    props.bg?.includes("-") ? `var(--${props.bg})` : props.bg};
  position: relative;
`;
