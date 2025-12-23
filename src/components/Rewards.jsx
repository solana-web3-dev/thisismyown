const rewards = [
  "🎁 Mystery Airdrop",
  "🧧 Golden Gift Box",
  "🔥 Giveaways",
  "👑 Holder Surprises"
];

export default function Rewards() {
  return (
    <section className="py-20 bg-black text-center">
      <h2 className="text-4xl font-bold mb-10">Christmas Rewards 🎄</h2>
      <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto px-4">
        {rewards.map((r, i) => (
          <div key={i} className="p-6 bg-darkBg rounded-xl animate-float">
            {r}
          </div>
        ))}
      </div>
    </section>
  );
}
