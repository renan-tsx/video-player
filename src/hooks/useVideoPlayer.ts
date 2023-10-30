import React from "react";
import { VideoPlayerContext } from "../context/VideoPlayerContext";
import { IVideoPlayerContext } from "../types/IVideoPlayerContext";

export const useVideoPlayer = (): IVideoPlayerContext => {
  const context = React.useContext(VideoPlayerContext);
  if (context === null)
    throw new Error("useVideoPlayer must be within VideoPlayerContextProvider");
  return context;
};
