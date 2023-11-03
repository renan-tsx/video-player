import { useEffect } from "react";
import { useVideoPlayer } from "../../hooks/useVideoPlayer";
import { IVideoPlayerProps } from "../../types/IVideoPlayerProps";
import { Controls } from "./Controls";
import { Container, Video } from "./styles";

export const VideoPlayer = (props: IVideoPlayerProps) => {
  const { video, fullScreen, setTime, setBuffer, actions, setFullScreen } =
    useVideoPlayer();

  useEffect(() => {
    const fullsSreenChange = () => setFullScreen(!!document.fullscreenElement);
    const handleTimeUpdate = () => actions.handleTimeUpdateAndBuffer;

    const currentVideo = video.current;

    if (currentVideo) {
      currentVideo.addEventListener("timeupdate", handleTimeUpdate);
      document.addEventListener("fullscreenchange", fullsSreenChange);

      // NOTE remove events on disassembly
      return () => {
        currentVideo.removeEventListener("timeupdate", handleTimeUpdate);
        document.removeEventListener("fullscreenchange", fullsSreenChange);
      };
    }
  }, [
    video,
    setFullScreen,
    setTime,
    setBuffer,
    actions.handleTimeUpdateAndBuffer,
  ]);

  return (
    <Container fullScreen={fullScreen}>
      <Video
        ref={video}
        {...props}
        onClick={actions.onPlayPause}
        controlsList="nodownload"
        playsInline
        controls={false}
      ></Video>
      <Controls />
    </Container>
  );
};
