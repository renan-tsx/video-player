import { useVideoPlayer } from "../../../hooks/useVideoPlayer";
import { Button, Container, PlayBackMenu } from "./styles";

interface ButtonSpeedProps {
  options: number[];
}

export const ButtonSpeed = ({ options }: ButtonSpeedProps) => {
  const { video, playbackRate, setPlaybackRate } = useVideoPlayer();

  const changePlayBackRate = (speed: number) => {
    if (!video.current) return;
    setPlaybackRate(speed);
    video.current.playbackRate = speed;
  };

  return (
    <Container>
      <Button>{playbackRate}x</Button>
      <PlayBackMenu>
        {options.map((option) => {
          return (
            <Button
              key={option}
              onClick={() => changePlayBackRate(option)}
              active={playbackRate === option}
            >
              {option}x
            </Button>
          );
        })}
      </PlayBackMenu>
    </Container>
  );
};
