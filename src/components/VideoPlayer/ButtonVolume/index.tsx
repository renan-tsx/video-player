import { useVideoPlayer } from "../../../hooks/useVideoPlayer";
import { Box } from "./styles";

export const ButtonVolume = () => {
  const { state, actions } = useVideoPlayer();

  return (
    <Box className="icoControls">
      <input
        type="range"
        min={0}
        max={100}
        defaultValue={state.volume}
        value={state.volume}
        onChange={actions.onChangeVolume}
      />
    </Box>
  );
};
