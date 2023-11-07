import { useVideoPlayer } from "../../../hooks/useVideoPlayer";
import { Button } from "./styles";

export const ButtonFullScreen = () => {
  const { actions, theme } = useVideoPlayer();

  return (
    <Button onClick={actions.onToggleFullScreen} className="icoControls">
      {theme.icons.icoFullScreen}
    </Button>
  );
};
