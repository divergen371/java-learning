import React from "react";
import Flashcard from "./Flashcard";

const FlashcardDeck = () => {
  const cards = [
    {
      question: "Javaの主要な特徴の1つは何ですか？",
      answer:
        "プラットフォームに依存しないことです（Write Once, Run Anywhere）。",
    },
    {
      question: "Javaの基本データ型を3つ挙げてください。",
      answer: "int, float, boolean",
    },
    // TODO: さらにカードを追加
  ];

  return (
    <div>
      {cards.map((card, index) => (
        <Flashcard key={index} question={card.question} answer={card.answer} />
      ))}
    </div>
  );
};

export default FlashcardDeck;
