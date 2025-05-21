import React, { useState } from "react";
import {
  Eye,
  ChevronDown,
  ChevronUp,
  AlertTriangle,
  CheckCircle,
  X,
} from "lucide-react";

const MedicationReviewActivity = ({ onComplete }) => {
  const [step, setStep] = useState(0);
  const [expandedMed, setExpandedMed] = useState(null);
  const [userSelections, setUserSelections] = useState({
    inappropriateMeds: [],
    interactions: [],
    recommendations: [],
  });
  const [feedback, setFeedback] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [completed, setCompleted] = useState(false);

  const patientData = {
    name: "Mrs. Eleanor Johnson",
    age: 78,
    weight: "62 kg",
    diagnoses: [
      "Hypertension",
      "Type 2 Diabetes",
      "Osteoarthritis",
      "Insomnia",
    ],
    allergies: ["Penicillin", "Sulfa drugs"],
    renal: "eGFR 45 mL/min (Stage 3A CKD)",
    hepatic: "Normal liver function",

    medications: [
      {
        id: 1,
        name: "Lisinopril",
        category: "ACE Inhibitor",
        dose: "10 mg",
        frequency: "Daily",
        purpose: "Hypertension",
        beers: false,
        renalConcern: true,
        notes:
          "Appropriate for hypertension, but dose may need adjustment due to reduced renal function.",
      },
      {
        id: 2,
        name: "Metformin",
        category: "Biguanide",
        dose: "1000 mg",
        frequency: "Twice daily",
        purpose: "Diabetes",
        beers: false,
        renalConcern: true,
        notes:
          "Appropriate for diabetes, but dose is high given patient's reduced renal function.",
      },
      {
        id: 3,
        name: "Naproxen",
        category: "NSAID",
        dose: "500 mg",
        frequency: "Twice daily as needed",
        purpose: "Osteoarthritis pain",
        beers: true,
        renalConcern: true,
        interactions: [1, 5],
        notes:
          "Beers Criteria: Long-term NSAID use in older adults increases risk of GI bleeding and renal injury. Also interacts with ACE inhibitors and increases bleeding risk with aspirin.",
      },
      {
        id: 4,
        name: "Diphenhydramine",
        category: "Antihistamine",
        dose: "50 mg",
        frequency: "At bedtime as needed",
        purpose: "Insomnia",
        beers: true,
        interactions: [],
        notes:
          "Beers Criteria: Strong anticholinergic effects, increased risk of confusion, dry mouth, constipation, and urinary retention in older adults.",
      },
      {
        id: 5,
        name: "Aspirin",
        category: "Antiplatelet",
        dose: "81 mg",
        frequency: "Daily",
        purpose: "Cardiovascular prevention",
        beers: false,
        interactions: [3],
        notes:
          "Appropriate for cardiovascular prevention, but increases bleeding risk when combined with NSAIDs.",
      },
      {
        id: 6,
        name: "Glipizide",
        category: "Sulfonylurea",
        dose: "5 mg",
        frequency: "Daily before breakfast",
        purpose: "Diabetes",
        beers: false,
        notes:
          "Appropriate for diabetes, but increases risk of hypoglycemia in older adults. Consider monitoring closely.",
      },
    ],

    recommendationOptions: [
      {
        id: 1,
        text: "Discontinue naproxen and replace with acetaminophen for osteoarthritis pain",
        isCorrect: true,
        explanation:
          "Naproxen (NSAID) is on the Beers Criteria list for older adults due to increased risk of GI bleeding, especially with reduced renal function and aspirin use. Acetaminophen is a safer alternative for pain management.",
      },
      {
        id: 2,
        text: "Discontinue diphenhydramine and consider non-pharmacological sleep interventions or low-dose trazodone",
        isCorrect: true,
        explanation:
          "Diphenhydramine is on the Beers Criteria due to strong anticholinergic effects and increased risk of confusion in older adults. Non-pharmacological interventions or alternatives with fewer side effects are preferred.",
      },
      {
        id: 3,
        text: "Reduce metformin dose to 500mg twice daily due to reduced renal function",
        isCorrect: true,
        explanation:
          "Metformin dose should be adjusted in patients with reduced renal function (eGFR 45 mL/min). A lower dose reduces the risk of lactic acidosis while maintaining glycemic control.",
      },
      {
        id: 4,
        text: "Discontinue lisinopril due to renal concerns",
        isCorrect: false,
        explanation:
          "While dose adjustment may be needed, ACE inhibitors like lisinopril provide important cardio and renoprotective benefits in patients with diabetes and hypertension. Complete discontinuation is not the first approach.",
      },
      {
        id: 5,
        text: "Increase aspirin to 325mg daily for better cardiovascular protection",
        isCorrect: false,
        explanation:
          "Low-dose aspirin (81mg) is appropriate for cardiovascular prevention in high-risk older adults. Increasing the dose would unnecessarily increase bleeding risk without proven additional benefit.",
      },
      {
        id: 6,
        text: "Switch glipizide to a DPP-4 inhibitor to reduce hypoglycemia risk",
        isCorrect: true,
        explanation:
          "Sulfonylureas like glipizide carry an increased risk of hypoglycemia in older adults. DPP-4 inhibitors provide similar efficacy with lower hypoglycemia risk in the elderly population.",
      },
    ],
  };

  const handleMedToggle = (id) => {
    setExpandedMed(expandedMed === id ? null : id);
  };

  const handleSelection = (category, id) => {
    setUserSelections((prev) => {
      const updated = { ...prev };
      if (updated[category].includes(id)) {
        updated[category] = updated[category].filter((item) => item !== id);
      } else {
        updated[category] = [...updated[category], id];
      }
      return updated;
    });
  };

  const handleSubmit = () => {
    // Evaluate inappropriateMeds selection
    const correctInappropriateMeds = [3, 4]; // Naproxen and Diphenhydramine
    const userInappropriateMeds = userSelections.inappropriateMeds;

    const allCorrectInappropriateMedsSelected = correctInappropriateMeds.every(
      (id) => userInappropriateMeds.includes(id)
    );
    const noIncorrectInappropriateMedsSelected = userInappropriateMeds.every(
      (id) => correctInappropriateMeds.includes(id)
    );

    // Evaluate interactions selection
    const correctInteractions = [
      [1, 3],
      [3, 5],
    ]; // Lisinopril-Naproxen and Naproxen-Aspirin
    const userInteractions = userSelections.interactions.map((pair) =>
      pair
        .split("-")
        .map(Number)
        .sort((a, b) => a - b)
    );

    const allCorrectInteractionsSelected = correctInteractions.every((pair) =>
      userInteractions.some(
        (userPair) => userPair[0] === pair[0] && userPair[1] === pair[1]
      )
    );

    const noIncorrectInteractionsSelected = userInteractions.every((userPair) =>
      correctInteractions.some(
        (pair) => userPair[0] === pair[0] && userPair[1] === pair[1]
      )
    );

    // Evaluate recommendations selection
    const correctRecommendations = [1, 2, 3, 6]; // IDs of correct recommendations
    const userRecommendations = userSelections.recommendations;

    const recommendationsScore = userRecommendations.filter((id) =>
      correctRecommendations.includes(id)
    ).length;
    const incorrectRecommendationsSelected = userRecommendations.filter(
      (id) => !correctRecommendations.includes(id)
    ).length;

    // Calculate overall score
    const inappropriateMedsScore =
      allCorrectInappropriateMedsSelected &&
      noIncorrectInappropriateMedsSelected
        ? 100
        : (userInappropriateMeds.filter((id) =>
            correctInappropriateMeds.includes(id)
          ).length /
            correctInappropriateMeds.length) *
          100;

    const interactionsScore =
      allCorrectInteractionsSelected && noIncorrectInteractionsSelected
        ? 100
        : (userInteractions.filter((userPair) =>
            correctInteractions.some(
              (pair) => userPair[0] === pair[0] && userPair[1] === pair[1]
            )
          ).length /
            correctInteractions.length) *
          100;

    const recommendationsQuality =
      (recommendationsScore / correctRecommendations.length) * 100 -
      incorrectRecommendationsSelected * 25;
    const recommendationsScoreAdjusted = Math.max(0, recommendationsQuality);

    const overallScore =
      (inappropriateMedsScore +
        interactionsScore +
        recommendationsScoreAdjusted) /
      3;

    // Prepare feedback
    setFeedback({
      inappropriateMeds: {
        score: inappropriateMedsScore,
        correct: userInappropriateMeds.filter((id) =>
          correctInappropriateMeds.includes(id)
        ),
        incorrect: userInappropriateMeds.filter(
          (id) => !correctInappropriateMeds.includes(id)
        ),
        missed: correctInappropriateMeds.filter(
          (id) => !userInappropriateMeds.includes(id)
        ),
      },
      interactions: {
        score: interactionsScore,
        correct: userInteractions.filter((userPair) =>
          correctInteractions.some(
            (pair) => userPair[0] === pair[0] && userPair[1] === pair[1]
          )
        ),
        incorrect: userInteractions.filter(
          (userPair) =>
            !correctInteractions.some(
              (pair) => userPair[0] === pair[0] && userPair[1] === pair[1]
            )
        ),
        missed: correctInteractions.filter(
          (pair) =>
            !userInteractions.some(
              (userPair) => userPair[0] === pair[0] && userPair[1] === pair[1]
            )
        ),
      },
      recommendations: {
        score: recommendationsScoreAdjusted,
        correct: userRecommendations.filter((id) =>
          correctRecommendations.includes(id)
        ),
        incorrect: userRecommendations.filter(
          (id) => !correctRecommendations.includes(id)
        ),
        missed: correctRecommendations.filter(
          (id) => !userRecommendations.includes(id)
        ),
      },
      overall: overallScore,
    });

    setShowResults(true);
  };

  const handleNext = () => {
    if (step < 2) {
      setStep(step + 1);
    } else {
      setShowResults(true);
    }
  };

  const handleComplete = () => {
    setCompleted(true);
    onComplete && onComplete();
  };

  const resetActivity = () => {
    setStep(0);
    setExpandedMed(null);
    setUserSelections({
      inappropriateMeds: [],
      interactions: [],
      recommendations: [],
    });
    setFeedback({});
    setShowResults(false);
    setCompleted(false);
  };

  const renderStepContent = () => {
    switch (step) {
      case 0:
        return (
          <div>
            <h3 className="text-xl font-bold mb-4">
              Step 1: Identify Potentially Inappropriate Medications
            </h3>
            <p className="mb-4">
              Review the medication list and identify medications that are
              potentially inappropriate for older adults based on Beers Criteria
              or other geriatric prescribing concerns.
            </p>

            <div className="mb-6">
              {patientData.medications.map((med) => (
                <div
                  key={med.id}
                  className="border rounded-lg mb-3 overflow-hidden"
                >
                  <div
                    className={`p-4 cursor-pointer flex justify-between items-center ${
                      expandedMed === med.id ? "bg-blue-50" : "bg-white"
                    }`}
                    onClick={() => handleMedToggle(med.id)}
                  >
                    <div className="flex items-center">
                      <div
                        className={`mr-3 w-5 h-5 rounded border flex items-center justify-center ${
                          userSelections.inappropriateMeds.includes(med.id)
                            ? "bg-blue-600 border-blue-600"
                            : "border-gray-400"
                        }`}
                        onClick={(e) => {
                          e.stopPropagation();
                          handleSelection("inappropriateMeds", med.id);
                        }}
                      >
                        {userSelections.inappropriateMeds.includes(med.id) && (
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
                      <div>
                        <div className="font-bold">
                          {med.name} {med.dose}
                        </div>
                        <div className="text-sm text-gray-600">
                          {med.frequency} | {med.purpose}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      {med.beers && (
                        <span className="text-red-600 mr-2 text-sm flex items-center">
                          <AlertTriangle size={16} className="mr-1" />
                          Beers
                        </span>
                      )}
                      {med.renalConcern && (
                        <span className="text-amber-600 mr-2 text-sm flex items-center">
                          <AlertTriangle size={16} className="mr-1" />
                          Renal
                        </span>
                      )}
                      {expandedMed === med.id ? (
                        <ChevronUp size={20} />
                      ) : (
                        <ChevronDown size={20} />
                      )}
                    </div>
                  </div>
                  {expandedMed === med.id && (
                    <div className="p-4 bg-gray-50 border-t">
                      <p className="text-sm mb-2">
                        <span className="font-semibold">Category:</span>{" "}
                        {med.category}
                      </p>
                      <p className="text-sm">{med.notes}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <button
              onClick={handleNext}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
            >
              Next Step
            </button>
          </div>
        );

      case 1:
        return (
          <div>
            <h3 className="text-xl font-bold mb-4">
              Step 2: Identify Potential Drug Interactions
            </h3>
            <p className="mb-4">
              Select pairs of medications that may interact with each other.
            </p>

            <div className="mb-6 grid grid-cols-1 md:grid-cols-2 gap-4">
              {patientData.medications.flatMap((med1, index1) =>
                patientData.medications.slice(index1 + 1).map((med2) => {
                  const interactionKey = `${med1.id}-${med2.id}`;
                  const hasInteraction =
                    med1.interactions?.includes(med2.id) ||
                    med2.interactions?.includes(med1.id);

                  return (
                    <div
                      key={interactionKey}
                      className={`p-4 border rounded-lg cursor-pointer transition ${
                        userSelections.interactions.includes(interactionKey)
                          ? "bg-blue-100 border-blue-500"
                          : hasInteraction
                          ? "border-yellow-300 bg-yellow-50"
                          : "border-gray-300 hover:bg-gray-50"
                      }`}
                      onClick={() =>
                        handleSelection("interactions", interactionKey)
                      }
                    >
                      <div className="flex items-center">
                        <div
                          className={`mr-3 w-5 h-5 rounded border flex items-center justify-center ${
                            userSelections.interactions.includes(interactionKey)
                              ? "bg-blue-600 border-blue-600"
                              : "border-gray-400"
                          }`}
                        >
                          {userSelections.interactions.includes(
                            interactionKey
                          ) && (
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
                        <div>
                          <div className="font-semibold">
                            {med1.name} + {med2.name}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })
              )}
            </div>

            <button
              onClick={handleNext}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
            >
              Next Step
            </button>
          </div>
        );

      case 2:
        return (
          <div>
            <h3 className="text-xl font-bold mb-4">
              Step 3: Make Recommendations
            </h3>
            <p className="mb-4">
              Select appropriate recommendations for medication management in
              this older adult.
            </p>

            <div className="mb-6 space-y-3">
              {patientData.recommendationOptions.map((rec) => (
                <div
                  key={rec.id}
                  className={`p-4 border rounded-lg cursor-pointer transition ${
                    userSelections.recommendations.includes(rec.id)
                      ? "bg-blue-100 border-blue-500"
                      : "border-gray-300 hover:bg-gray-50"
                  }`}
                  onClick={() => handleSelection("recommendations", rec.id)}
                >
                  <div className="flex items-center">
                    <div
                      className={`mr-3 w-5 h-5 rounded border flex items-center justify-center ${
                        userSelections.recommendations.includes(rec.id)
                          ? "bg-blue-600 border-blue-600"
                          : "border-gray-400"
                      }`}
                    >
                      {userSelections.recommendations.includes(rec.id) && (
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
                    <div>
                      <div className="font-semibold">{rec.text}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={handleSubmit}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
            >
              Submit Review
            </button>
          </div>
        );

      default:
        return null;
    }
  };

  const renderResults = () => {
    return (
      <div>
        <h2 className="text-2xl font-bold mb-6 text-center">
          Medication Review Results
        </h2>

        <div className="text-center mb-8">
          <div className="inline-block rounded-full bg-blue-100 p-6 mb-3">
            <div className="text-3xl font-bold text-blue-700">
              {Math.round(feedback.overall)}%
            </div>
          </div>
          <p className="text-lg">
            {feedback.overall >= 80
              ? "Excellent medication review!"
              : feedback.overall >= 60
              ? "Good medication review with some areas for improvement."
              : "This is a challenging area. Consider reviewing medication management principles for older adults."}
          </p>
        </div>

        <div className="space-y-6 mb-8">
          {/* Inappropriate Medications Feedback */}
          <div className="border rounded-lg overflow-hidden">
            <div className="bg-gray-100 p-4 flex justify-between items-center">
              <h3 className="font-bold">
                Potentially Inappropriate Medications
              </h3>
              <div className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded">
                Score: {Math.round(feedback.inappropriateMeds.score)}%
              </div>
            </div>
            <div className="p-4">
              {feedback.inappropriateMeds.correct.length > 0 && (
                <div className="mb-3">
                  <p className="text-green-600 font-semibold mb-1 flex items-center">
                    <CheckCircle size={16} className="mr-1" /> Correctly
                    identified:
                  </p>
                  <ul className="list-disc ml-6">
                    {feedback.inappropriateMeds.correct.map((id) => {
                      const med = patientData.medications.find(
                        (m) => m.id === id
                      );
                      return (
                        <li key={id}>
                          {med.name} (
                          {med.beers ? "Beers Criteria" : "Renal concern"})
                        </li>
                      );
                    })}
                  </ul>
                </div>
              )}

              {feedback.inappropriateMeds.incorrect.length > 0 && (
                <div className="mb-3">
                  <p className="text-red-600 font-semibold mb-1 flex items-center">
                    <X size={16} className="mr-1" /> Incorrectly identified:
                  </p>
                  <ul className="list-disc ml-6">
                    {feedback.inappropriateMeds.incorrect.map((id) => {
                      const med = patientData.medications.find(
                        (m) => m.id === id
                      );
                      return (
                        <li key={id}>
                          {med.name} (Appropriate with monitoring)
                        </li>
                      );
                    })}
                  </ul>
                </div>
              )}

              {feedback.inappropriateMeds.missed.length > 0 && (
                <div>
                  <p className="text-amber-600 font-semibold mb-1 flex items-center">
                    <AlertTriangle size={16} className="mr-1" /> Missed:
                  </p>
                  <ul className="list-disc ml-6">
                    {feedback.inappropriateMeds.missed.map((id) => {
                      const med = patientData.medications.find(
                        (m) => m.id === id
                      );
                      return (
                        <li key={id}>
                          {med.name} (
                          {med.beers ? "Beers Criteria" : "Renal concern"})
                        </li>
                      );
                    })}
                  </ul>
                </div>
              )}
            </div>
          </div>

          {/* Interactions Feedback */}
          <div className="border rounded-lg overflow-hidden">
            <div className="bg-gray-100 p-4 flex justify-between items-center">
              <h3 className="font-bold">Medication Interactions</h3>
              <div className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded">
                Score: {Math.round(feedback.interactions.score)}%
              </div>
            </div>
            <div className="p-4">
              {feedback.interactions.correct.length > 0 && (
                <div className="mb-3">
                  <p className="text-green-600 font-semibold mb-1 flex items-center">
                    <CheckCircle size={16} className="mr-1" /> Correctly
                    identified:
                  </p>
                  <ul className="list-disc ml-6">
                    {feedback.interactions.correct.map((pair, index) => {
                      const med1 = patientData.medications.find(
                        (m) => m.id === pair[0]
                      );
                      const med2 = patientData.medications.find(
                        (m) => m.id === pair[1]
                      );
                      return (
                        <li key={index}>
                          {med1.name} + {med2.name}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              )}

              {feedback.interactions.incorrect.length > 0 && (
                <div className="mb-3">
                  <p className="text-red-600 font-semibold mb-1 flex items-center">
                    <X size={16} className="mr-1" /> Incorrectly identified:
                  </p>
                  <ul className="list-disc ml-6">
                    {feedback.interactions.incorrect.map((pair, index) => {
                      const med1 = patientData.medications.find(
                        (m) => m.id === pair[0]
                      );
                      const med2 = patientData.medications.find(
                        (m) => m.id === pair[1]
                      );
                      return (
                        <li key={index}>
                          {med1.name} + {med2.name} (No significant interaction)
                        </li>
                      );
                    })}
                  </ul>
                </div>
              )}

              {feedback.interactions.missed.length > 0 && (
                <div>
                  <p className="text-amber-600 font-semibold mb-1 flex items-center">
                    <AlertTriangle size={16} className="mr-1" /> Missed:
                  </p>
                  <ul className="list-disc ml-6">
                    {feedback.interactions.missed.map((pair, index) => {
                      const med1 = patientData.medications.find(
                        (m) => m.id === pair[0]
                      );
                      const med2 = patientData.medications.find(
                        (m) => m.id === pair[1]
                      );
                      return (
                        <li key={index}>
                          {med1.name} + {med2.name}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              )}
            </div>
          </div>

          {/* Recommendations Feedback */}
          <div className="border rounded-lg overflow-hidden">
            <div className="bg-gray-100 p-4 flex justify-between items-center">
              <h3 className="font-bold">Recommendations</h3>
              <div className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded">
                Score: {Math.round(feedback.recommendations.score)}%
              </div>
            </div>
            <div className="p-4">
              {feedback.recommendations.correct.length > 0 && (
                <div className="mb-3">
                  <p className="text-green-600 font-semibold mb-1 flex items-center">
                    <CheckCircle size={16} className="mr-1" /> Appropriate
                    recommendations:
                  </p>
                  <ul className="list-disc ml-6">
                    {feedback.recommendations.correct.map((id) => {
                      const rec = patientData.recommendationOptions.find(
                        (r) => r.id === id
                      );
                      return (
                        <li key={id}>
                          <div>{rec.text}</div>
                          <div className="text-sm text-gray-600 mt-1">
                            {rec.explanation}
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              )}

              {feedback.recommendations.incorrect.length > 0 && (
                <div className="mb-3">
                  <p className="text-red-600 font-semibold mb-1 flex items-center">
                    <X size={16} className="mr-1" /> Inappropriate
                    recommendations:
                  </p>
                  <ul className="list-disc ml-6">
                    {feedback.recommendations.incorrect.map((id) => {
                      const rec = patientData.recommendationOptions.find(
                        (r) => r.id === id
                      );
                      return (
                        <li key={id}>
                          <div>{rec.text}</div>
                          <div className="text-sm text-gray-600 mt-1">
                            {rec.explanation}
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              )}

              {feedback.recommendations.missed.length > 0 && (
                <div>
                  <p className="text-amber-600 font-semibold mb-1 flex items-center">
                    <AlertTriangle size={16} className="mr-1" /> Missed
                    recommendations:
                  </p>
                  <ul className="list-disc ml-6">
                    {feedback.recommendations.missed.map((id) => {
                      const rec = patientData.recommendationOptions.find(
                        (r) => r.id === id
                      );
                      return (
                        <li key={id}>
                          <div>{rec.text}</div>
                          <div className="text-sm text-gray-600 mt-1">
                            {rec.explanation}
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-bold mb-3">
            Key Points for Medication Management in Older Adults
          </h3>
          <ul className="list-disc ml-6">
            <li>
              Consider age-related changes in pharmacokinetics and
              pharmacodynamics
            </li>
            <li>
              Monitor renal function and adjust medication doses accordingly
            </li>
            <li>
              Regularly review medications using tools like the Beers Criteria
            </li>
            <li>
              Consider drug-drug interactions, particularly with multiple
              chronic conditions
            </li>
            <li>
              Start with low doses and titrate slowly ("Start low, go slow")
            </li>
            <li>Prioritize non-pharmacological approaches when possible</li>
            <li>
              Consider deprescribing when benefits no longer outweigh risks
            </li>
          </ul>
        </div>

        <div className="text-center">
          <button
            onClick={handleComplete}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
          >
            Complete Activity
          </button>
        </div>
      </div>
    );
  };

  if (completed) {
    return (
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold mb-4 text-center">
          Activity Complete!
        </h2>

        <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
          <h3 className="font-bold text-green-800 mb-2">Practice Summary</h3>
          <p>
            You've completed the medication review activity focusing on
            polypharmacy in older adults. This exercise highlighted the
            importance of carefully assessing medication regimens for
            potentially inappropriate medications, drug interactions, and the
            need for adjustments based on age-related changes.
          </p>
        </div>

        <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 mb-6">
          <h3 className="font-bold text-blue-800 mb-2">Clinical Application</h3>
          <p>
            In your practice, routinely conduct medication reviews for older
            adults, especially those with:
          </p>
          <ul className="list-disc ml-6 mt-2">
            <li>Multiple chronic conditions</li>
            <li>Medications from multiple prescribers</li>
            <li>Reduced renal or hepatic function</li>
            <li>Recent falls or cognitive changes</li>
            <li>Hospital admissions or transitions of care</li>
          </ul>
        </div>

        <div className="text-center">
          <button
            onClick={resetActivity}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
          >
            Start New Review
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold mb-4">
        Medication Review: {patientData.name}
      </h2>

      <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 mb-6">
        <h3 className="font-semibold text-blue-800 mb-2">
          Patient Information
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <p>
            <span className="font-semibold">Age:</span> {patientData.age}
          </p>
          <p>
            <span className="font-semibold">Weight:</span> {patientData.weight}
          </p>
          <p>
            <span className="font-semibold">Renal Function:</span>{" "}
            {patientData.renal}
          </p>
          <p>
            <span className="font-semibold">Hepatic Function:</span>{" "}
            {patientData.hepatic}
          </p>
          <p className="md:col-span-2">
            <span className="font-semibold">Diagnoses:</span>{" "}
            {patientData.diagnoses.join(", ")}
          </p>
          <p className="md:col-span-2">
            <span className="font-semibold">Allergies:</span>{" "}
            {patientData.allergies.join(", ")}
          </p>
        </div>
      </div>

      {showResults ? renderResults() : renderStepContent()}

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
        <div
          className={`w-3 h-3 rounded-full ${
            showResults ? "bg-blue-600" : "bg-gray-300"
          }`}
        ></div>
      </div>
    </div>
  );
};

export default MedicationReviewActivity;
