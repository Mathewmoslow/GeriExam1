import React, { useState } from "react";

const ClinicalJudgmentActivity = ({ onComplete }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [userSelections, setUserSelections] = useState({
    recognizeCues: [],
    analyzeCues: [],
    prioritizeCues: [],
    solutions: [],
    actions: [],
    evaluateOutcomes: [],
  });
  const [feedback, setFeedback] = useState({});
  const [completed, setCompleted] = useState(false);

  const caseStudy = {
    title: "Clinical Judgment Scenario: Mrs. Parker",
    description:
      "Mrs. Parker is an 84-year-old female resident at a long-term care facility. She was recently started on a new antihypertensive medication. During morning rounds, you find her sitting on the floor beside her bed. She states, 'I got up to use the bathroom and felt very dizzy.' Her skin is pale and dry. Vital signs: BP 98/56 (baseline 142/86), HR 92, RR 18, Temp 98.6°F, O2 sat 96% on room air.",
    steps: [
      {
        name: "Recognize Cues",
        instructions:
          "Select all relevant cues from the scenario that require nursing attention:",
        options: [
          { text: "Found on floor", isCorrect: true },
          { text: "Reports dizziness", isCorrect: true },
          { text: "Recently started new antihypertensive", isCorrect: true },
          { text: "Pale and dry skin", isCorrect: true },
          { text: "BP lower than baseline", isCorrect: true },
          { text: "Temperature is 98.6°F", isCorrect: false },
          { text: "O2 saturation is 96%", isCorrect: false },
          { text: "Morning rounds", isCorrect: false },
        ],
        feedback: {
          correct:
            "You've correctly identified the key cues, including the fall, dizziness, new medication, skin status, and BP changes.",
          partially:
            "You've identified some important cues, but missed others. Remember to consider medication changes, vital sign changes, and physical assessment findings.",
          incorrect:
            "Review the scenario again. Focus on the patient's position, symptoms, medication changes, physical assessment, and vital sign deviations from baseline.",
        },
      },
      {
        name: "Analyze Cues",
        instructions: "What might these cues suggest? Select all that apply:",
        options: [
          { text: "Possible orthostatic hypotension", isCorrect: true },
          { text: "Medication side effect", isCorrect: true },
          { text: "Dehydration", isCorrect: true },
          { text: "Cardiac arrhythmia", isCorrect: false },
          { text: "Urinary tract infection", isCorrect: false },
          { text: "Normal age-related changes", isCorrect: false },
        ],
        feedback: {
          correct:
            "Excellent analysis! The symptoms point to orthostatic hypotension, possibly related to the new antihypertensive medication and potential dehydration.",
          partially:
            "You're on the right track, but missed some connections. Consider the relationship between the new medication, blood pressure changes, and reported symptoms.",
          incorrect:
            "Reconsider the relationship between antihypertensive medications, blood pressure readings, dizziness, and fall risk.",
        },
      },
      {
        name: "Prioritize Cues",
        instructions: "Rank your top three priorities in this scenario:",
        options: [
          {
            text: "Fall risk and patient safety",
            isCorrect: true,
            priority: 1,
          },
          { text: "Hypotension", isCorrect: true, priority: 2 },
          { text: "Medication management", isCorrect: true, priority: 3 },
          { text: "Hydration status", isCorrect: true, priority: 4 },
          { text: "Skin integrity", isCorrect: false, priority: 5 },
          { text: "Temperature regulation", isCorrect: false, priority: 6 },
        ],
        feedback: {
          correct:
            "Great prioritization! Patient safety, addressing the hypotension, and medication management are the top priorities.",
          partially:
            "Your priorities need some adjustment. Remember that immediate safety concerns come first, followed by addressing physiological abnormalities.",
          incorrect:
            "Reconsider your priorities. Think about what poses the most immediate risk to the patient's health and safety.",
        },
      },
      {
        name: "Solutions",
        instructions:
          "Select appropriate nursing interventions for this situation:",
        options: [
          {
            text: "Assist patient back to bed and assess for injuries",
            isCorrect: true,
          },
          {
            text: "Monitor vital signs, especially BP in lying, sitting, and standing positions",
            isCorrect: true,
          },
          {
            text: "Notify provider about hypotension and fall",
            isCorrect: true,
          },
          { text: "Implement fall precautions", isCorrect: true },
          { text: "Administer PRN pain medication", isCorrect: false },
          { text: "Restrict fluid intake", isCorrect: false },
          { text: "Apply oxygen via nasal cannula", isCorrect: false },
        ],
        feedback: {
          correct:
            "Excellent intervention choices! You've identified the need to address immediate safety, monitor vital signs, notify the provider, and prevent future falls.",
          partially:
            "Some of your interventions are appropriate, but others aren't indicated by the current situation. Focus on safety, monitoring, communication, and prevention.",
          incorrect:
            "Revisit the scenario and reconsider appropriate interventions for a patient who has fallen, has low blood pressure, and is on a new antihypertensive medication.",
        },
      },
      {
        name: "Actions",
        instructions:
          "Which specific actions would you take? Select all that apply:",
        options: [
          {
            text: "Perform a complete head-to-toe assessment to check for injuries",
            isCorrect: true,
          },
          {
            text: "Check orthostatic vitals (lying, sitting, standing BP and HR)",
            isCorrect: true,
          },
          {
            text: "Place the call light within reach and instruct to call for assistance",
            isCorrect: true,
          },
          { text: "Document the incident and interventions", isCorrect: true },
          {
            text: "Hold the antihypertensive medication without consulting provider",
            isCorrect: false,
          },
          { text: "Order a CT scan of the head", isCorrect: false },
          { text: "Encourage increased fluid intake", isCorrect: true },
        ],
        feedback: {
          correct:
            "Great specific actions! You've included assessment, monitoring, safety measures, documentation, and addressing hydration.",
          partially:
            "Some actions are appropriate, but reconsider whether you have the authority to make certain decisions or whether some actions aren't indicated.",
          incorrect:
            "Revisit the nursing process and consider which actions are within your scope and appropriate for this specific situation.",
        },
      },
      {
        name: "Evaluate Outcomes",
        instructions:
          "Which outcomes would indicate your interventions were effective? Select all that apply:",
        options: [
          { text: "Blood pressure returns toward baseline", isCorrect: true },
          { text: "No further falls occur", isCorrect: true },
          { text: "Patient uses call light for assistance", isCorrect: true },
          { text: "Provider adjusts medication regimen", isCorrect: true },
          { text: "Patient maintains normal temperature", isCorrect: false },
          { text: "Patient gains weight", isCorrect: false },
        ],
        feedback: {
          correct:
            "Excellent outcome selection! These outcomes directly relate to the identified problems and interventions.",
          partially:
            "Some outcomes are relevant, but others don't directly relate to the current situation and interventions.",
          incorrect:
            "Reconsider which outcomes would indicate improvement in the specific problems identified for this patient.",
        },
      },
    ],
  };

  const handleSelection = (index) => {
    const currentStepName = caseStudy.steps[currentStep].name
      .replace(/\s+/g, "")
      .toLowerCase();
    let newSelections = { ...userSelections };

    // Toggle selection
    if (newSelections[currentStepName].includes(index)) {
      newSelections[currentStepName] = newSelections[currentStepName].filter(
        (i) => i !== index
      );
    } else {
      newSelections[currentStepName] = [
        ...newSelections[currentStepName],
        index,
      ];
    }

    setUserSelections(newSelections);
  };

  const evaluateStep = () => {
    const currentStepData = caseStudy.steps[currentStep];
    const currentStepName = currentStepData.name
      .replace(/\s+/g, "")
      .toLowerCase();
    const selectedOptions = userSelections[currentStepName];

    // Count correct selections
    let correctSelections = 0;
    let incorrectSelections = 0;

    selectedOptions.forEach((index) => {
      if (currentStepData.options[index].isCorrect) {
        correctSelections++;
      } else {
        incorrectSelections++;
      }
    });

    // Count total correct options
    const totalCorrectOptions = currentStepData.options.filter(
      (option) => option.isCorrect
    ).length;

    // Determine feedback
    let feedbackType;
    if (
      correctSelections === totalCorrectOptions &&
      incorrectSelections === 0
    ) {
      feedbackType = "correct";
    } else if (correctSelections > 0) {
      feedbackType = "partially";
    } else {
      feedbackType = "incorrect";
    }

    const newFeedback = { ...feedback };
    newFeedback[currentStepName] = {
      type: feedbackType,
      message: currentStepData.feedback[feedbackType],
    };

    setFeedback(newFeedback);

    if (currentStep < caseStudy.steps.length - 1) {
      // Move to next step
      setTimeout(() => {
        setCurrentStep(currentStep + 1);
      }, 1500);
    } else {
      // Activity completed
      setCompleted(true);
      onComplete && onComplete();
    }
  };

  const resetActivity = () => {
    setCurrentStep(0);
    setUserSelections({
      recognizeCues: [],
      analyzeCues: [],
      prioritizeCues: [],
      solutions: [],
      actions: [],
      evaluateOutcomes: [],
    });
    setFeedback({});
    setCompleted(false);
  };

  const currentStepName = caseStudy.steps[currentStep].name
    .replace(/\s+/g, "")
    .toLowerCase();
  const currentFeedback = feedback[currentStepName];

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      {completed ? (
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Activity Complete!</h2>
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
            <p>
              You've completed the clinical judgment activity. This practice
              helps develop your ability to apply the clinical judgment process
              in gerontologic nursing.
            </p>
          </div>

          <h3 className="text-xl font-bold mb-4">Performance Summary</h3>

          <div className="space-y-4 text-left mb-6">
            {Object.keys(feedback).map((step, index) => (
              <div
                key={index}
                className={`p-4 rounded-lg ${
                  feedback[step].type === "correct"
                    ? "bg-green-50 border border-green-200"
                    : feedback[step].type === "partially"
                    ? "bg-yellow-50 border border-yellow-200"
                    : "bg-red-50 border border-red-200"
                }`}
              >
                <h4 className="font-bold mb-2">
                  {caseStudy.steps[index].name}
                </h4>
                <p>{feedback[step].message}</p>
              </div>
            ))}
          </div>

          <h3 className="text-xl font-bold mb-4">Key Takeaways</h3>
          <ul className="text-left list-disc ml-6 mb-6">
            <li>
              Clinical judgment requires systematic assessment of patient cues
            </li>
            <li>
              Age-related changes impact how conditions present in older adults
            </li>
            <li>
              Medication effects often present differently in older adults
            </li>
            <li>
              Fall risk is a significant concern requiring prompt intervention
            </li>
            <li>
              Communication with providers about medication effects is essential
            </li>
          </ul>

          <button
            onClick={resetActivity}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
          >
            Practice Again
          </button>
        </div>
      ) : (
        <div>
          <h2 className="text-2xl font-bold mb-2">{caseStudy.title}</h2>

          <div className="bg-gray-100 p-4 rounded-lg mb-6">
            <p>{caseStudy.description}</p>
          </div>

          <div className="mb-6">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-3">
                {currentStep + 1}
              </div>
              <h3 className="text-xl font-bold">
                {caseStudy.steps[currentStep].name}
              </h3>
            </div>

            <p className="mb-4">{caseStudy.steps[currentStep].instructions}</p>

            <div className="space-y-2 mb-6">
              {caseStudy.steps[currentStep].options.map((option, index) => (
                <div
                  key={index}
                  className={`p-3 border rounded-lg cursor-pointer transition ${
                    userSelections[currentStepName].includes(index)
                      ? "bg-blue-100 border-blue-500"
                      : "border-gray-300 hover:bg-gray-50"
                  }`}
                  onClick={() => handleSelection(index)}
                >
                  <div className="flex items-center">
                    <div
                      className={`w-6 h-6 mr-3 rounded-md border flex items-center justify-center ${
                        userSelections[currentStepName].includes(index)
                          ? "bg-blue-600 border-blue-600 text-white"
                          : "border-gray-400"
                      }`}
                    >
                      {userSelections[currentStepName].includes(index) && (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      )}
                    </div>
                    <span>{option.text}</span>
                  </div>
                </div>
              ))}
            </div>

            {currentFeedback && (
              <div
                className={`p-4 rounded-lg mb-6 ${
                  currentFeedback.type === "correct"
                    ? "bg-green-100 border border-green-400 text-green-700"
                    : currentFeedback.type === "partially"
                    ? "bg-yellow-100 border border-yellow-400 text-yellow-700"
                    : "bg-red-100 border border-red-400 text-red-700"
                }`}
              >
                <p>{currentFeedback.message}</p>
              </div>
            )}

            <button
              onClick={evaluateStep}
              disabled={
                userSelections[currentStepName].length === 0 || currentFeedback
              }
              className={`px-6 py-2 rounded-lg ${
                userSelections[currentStepName].length === 0 || currentFeedback
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "bg-blue-600 text-white hover:bg-blue-700"
              }`}
            >
              {currentFeedback ? `Proceeding to next step...` : `Submit`}
            </button>
          </div>

          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
            <h4 className="font-bold text-blue-800 mb-2">
              Clinical Judgment Tip
            </h4>
            <p className="text-blue-800">
              {currentStep === 0 &&
                "When recognizing cues, focus on the patient's physical state, vital signs that deviate from baseline, symptoms, and relevant risk factors."}
              {currentStep === 1 &&
                "When analyzing cues, consider how age-related changes might influence the presentation of symptoms and conditions."}
              {currentStep === 2 &&
                "When prioritizing, address immediate safety concerns first, followed by physiological needs, then psychosocial needs."}
              {currentStep === 3 &&
                "When generating solutions, consider evidence-based interventions appropriate for older adults."}
              {currentStep === 4 &&
                "When taking action, be clear, specific, and consider the patient's age and functional abilities."}
              {currentStep === 5 &&
                "When evaluating outcomes, consider reasonable expectations for older adults and focus on safety and function."}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ClinicalJudgmentActivity;
