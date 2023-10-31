import React from "react";
import { useVideoPlayer } from "../../../hooks/useVideoPlayer";
import { Box } from "./styles";

export const ButtonVolume = () => {
  const { video, volume, setVolume } = useVideoPlayer();

  const changeVolume = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!video.current) return;
    const volume = Number(e.target.value);
    setVolume(volume);
    video.current.volume = volume / 100;
  };

  return (
    <Box>
      <input
        type="range"
        min={0}
        max={100}
        defaultValue={volume}
        onChange={changeVolume}
      />
    </Box>
  );
};
