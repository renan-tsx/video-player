import styled, { keyframes } from "styled-components";
interface DualRingProps {
  size?: string | number;
  color?: string;
}
interface DualRingAfterProps extends DualRingProps {
  speed?: number;
}

const getSize = (size?: string | number): string => {
  if (typeof size === "number") {
    return `${size}rem`;
  }
  return size ? `${size}` : "50px";
};

const getColor = (color?: string): string => {
  if (!color) {
    return "var(--white)";
  } else if (color?.includes("-")) {
    return `var(--${color})`;
  } else {
    return `${color}`;
  }
};

const DualRingAnimation = keyframes`
  0% { transform: rotate(0deg);}
  100% { transform: rotate(360deg);}
`;

export const Container = styled.div<DualRingAfterProps>`
  left: calc(50% - ${({ size }) => getSize(size)});
  top: calc(50% - ${({ size }) => getSize(size)});
  position: absolute;
`;

export const DualRing = styled.div<DualRingProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const DualRingAfter = styled.div<DualRingAfterProps>`
  content: " ";
  display: block;
  width: ${({ size }) => getSize(size)};
  height: ${({ size }) => getSize(size)};
  margin: 8px;
  border-radius: 50%;
  border: 6px solid ${({ color }) => getColor(color)};
  border-color: ${({ color }) => getColor(color)} transparent
    ${({ color }) => getColor(color)} transparent;
  animation: ${DualRingAnimation}
    ${({ speed }) => (speed ? `${speed}s` : "1.2s")} linear infinite;
`;
