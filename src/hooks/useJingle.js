import { useRef } from "react";

export default function useJingle() {
  const audioRef = useRef(null);

  if (!audioRef.current) {
    audioRef.current = new Audio("/sounds/jingle.mp3");
    audioRef.current.volume = 0.4;
  }

  const play = () => {
    audioRef.current.currentTime = 0;
    audioRef.current.play().catch(() => {});
  };

  return play;
}
