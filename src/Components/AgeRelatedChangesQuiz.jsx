import React, { useState } from "react";

const AgeRelatedChangesQuiz = ({ onComplete }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);

  const questions = [
    {
      questionText:
        "Which of the following is an age-related change to the cardiovascular system?",
      answerOptions: [
        {
          answerText: "Increased elasticity of blood vessels",
          isCorrect: false,
        },
        { answerText: "Decreased peripheral resistance", isCorrect: false },
        { answerText: "Decreased cardiac output", isCorrect: true },
        { answerText: "Increased heart rate at rest", isCorrect: false },
      ],
      explanation:
        "Cardiac output decreases as a result of a decrease in heart rate and stroke volume in older adults.",
    },
    {
      questionText: "Normal age-related changes to bone structure include:",
      answerOptions: [
        { answerText: "Increased bone density", isCorrect: false },
        { answerText: "Loss of bone calcium", isCorrect: true },
        { answerText: "Increased joint flexibility", isCorrect: false },
        { answerText: "Increased calcium absorption", isCorrect: false },
      ],
      explanation:
        "With aging, there is a loss of bone calcium and decreased bone density, which can lead to osteoporosis.",
    },
    {
      questionText:
        "Which statement about age-related cognitive changes is accurate?",
      answerOptions: [
        {
          answerText:
            "Short-term memory declines while long-term memory stays relatively intact",
          isCorrect: true,
        },
        {
          answerText:
            "Both short-term and long-term memory show equal significant decline",
          isCorrect: false,
        },
        {
          answerText:
            "Long-term memory declines while short-term memory stays intact",
          isCorrect: false,
        },
        {
          answerText:
            "Neither short-term nor long-term memory is affected by normal aging",
          isCorrect: false,
        },
      ],
      explanation:
        "In normal aging, short-term memory typically shows some decline while long-term memory remains relatively intact.",
    },
    {
      questionText:
        "Which sensory change is commonly associated with normal aging?",
      answerOptions: [
        { answerText: "Complete loss of taste sensation", isCorrect: false },
        { answerText: "Improved night vision", isCorrect: false },
        {
          answerText: "Hearing loss beginning with high-frequency sounds",
          isCorrect: true,
        },
        { answerText: "Increased sensitivity to pain", isCorrect: false },
      ],
      explanation:
        "Presbycusis, or age-related hearing loss, typically begins with difficulty hearing high-frequency sounds.",
    },
    {
      questionText: "Age-related changes to the respiratory system include:",
      answerOptions: [
        { answerText: "Increased elasticity of lung tissue", isCorrect: false },
        { answerText: "Decreased thoracic muscle strength", isCorrect: true },
        { answerText: "Increased vital capacity", isCorrect: false },
        { answerText: "Improved oxygen diffusion", isCorrect: false },
      ],
      explanation:
        "With aging, there is decreased thoracic muscle strength, reduced lung elasticity, and decreased vital capacity, all of which can affect respiratory function.",
    },
  ];

  const handleAnswerOptionClick = (isCorrect, index) => {
    const newUserAnswers = [...userAnswers];
    newUserAnswers[currentQuestion] = index;
    setUserAnswers(newUserAnswers);

    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
      onComplete && onComplete(score + (isCorrect ? 1 : 0));
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setShowScore(false);
    setScore(0);
    setUserAnswers([]);
  };

  return (
    <div className="bg-white rounded-lg shadow p-6">
      {showScore ? (
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Quiz Complete!</h2>
          <p className="text-xl mb-4">
            You scored {score} out of {questions.length}
          </p>
          {score === questions.length ? (
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
              Excellent job! You have a strong understanding of age-related
              changes.
            </div>
          ) : score >= questions.length / 2 ? (
            <div className="bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded mb-4">
              Good work! Review the topics you missed to strengthen your
              knowledge.
            </div>
          ) : (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
              You might benefit from reviewing age-related changes more
              thoroughly.
            </div>
          )}

          <h3 className="text-xl font-bold mt-6 mb-3">Review Your Answers</h3>
          {questions.map((question, index) => (
            <div key={index} className="mb-6 text-left">
              <p className="font-semibold mb-2">
                Question {index + 1}: {question.questionText}
              </p>
              <p className="mb-1">
                Your answer:{" "}
                <span
                  className={
                    userAnswers[index] !== undefined &&
                    question.answerOptions[userAnswers[index]].isCorrect
                      ? "text-green-600 font-semibold"
                      : "text-red-600 font-semibold"
                  }
                >
                  {userAnswers[index] !== undefined
                    ? question.answerOptions[userAnswers[index]].answerText
                    : "Not answered"}
                </span>
              </p>
              <p className="mb-1">
                Correct answer:{" "}
                <span className="text-green-600 font-semibold">
                  {
                    question.answerOptions.find((option) => option.isCorrect)
                      .answerText
                  }
                </span>
              </p>
              <p className="italic text-gray-600">{question.explanation}</p>
            </div>
          ))}

          <button
            onClick={restartQuiz}
            className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Restart Quiz
          </button>
        </div>
      ) : (
        <div>
          <div className="flex justify-between items-center mb-4">
            <span className="text-lg font-semibold">
              Question {currentQuestion + 1}/{questions.length}
            </span>
            <span className="text-lg">Score: {score}</span>
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-bold mb-4">
              {questions[currentQuestion].questionText}
            </h2>
            <div className="space-y-3">
              {questions[currentQuestion].answerOptions.map(
                (answerOption, index) => (
                  <button
                    key={index}
                    onClick={() =>
                      handleAnswerOptionClick(answerOption.isCorrect, index)
                    }
                    className="w-full text-left p-3 border border-gray-300 rounded hover:bg-blue-50 transition"
                  >
                    {answerOption.answerText}
                  </button>
                )
              )}
            </div>
          </div>

          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
            <p className="text-sm text-blue-800">
              Select the best answer based on your knowledge of age-related
              changes in older adults.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default AgeRelatedChangesQuiz;
