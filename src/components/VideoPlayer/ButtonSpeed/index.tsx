import { useVideoPlayer } from "../../../hooks/useVideoPlayer";
import { IButtonSpeedProps } from "../../../types/IButtonSpeedProps";
import { Button, Container, PlayBackMenu } from "./styles";

export const ButtonSpeed = ({ options }: IButtonSpeedProps) => {
  const { state, actions } = useVideoPlayer();

  const playBackOption = [];

  for (let i = options.max; i >= options.min; i -= options.rate) {
    playBackOption.push(i);
  }

  return (
    <Container>
      <Button
        className="icoControls"
        onClick={() => actions.onChangeSpeed({ options })}
      >
        {state.playbackRate}x
      </Button>

      <PlayBackMenu>
        {playBackOption.map((option) => {
          return (
            <Button
              className={`icoControls ${
                state.playbackRate === option ? "active" : "inactive"
              }`}
              key={option}
              onClick={() => actions.onChangePlayBackRate(option)}
            >
              {option}x
            </Button>
          );
        })}
      </PlayBackMenu>
    </Container>
  );
};
