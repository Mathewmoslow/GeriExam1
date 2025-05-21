import React, { useState } from 'react';

const EndOfLifeCaseStudy = ({ onComplete }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [showFeedback, setShowFeedback] = useState(false);
  const [completed, setCompleted] = useState(false);

  // Case data - simplified structure
  const title = "End-of-Life Care: Mrs. Rivera";
  
  const description = "Mrs. Rivera is an 89-year-old woman with end-stage heart failure. " +
    "She has been admitted to hospice care after multiple hospitalizations in the past 3 months. " +
    "She lives with her daughter who is her primary caregiver. During your initial assessment, " +
    "you note Mrs. Rivera is experiencing increasing dyspnea, fatigue, and occasional chest pain. " +
    "Her daughter appears anxious and mentions she's unsure if she's doing the right thing " +
    "by following her mother's wishes for no further hospitalizations.";

  // Questions and options simplified
  const questions = [
    {
      text: "What are the priority needs in this situation?",
      options: [
        { text: "Addressing Mrs. Rivera's physical symptoms, particularly dyspnea and pain", isCorrect: true },
        { text: "Encouraging the daughter to reconsider hospitalization for better treatment", isCorrect: false },
        { text: "Providing emotional support to both Mrs. Rivera and her daughter", isCorrect: true },
        { text: "Focusing on curative treatments to extend Mrs. Rivera's life", isCorrect: false }
      ],
      feedback: {
        correct: "Correct! Symptom management and emotional support are priorities in end-of-life care.",
        incorrect: "Consider the goals of hospice care, which focus on comfort and quality of life rather than extending life."
      }
    },
    {
      text: "Which interventions would be most appropriate for Mrs. Rivera's dyspnea?",
      options: [
        { text: "Administering oxygen therapy and monitoring oxygen saturation closely", isCorrect: false },
        { text: "Positioning for comfort, using a fan, and administering prescribed medications like opioids", isCorrect: true },
        { text: "Encouraging deep breathing exercises and incentive spirometry", isCorrect: false },
        { text: "Consulting with pulmonology for advanced respiratory support", isCorrect: false }
      ],
      feedback: {
        correct: "Correct! These comfort measures are appropriate for end-of-life dyspnea management.",
        incorrect: "Consider interventions that focus on comfort rather than monitoring or rehabilitation."
      }
    },
    {
      text: "How would you best support Mrs. Rivera's daughter?",
      options: [
        { text: "Reassure her that she can change her mind about hospice if she becomes uncomfortable", isCorrect: false },
        { text: "Provide education about the dying process and what to expect", isCorrect: true },
        { text: "Suggest she take a break from caregiving to avoid burnout", isCorrect: false },
        { text: "Listen to her concerns, validate her feelings, and affirm that she is honoring her mother's wishes", isCorrect: true }
      ],
      feedback: {
        correct: "Correct! Education, listening, and validation are key supportive interventions.",
        incorrect: "Consider approaches that acknowledge the daughter's emotions while affirming her role."
      }
    },
    {
      text: "What is the most appropriate approach to pain management in this case?",
      options: [
        { text: "Administer pain medication only when Mrs. Rivera reports severe pain", isCorrect: false },
        { text: "Provide around-the-clock scheduled pain medication with additional doses for breakthrough pain", isCorrect: true },
        { text: "Use non-pharmacological methods first to avoid medication side effects", isCorrect: false },
        { text: "Limit opioid use due to concerns about respiratory depression and addiction", isCorrect: false }
      ],
      feedback: {
        correct: "Correct! Scheduled pain medication prevents pain from becoming severe and provides consistent relief.",
        incorrect: "End-of-life pain management focuses on prevention rather than reaction, without undue concerns about addiction or respiratory depression."
      }
    }
  ];

  const handleOptionSelect = (index) => {
    setUserAnswers({
      ...userAnswers,
      [currentStep]: index
    });
  };

  const handleSubmit = () => {
    if (userAnswers[currentStep] !== undefined) {
      setShowFeedback(true);
    } else {
      alert("Please select an answer before continuing.");
    }
  };

  const handleNext = () => {
    setShowFeedback(false);
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setCompleted(true);
      onComplete && onComplete();
    }
  };

  const resetActivity = () => {
    setCurrentStep(0);
    setUserAnswers({});
    setShowFeedback(false);
    setCompleted(false);
  };

  // Calculate if the current answer is correct
  const isCurrentAnswerCorrect = () => {
    if (userAnswers[currentStep] === undefined) return false;
    return questions[currentStep].options[userAnswers[currentStep]].isCorrect;
  };

  // Calculate overall score
  const calculateScore = () => {
    let correctCount = 0;
    let totalQuestions = questions.length;
    
    Object.keys(userAnswers).forEach(step => {
      if (questions[step].options[userAnswers[step]].isCorrect) {
        correctCount++;
      }
    });
    
    return {
      correct: correctCount,
      total: totalQuestions,
      percentage: Math.round((correctCount / totalQuestions) * 100)
    };
  };

  // Completed view
  if (completed) {
    const score = calculateScore();
    
    return (
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold mb-4 text-center">Case Study Complete!</h2>
        
        <div className="text-center mb-6">
          <div className="inline-block rounded-full bg-blue-100 p-6">
            <div className="text-3xl font-bold text-blue-700">{score.percentage}%</div>
            <div className="text-blue-600">{score.correct}/{score.total} correct</div>
          </div>
        </div>
        
        <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
          <h3 className="font-bold text-green-800 mb-2">Key Principles of End-of-Life Care</h3>
          <ul className="list-disc ml-6">
            <li>Focus on symptom management and comfort</li>
            <li>Provide holistic care addressing physical, emotional, social, and spiritual needs</li>
            <li>Support family members through education and validation</li>
            <li>Respect patient's expressed wishes</li>
            <li>Use a proactive approach to pain management</li>
          </ul>
        </div>
        
        <div className="text-center">
          <button
            onClick={resetActivity}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
          >
            Restart Case Study
          </button>
        </div>
      </div>
    );
  }

  // Main question view
  const currentQuestion = questions[currentStep];

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold mb-2">{title}</h2>
      
      <div className="bg-gray-50 p-4 rounded-lg mb-6">
        <p>{description}</p>
      </div>
      
      <div className="mb-6">
        <div className="flex items-center mb-4">
          <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-3">
            {currentStep + 1}
          </div>
          <h3 className="text-xl font-bold">{currentQuestion.text}</h3>
        </div>
        
        <div className="space-y-3 mb-6">
          {currentQuestion.options.map((option, index) => (
            <div 
              key={index}
              className={`p-4 border rounded-lg cursor-pointer transition ${
                userAnswers[currentStep] === index 
                  ? 'bg-blue-100 border-blue-500' 
                  : 'border-gray-300 hover:bg-gray-50'
              }`}
              onClick={() => handleOptionSelect(index)}
            >
              <div className="flex items-center">
                <div className={`w-5 h-5 rounded-full border flex items-center justify-center mr-3 ${
                  userAnswers[currentStep] === index 
                    ? 'bg-blue-600 border-blue-600' 
                    : 'border-gray-400'
                }`}>
                  {userAnswers[currentStep] === index && (
                    <div className="w-2 h-2 rounded-full bg-white"></div>
                  )}
                </div>
                <span>{option.text}</span>
              </div>
            </div>
          ))}
        </div>
        
        {showFeedback && (
          <div className={`p-4 rounded-lg mb-6 ${
            isCurrentAnswerCorrect() 
              ? 'bg-green-100 border border-green-400 text-green-700' 
              : 'bg-red-100 border border-red-400 text-red-700'
          }`}>
            <p>{isCurrentAnswerCorrect() 
                ? currentQuestion.feedback.correct 
                : currentQuestion.feedback.incorrect}
            </p>
          </div>
        )}
        
        <div className="flex justify-between">
          {!showFeedback ? (
            <button
              onClick={handleSubmit}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
            >
              Submit
            </button>
          ) : (
            <button
              onClick={handleNext}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
            >
              {currentStep < questions.length - 1 ? 'Next Question' : 'Complete Case Study'}
            </button>
          )}
        </div>
      </div>
      
      <div className="mt-6 flex items-center justify-center space-x-2">
        {questions.map((_, index) => (
          <div 
            key={index} 
            className={`w-3 h-3 rounded-full ${currentStep === index ? 'bg-blue-600' : 'bg-gray-300'}`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default EndOfLifeCaseStudy;