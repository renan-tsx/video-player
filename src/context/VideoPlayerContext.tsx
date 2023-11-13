import React from "react";
import { themeVideo } from "../components/VideoPlayer/theme";
import { IButtonSpeedProps } from "../types/IButtonSpeedProps";
import { ITheme } from "../types/ITheme";
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
  const videoRef = React.useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = React.useState(false);
  const [muted, setMuted] = React.useState(false);
  const [time, setTime] = React.useState(0);
  const [duration, setDuration] = React.useState<null | number>(null);
  const [buffer, setBuffer] = React.useState(0);
  const [playbackRate, setPlaybackRate] = React.useState(1);
  const [volume, setVolume] = React.useState(50);
  const [fullScreen, setFullScreen] = React.useState(false);
  const iconPlayPauseRef = React.useRef<HTMLDivElement | null>(null);
  const [timePlayPause, setTimePlayPause] = React.useState(250);
  const [theme, setTheme] = React.useState<ITheme>(themeVideo);

  const addAndRemoveClass = (delay: number) => {
    if (iconPlayPauseRef.current) {
      iconPlayPauseRef.current.classList.add("active");
    }

    setTimeout(() => {
      if (iconPlayPauseRef.current) {
        iconPlayPauseRef.current.classList.remove("active");
      }
    }, delay);
  };

  const onPlayPause = () => {
    addAndRemoveClass(timePlayPause);
    if (playing) {
      videoRef.current?.pause();
      setPlaying(!playing);
      return;
    }

    videoRef.current?.play();
    setPlaying(!playing);
  };

  const onMute = () => {
    if (!videoRef.current) return;
    let volume = videoRef.current.volume;

    if (volume === 0) {
      volume = 0.5;
      setVolume(50);
    } else {
      volume = 0;
      setVolume(0);
    }

    setMuted(!videoRef.current.muted);
    videoRef.current.muted = !videoRef.current.muted;
    videoRef.current.volume = volume;
  };

  const onChangeVolume = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!videoRef.current) return;

    let volume = Number(e.target.value);
    let muted = videoRef.current.muted;

    if (volume === 0) {
      volume = 0;
      muted = true;
      setMuted(true);
    } else if (muted) {
      muted = false;
      setMuted(false);
    }

    setVolume(volume);
    videoRef.current.volume = volume / 100;
    videoRef.current.muted = muted;
  };

  const onForward = () => {
    if (!videoRef.current) return;
    videoRef.current.currentTime += 5;
  };

  const onBackward = () => {
    if (!videoRef.current) return;
    videoRef.current.currentTime -= 5;
  };

  const onChangePlayBackRate = (speed: number) => {
    if (!videoRef.current) return;
    setPlaybackRate(speed);
    videoRef.current.playbackRate = speed;
  };

  const onToggleFullScreen = async () => {
    if (!videoRef.current) return;

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

  const onToggleTimeLine = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!videoRef.current) return;
    videoRef.current.currentTime = +e.target.value;
    setTime(videoRef.current.currentTime);
  };

  const hadleTimeBuffer = () => {
    if (videoRef.current) {
      setTime(videoRef.current.currentTime);
      for (let i = 0; i < videoRef.current.buffered.length; i++) {
        const startX = videoRef.current.buffered.start(i);
        const endX = videoRef.current.buffered.end(i);
        const width = endX - startX;
        setBuffer(width);
      }
    }
  };

  const onChangeSpeed = ({ options }: IButtonSpeedProps) => {
    if (playbackRate === options.max) {
      actions.onChangePlayBackRate(options.min);
      return;
    }

    actions.onChangePlayBackRate(playbackRate + options.rate);
  };

  const formatTime = (time: number): string => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);

    const minutesString = String(minutes).padStart(2, "0");
    const secondsString = String(seconds).padStart(2, "0");

    return `${minutesString}:${secondsString}`;
  };

  const hadleTimeDisplay = (currentTime: number, duration: number): string => {
    const formattedCurrentTime = formatTime(currentTime);
    const formattedDuration = formatTime(duration);

    if (duration === 0) return "";

    return `${formattedCurrentTime} / ${formattedDuration}`;
  };

  const actions = {
    onMute,
    onForward,
    onBackward,
    onPlayPause,
    onChangeVolume,
    onToggleTimeLine,
    onToggleFullScreen,
    onChangePlayBackRate,
    onChangeSpeed,
    hadleTimeBuffer,
    hadleTimeDisplay,
  };

  return (
    <VideoPlayerContext.Provider
      value={{
        state: {
          videoRef,
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
          iconPlayPauseRef,
          timePlayPause,
          setTimePlayPause,
          themeVideo: theme,
          setThemeVideo: setTheme,
          duration,
          setDuration,
        },
        actions,
      }}
    >
      {children}
    </VideoPlayerContext.Provider>
  );
};
