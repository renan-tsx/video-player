import { useEffect } from "react";
import { useVideoPlayer } from "../../hooks/useVideoPlayer";
import { IVideoPlayerProps } from "../../types/IVideoPlayerProps";
import { Controls } from "./Controls";
import { IconPlayPause } from "./IconPlayPause";
import { Container, Video } from "./styles";

export const VideoPlayer = (props: IVideoPlayerProps) => {
  const { state, actions } = useVideoPlayer();
  const { video, fullScreen, setFullScreen, setTime, setBuffer } = state;
  const { hadleTimeBuffer, onPlayPause, toggleFullScreen } = actions;

  useEffect(() => {
    const fullsSreenChange = () => setFullScreen(!!document.fullscreenElement);

    const currentVideo = video.current;

    if (currentVideo) {
      currentVideo.addEventListener("timeupdate", hadleTimeBuffer);
      document.addEventListener("fullscreenchange", fullsSreenChange);

      // NOTE remove events on disassembly
      return () => {
        currentVideo.removeEventListener("timeupdate", hadleTimeBuffer);
        document.removeEventListener("fullscreenchange", fullsSreenChange);
      };
    }
  }, [video, setFullScreen, setTime, setBuffer, hadleTimeBuffer]);

  return (
    <Container fullScreen={fullScreen}>
      <Video
        ref={video}
        {...props}
        onClick={onPlayPause}
        onDoubleClick={toggleFullScreen}
        controlsList="nodownload"
        playsInline
        controls={false}
      />
      <IconPlayPause />
      <Controls />
    </Container>
  );
};
