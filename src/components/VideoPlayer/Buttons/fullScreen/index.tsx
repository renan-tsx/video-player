import { useVideoPlayer } from "../../../../hooks/useVideoPlayer";
import { Button } from "../styles";

export const ButtonFullScreen = () => {
  const { actions, state } = useVideoPlayer();

  return (
    <Button onClick={actions.onToggleFullScreen} className="icoControls">
      {state.themeVideo.icons.icoFullScreen}
    </Button>
  );
};
