import React from "react";
import { Controls } from "./Controls";
interface VideoPlayerProps
  extends React.DetailedHTMLProps<
    React.VideoHTMLAttributes<HTMLVideoElement>,
    HTMLVideoElement
  > {}

export const VideoPlayer: React.FC<VideoPlayerProps> = (props) => {
  const video = React.useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = React.useState(false);
  const [muted, setMuted] = React.useState(false);
  const [time, setTime] = React.useState(0);
  const [buffer, setBuffer] = React.useState(0);

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
