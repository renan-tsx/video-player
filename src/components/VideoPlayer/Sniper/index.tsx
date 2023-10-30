import { Container, DualRing, DualRingAfter } from "./styles";

interface SniperProps {
  speed?: number;
  size?: string | number;
  color?: string;
}

export const Sniper = ({ speed, size = "50px", color }: SniperProps) => {
  return (
    <Container size={size} speed={speed} color={color}>
      <DualRing>
        <DualRingAfter />
      </DualRing>
    </Container>
  );
};
