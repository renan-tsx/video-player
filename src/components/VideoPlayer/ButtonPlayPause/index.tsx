import { useVideoPlayer } from "../../../hooks/useVideoPlayer";
import { Button } from "./styles";

export const ButtonPlayPause = () => {
  const { state, actions, theme } = useVideoPlayer();

  return (
    <Button onClick={actions.onPlayPause} className="icoControls">
      {state.playing ? theme.icons.icoPause : theme.icons.icoPlay}
    </Button>
  );
};
