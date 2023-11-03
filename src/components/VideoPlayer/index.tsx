import { useCallback, useEffect } from "react";
import { useVideoPlayer } from "../../hooks/useVideoPlayer";
import { IVideoPlayerContext } from "../../types/IVideoPlayerContext";
import { IVideoPlayerProps } from "../../types/IVideoPlayerProps";
import { Controls } from "./Controls";
import { Container, Video } from "./styles";

export const VideoPlayer = (props: IVideoPlayerProps) => {
  const { video, fullScreen, setTime, setBuffer, actions, setFullScreen } =
    useVideoPlayer();

  const handleTimeUpdateAndBuffer = useCallback(
    (videoContext: IVideoPlayerContext) => {
      const { video, setTime, setBuffer } = videoContext;
      if (video.current) {
        setTime(video.current.currentTime);
        for (let i = 0; i < video.current.buffered.length; i++) {
          const startX = video.current.buffered.start(i);
          const endX = video.current.buffered.end(i);
          const width = endX - startX;
          setBuffer(width);
        }
      }
    },
    []
  );

  useEffect(() => {
    const fullsSreenChange = () => setFullScreen(!!document.fullscreenElement);

    const handleTimeUpdate = () => {
      handleTimeUpdateAndBuffer({
        video,
        setTime,
        setBuffer,
      } as IVideoPlayerContext);
    };

    const currentVideo = video.current;

    if (currentVideo) {
      currentVideo.addEventListener("timeupdate", handleTimeUpdate);

      document.addEventListener("fullscreenchange", fullsSreenChange);

      return () => {
        currentVideo.removeEventListener("timeupdate", handleTimeUpdate);
        document.removeEventListener("fullscreenchange", fullsSreenChange);
      };
    }
  }, [video, setFullScreen, setTime, setBuffer, handleTimeUpdateAndBuffer]);

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
