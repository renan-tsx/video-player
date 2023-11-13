import { useVideoPlayer } from "../../../../hooks/useVideoPlayer";
import { Button } from "../styles";

export const ButtonMute = () => {
  const { state, actions } = useVideoPlayer();

  return (
    <Button onClick={actions.onMute} className="icoControls btn-mute">
      {state.muted
        ? state.themeVideo.icons.icoVolumeMute
        : state.themeVideo.icons.icoVolume}
    </Button>
  );
};
