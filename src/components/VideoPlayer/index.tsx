import React from "react";
import { useVideoPlayer } from "../../hooks/useVideoPlayer";
import { Controls } from "./Controls";
interface VideoPlayerProps
  extends React.DetailedHTMLProps<
    React.VideoHTMLAttributes<HTMLVideoElement>,
    HTMLVideoElement
  > {}

export const VideoPlayer: React.FC<VideoPlayerProps> = (props) => {
  const {
    video,
    playing,
    setPlaying,
    muted,
    setMuted,
    time,
    setTime,
    buffer,
    setBuffer,
  } = useVideoPlayer();

  const handleTimeUpdate = () => {
    if (!video.current) return;
    setTime(video.current?.currentTime);

    // test
    for (let i = 0; i < video.current.buffered.length; i++) {
      const startX = video.current.buffered.start(i);
      const endX = video.current.buffered.end(i);
      const width = endX - startX;
      setBuffer(width);
    }
  };

  return (
    <div style={{ aspectRatio: 16 / 9 }}>
      <video
        controls
        ref={video}
        {...props}
        onTimeUpdate={handleTimeUpdate}
      ></video>
      <Controls
        video={video}
        playing={playing}
        setPlaying={setPlaying}
        muted={muted}
        setMuted={setMuted}
        time={time}
        setTime={setTime}
        buffer={buffer}
      />
    </div>
  );
};
