import { useEffect, useRef, useState } from "react";

export default function useJingleLoop() {
  const audioRef = useRef(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    audioRef.current = new Audio("/sounds/jingle-loop.mp3");
    audioRef.current.loop = true;
    audioRef.current.volume = 0.15;
  }, []);

  const toggle = () => {
    if (!audioRef.current) return;

    if (enabled) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(() => {});
    }

    setEnabled(!enabled);
  };

  return { enabled, toggle };
}
