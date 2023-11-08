import { useVideoPlayer } from "../../../hooks/useVideoPlayer";
import { Container } from "./styles";

export const TimeLine = () => {
  const { state, actions } = useVideoPlayer();

  return (
    <Container
      $time={state.time}
      max={state.videoRef.current?.duration}
      $buffer={state.buffer}
    >
      <input
        type="range"
        value={state.time}
        min={0}
        max={state.videoRef.current?.duration}
        onChange={actions.onToggleTimeLine}
      />
    </Container>
  );
};
