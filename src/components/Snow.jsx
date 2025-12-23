import { useMemo } from "react";

export default function Snow() {
  const flakes = useMemo(
    () =>
      [...Array(60)].map(() => ({
        left: Math.random() * 100,
        duration: 5 + Math.random() * 10,
        delay: Math.random() * 5,
        size: 3 + Math.random() * 4,
        opacity: 0.4 + Math.random() * 0.6
      })),
    []
  );

  return (
    <div className="snow">
      {flakes.map((f, i) => (
        <span
          key={i}
          style={{
            left: `${f.left}vw`,
            width: f.size,
            height: f.size,
            animationDuration: `${f.duration}s`,
            animationDelay: `${f.delay}s`,
            opacity: f.opacity
          }}
        />
      ))}
    </div>
  );
}
