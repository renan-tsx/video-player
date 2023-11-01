import { useEffect } from "react";
import { useVideoPlayer } from "../../hooks/useVideoPlayer";
import { IVideoPlayerContext } from "../../types/IVideoPlayerContext";
import { IVideoPlayerProps } from "../../types/IVideoPlayerProps";
import { Controls } from "./Controls";
import { Video } from "./styles";

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
  const { video, setTime, setBuffer } = useVideoPlayer();

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
    <div style={{ aspectRatio: 16 / 9 }}>
      <Video ref={video} {...props}></Video>
      <Controls />
    </div>
  );
};
