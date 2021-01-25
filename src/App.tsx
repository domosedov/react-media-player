import { MouseEvent, useRef } from "react";

function App() {
  const audioRef = useRef<HTMLAudioElement>(null);

  console.dir(audioRef.current);

  const handlePlay = (e: MouseEvent<HTMLButtonElement>) => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  const handlePause = (e: MouseEvent<HTMLButtonElement>) => {
    if (audioRef.current) {
      audioRef.current.pause();
    }
  };

  const handlePrev = (e: MouseEvent<HTMLButtonElement>) => {
    if (audioRef.current) {
      audioRef.current.currentTime--;
    }
  };

  const handleForward = (e: MouseEvent<HTMLButtonElement>) => {
    if (audioRef.current) {
      audioRef.current.currentTime++;
    }
  };

  return (
    <div>
      <h1>Audio Test</h1>
      <audio ref={audioRef} src="/music.mp3" controls={false} />
      <button onClick={handlePlay}>PLAY</button>
      <br />
      <button onClick={handlePause}>PAUSE</button>
      <br />
      <button onClick={handlePrev}>{"<<"}</button>
      <br />
      <button onClick={handleForward}>{">>"}</button>
    </div>
  );
}

export default App;
