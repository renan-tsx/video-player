import { useVideoPlayer } from "../../../hooks/useVideoPlayer";
import { ButtonFullScreen } from "../Buttons/fullScreen";
import { ButtonMute } from "../Buttons/mute";
import { ButtonPlayPause } from "../Buttons/playPause";
import { ButtonSkip } from "../Buttons/skip";
import { ButtonSpeed } from "../Buttons/speed";
import { ButtonVolume } from "../Buttons/volume";
import { TimeLine } from "../TimeLine";
import { Box, Container } from "./styles";

export const Controls = () => {
  const { state, actions } = useVideoPlayer();

  return (
    <Container
      className="controls"
      $fullscreen={state.fullScreen ? true : undefined}
      $playing={state.playing ? "true" : "false"}
      style={{ display: "flex", gap: 0 }}
    >
      <TimeLine />
      <Box>
        <ButtonPlayPause />
        <ButtonSkip skip={"backward"} />
        <ButtonSkip skip={"forward"} />

        <span>
          {actions.hadleTimeDisplay(
            state.time,
            state.duration ? state.duration : 0
          )}
        </span>
      </Box>
      <Box>
        <div className="volume">
          <ButtonMute />
          <ButtonVolume />
        </div>
        <ButtonSpeed
          options={{
            rate: 0.25,
            min: 0.75,
            max: 2,
          }}
        />
        <ButtonFullScreen />
      </Box>
    </Container>
  );
};
