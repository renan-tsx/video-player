import { useVideoPlayer } from "../../../hooks/useVideoPlayer";
import { Box } from "./styles";

export const ButtonVolume = () => {
  const { volume, actions } = useVideoPlayer();

  return (
    <Box>
      <input
        type="range"
        min={0}
        max={100}
        defaultValue={volume}
        onChange={actions.changeVolume}
      />
    </Box>
  );
};
