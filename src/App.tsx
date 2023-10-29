// import videoSrc from "../public/video/Landscapes.mp4";
import { Container } from "./components/Container";
import { Sniper } from "./components/VideoPlayer/Sniper";
// import { VideoPlayer } from "./components/VideoPlayer";

function App() {
  return (
    <>
      <Container bg="blue-500" style={{ aspectRatio: 16 / 9 }}>
        {/* <VideoPlayer src={videoSrc} /> */}
        <Sniper speed={1.0} size={4} />
      </Container>
    </>
  );
}

export default App;
