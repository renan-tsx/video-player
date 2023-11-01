import { FaVolumeLow, FaVolumeXmark } from "react-icons/fa6";
import { useVideoPlayer } from "../../../hooks/useVideoPlayer";
import { Button } from "./styles";

export const ButtonMute = () => {
  const { video, muted, setMuted } = useVideoPlayer();

  const mute = () => {
    if (!video.current) return;
    setMuted(!video.current.muted);
    video.current.muted = !video.current.muted;
  };

  return (
    <Button onClick={mute}>
      {muted ? <FaVolumeXmark /> : <FaVolumeLow />}
    </Button>
  );
};
