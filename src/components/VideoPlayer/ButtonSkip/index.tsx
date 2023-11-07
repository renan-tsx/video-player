import { FaArrowRotateLeft, FaArrowRotateRight } from "react-icons/fa6";
import { useVideoPlayer } from "../../../hooks/useVideoPlayer";
import { Button } from "./styles";

interface ButtonSkip {
  skip: "forward" | "backward";
}

export const ButtonSkip = ({ skip }: ButtonSkip) => {
  const { actions } = useVideoPlayer();

  return (
    <Button
      onClick={skip === "forward" ? actions.onForward : actions.onBackward}
    >
      {skip === "forward" ? <FaArrowRotateRight /> : <FaArrowRotateLeft />}
    </Button>
  );
};
