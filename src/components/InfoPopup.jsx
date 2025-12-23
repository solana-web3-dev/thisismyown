export default function InfoPopup({ open, onClose }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70">
      <div className="max-w-md w-full mx-4 rounded-xl border border-neonGreen bg-darkBg p-6 text-center">
        <h2 className="text-2xl font-bold mb-4">🎄 How Golden Gifts Work</h2>

        <div className="text-left text-gray-300 space-y-3">
          <p>1️⃣ Collect a <span className="text-yellow-400">🌟 Golden Gift</span></p>
          <p>2️⃣ Receive a <b>unique reward code</b></p>
          <p>3️⃣ Go to our <b>pinned X (Twitter) post</b></p>
          <p>4️⃣ Comment your code on that post</p>
          <p>5️⃣ We verify & send your reward 🎁</p>
        </div>

        <a
          href="https://twitter.com/YOUR_TWITTER"
          target="_blank"
          rel="noreferrer"
          className="inline-block mt-5 px-5 py-2 bg-[#1d9bf0] rounded-lg font-bold"
        >
          Go to Twitter
        </a>

        <button
          onClick={onClose}
          className="block mx-auto mt-4 px-6 py-2 bg-neonRed rounded-lg font-bold hover:scale-105 transition"
        >
          CLOSE
        </button>
      </div>
    </div>
  );
}
