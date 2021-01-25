import { MouseEvent, useEffect, useRef } from "react";

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

  useEffect(() => {
    if (typeof window !== "undefined" && "mediaSession" in window.navigator) {
      console.log(window.navigator);
      //@ts-ignore
      window.navigator.mediaSession.metadata = new MediaMetadata({
        title: "Never Gonna Give You Up",
        artist: "Rick Astley",
        album: "Whenever You Need Somebody",
        artwork: [
          {
            src: "https://dummyimage.com/96x96",
            sizes: "96x96",
            type: "image/png",
          },
          {
            src: "https://dummyimage.com/128x128",
            sizes: "128x128",
            type: "image/png",
          },
          {
            src: "https://dummyimage.com/192x192",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "https://dummyimage.com/256x256",
            sizes: "256x256",
            type: "image/png",
          },
          {
            src: "https://dummyimage.com/384x384",
            sizes: "384x384",
            type: "image/png",
          },
          {
            src: "https://dummyimage.com/512x512",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      });
      //@ts-ignore
      navigator.mediaSession.setActionHandler("play", function () {
        audioRef.current!.play();
      });
      //@ts-ignore
      navigator.mediaSession.setActionHandler("pause", function () {
        audioRef.current!.pause();
      });
      //@ts-ignore
      navigator.mediaSession.setActionHandler("seekbackward", function () {
        audioRef.current!.currentTime++;
      });
      //@ts-ignore
      navigator.mediaSession.setActionHandler("seekforward", function () {
        audioRef.current!.currentTime--;
      });
      //@ts-ignore
      navigator.mediaSession.setActionHandler("previoustrack", function () {
        audioRef.current!.currentTime++;
      });
      //@ts-ignore
      navigator.mediaSession.setActionHandler("nexttrack", function () {
        audioRef.current!.currentTime++;
      });
    }
  });

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
