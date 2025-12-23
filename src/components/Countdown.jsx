import { useEffect, useState } from "react";

export default function Countdown() {
  const targetDate = new Date("December 25, 2025 00:00:00").getTime();
  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const diff = targetDate - now;

      if (diff <= 0) {
        clearInterval(timer);
        setTimeLeft({ done: true });
        return;
      }

      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60)
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (timeLeft.done) {
    return (
      <section className="py-20 bg-darkBg text-center">
        <h2 className="text-5xl font-bold text-neonGreen animate-pulse">
          🎁 SNAPSHOT TAKEN 🎄
        </h2>
      </section>
    );
  }

  return (
    <section className="py-20 bg-darkBg text-center">
      <h2 className="text-4xl font-bold mb-6">⏰ Christmas Snapshot In</h2>

      <div className="flex justify-center gap-6 text-2xl md:text-4xl font-bold text-neonRed">
        <TimeBox label="Days" value={timeLeft.days} />
        <TimeBox label="Hours" value={timeLeft.hours} />
        <TimeBox label="Minutes" value={timeLeft.minutes} />
        <TimeBox label="Seconds" value={timeLeft.seconds} />
      </div>

      <p className="mt-6 text-gray-400">
        Golden Santa Complete Your Wishes 🎅
      </p>
    </section>
  );
}

function TimeBox({ label, value }) {
  return (
    <div className="px-4 py-6 bg-black rounded-xl min-w-[90px] border border-neonGreen">
      <div>{value ?? "--"}</div>
      <div className="text-sm text-gray-400 mt-1">{label}</div>
    </div>
  );
}
