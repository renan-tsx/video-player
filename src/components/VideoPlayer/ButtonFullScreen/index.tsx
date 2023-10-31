import { FaExpand } from "react-icons/fa6";
import { useVideoPlayer } from "../../../hooks/useVideoPlayer";
import { Button } from "./styles";

export const ButtonFullScreen = () => {
  const { video } = useVideoPlayer();

  const toggleFullScreen = () => {
    if (!video.current) return;
    video.current.requestFullscreen();
  };

  return (
    <Button onClick={toggleFullScreen}>
      <FaExpand />
    </Button>
  );
};
