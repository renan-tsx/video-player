import {
  FaArrowRotateLeft,
  FaArrowRotateRight,
  FaExpand,
  FaVolumeLow,
  FaVolumeXmark,
} from "react-icons/fa6";
import { IconPause } from "../IconPause";
import { IconPlay } from "../IconPlay";

interface ControlsProps {
  playing: boolean;
  setPlaying: React.Dispatch<React.SetStateAction<boolean>>;
  video: React.RefObject<HTMLVideoElement>;
  muted: boolean;
  setMuted: React.Dispatch<React.SetStateAction<boolean>>;
  time: number;
  setTime: React.Dispatch<React.SetStateAction<number>>;
  buffer: number;
}

export const Controls = ({
  video,
  playing,
  setPlaying,
  muted,
  setMuted,
  time,
  setTime,
  buffer,
}: ControlsProps) => {
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
    video.current.playbackRate = speed;
  };

  const mute = () => {
    if (!video.current) return;
    video.current.muted = !video.current.muted;
    setMuted(!video.current.muted);
  };

  const changeVolume = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!video.current) return;
    console.log(video);
    const volume = Number(e.target.value) / 100;
    console.log(volume);
    video.current.volume = volume;
  };

  const toggleFullScreen = () => {
    if (!video.current) return;
    video.current.requestFullscreen();
  };

  return (
    <>
      <div className="flex">
        {playing ? (
          <button
            onClick={() => {
              video.current?.pause();
              setPlaying(false);
            }}
          >
            <IconPause />
          </button>
        ) : (
          <button
            onClick={() => {
              video.current?.play();
              setPlaying(true);
            }}
          >
            <IconPlay />
          </button>
        )}

        <button onClick={backward}>
          <FaArrowRotateLeft />
        </button>

        <button onClick={forward}>
          <FaArrowRotateRight />
        </button>

        <button onClick={() => changePlayBackRate(1)}>1x</button>
        <button onClick={() => changePlayBackRate(1.5)}>1.5x</button>
        <button onClick={() => changePlayBackRate(2)}>2x</button>

        <input
          type="range"
          min={0}
          max={100}
          defaultValue={50}
          onChange={changeVolume}
        />

        <button onClick={mute}>
          {muted ? <FaVolumeLow /> : <FaVolumeXmark />}
        </button>

        <button onClick={toggleFullScreen}>
          <FaExpand />
        </button>
      </div>
      <p>Timeline</p>
      <div>
        <input
          type="range"
          value={time}
          min={0}
          max={video.current?.duration}
          onChange={(e) => {
            if (!video.current) return;
            setTime(+e.target.value);
            video.current.currentTime = +e.target.value;
          }}
        />
      </div>
      <p>Buffer</p>
      <div>
        <progress
          value={buffer}
          max={video.current?.duration}
          style={{ width: "100%" }}
        ></progress>
      </div>
    </>
  );
};
