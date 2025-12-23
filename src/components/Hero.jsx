import { useState } from "react";
import InfoPopup from "./InfoPopup";
import useJingle from "../hooks/useJingle";
import SantaChat from "./SantaChat";


export default function Hero() {
  const playJingle = useJingle();
  const [openInfo, setOpenInfo] = useState(false);
  const [openSantaChat, setOpenSantaChat] = useState(false);
playJingle()

  return (
    <>
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-5xl md:text-7xl golden font-extrabold animate-glitch">
          🎄 GOLDEN SANTA 🎁
        </h1>

        <p className="mt-6 text-lg text-gray-200 max-w-xl ">
          Collect Golden Gifts and claim rewards on Twitter.
        </p>
        <p className="mt-6 text-lg text-gray-200 max-w-xl">
          CA: 0x1234567890abcdef1234567890abcdef12345678
        </p>

        <div className="flex gap-4 mt-8">
          <button
            onMouseEnter={playJingle}
            className="px-8 py-4 bg-neonRed rounded-xl font-bold hover:scale-110 transition"
          >
            <a href="https://www.example.com" target="_blank" rel="noopener noreferrer">
  BUY NOW
</a>
          
          </button>
          <button
  onClick={() => setOpenSantaChat(true)}
  className="px-8 py-4 bg-white/10 border border-white/20 rounded-xl font-bold hover:scale-110 transition"
>
  🎅 Message Santa
</button>
<SantaChat
  open={openSantaChat}
  onClose={() => setOpenSantaChat(false)}
/>


          <button
            
            onClick={() => setOpenInfo(true)}
            className="px-8 py-4 border border-neonGreen text-neonGreen rounded-xl hover:bg-neonGreen hover:text-black transition"
          >
            HOW IT WORKS
          </button>
        </div>
      </section>

      <InfoPopup
        open={openInfo}
        onClose={() => setOpenInfo(false)}
      />
    </>
  );
}
