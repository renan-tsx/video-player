import React from "react";

interface VideoPlayerProps
  extends React.DetailedHTMLProps<
    React.VideoHTMLAttributes<HTMLVideoElement>,
    HTMLVideoElement
  > {}

export const VideoPlayer: React.FC<VideoPlayerProps> = (props) => {
  return (
    <div style={{ aspectRatio: 16 / 9 }}>
      <video {...props}></video>
    </div>
  );
};
