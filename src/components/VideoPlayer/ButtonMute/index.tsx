import { FaVolumeLow, FaVolumeXmark } from "react-icons/fa6";
import { useVideoPlayer } from "../../../hooks/useVideoPlayer";
import { Button } from "./styles";

export const ButtonMute = () => {
  const { video, muted, setMuted } = useVideoPlayer();

  const mute = () => {
    if (!video.current) return;
    video.current.muted = !video.current.muted;
    setMuted(!video.current.muted);
  };

  return (
    <Button onClick={mute}>
      {muted ? <FaVolumeLow /> : <FaVolumeXmark />}
    </Button>
  );
};
