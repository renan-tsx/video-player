import { useVideoPlayer } from "../../../hooks/useVideoPlayer";
import { Button, Container, PlayBackMenu } from "./styles";

interface ButtonSpeedProps {
  options: number[];
}

export const ButtonSpeed = ({ options }: ButtonSpeedProps) => {
  const { state, actions } = useVideoPlayer();

  return (
    <Container>
      <Button>{state.playbackRate}x</Button>
      <PlayBackMenu>
        {options.map((option) => {
          return (
            <Button
              key={option}
              onClick={() => actions.changePlayBackRate(option)}
              active={state.playbackRate === option}
            >
              {option}x
            </Button>
          );
        })}
      </PlayBackMenu>
    </Container>
  );
};
