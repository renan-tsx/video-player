import { FaPause, FaPlay } from "react-icons/fa6";
import { useVideoPlayer } from "../../../hooks/useVideoPlayer";
import { Button } from "./styles";

export const ButtonPlayPause = () => {
  const { state, actions } = useVideoPlayer();

  return (
    <Button onClick={actions.onPlayPause}>
      {state.playing ? <FaPause /> : <FaPlay />}
    </Button>
  );
};
