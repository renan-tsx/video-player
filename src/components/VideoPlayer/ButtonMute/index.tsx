import { FaVolumeLow, FaVolumeXmark } from "react-icons/fa6";
import { useVideoPlayer } from "../../../hooks/useVideoPlayer";
import { Button } from "./styles";

export const ButtonMute = () => {
  const { muted, actions } = useVideoPlayer();

  return (
    <Button onClick={actions.mute}>
      {muted ? <FaVolumeXmark /> : <FaVolumeLow />}
    </Button>
  );
};
