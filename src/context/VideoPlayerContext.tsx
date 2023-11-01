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

  const mute = () => {
    if (!video.current) return;
    setMuted(!video.current.muted);
    video.current.muted = !video.current.muted;
  };

  const forward = () => {
    if (!video.current) return;
    video.current.currentTime += 5;
  };

  const backward = () => {
    if (!video.current) return;
    video.current.currentTime -= 5;
  };

  const changePlayBackRate = (speed: number) => {
    if (!video.current) return;
    setPlaybackRate(speed);
    video.current.playbackRate = speed;
  };

  const changeVolume = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!video.current) return;
    const volume = Number(e.target.value);
    setVolume(volume);
    video.current.volume = volume / 100;
  };

  interface FullscreenElement {
    requestFullscreen?: () => Promise<void>;
    mozRequestFullScreen?: () => void;
    webkitRequestFullscreen?: () => void;
    msRequestFullscreen?: () => void;
  }

  const toggleFullScreen = () => {
    if (!video.current) return;

    const e = document.documentElement as FullscreenElement;

    if (e.requestFullscreen) {
      e.requestFullscreen();
    } else if (e.mozRequestFullScreen) {
      e.mozRequestFullScreen(); // Firefox
    } else if (e.webkitRequestFullscreen) {
      e.webkitRequestFullscreen(); // Chrome, Safari and Opera
    } else if (e.msRequestFullscreen) {
      e.msRequestFullscreen(); // IE/Edge
    }
  };

  const toggleTimeLine = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!video.current) return;
    video.current.currentTime = +e.target.value;
    setTime(video.current.currentTime);
  };

  const actions = {
    onPlayPause,
    mute,
    forward,
    backward,
    changePlayBackRate,
    changeVolume,
    toggleFullScreen,
    toggleTimeLine,
  };

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
