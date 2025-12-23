import Snow from "./components/Snow";
import Santa from "./components/Santa";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import Lore from "./components/Lore";
import Rewards from "./components/Rewards";
import Countdown from "./components/Countdown";
import Roadmap from "./components/Roadmap";
import Footer from "./components/Footer";
import GiftDrop from "./components/GiftDrop";
import useJingleLoop from "./hooks/useJingleLoop";
import "./index.css";

export default function App() {
  const { enabled, toggle } = useJingleLoop();

  return (
    <div className="relative overflow-x-hidden christmas-glow">
      {/* 🔔 MUSIC TOGGLE */}
      <button
        onClick={toggle}
        className="fixed top-20 right-4 z-[90] bg-black/70 border border-neonGreen px-3 py-2 rounded-full text-sm hover:scale-105 transition"
      >
        {enabled ? "🔔 Music ON" : "🔕 Music OFF"}
      </button>

      {/* Background layers */}
      <div className="stars" />
      <div className="christmas-pattern" />

      {/* Lights */}
      <div className="lights">
        {Array.from({ length: 30 }).map((_, i) => (
          <span key={i} style={{ animationDelay: `${i * 0.2}s` }} />
        ))}
      </div>

      <Snow />
      <Santa />
      <Hero />
      <HowItWorks />
      <Lore />
      <Rewards />
      <Countdown />
      <Roadmap />
      <Footer />
      {/* <div className="pines" /> */}
    </div>
  );
}
