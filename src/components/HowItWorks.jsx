const steps = [
  "🎄 Buy & Tweet",
  "🎅 Message Santa",
  "🎁 Gifts Airdropped",
  "🔥 Golden Gift Code"
];

export default function HowItWorks() {
  return (
    <section className="py-20 bg-black text-center">
      <h2 className="text-4xl font-bold mb-10">How The Magic Works ✨</h2>
      <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto px-4">
        {steps.map((step, i) => (
          <div
            key={i}
            className="p-6 border border-neonGreen rounded-xl hover:scale-105 transition"
          >
            {step}
          </div>
        ))}
      </div>
    </section>
  );
}
