import { IButtonSpeedProps } from "./IButtonSpeedProps";

export interface IVideoPlayerContext {
  state: {
    video: React.RefObject<HTMLVideoElement>;
    playing: boolean;
    setPlaying: React.Dispatch<React.SetStateAction<boolean>>;
    muted: boolean;
    setMuted: React.Dispatch<React.SetStateAction<boolean>>;
    time: number;
    setTime: React.Dispatch<React.SetStateAction<number>>;
    buffer: number;
    setBuffer: React.Dispatch<React.SetStateAction<number>>;
    playbackRate: number;
    setPlaybackRate: React.Dispatch<React.SetStateAction<number>>;
    volume: number;
    setVolume: React.Dispatch<React.SetStateAction<number>>;
    fullScreen: boolean;
    setFullScreen: React.Dispatch<React.SetStateAction<boolean>>;
    iconPlayPauseRef: React.MutableRefObject<HTMLDivElement | null>;
    timePlayPause: number;
    setTimePlayPause: React.Dispatch<React.SetStateAction<number>>;
  };
  actions: {
    onPlayPause: () => void;
    mute: () => void;
    forward: () => void;
    backward: () => void;
    changePlayBackRate: (speed: number) => void;
    changeVolume: (e: React.ChangeEvent<HTMLInputElement>) => void;
    toggleFullScreen: () => void;
    toggleTimeLine: (e: React.ChangeEvent<HTMLInputElement>) => void;
    hadleTimeBuffer: () => void;
    changeSpeed: (options: IButtonSpeedProps) => void;
    timeDisplay: (currentTime: number, duration: number) => string;
  };
}
