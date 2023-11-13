import { useVideoPlayer } from "../../../../hooks/useVideoPlayer";
import { Button } from "../styles";

export const ButtonPlayPause = () => {
  const { state, actions } = useVideoPlayer();

  return (
    <Button onClick={actions.onPlayPause} className="icoControls">
      {state.playing
        ? state.themeVideo.icons.icoPause
        : state.themeVideo.icons.icoPlay}
    </Button>
  );
};
