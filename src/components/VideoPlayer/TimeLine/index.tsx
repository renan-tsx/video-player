import { useVideoPlayer } from "../../../hooks/useVideoPlayer";
import { Container } from "./styles";

export const TimeLine = () => {
  const { video, time, buffer, actions } = useVideoPlayer();

  return (
    <Container time={time} max={video.current?.duration} buffer={buffer}>
      <input
        type="range"
        value={time}
        min={0}
        max={video.current?.duration}
        onChange={actions.toggleTimeLine}
      />
    </Container>
  );
};
