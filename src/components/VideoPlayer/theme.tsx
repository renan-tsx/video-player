import { ITheme } from "../../types/ITheme";

import {
  FaArrowRotateLeft,
  FaArrowRotateRight,
  FaExpand,
  FaPause,
  FaPlay,
  FaVolumeLow,
  FaVolumeXmark,
} from "react-icons/fa6";

export const themeVideo: ITheme = {
  timeLine: {
    bg: "var(--timeline-bg)",
    bgBuffer: "var(--timeline-bg-buffer)",
    bgDuration: "var(--timeline-bg-duration)",
    bgCurrentTime: "var(--white)",
  },
  controls: {
    color: "var(--controls-color)",
    bg: "var(--controls-bg)",
  },
  icons: {
    bg: "var(--controls-bg)",
    bgHover: "var(--icons-bg-hover)",
    icoPlay: <FaPlay />,
    icoPause: <FaPause />,
    icoForward: <FaArrowRotateRight />,
    icoBackward: <FaArrowRotateLeft />,
    icoVolume: <FaVolumeLow />,
    icoVolumeMute: <FaVolumeXmark />,
    icoFullScreen: <FaExpand />,
  },
};
