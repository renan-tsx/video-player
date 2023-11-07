import { FaExpand } from "react-icons/fa6";
import { useVideoPlayer } from "../../../hooks/useVideoPlayer";
import { Button } from "./styles";

export const ButtonFullScreen = () => {
  const { actions } = useVideoPlayer();

  return (
    <Button onClick={actions.onToggleFullScreen}>
      <FaExpand />
    </Button>
  );
};
