// import {
//   FaArrowRotateLeft,
//   FaArrowRotateRight,
//   FaExpand,
//   FaVolumeLow,
//   FaVolumeXmark,
// } from "react-icons/fa6";
// import { useVideoPlayer } from "../../../hooks/useVideoPlayer";
import { useVideoPlayer } from "../../../hooks/useVideoPlayer";
import { ButtonFullScreen } from "../ButtonFullScreen";
import { ButtonMute } from "../ButtonMute";
import { ButtonPlayPause } from "../ButtonPlayPause";
import { ButtonSkip } from "../ButtonSkip";
import { ButtonSpeed } from "../ButtonSpeed";
import { ButtonVolume } from "../ButtonVolume";
import { TimeLine } from "../TimeLine";
import { Box, Container } from "./styles";

export const Controls = () => {
  const { state } = useVideoPlayer();

  return (
    <>
      <Container
        className="controls"
        fullScreen={state.fullScreen}
        playing={state.playing}
        style={{ display: "flex", gap: 0 }}
      >
        <TimeLine />
        <Box>
          <ButtonPlayPause />
          <ButtonSkip skip={"backward"} />
          <ButtonSkip skip={"forward"} />
        </Box>
        <Box>
          <ButtonVolume />
          <ButtonMute />
          <ButtonSpeed options={[2, 1.75, 1.5, 1.25, 1, 0.75]} />
          <ButtonFullScreen />
        </Box>
      </Container>
    </>
  );
};
