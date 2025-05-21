import React, { useState } from "react";

const SkinAssessmentActivity = ({ onComplete }) => {
  const [activeCase, setActiveCase] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [completed, setCompleted] = useState(false);

  const cases = [
    {
      id: 1,
      title: "Case Study: Mrs. Wilson",
      description:
        "Mrs. Wilson is an 85-year-old female admitted to your floor with dehydration and a UTI. During your assessment, you notice dry, flaky skin on her arms and legs, and her skin tents when pinched. She has several areas of ecchymosis on her forearms and shins.",
      image: "/api/placeholder/400/300",
      imageAlt: "Elderly female patient with dry skin and ecchymosis on arms",
      questions: [
        {
          question:
            "Which age-related skin changes are evident in Mrs. Wilson's case?",
          options: [
            "Increased sebum production and oily skin",
            "Decreased elasticity, thinning of epidermis, and decreased moisture",
            "Increased dermal thickness and resistance to tearing",
            "Accelerated wound healing and increased moisture",
          ],
          correctAnswer: 1,
          explanation:
            "Normal age-related changes include decreased elasticity, thinning of the epidermis, decreased moisture, and decreased subcutaneous fat. These changes make elderly skin more vulnerable to tearing, pressure injuries, and moisture loss.",
        },
        {
          question:
            "What nursing interventions would be most appropriate for Mrs. Wilson's skin condition?",
          options: [
            "Apply moisturizing lotion only if skin appears red or inflamed",
            "Use soap for thorough cleansing twice daily to prevent infection",
            "Apply moisturizer immediately after bathing and avoid hot water",
            "Encourage sun exposure to improve vitamin D levels in the skin",
          ],
          correctAnswer: 2,
          explanation:
            "Applying moisturizer immediately after bathing helps trap moisture in the skin. Avoiding hot water is important as it can further dry the skin. Elderly skin needs gentle cleansing with moisturizing products and regular application of emollients.",
        },
      ],
    },
    {
      id: 2,
      title: "Case Study: Mr. Thompson",
      description:
        "Mr. Thompson is a 78-year-old male who has been bedridden for 2 weeks following hip surgery. During your assessment, you notice a 2cm x 2cm reddened area on his sacrum that blanches when pressed. The surrounding skin is intact but appears thin and fragile.",
      image: "/api/placeholder/400/300",
      imageAlt:
        "Elderly male patient with early stage pressure injury on sacrum",
      questions: [
        {
          question: "What stage of pressure injury is Mr. Thompson developing?",
          options: [
            "Deep tissue injury",
            "Stage 1 pressure injury",
            "Stage 2 pressure injury",
            "Unstageable pressure injury",
          ],
          correctAnswer: 1,
          explanation:
            "This is a Stage 1 pressure injury, characterized by non-blanchable erythema of intact skin. In Mr. Thompson's case, the area still blanches when pressed, indicating it is pre-Stage 1 or at risk, but intervention is critically needed to prevent progression.",
        },
        {
          question:
            "What is the most important nursing intervention for Mr. Thompson at this time?",
          options: [
            "Apply a hydrocolloid dressing to the area",
            "Clean the area with povidone-iodine solution",
            "Reposition Mr. Thompson every 2 hours and use pressure redistribution surfaces",
            "Apply a heat lamp to the area to promote circulation",
          ],
          correctAnswer: 2,
          explanation:
            "Repositioning every 2 hours and using pressure redistribution surfaces are essential interventions to relieve pressure and prevent worsening of the injury. This addresses the root cause of pressure injuries.",
        },
      ],
    },
    {
      id: 3,
      title: "Case Study: Mrs. Garcia",
      description:
        "Mrs. Garcia is a 92-year-old female with advanced dementia living in a long-term care facility. During bathing, you notice several small skin tears on her forearms. Her skin appears paper-thin, and she has lost significant subcutaneous tissue.",
      image: "/api/placeholder/400/300",
      imageAlt: "Elderly female patient with skin tears on forearms",
      questions: [
        {
          question:
            "What is the most likely cause of Mrs. Garcia's skin tears?",
          options: [
            "Poor nutrition and hydration",
            "Intentional self-harm behaviors",
            "Decreased skin elasticity and fragility with mechanical trauma",
            "Allergic reaction to soap",
          ],
          correctAnswer: 2,
          explanation:
            "Skin tears in the elderly are commonly caused by decreased skin elasticity and fragility combined with mechanical trauma. Even minor shearing forces during routine care can cause tears in paper-thin, fragile skin with reduced subcutaneous tissue.",
        },
        {
          question:
            "Which nursing interventions would be most appropriate to prevent further skin tears?",
          options: [
            "Apply restraints to prevent Mrs. Garcia from scratching herself",
            "Use paper tape for any necessary adhesives and pad bed rails or equipment",
            "Wash the skin vigorously to increase circulation",
            "Apply antibiotic ointment to all intact skin areas",
          ],
          correctAnswer: 1,
          explanation:
            "Using paper tape (or better yet, avoiding adhesives when possible) and padding potential sources of trauma, such as bed rails, reduces the risk of skin tears. Gentle handling, proper lifting techniques, and avoiding friction during care are also essential.",
        },
      ],
    },
  ];

  const handleAnswerSelect = (caseId, questionIndex, optionIndex) => {
    setUserAnswers({
      ...userAnswers,
      [`${caseId}-${questionIndex}`]: optionIndex,
    });
  };

  const handleSubmitCase = () => {
    const currentCase = cases[activeCase];
    const allQuestionsAnswered = currentCase.questions.every(
      (_, index) => userAnswers[`${currentCase.id}-${index}`] !== undefined
    );

    if (allQuestionsAnswered) {
      setShowResults(true);
    } else {
      alert("Please answer all questions before submitting.");
    }
  };

  const handleNextCase = () => {
    setShowResults(false);
    if (activeCase < cases.length - 1) {
      setActiveCase(activeCase + 1);
    } else {
      setCompleted(true);
      onComplete && onComplete();
    }
  };

  const resetActivity = () => {
    setActiveCase(0);
    setUserAnswers({});
    setShowResults(false);
    setCompleted(false);
  };

  const calculateScore = () => {
    let correct = 0;
    let total = 0;

    cases.forEach((caseData) => {
      caseData.questions.forEach((question, index) => {
        total++;
        if (userAnswers[`${caseData.id}-${index}`] === question.correctAnswer) {
          correct++;
        }
      });
    });

    return { correct, total, percentage: Math.round((correct / total) * 100) };
  };

  if (completed) {
    const score = calculateScore();

    return (
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold mb-4 text-center">
          Activity Complete!
        </h2>

        <div className="text-center mb-6">
          <div className="inline-block rounded-full bg-blue-100 p-6">
            <div className="text-3xl font-bold text-blue-700">
              {score.percentage}%
            </div>
            <div className="text-blue-600">
              {score.correct}/{score.total} correct
            </div>
          </div>
        </div>

        <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
          <h3 className="font-bold text-green-800 mb-2">Completion Feedback</h3>
          {score.percentage >= 80 ? (
            <p>
              Excellent work! You've demonstrated strong assessment skills
              related to skin conditions in older adults. Remember to apply
              these principles in your clinical practice.
            </p>
          ) : score.percentage >= 60 ? (
            <p>
              Good job! You have a solid foundation but might benefit from
              reviewing some aspects of skin assessment and care in older
              adults.
            </p>
          ) : (
            <p>
              This is a challenging area. Consider reviewing the skin changes
              associated with aging and evidence-based interventions for skin
              care in older adults.
            </p>
          )}
        </div>

        <h3 className="text-xl font-bold mb-4">Key Learning Points</h3>
        <ul className="list-disc ml-6 mb-6">
          <li>
            Aging skin has decreased elasticity, thinning of epidermis, and
            reduced moisture
          </li>
          <li>
            Older adults are at higher risk for skin tears, pressure injuries,
            and moisture-associated skin damage
          </li>
          <li>
            Prevention strategies include gentle handling, moisturizing, regular
            repositioning, and protection from trauma
          </li>
          <li>
            Early identification and intervention for skin issues is critical to
            prevent complications
          </li>
          <li>
            Assessment should include evaluation of risk factors such as
            mobility, nutrition, and continence
          </li>
        </ul>

        <div className="text-center">
          <button
            onClick={resetActivity}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
          >
            Restart Activity
          </button>
        </div>
      </div>
    );
  }

  const currentCase = cases[activeCase];

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold mb-2">{currentCase.title}</h2>

      <div className="mb-6">
        <div className="bg-gray-50 p-4 rounded-lg mb-4">
          <p>{currentCase.description}</p>
        </div>

        <div className="flex justify-center mb-4">
          <img
            src={currentCase.image}
            alt={currentCase.imageAlt}
            className="rounded-lg border border-gray-300"
          />
        </div>
      </div>

      {showResults ? (
        <div className="mb-6">
          <h3 className="text-xl font-bold mb-4">Results</h3>

          {currentCase.questions.map((question, index) => {
            const userAnswer = userAnswers[`${currentCase.id}-${index}`];
            const isCorrect = userAnswer === question.correctAnswer;

            return (
              <div
                key={index}
                className={`mb-6 p-4 rounded-lg ${
                  isCorrect
                    ? "bg-green-50 border border-green-200"
                    : "bg-red-50 border border-red-200"
                }`}
              >
                <p className="font-semibold mb-2">
                  {index + 1}. {question.question}
                </p>

                <div className="ml-4 mb-2">
                  <p>
                    Your answer:{" "}
                    <span
                      className={
                        isCorrect
                          ? "text-green-600 font-semibold"
                          : "text-red-600 font-semibold"
                      }
                    >
                      {question.options[userAnswer]}
                    </span>
                  </p>

                  {!isCorrect && (
                    <p className="text-green-600">
                      Correct answer: {question.options[question.correctAnswer]}
                    </p>
                  )}
                </div>

                <div className="bg-white p-3 rounded mt-2">
                  <p className="italic">{question.explanation}</p>
                </div>
              </div>
            );
          })}

          <button
            onClick={handleNextCase}
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
          >
            {activeCase < cases.length - 1 ? "Next Case" : "Complete Activity"}
          </button>
        </div>
      ) : (
        <div>
          {currentCase.questions.map((question, index) => (
            <div key={index} className="mb-6">
              <p className="font-semibold mb-3">
                {index + 1}. {question.question}
              </p>

              <div className="space-y-2">
                {question.options.map((option, optionIndex) => (
                  <div
                    key={optionIndex}
                    className={`p-3 border rounded-lg cursor-pointer transition ${
                      userAnswers[`${currentCase.id}-${index}`] === optionIndex
                        ? "bg-blue-100 border-blue-500"
                        : "border-gray-300 hover:bg-gray-50"
                    }`}
                    onClick={() =>
                      handleAnswerSelect(currentCase.id, index, optionIndex)
                    }
                  >
                    <div className="flex items-center">
                      <div
                        className={`w-5 h-5 rounded-full border flex items-center justify-center mr-3 ${
                          userAnswers[`${currentCase.id}-${index}`] ===
                          optionIndex
                            ? "bg-blue-600 border-blue-600"
                            : "border-gray-400"
                        }`}
                      >
                        {userAnswers[`${currentCase.id}-${index}`] ===
                          optionIndex && (
                          <div className="w-2 h-2 rounded-full bg-white"></div>
                        )}
                      </div>
                      <span>{option}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          <button
            onClick={handleSubmitCase}
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
          >
            Submit Answers
          </button>
        </div>
      )}

      <div className="mt-4 flex items-center justify-between">
        <div className="text-sm text-gray-600">
          Case {activeCase + 1} of {cases.length}
        </div>

        <div className="flex space-x-1">
          {Array.from({ length: cases.length }).map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full ${
                activeCase === index ? "bg-blue-600" : "bg-gray-300"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkinAssessmentActivity;
