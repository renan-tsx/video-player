import videoSrc from "../public/video/Landscapes.mp4";
import { Container } from "./components/Container";
import { VideoPlayer } from "./components/VideoPlayer";

function App() {
  return (
    <>
      <Container bg="blue-500" style={{ aspectRatio: 16 / 9 }}>
        <VideoPlayer src={videoSrc} />
      </Container>
    </>
  );
}

export default App;
