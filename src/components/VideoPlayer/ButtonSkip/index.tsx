import { useVideoPlayer } from "../../../hooks/useVideoPlayer";
import { Button } from "./styles";

interface ButtonSkip {
  skip: "forward" | "backward";
}

export const ButtonSkip = ({ skip }: ButtonSkip) => {
  const { actions, theme } = useVideoPlayer();

  return (
    <Button
      className="icoControls"
      onClick={skip === "forward" ? actions.onForward : actions.onBackward}
    >
      {skip === "forward" ? theme.icons.icoForward : theme.icons.icoBackward}
    </Button>
  );
};
