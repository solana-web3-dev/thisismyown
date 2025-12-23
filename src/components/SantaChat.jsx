import { useState } from "react";
import { getSantaReply } from "../utils/SantaReply";

export default function SantaChat({ open, onClose }) {
  const [message, setMessage] = useState("");
  const [reply, setReply] = useState(null);
  const [code, setCode] = useState(null);

  if (!open) return null;

  const sendMessage = () => {
    if (!message.trim()) return;

    const res = getSantaReply();
    setReply(res.text);
    setCode(res.code);
    setMessage("");
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70">
      <div className="bg-darkBg border border-neonGreen rounded-xl p-6 max-w-md w-full mx-4">
        <h2 className="text-2xl font-bold mb-4 text-center">
          🎅 Message Santa
        </h2>

        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Write your Christmas wish to Santa..."
          className="w-full p-3 rounded-lg bg-black/50 border border-white/10 text-white mb-3"
        />

        <button
          onClick={sendMessage}
          className="w-full py-2 bg-neonRed rounded-lg font-bold hover:scale-105 transition"
        >
          Send to Santa 🎄
        </button>

        {reply && (
          <div className="mt-4 p-4 rounded-lg bg-black/50 border border-white/10">
            <p className="mb-2">{reply}</p>

            {code && (
              <>
                <div className="bg-black rounded-lg p-3 mt-2 border border-yellow-400">
                  <p className="text-sm text-gray-400">🎁 Santa’s Code</p>
                  <p className="text-xl text-yellow-400 font-mono">
                    {code}
                  </p>
                </div>

                <p className="text-sm mt-3">
                  👉 Comment this code on our pinned X post to claim reward
                </p>

                <a
                  href="https://twitter.com/YOUR_TWITTER/status/YOUR_POST_ID"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block mt-2 px-4 py-2 bg-[#1d9bf0] rounded-lg font-bold"
                >
                  Go to Twitter
                </a>
              </>
            )}
          </div>
        )}

        <button
          onClick={onClose}
          className="block mx-auto mt-4 px-6 py-2 bg-white/10 rounded-lg"
        >
          Close
        </button>
      </div>
    </div>
  );
}
