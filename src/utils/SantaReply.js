import generateCode from "./enerateCode";

const normalReplies = [
  "🎅 Ho ho ho! Santa heard your wish.",
  "🎄 Christmas magic is strong with you!",
  "🎁 Keep believing, little degen.",
  "❄️ Santa is watching… diamond hands only.",
  "🧑‍🎄 Your wish is noted in the Nice List."
];

const rewardReplies = [
  "🌟 Ho ho ho! You’ve been EXTRA nice!",
  "🎁 Santa dropped something special for you!",
  "🎄 Christmas magic chose YOU!",
  "✨ A rare gift for a true believer!"
];

export function getSantaReply() {
  const alreadyGot = localStorage.getItem("santa_chat_rewarded");

  // If already rewarded, no more codes
  if (alreadyGot) {
    return {
      text: normalReplies[Math.floor(Math.random() * normalReplies.length)],
      code: null
    };
  }

  const isReward = Math.random() < 0.2; // 🎁 20% chance

  if (isReward) {
    const code = generateCode();
    localStorage.setItem("santa_chat_rewarded", "true");

    return {
      text: rewardReplies[Math.floor(Math.random() * rewardReplies.length)],
      code
    };
  }

  return {
    text: normalReplies[Math.floor(Math.random() * normalReplies.length)],
    code: null
  };
}
