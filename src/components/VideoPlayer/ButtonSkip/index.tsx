import { FaArrowRotateLeft, FaArrowRotateRight } from "react-icons/fa6";
import { useVideoPlayer } from "../../../hooks/useVideoPlayer";
import { Button } from "./styles";

interface ButtonSkip {
  skip: "forward" | "backward";
}

export const ButtonSkip = ({ skip }: ButtonSkip) => {
  const { video } = useVideoPlayer();

  const forward = () => {
    if (!video.current) return;
    video.current.currentTime += 5;
  };

  const backward = () => {
    if (!video.current) return;
    video.current.currentTime -= 5;
  };

  return (
    <Button onClick={skip === "forward" ? forward : backward}>
      {skip === "forward" ? <FaArrowRotateRight /> : <FaArrowRotateLeft />}
    </Button>
  );
};
