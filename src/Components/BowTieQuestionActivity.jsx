import React, { useState } from "react";

const BowTieQuestionActivity = ({ onComplete }) => {
  const [step, setStep] = useState(0);
  const [selectedCondition, setSelectedCondition] = useState(null);
  const [selectedActions, setSelectedActions] = useState([]);
  const [selectedParameters, setSelectedParameters] = useState([]);
  const [showFeedback, setShowFeedback] = useState(false);
  const [completed, setCompleted] = useState(false);

  const caseData = {
    title: "Bowtie Question: Mr. Adams",
    description:
      "Mr. Adams is an 80-year-old resident in a long-term care facility. During morning rounds, you find him confused and restless. He was oriented to person, place, and time yesterday. His vital signs are: Temperature 100.2°F, HR 98, BP 138/84, RR 22. His urine appears dark and has a strong odor. He's pulling at his catheter and saying he needs to urinate. Lab work shows elevated WBC count.",

    potentialConditions: [
      { id: 0, text: "Delirium", isCorrect: true },
      { id: 1, text: "Dementia", isCorrect: false },
      { id: 2, text: "Stroke", isCorrect: false },
      { id: 3, text: "Urinary Tract Infection", isCorrect: true },
      { id: 4, text: "Medication side effect", isCorrect: false },
    ],

    nursingActions: [
      { id: 0, text: "Conduct neurological assessment", isCorrect: true },
      {
        id: 1,
        text: "Check medication list for recent changes",
        isCorrect: true,
      },
      { id: 2, text: "Obtain urine sample for analysis", isCorrect: true },
      { id: 3, text: "Administer antipyretic as ordered", isCorrect: true },
      { id: 4, text: "Order brain CT scan", isCorrect: false },
      { id: 5, text: "Apply physical restraints", isCorrect: false },
      { id: 6, text: "Notify provider about status change", isCorrect: true },
    ],

    monitoringParameters: [
      { id: 0, text: "Vital signs every 4 hours", isCorrect: true },
      { id: 1, text: "Mental status and orientation", isCorrect: true },
      { id: 2, text: "Intake and output", isCorrect: true },
      { id: 3, text: "Urine characteristics", isCorrect: true },
      { id: 4, text: "Sleep-wake cycle", isCorrect: true },
      { id: 5, text: "Blood glucose levels", isCorrect: false },
      { id: 6, text: "Daily weights", isCorrect: false },
    ],

    feedback: {
      condition: {
        correct:
          "Excellent! You've correctly identified that Mr. Adams is likely experiencing delirium with an underlying urinary tract infection. Delirium is characterized by acute confusion, and UTIs are a common cause of delirium in older adults.",
        incorrect:
          "Consider the acute onset of confusion, fever, and urinary symptoms. In older adults, UTIs often present with mental status changes rather than typical urinary symptoms. This presentation is more consistent with delirium (acute, fluctuating confusion) than dementia, which has a gradual onset.",
      },
      actions: {
        correct:
          "Great job selecting appropriate nursing actions! Neurological assessment, checking medications, obtaining urine sample, administering prescribed antipyretics, and notifying the provider are all appropriate actions for this situation.",
        partially:
          "You've selected some appropriate actions, but missed others. Remember that a neurological assessment is important to establish baseline mental status, and notifying the provider about acute changes is essential. Physical restraints should be avoided as they can worsen delirium.",
        incorrect:
          "Review the appropriate nursing actions for a patient with acute confusion and potential infection. Remember to assess, gather data (urine sample), manage symptoms (antipyretic), and communicate with the healthcare team. Restraints should be avoided as they can worsen delirium.",
      },
      parameters: {
        correct:
          "Excellent selection of monitoring parameters! Tracking vital signs, mental status, intake/output, urine characteristics, and sleep-wake cycle are all important for a patient with delirium and UTI.",
        partially:
          "You've identified some appropriate monitoring parameters, but missed others. For a patient with delirium and UTI, it's important to monitor vital signs, mental status changes, intake/output, urine characteristics, and sleep patterns.",
        incorrect:
          "For a patient with acute confusion and UTI, important monitoring parameters include vital signs (to track fever), mental status (to assess delirium), intake/output and urine characteristics (to monitor infection and hydration), and sleep-wake cycle (often disrupted in delirium).",
      },
    },
  };

  const handleConditionSelect = (id) => {
    setSelectedCondition(id);
  };

  const handleActionSelect = (id) => {
    setSelectedActions((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleParameterSelect = (id) => {
    setSelectedParameters((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const checkConditionAnswer = () => {
    const correctConditions = caseData.potentialConditions.filter(
      (condition) => condition.isCorrect
    );
    return correctConditions.some(
      (condition) => condition.id === selectedCondition
    );
  };

  const checkActionsAnswers = () => {
    const correctActions = caseData.nursingActions
      .filter((action) => action.isCorrect)
      .map((action) => action.id);
    const selectedCorrectActions = selectedActions.filter((id) =>
      correctActions.includes(id)
    );

    if (
      selectedCorrectActions.length === correctActions.length &&
      selectedActions.length === correctActions.length
    ) {
      return "correct";
    } else if (selectedCorrectActions.length > 0) {
      return "partially";
    } else {
      return "incorrect";
    }
  };

  const checkParametersAnswers = () => {
    const correctParameters = caseData.monitoringParameters
      .filter((param) => param.isCorrect)
      .map((param) => param.id);
    const selectedCorrectParameters = selectedParameters.filter((id) =>
      correctParameters.includes(id)
    );

    if (
      selectedCorrectParameters.length === correctParameters.length &&
      selectedParameters.length === correctParameters.length
    ) {
      return "correct";
    } else if (selectedCorrectParameters.length > 0) {
      return "partially";
    } else {
      return "incorrect";
    }
  };

  const handleSubmit = () => {
    if (step === 0 && selectedCondition !== null) {
      setShowFeedback(true);
    } else if (step === 1 && selectedActions.length > 0) {
      setShowFeedback(true);
    } else if (step === 2 && selectedParameters.length > 0) {
      setShowFeedback(true);
    } else {
      alert("Please make a selection before continuing.");
    }
  };

  const handleNext = () => {
    setShowFeedback(false);
    if (step < 2) {
      setStep(step + 1);
    } else {
      setCompleted(true);
      onComplete && onComplete();
    }
  };

  const resetActivity = () => {
    setStep(0);
    setSelectedCondition(null);
    setSelectedActions([]);
    setSelectedParameters([]);
    setShowFeedback(false);
    setCompleted(false);
  };

  const renderStep = () => {
    switch (step) {
      case 0:
        return (
          <div>
            <h3 className="text-xl font-bold mb-4">
              Step 1: Identify the Condition
            </h3>
            <p className="mb-4">
              Based on the assessment data, which condition is Mr. Adams most
              likely experiencing? (Select one)
            </p>

            <div className="space-y-2 mb-6">
              {caseData.potentialConditions.map((condition) => (
                <div
                  key={condition.id}
                  className={`p-3 border rounded-lg cursor-pointer transition ${
                    selectedCondition === condition.id
                      ? "bg-blue-100 border-blue-500"
                      : "border-gray-300 hover:bg-gray-50"
                  }`}
                  onClick={() => handleConditionSelect(condition.id)}
                >
                  <div className="flex items-center">
                    <div
                      className={`w-5 h-5 rounded-full border flex items-center justify-center mr-3 ${
                        selectedCondition === condition.id
                          ? "bg-blue-600 border-blue-600"
                          : "border-gray-400"
                      }`}
                    >
                      {selectedCondition === condition.id && (
                        <div className="w-2 h-2 rounded-full bg-white"></div>
                      )}
                    </div>
                    <span>{condition.text}</span>
                  </div>
                </div>
              ))}
            </div>

            {showFeedback && (
              <div
                className={`p-4 rounded-lg mb-6 ${
                  checkConditionAnswer()
                    ? "bg-green-100 border border-green-400 text-green-700"
                    : "bg-red-100 border border-red-400 text-red-700"
                }`}
              >
                <p>
                  {checkConditionAnswer()
                    ? caseData.feedback.condition.correct
                    : caseData.feedback.condition.incorrect}
                </p>
              </div>
            )}
          </div>
        );

      case 1:
        return (
          <div>
            <h3 className="text-xl font-bold mb-4">Step 2: Nursing Actions</h3>
            <p className="mb-4">
              What nursing actions would be appropriate for Mr. Adams? (Select
              all that apply)
            </p>

            <div className="space-y-2 mb-6">
              {caseData.nursingActions.map((action) => (
                <div
                  key={action.id}
                  className={`p-3 border rounded-lg cursor-pointer transition ${
                    selectedActions.includes(action.id)
                      ? "bg-blue-100 border-blue-500"
                      : "border-gray-300 hover:bg-gray-50"
                  }`}
                  onClick={() => handleActionSelect(action.id)}
                >
                  <div className="flex items-center">
                    <div
                      className={`w-5 h-5 rounded mr-3 border flex items-center justify-center ${
                        selectedActions.includes(action.id)
                          ? "bg-blue-600 border-blue-600"
                          : "border-gray-400"
                      }`}
                    >
                      {selectedActions.includes(action.id) && (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-3 w-3 text-white"
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
                    <span>{action.text}</span>
                  </div>
                </div>
              ))}
            </div>

            {showFeedback && (
              <div
                className={`p-4 rounded-lg mb-6 ${
                  checkActionsAnswers() === "correct"
                    ? "bg-green-100 border border-green-400 text-green-700"
                    : checkActionsAnswers() === "partially"
                    ? "bg-yellow-100 border border-yellow-400 text-yellow-700"
                    : "bg-red-100 border border-red-400 text-red-700"
                }`}
              >
                <p>{caseData.feedback.actions[checkActionsAnswers()]}</p>
              </div>
            )}
          </div>
        );

      case 2:
        return (
          <div>
            <h3 className="text-xl font-bold mb-4">
              Step 3: Monitoring Parameters
            </h3>
            <p className="mb-4">
              What parameters should be monitored for Mr. Adams? (Select all
              that apply)
            </p>

            <div className="space-y-2 mb-6">
              {caseData.monitoringParameters.map((parameter) => (
                <div
                  key={parameter.id}
                  className={`p-3 border rounded-lg cursor-pointer transition ${
                    selectedParameters.includes(parameter.id)
                      ? "bg-blue-100 border-blue-500"
                      : "border-gray-300 hover:bg-gray-50"
                  }`}
                  onClick={() => handleParameterSelect(parameter.id)}
                >
                  <div className="flex items-center">
                    <div
                      className={`w-5 h-5 rounded mr-3 border flex items-center justify-center ${
                        selectedParameters.includes(parameter.id)
                          ? "bg-blue-600 border-blue-600"
                          : "border-gray-400"
                      }`}
                    >
                      {selectedParameters.includes(parameter.id) && (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-3 w-3 text-white"
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
                    <span>{parameter.text}</span>
                  </div>
                </div>
              ))}
            </div>

            {showFeedback && (
              <div
                className={`p-4 rounded-lg mb-6 ${
                  checkParametersAnswers() === "correct"
                    ? "bg-green-100 border border-green-400 text-green-700"
                    : checkParametersAnswers() === "partially"
                    ? "bg-yellow-100 border border-yellow-400 text-yellow-700"
                    : "bg-red-100 border border-red-400 text-red-700"
                }`}
              >
                <p>{caseData.feedback.parameters[checkParametersAnswers()]}</p>
              </div>
            )}
          </div>
        );

      default:
        return null;
    }
  };

  if (completed) {
    return (
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold mb-4 text-center">
          Activity Complete!
        </h2>

        <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
          <h3 className="font-bold text-green-800 mb-2">Great Job!</h3>
          <p>
            You've completed the Bowtie Question activity. This type of question
            tests your ability to identify conditions, select appropriate
            nursing actions, and determine relevant monitoring parameters - all
            key components of clinical judgment.
          </p>
        </div>

        <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 mb-6">
          <h3 className="font-bold text-blue-800 mb-2">
            NCLEX Next Generation Application
          </h3>
          <p>
            The Next Generation NCLEX uses these question types to better assess
            clinical judgment. Remember:
          </p>
          <ul className="list-disc ml-6 mt-2">
            <li>
              Analyze the entire clinical scenario before selecting a condition
            </li>
            <li>
              Consider age-specific presentations - older adults often present
              atypically
            </li>
            <li>
              Select nursing actions that are within your scope of practice
            </li>
            <li>
              Choose monitoring parameters that directly relate to the
              identified condition
            </li>
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-bold mb-3">
            Key Takeaways for Gerontologic Nursing
          </h3>
          <ul className="list-disc ml-6">
            <li>
              UTIs in older adults often present with confusion rather than
              typical urinary symptoms
            </li>
            <li>
              Delirium has an acute onset and fluctuating course, unlike
              dementia
            </li>
            <li>
              Non-pharmacological interventions should be tried before
              restraints
            </li>
            <li>
              Regular monitoring of mental status is essential in older adults
              with acute conditions
            </li>
            <li>
              Communication with providers about status changes is critical
            </li>
          </ul>
        </div>

        <div className="text-center">
          <button
            onClick={resetActivity}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
          >
            Try Another Question
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold mb-2">{caseData.title}</h2>

      <div className="bg-gray-50 p-4 rounded-lg mb-6">
        <p>{caseData.description}</p>
      </div>

      <div className="mb-6">{renderStep()}</div>

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
            {step < 2 ? "Next Step" : "Complete Activity"}
          </button>
        )}
      </div>

      <div className="mt-6 flex items-center justify-center space-x-2">
        <div
          className={`w-3 h-3 rounded-full ${
            step === 0 ? "bg-blue-600" : "bg-gray-300"
          }`}
        ></div>
        <div
          className={`w-3 h-3 rounded-full ${
            step === 1 ? "bg-blue-600" : "bg-gray-300"
          }`}
        ></div>
        <div
          className={`w-3 h-3 rounded-full ${
            step === 2 ? "bg-blue-600" : "bg-gray-300"
          }`}
        ></div>
      </div>
    </div>
  );
};

export default BowTieQuestionActivity;
