import { useVideoPlayer } from "../../../../hooks/useVideoPlayer";
import { Box } from "./styles";

export const ButtonVolume = () => {
  const { state, actions } = useVideoPlayer();

  return (
    <Box className="icoControls btn-volume">
      <input
        type="range"
        min={0}
        max={100}
        value={state.volume}
        onChange={actions.onChangeVolume}
      />
    </Box>
  );
};
