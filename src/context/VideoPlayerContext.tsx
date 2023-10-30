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
      }}
    >
      {children}
    </VideoPlayerContext.Provider>
  );
};