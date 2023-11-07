import { FaVolumeLow, FaVolumeXmark } from "react-icons/fa6";
import { useVideoPlayer } from "../../../hooks/useVideoPlayer";
import { Button } from "./styles";

export const ButtonMute = () => {
  const { state, actions } = useVideoPlayer();

  return (
    <Button onClick={actions.onMute}>
      {state.muted ? <FaVolumeXmark /> : <FaVolumeLow />}
    </Button>
  );
};
