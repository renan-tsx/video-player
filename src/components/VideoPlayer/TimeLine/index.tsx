import { useVideoPlayer } from "../../../hooks/useVideoPlayer";
import { Container } from "./styles";

export const TimeLine = () => {
  const { video, time, setTime, buffer } = useVideoPlayer();

  return (
    <Container time={time} max={video.current?.duration} buffer={buffer}>
      <input
        type="range"
        value={time}
        min={0}
        max={video.current?.duration}
        onChange={(e) => {
          if (!video.current) return;
          video.current.currentTime = +e.target.value;
          setTime(video.current.currentTime);
        }}
      />
    </Container>
  );
};
