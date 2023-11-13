import { useVideoPlayer } from "../../../../hooks/useVideoPlayer";
import { Button } from "../styles";

interface ButtonSkip {
  skip: "forward" | "backward";
}

export const ButtonSkip = ({ skip }: ButtonSkip) => {
  const { actions, state } = useVideoPlayer();

  return (
    <Button
      className="icoControls"
      onClick={skip === "forward" ? actions.onForward : actions.onBackward}
    >
      {skip === "forward"
        ? state.themeVideo.icons.icoForward
        : state.themeVideo.icons.icoBackward}
    </Button>
  );
};
