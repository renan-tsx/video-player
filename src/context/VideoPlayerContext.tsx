import React from "react";
import { IVideoPlayerContext } from "../types/IVideoPlayerContext";

export const VideoPlayerContext =
  React.createContext<IVideoPlayerContext | null>(null);

export const VideoPlayerContextProvider = ({
  children,
}: React.PropsWithChildren) => {
  const video = React.useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = React.useState(false);
  const [muted, setMuted] = React.useState(false);
  const [time, setTime] = React.useState(0);
  const [buffer, setBuffer] = React.useState(0);
  const [playbackRate, setPlaybackRate] = React.useState(1);
  const [volume, setVolume] = React.useState(50);

  const onPlayPause = () => {
    if (playing) {
      video.current?.pause();
      setPlaying(!playing);
      return;
    }

    video.current?.play();
    setPlaying(!playing);
  };

  const actions = {
    onPlayPause
  }

  return (
    <VideoPlayerContext.Provider
      value={{
        video,
        playing,
        setPlaying,
        muted,
        setMuted,
        time,
        setTime,
        buffer,
        setBuffer,
        playbackRate,
        setPlaybackRate,
        volume,
        setVolume,
        actions,
      }}
    >
      {children}
    </VideoPlayerContext.Provider>
  );
};
