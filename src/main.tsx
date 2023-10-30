// import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { VideoPlayerContextProvider } from "./context/VideoPlayerContext.tsx";
import "./main.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  // <React.StrictMode>
  <VideoPlayerContextProvider>
    <App />
  </VideoPlayerContextProvider>
  // </React.StrictMode>
);
