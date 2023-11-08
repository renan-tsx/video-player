// import React from "react";
import { FaCirclePause, FaCirclePlay } from "react-icons/fa6";
import { useVideoPlayer } from "../../../hooks/useVideoPlayer";
import { Container } from "./styles";

const convertToSeconds = (milliseconds: number) => {
  const seconds = milliseconds / 1000;
  return (seconds % 1 === 0 ? seconds : seconds.toFixed(1)) + "s";
};

export const IconPlayPause = () => {
  const { state } = useVideoPlayer();

  return (
    <Container
      ref={state.iconPlayPauseRef}
      $duration={convertToSeconds(state.timePlayPause)}
    >
      {state.playing ? <FaCirclePlay /> : <FaCirclePause />}
    </Container>
  );
};
