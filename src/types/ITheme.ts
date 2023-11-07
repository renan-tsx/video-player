import React from "react";

export interface ITheme {
  timeLine: {
    background: string;
    bgBuffer: string;
    bgDuration: string;
    bgCurrentTime: string;
  };
  controls: {
    color: string;
    bg: string;
  };
  icons: {
    bg: string;
    bgHover: string;
    icoPlay: React.ReactNode;
    icoPause: React.ReactNode;
    icoForward: React.ReactNode;
    icoBackward: React.ReactNode;
    icoVolume: React.ReactNode;
    icoVolumeMute: React.ReactNode;
    icoFullScreen: React.ReactNode;
  };
}
