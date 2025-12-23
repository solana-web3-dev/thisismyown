export default function GiftDrop({ left, onClick, isGolden }) {
  return (
    <div
      className={`gift cursor-pointer transition hover:scale-125 ${
        isGolden ? "golden-gift" : ""
      }`}
      style={{ left: `${left}vw` }}
      onClick={onClick}
      title={isGolden ? "Golden Gift!" : "Gift"}
    >
      {isGolden ? "🌟🎁" : "🎁"}
    </div>
  );
}
