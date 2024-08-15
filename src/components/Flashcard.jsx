import React, { useState } from "react";

const Flashcard = ({ question, answer }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  const handleCardClick = () => {
    setShowAnswer(!showAnswer);
  };

  return (
    <div onClick={handleCardClick} style={styles.card}>
      <div>{showAnswer ? <p>{answer}</p> : <p>{question}</p>}</div>
    </div>
  );
};

const styles = {
  card: {
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: "20px",
    margin: "10px",
    cursor: "pointer",
    textAlign: "center",
    backgroundColor: "#f9f9f9",
  },
};

export default Flashcard;
