import React, { useState } from "react";

const QuizComponent = () => {
  const questions = [
    {
      question: "Javaの開発者は誰？",
      options: [
        "ジェームズ・ゴスリング",
        "ビル・ゲイツ",
        "スティーブ・ジョブズ",
        "ラリー・ペイジ",
      ],
      answer: "ジェームズ・ゴスリング",
    },
    // TODO: 他の質問を追加
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerOptionClick = (option) => {
    if (option === questions[currentQuestion].answer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div>
      {showScore ? (
        <div>
          <h2>
            Score: {score} / {questions.length}
          </h2>
        </div>
      ) : (
        <div>
          <h2>{questions[currentQuestion].question}</h2>
          {questions[currentQuestion].options.map((option) => (
            <button
              key={option}
              onClick={() => handleAnswerOptionClick(option)}
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default QuizComponent;
