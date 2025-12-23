export default function GiftPopup({ message, golden, code, onClose }) {
  if (!message) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70">
      <div
        className={`rounded-xl p-6 text-center max-w-md border ${
          golden
            ? "border-yellow-400 bg-yellow-400/10"
            : "border-neonGreen bg-darkBg"
        }`}
      >
        <h2 className="text-2xl font-bold mb-3">
          {golden ? "🌟 GOLDEN LOTTERY WIN!" : "🎁 Gift Opened"}
        </h2>

        <p className="text-gray-300 mb-4">{message}</p>

        {golden && code && (
          <>
            <div className="bg-black rounded-lg p-3 mb-4 border border-yellow-400">
              <p className="text-sm text-gray-400 mb-1">Your Unique Code</p>
              <p className="text-2xl font-mono text-yellow-400">
                {code}
              </p>
            </div>

            <p className="text-sm text-gray-300 mb-4">
              👉 Comment this code on our pinned X (Twitter) post  
              to claim your reward 🎄
            </p>

            <a
              href="https://twitter.com/YOUR_TWITTER/status/YOUR_POST_ID"
              target="_blank"
              rel="noreferrer"
              className="inline-block mb-4 px-4 py-2 bg-[#1d9bf0] rounded-lg font-bold"
            >
              COMMENT ON X
            </a>
          </>
        )}

        <button
          onClick={onClose}
          className="px-6 py-2 bg-neonRed rounded-lg font-bold hover:scale-105 transition"
        >
          CLOSE
        </button>
      </div>
    </div>
  );
}
