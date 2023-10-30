import { useVideoPlayer } from "../../../hooks/useVideoPlayer";
import { IconPause } from "../IconPause";
import { IconPlay } from "../IconPlay";
import { Button } from "./styles";

export const ButtonPlayPause = () => {
  const { video, playing, setPlaying } = useVideoPlayer();

  return (
    <>
      {playing ? (
        <Button
          onClick={() => {
            video.current?.pause();
            setPlaying(false);
          }}
        >
          <IconPause />
        </Button>
      ) : (
        <Button
          onClick={() => {
            video.current?.play();
            setPlaying(true);
          }}
        >
          <IconPlay />
        </Button>
      )}
    </>
  );
};
