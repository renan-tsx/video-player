import { useEffect } from "react";
import { useVideoPlayer } from "../../hooks/useVideoPlayer";
import { IVideoPlayerContext } from "../../types/IVideoPlayerContext";
import { IVideoPlayerProps } from "../../types/IVideoPlayerProps";
import { Controls } from "./Controls";
import { Container, Video } from "./styles";

const handleTimeUpdateAndBuffer = ({
  video,
  setTime,
  setBuffer,
}: IVideoPlayerContext) => {
  if (video.current) {
    setTime(video.current.currentTime);

    for (let i = 0; i < video.current.buffered.length; i++) {
      const startX = video.current.buffered.start(i);
      const endX = video.current.buffered.end(i);
      const width = endX - startX;
      setBuffer(width);
    }
  }
};

export const VideoPlayer = (props: IVideoPlayerProps) => {
  const { video, fullScreen, setTime, setBuffer, actions } = useVideoPlayer();

  useEffect(() => {
    const currentVideo = video.current;

    if (currentVideo) {
      const handler = () =>
        handleTimeUpdateAndBuffer({
          video,
          setTime,
          setBuffer,
        } as IVideoPlayerContext);

      currentVideo.addEventListener("timeupdate", handler);

      // NOTE Prevent memory leak
      return () => currentVideo.removeEventListener("timeupdate", handler);
    }
  }, [video, setTime, setBuffer]);

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
