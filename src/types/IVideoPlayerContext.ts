import { IButtonSpeedProps } from "./IButtonSpeedProps";

export interface IVideoPlayerContext {
  state: {
    videoRef: React.RefObject<HTMLVideoElement>;
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
    onMute: () => void;
    onForward: () => void;
    onBackward: () => void;
    onChangePlayBackRate: (speed: number) => void;
    onChangeVolume: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onToggleFullScreen: () => void;
    onToggleTimeLine: (e: React.ChangeEvent<HTMLInputElement>) => void;
    hadleTimeBuffer: () => void;
    onChangeSpeed: (options: IButtonSpeedProps) => void;
    hadleTimeDisplay: (currentTime: number, duration: number) => string;
  };
}
