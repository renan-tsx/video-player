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

export const theme: ITheme = {
  timeLine: {
    background: "#FFF",
    bgBuffer: "#FFF",
    bgDuration: "#FFF",
    bgCurrentTime: "#FFF",
  },
  controls: {
    color: "red",
    bg: "var(--black)",
  },
  icons: {
    bg: "var(--black)",
    bgHover: "var(--gray-600)",
    icoPlay: <FaPlay />,
    icoPause: <FaPause />,
    icoForward: <FaArrowRotateRight />,
    icoBackward: <FaArrowRotateLeft />,
    icoVolume: <FaVolumeLow />,
    icoVolumeMute: <FaVolumeXmark />,
    icoFullScreen: <FaExpand />,
  },
};
