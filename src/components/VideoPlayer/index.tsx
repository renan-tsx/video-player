import { useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { useVideoPlayer } from "../../hooks/useVideoPlayer";
import { IVideoPlayerProps } from "../../types/IVideoPlayerProps";
import { Controls } from "./Controls";
import { IconPlayPause } from "./IconPlayPause";
import { Container, Video } from "./styles";

export const VideoPlayer = (props: IVideoPlayerProps) => {
  const { state, actions } = useVideoPlayer();
  const { videoRef, fullScreen, setFullScreen, setTime, setBuffer } = state;
  const { hadleTimeBuffer, onPlayPause, onToggleFullScreen } = actions;

  useEffect(() => {
    const fullsSreenChange = () => setFullScreen(!!document.fullscreenElement);

    const currentVideo = videoRef.current;

    if (currentVideo) {
      currentVideo.addEventListener("timeupdate", hadleTimeBuffer);
      document.addEventListener("fullscreenchange", fullsSreenChange);

      // NOTE remove events on disassembly
      return () => {
        currentVideo.removeEventListener("timeupdate", hadleTimeBuffer);
        document.removeEventListener("fullscreenchange", fullsSreenChange);
      };
    }
  }, [videoRef, setFullScreen, setTime, setBuffer, hadleTimeBuffer]);

  return (
    <ThemeProvider theme={state.themeVideo}>
      <Container fullScreen={fullScreen}>
        <Video
          ref={videoRef}
          {...props}
          onClick={onPlayPause}
          onDoubleClick={onToggleFullScreen}
          controlsList="nodownload"
          playsInline
          controls={false}
        />
        <IconPlayPause />
        <Controls />
      </Container>
    </ThemeProvider>
  );
};
