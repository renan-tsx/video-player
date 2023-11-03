import React from "react";
import { IButtonSpeedProps } from "../types/IButtonSpeedProps";
import { IVideoPlayerContext } from "../types/IVideoPlayerContext";

interface FullscreenElement {
  requestFullscreen?: () => Promise<void>;
  mozRequestFullScreen?: () => void;
  webkitRequestFullscreen?: () => void;
  msRequestFullscreen?: () => void;
}

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
  const [fullScreen, setFullScreen] = React.useState(false);

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
    let volume = video.current.volume;

    if (volume === 0) {
      volume = 0.5;
      setVolume(50);
    } else {
      volume = 0;
      setVolume(0);
    }

    setMuted(!video.current.muted);
    video.current.muted = !video.current.muted;
    video.current.volume = volume;
  };

  const changeVolume = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!video.current) return;

    let volume = Number(e.target.value);
    let muted = video.current.muted;

    if (volume === 0) {
      volume = 0;
      muted = true;
      setMuted(true);
    } else if (muted) {
      muted = false;
      setMuted(false);
    }

    setVolume(volume);
    video.current.volume = volume / 100;
    video.current.muted = muted;
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

  const toggleFullScreen = async () => {
    if (!video.current) return;

    const e = document.documentElement as FullscreenElement;
    const isFullscreen = document.fullscreenElement;

    if (isFullscreen) {
      await document.exitFullscreen();
      setFullScreen(!fullScreen);
    } else {
      if (e.requestFullscreen) {
        e.requestFullscreen();
      } else if (e.mozRequestFullScreen) {
        e.mozRequestFullScreen(); // Firefox
      } else if (e.webkitRequestFullscreen) {
        e.webkitRequestFullscreen(); // Chrome, Safari and Opera
      } else if (e.msRequestFullscreen) {
        e.msRequestFullscreen(); // IE/Edge
      }
      setFullScreen(!fullScreen);
    }
  };

  const toggleTimeLine = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!video.current) return;
    video.current.currentTime = +e.target.value;
    setTime(video.current.currentTime);
  };

  const hadleTimeBuffer = () => {
    if (video.current) {
      setTime(video.current.currentTime);
      for (let i = 0; i < video.current.buffered.length; i++) {
        const startX = video.current.buffered.start(i);
        const endX = video.current.buffered.end(i);
        const width = endX - startX;
        setBuffer(width);
      }
    }
  };

  const changeSpeed = ({ options }: IButtonSpeedProps) => {
    if (playbackRate === options.max) {
      actions.changePlayBackRate(options.min);
      return;
    }

    actions.changePlayBackRate(playbackRate + options.rate);
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
    hadleTimeBuffer,
    changeSpeed,
  };

  return (
    <VideoPlayerContext.Provider
      value={{
        state: {
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
          fullScreen,
          setFullScreen,
        },
        actions,
      }}
    >
      {children}
    </VideoPlayerContext.Provider>
  );
};
