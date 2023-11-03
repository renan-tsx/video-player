export interface IVideoPlayerContext {
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
  actions: {
    onPlayPause: () => void;
    mute: () => void;
    forward: () => void;
    backward: () => void;
    changePlayBackRate: (speed: number) => void;
    changeVolume: (e: React.ChangeEvent<HTMLInputElement>) => void;
    toggleFullScreen: () => void;
    toggleTimeLine: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleTimeUpdateAndBuffer: () => void;
  };
}
