import { useVideoPlayer } from "../../../hooks/useVideoPlayer";
import { Button } from "./styles";

export const ButtonMute = () => {
  const { state, actions, theme } = useVideoPlayer();

  return (
    <Button onClick={actions.onMute} className="icoControls">
      {state.muted ? theme.icons.icoVolumeMute : theme.icons.icoVolume}
    </Button>
  );
};
