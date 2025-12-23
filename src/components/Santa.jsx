import { useEffect, useState } from "react";
import GiftDrop from "./GiftDrop";
import GiftPopup from "./GiftPopup";
import generateCode from "../utils/enerateCode";


const normalMessages = [
  "🎄 Diamond hands only!",
  "🎅 Santa is watching...",
  "💎 Hold till Christmas",
  "🔥 Christmas burn incoming"
];

const goldenMessages = [
  "🌟 GOLDEN GIFT UNLOCKED!",
  "👑 You are on Santa’s Nice List!",
  "🎁 Jackpot Holder Energy!",
  "🚀 Christmas Alpha Incoming!"
];

export default function Santa() {
  const [visible, setVisible] = useState(false);
  const [drops, setDrops] = useState([]);
  const [popup, setPopup] = useState(null);
  const [isGolden, setIsGolden] = useState(false);
  const [giftCount, setGiftCount] = useState(0);
  const [speed, setSpeed] = useState(25);
  const [lotteryCode, setLotteryCode] = useState(null);


  useEffect(() => {
    const showSanta = () => {
      setSpeed(18 + Math.random() * 20); // random speed
      setVisible(true);

      setTimeout(() => {
        setVisible(false);
        setDrops([]);
      }, 20000);
    };

    showSanta();

    const interval = setInterval(
      showSanta,
      45000 + Math.random() * 30000
    );

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
  if (!visible) return;

  const dropInterval = setInterval(() => {
    setDrops((prev) => [
      ...prev,
      {
        id: Date.now(),
        left: 20 + Math.random() * 60,
        golden: Math.random() < 0.01 // 🌟 1% golden
      }
    ]);
  }, 2500);

  return () => clearInterval(dropInterval);
}, [visible]);

 const handleGiftClick = (golden) => {
  setGiftCount((c) => c + 1);

  if (golden) {
    const code = generateCode();
    setLotteryCode(code);
    setIsGolden(true);
    setPopup("🎉 YOU WON THE GOLDEN LOTTERY!");
  } else {
    setIsGolden(false);
    setPopup(
      normalMessages[Math.floor(Math.random() * normalMessages.length)]
    );
  }
};
const closePopup = () => {
  setPopup(null);
  setLotteryCode(null);
};




  return (
    <>
      {visible && (
        <img
          src="/santa.png"
          alt="Santa Flying"
          className="santa"
          style={{ animationDuration: `${speed}s` }}
        />
      )}

      {visible &&
  drops.map((d) => (
    <GiftDrop
      key={d.id}
      left={d.left}
      isGolden={d.golden}
      onClick={() => handleGiftClick(d.golden)}
    />
  ))}


      {/* 🎁 POPUP */}
      <GiftPopup
  message={popup}
  golden={isGolden}
  code={lotteryCode}
  onClose={closePopup}
/>


      {/* 📊 COUNTER */}
      <div className="fixed bottom-4 right-4 z-[90] bg-black/70 border border-neonGreen rounded-xl px-4 py-2 text-sm">
        🎁 Gifts Collected:{" "}
        <span className="text-neonGreen font-bold">{giftCount}</span>
      </div>
    </>
  );
}
