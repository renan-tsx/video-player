
interface ButtonPlayPauseProps {
  video: React.RefObject<HTMLVideoElement>
}

export const ButtonPlayPause = ({video}: ButtonPlayPauseProps) => {
  return (
    {playing ? (
      <button
        onClick={() => {
          video.current?.pause();
          setPlaying(false);
        }}
      >
        <FaPause />
      </button>
    ) : (
      <button
        onClick={() => {
          video.current?.play();
          setPlaying(true);
        }}
      >
        <FaPlay />
      </button>
    )}
  )