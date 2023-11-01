import { FaPause, FaPlay } from "react-icons/fa6";
import { useVideoPlayer } from "../../../hooks/useVideoPlayer";
import { Button } from "./styles";

export const ButtonPlayPause = () => {
  const { playing, actions } = useVideoPlayer();

  return (
    <Button onClick={actions.onPlayPause}>
      {playing ? <FaPause /> : <FaPlay />}
    </Button>
  );
};
