import { DualRing, DualRingAfter } from "./styles";

interface SniperProps {
  speed?: number;
  size?: string | number;
  color?: string;
}

export const Sniper = ({ speed, size, color }: SniperProps) => {
  return (
    <DualRing size={size}>
      <DualRingAfter speed={speed} size={size} color={color} />
    </DualRing>
  );
};
