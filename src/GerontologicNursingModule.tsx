import React, { useState } from "react";
import AgeRelatedChangesQuiz from "./components/AgeRelatedChangesQuiz";
import ClinicalJudgmentActivity from "./components/ClinicalJudgmentActivity";
import SkinAssessmentActivity from "./components/SkinAssessmentActivity";
import BowTieQuestionActivity from "./components/BowTieQuestionActivity";
import MedicationReviewActivity from "./components/MedicationReviewActivity";
import EndOfLifeCaseStudy from "./components/EndOfLifeCaseStudy";
import {
  ChevronRight,
  ChevronLeft,
  Book,
  Users,
  Activity,
  Brain,
  Heart,
  GripVertical,
  Thermometer,
  Droplet,
  Eye,
  HelpCircle,
  Check,
  X,
  Stethoscope,
} from "lucide-react";

const GerontologicNursingModule = () => {
  // State management
  const [currentModule, setCurrentModule] = useState(0);
  const [currentSubmodule, setCurrentSubmodule] = useState(0);
  const [showSidebar, setShowSidebar] = useState(true);
  const [progress, setProgress] = useState({
    module1: 0,
    module2: 0,
    module3: 0,
    module4: 0,
    module5: 0,
  });

  // Define component functions for interactive activities
  const AgeRelatedChangesQuiz = ({ onComplete }) => {
    // Quiz implementation
    return <div>Age-Related Changes Quiz</div>;
  };

  const ClinicalJudgmentActivity = ({ onComplete }) => {
    return <div>Clinical Judgment Activity</div>;
  };

  const EndOfLifeCaseStudy = ({ onComplete }) => {
    return <div>End of Life Case Study</div>;
  };

  const SkinAssessmentActivity = ({ onComplete }) => {
    return <div>Skin Assessment Activity</div>;
  };

  const FallRiskAssessment = ({ onComplete }) => {
    return <div>Fall Risk Assessment</div>;
  };

  const OrthostaticHypotensionActivity = ({ onComplete }) => {
    return <div>Orthostatic Hypotension Activity</div>;
  };

  const RespiratoryAssessmentActivity = ({ onComplete }) => {
    return <div>Respiratory Assessment Activity</div>;
  };

  const NutritionalAssessmentActivity = ({ onComplete }) => {
    return <div>Nutritional Assessment Activity</div>;
  };

  const UrinaryAssessmentActivity = ({ onComplete }) => {
    return <div>Urinary Assessment Activity</div>;
  };

  const SensoryAssessmentActivity = ({ onComplete }) => {
    return <div>Sensory Assessment Activity</div>;
  };

  const BowTieQuestionActivity = ({ onComplete }) => {
    return <div>Bowtie Question Activity</div>;
  };

  const GriefAssessmentActivity = ({ onComplete }) => {
    return <div>Grief Assessment Activity</div>;
  };

  const BowtiePracticeActivity = ({ onComplete }) => {
    return <div>Bowtie Practice Activity</div>;
  };

  const ComprehensiveCareActivity = ({ onComplete }) => {
    return <div>Comprehensive Care Activity</div>;
  };

  const MedicationReviewActivity = ({ onComplete }) => {
    return <div>Medication Review Activity</div>;
  };

  const FallPreventionActivity = ({ onComplete }) => {
    return <div>Fall Prevention Activity</div>;
  };

  // Define the modules structure
  const modules = [
    {
      id: "introduction",
      title: "Introduction",
      icon: <Book />,
      content: (
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-4">
            Gerontologic Nursing: Clinical Judgment in Practice
          </h2>
          <p className="mb-4">
            Welcome to this comprehensive learning module on clinical judgment
            in gerontologic nursing. By working through system-specific case
            studies, you will develop the critical thinking skills needed to:
          </p>

          <ul className="list-disc ml-8 mb-4">
            <li>Recognize key assessment cues in older adults</li>
            <li>Analyze findings in the context of age-related changes</li>
            <li>Prioritize nursing concerns appropriately</li>
            <li>Implement evidence-based solutions</li>
            <li>Take appropriate nursing actions</li>
            <li>Evaluate outcomes of care</li>
          </ul>

          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 mb-6">
            <h3 className="font-bold text-blue-800 mb-2">HESI HINT</h3>
            <p>
              The concept of aging is shifting from viewing older adults as
              frail and dependent to being able to engage in healthy living.
              Clinical judgment to differentiate the impact of illness from
              normal aging is essential. Nurses who care for adults aged 65 and
              older regard their health as good or excellent. The clinical
              judgment model differentiates the ability of an older person to
              perform activities of daily living (ADLs) is a more accurate
              measure of an older person's age than chronological age.
            </p>
          </div>

          <p className="mb-4">
            In this module, you will learn about the clinical judgment process,
            its application to gerontologic nursing, and how to apply it in
            clinical practice.
          </p>

          <p className="mb-4">
            Navigate through the modules using the sidebar menu or the
            navigation buttons below. Each module includes interactive
            activities, case studies, and knowledge checks to reinforce your
            learning.
          </p>

          <button
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 mt-4 flex items-center"
            onClick={() => {
              setCurrentModule(1);
              setCurrentSubmodule(0);
            }}
          >
            Get Started <ChevronRight className="ml-2" />
          </button>
        </div>
      ),
      submodules: [],
    },
    {
      id: "foundations",
      title: "Foundations of Gerontologic Nursing",
      icon: <Users />,
      content: null,
      submodules: [
        {
          id: "normal-vs-pathologic",
          title: "Normal Age-Related Changes vs. Pathologic Changes",
          content: (
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-4">
                Normal Age-Related Changes vs. Pathologic Changes
              </h2>

              <div className="bg-amber-50 p-4 rounded-lg border border-amber-200 mb-6">
                <h3 className="font-bold text-amber-800 mb-2">Key Concepts</h3>
                <ul className="list-disc ml-8">
                  <li>
                    Short-term memory declines, whereas long-term memory stays
                    the same
                  </li>
                  <li>
                    Loss in compensatory reserve and decreased immune function
                  </li>
                  <li>
                    The heart's work increases in response to increased
                    peripheral resistance
                  </li>
                  <li>
                    Decreased glomerular filtration affects medication clearance
                  </li>
                  <li>
                    Age-related sensory changes occur gradually and often
                    unnoticed
                  </li>
                </ul>
              </div>

              <p className="mb-4">
                Age-related changes are not inherently pathological but increase
                vulnerability. Your role is to differentiate normal aging from
                disease processes and provide appropriate interventions
                accordingly.
              </p>

              <h3 className="text-xl font-bold mt-6 mb-3">Theories of Aging</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <h4 className="font-bold mb-2">Psychosocial Theories</h4>
                  <ul className="ml-4">
                    <li>
                      <span className="font-semibold">
                        Disengagement theory:
                      </span>{" "}
                      Progressive social disengagement occurs naturally with
                      aging
                    </li>
                    <li>
                      <span className="font-semibold">Activity theory:</span>{" "}
                      Successful aging requires a high level of activity
                    </li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <h4 className="font-bold mb-2">Biologic Theories</h4>
                  <ul className="ml-4">
                    <li>
                      <span className="font-semibold">Pacemaker theory:</span>{" "}
                      Programmed decline of nervous and endocrine components
                    </li>
                    <li>
                      <span className="font-semibold">Immunity theory:</span>{" "}
                      Accumulated damage and decline of immune function
                    </li>
                    <li>
                      <span className="font-semibold">
                        Wear-and-tear theory:
                      </span>{" "}
                      Harmful effects of free radicals
                    </li>
                  </ul>
                </div>
              </div>

              <h3 className="text-xl font-bold mt-6 mb-3">
                Developmental Theories
              </h3>

              <div className="mb-6">
                <h4 className="font-bold mb-2">A. Erik Erikson's theory:</h4>
                <p>
                  Theory identifies eight stages of developmental tasks
                  throughout the life span; the eighth stage is integrity versus
                  despair.
                </p>

                <h4 className="font-bold mt-4 mb-2">B. Maslow's theory:</h4>
                <p>
                  Maslow's hierarchy of needs ranks an individual's needs from
                  the most basic to the most complex. Maslow uses the terms{" "}
                  <em>
                    physiologic, safety and security, belonging, self-esteem,
                  </em>{" "}
                  and <em>self-actualization</em> needs to describe the process
                  that generally motivates individuals to move through life.
                </p>
              </div>

              <h3 className="text-xl font-bold mt-6 mb-3">
                Physiologic Changes
              </h3>

              <div className="mb-6">
                <h4 className="font-bold mb-2">
                  A. Aging affects every cell in every organ of the body, but
                  not at the same rate.
                </h4>
                <h4 className="font-bold mt-4 mb-2">
                  B. Three physiologic changes are clinically significant in
                  making older adults vulnerable to injury and disease:
                </h4>
                <ol className="list-decimal ml-8">
                  <li>Loss in compensatory reserve</li>
                  <li>
                    Progressive loss in the efficiency of the body to repair
                    damaged tissue
                  </li>
                  <li>Decreased functioning of the immune system processes</li>
                </ol>
                <h4 className="font-bold mt-4 mb-2">
                  C. Diseases in older adults do not always present with classic
                  signs and symptoms.
                </h4>
                <h4 className="font-bold mt-4 mb-2">
                  D. Physiologic changes increase more rapidly with increasing
                  age.
                </h4>
                <h4 className="font-bold mt-4 mb-2">
                  E. Aging changes are influenced by genetic makeup and
                  environment.
                </h4>
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-bold mb-4">
                  Interactive Activity: Clinical Judgment Scenario
                </h3>
                <ClinicalJudgmentActivity
                  onComplete={() => {
                    setProgress({
                      ...progress,
                      module1: Math.max(progress.module1, 50),
                    });
                  }}
                />
              </div>
            </div>
          ),
        },
        {
          id: "clinical-judgment-model",
          title: "The Clinical Judgment Model in Gerontologic Nursing",
          content: (
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-4">
                The Clinical Judgment Model in Gerontologic Nursing
              </h2>

              <p className="mb-6">
                The clinical judgment process follows these steps:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <h3 className="font-bold text-blue-800 mb-2">
                    1. Recognize Cues
                  </h3>
                  <p>Identify relevant patient data</p>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <h3 className="font-bold text-blue-800 mb-2">
                    2. Analyze Cues
                  </h3>
                  <p>
                    Interpret findings in context of the patient's age and
                    condition
                  </p>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <h3 className="font-bold text-blue-800 mb-2">
                    3. Prioritize Cues
                  </h3>
                  <p>Determine which findings require immediate attention</p>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <h3 className="font-bold text-blue-800 mb-2">4. Solutions</h3>
                  <p>Identify appropriate nursing interventions</p>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <h3 className="font-bold text-blue-800 mb-2">5. Actions</h3>
                  <p>Implement care plans</p>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <h3 className="font-bold text-blue-800 mb-2">
                    6. Evaluate Outcomes
                  </h3>
                  <p>Assess effectiveness of interventions</p>
                </div>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 mb-6">
                <h3 className="font-bold text-blue-800 mb-2">HESI HINT</h3>
                <p>
                  Clinical judgment measures may include the development of
                  preventive care such as exercises about good nutrition and
                  rehabilitation programs for the older adult. Keep in mind that
                  the type of rehabilitation programs should be tailored to the
                  age of the person as well as diagnosis of the chronic disease.
                </p>
              </div>

              <h3 className="text-xl font-bold mt-6 mb-3">
                Applying Clinical Judgment
              </h3>

              <p className="mb-4">
                When working with older adults, it is essential to apply the
                clinical judgment model in a systematic way. This involves not
                only recognizing typical age-related changes but also being
                aware of how pathologic conditions may present differently in
                older adults.
              </p>

              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 mb-6">
                <h4 className="font-bold mb-2">
                  Example: Mrs. Johnson, 82 years old
                </h4>
                <p className="mb-2">
                  Mrs. Johnson comes to the clinic complaining of fatigue. In a
                  younger adult, you might immediately look for anemia or
                  thyroid issues. In an older adult like Mrs. Johnson, your
                  clinical judgment should lead you to consider:
                </p>
                <ul className="list-disc ml-8">
                  <li>
                    Medication side effects or interactions (older adults often
                    take multiple medications)
                  </li>
                  <li>Sleep disturbances (common in older adults)</li>
                  <li>
                    Depression (often presents as somatic complaints in older
                    adults)
                  </li>
                  <li>
                    Heart failure (may present with fatigue rather than dyspnea
                    in older adults)
                  </li>
                  <li>
                    Dehydration (older adults have decreased thirst sensation)
                  </li>
                </ul>
              </div>

              <h3 className="text-xl font-bold mt-6 mb-3">
                Communication in Gerontologic Nursing
              </h3>

              <p className="mb-4">
                Effective communication is essential for accurate assessment and
                care of older adults:
              </p>

              <ul className="list-disc ml-8 mb-6">
                <li>
                  Use lower tone of voice when talking to hearing-impaired older
                  adults
                </li>
                <li>
                  Face clients directly to facilitate lip reading if needed
                </li>
                <li>
                  Speak clearly and avoid raising voice volume unnecessarily
                </li>
                <li>Allow extra time for processing and responding</li>
                <li>Minimize background noise during conversations</li>
                <li>
                  Use appropriate touch with permission to enhance communication
                </li>
              </ul>

              <div className="mt-8">
                <h3 className="text-xl font-bold mb-4">
                  Interactive Activity: Clinical Judgment Scenario
                </h3>
                <ClinicalJudgmentActivity
                  onComplete={() => {
                    setProgress({
                      ...progress,
                      module1: Math.max(progress.module1, 50),
                    });
                  }}
                />
              </div>
            </div>
          ),
        },
        {
          id: "end-of-life",
          title: "End-of-Life Considerations",
          content: (
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-4">
                End-of-Life Considerations
              </h2>

              <p className="mb-4">
                End-of-life care shifts care from invasive interventions aimed
                at prolonging life to supportive interventions that focus on
                control of symptoms. Insurance and hospice entities view the
                end-of-life stage as 6 months before death. However, a major
                problem with this definition is the difficulty in predicting the
                period of life.
              </p>

              <h3 className="text-xl font-bold mt-6 mb-3">
                Key Considerations
              </h3>

              <div className="mb-6">
                <h4 className="font-bold mb-2">Family Bereavement Support</h4>
                <p className="mb-4">
                  Family bereavement support is essential because survivors are
                  at an increased risk for illness or death. Normal responses to
                  grief can be physical, psychological, cognitive, and/or
                  spiritual. Uncomplicated grief is a dynamic, pervasive, and
                  highly individualized process. Individuals who are overwhelmed
                  or remain interminably in the state of grief without
                  progression through the mourning process to completion may be
                  experiencing complicated grief. When the nurse identifies
                  complicated grief, it should be reported so that a referral
                  for help can be made to the correct provider, such as a
                  bereavement counselor.
                </p>
              </div>

              <div className="mb-6">
                <h4 className="font-bold mb-2">Spiritual Distress</h4>
                <p className="mb-4">
                  Recognition of spiritual distress is important to help the
                  client come to terms with the end of life. Families and
                  caregivers also need support as they navigate this difficult
                  time. Spiritual needs may include:
                </p>
                <ul className="list-disc ml-8">
                  <li>Finding meaning in suffering</li>
                  <li>Maintaining hope</li>
                  <li>Reconciling relationships</li>
                  <li>Completing unfinished business</li>
                  <li>Achieving a peaceful death</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 mb-6">
                <h4 className="font-bold mb-2">
                  End-of-Life Care Important Areas
                </h4>
                <ul className="list-disc ml-8">
                  <li>
                    Pain, dyspnea, anxiety, GI symptoms, psychiatric symptoms
                  </li>
                  <li>Spirituality</li>
                  <li>Support for family caregivers</li>
                  <li>Family support during the bereavement period</li>
                </ul>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 mb-6">
                <h3 className="font-bold text-blue-800 mb-2">
                  Clinical Judgment Measures: Psychosocial Changes - Loss
                </h3>
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-blue-100">
                      <th className="border border-blue-200 p-2 text-left">
                        Clinical Judgment Measure
                      </th>
                      <th className="border border-blue-200 p-2 text-left">
                        Assessment Characteristics
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-blue-200 p-2 align-top font-semibold">
                        Recognize Cues
                      </td>
                      <td className="border border-blue-200 p-2">
                        <ul className="list-disc ml-4">
                          <li>Any loss or losses</li>
                          <li>
                            The older adult's day-to-day functioning (e.g.,
                            eating and sleeping and work or social patterns)
                          </li>
                          <li>Level of depression and suicide risk</li>
                          <li>
                            The support system in place to assist with loss
                          </li>
                          <li>
                            Ability to express emotions related to the loss or
                            losses
                          </li>
                          <li>
                            Any feelings of uselessness and nonparticipation in
                            social events
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-blue-200 p-2 align-top font-semibold">
                        Solutions
                      </td>
                      <td className="border border-blue-200 p-2">
                        <ul className="list-disc ml-4">
                          <li>
                            If needed, offer or refer to grief counseling or a
                            support group
                          </li>
                          <li>
                            Encourage activities that allow the individual to
                            use past coping strategies that will promote a
                            feeling of self-worth and increased self-esteem
                          </li>
                          <li>
                            Encourage the individual to share his or her
                            feelings
                          </li>
                          <li>
                            Encourage socialization with family peers and
                            reminiscing about significant life experiences
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-blue-200 p-2 align-top font-semibold">
                        Evaluate Outcomes
                      </td>
                      <td className="border border-blue-200 p-2">
                        <ul className="list-disc ml-4">
                          <li>Vital signs normal for age</li>
                          <li>GDS scores normal (no evidence of depression)</li>
                          <li>
                            ADLs normal for age (no evidence of changes in
                            eating or sleep patterns)
                          </li>
                        </ul>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-bold mb-4">
                  Case Study: End-of-Life Care
                </h3>
                <EndOfLifeCaseStudy
                  onComplete={() => {
                    setProgress({
                      ...progress,
                      module1: Math.max(progress.module1, 100),
                    });
                  }}
                />
              </div>
            </div>
          ),
        },
      ],
    },
    {
      id: "body-systems",
      title: "Body Systems and Clinical Judgment",
      icon: <Activity />,
      content: null,
      submodules: [
        {
          id: "integumentary",
          title: "Integumentary System",
          content: (
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-4">Integumentary System</h2>

              <h3 className="text-xl font-bold mb-3">Age-Related Changes:</h3>

              <ul className="list-disc ml-8 mb-6">
                <li>Skin dryness and tearing</li>
                <li>Decreased elasticity and thinning</li>
                <li>Brittle nails with changes in shape and color</li>
                <li>Increased risk for pressure injuries</li>
                <li>Vascular hyperplasia causes more varicosities</li>
                <li>
                  Increased appearance of "age spots" and/or "liver spots"
                </li>
                <li>Nails become brittle and thick</li>
              </ul>

              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 mb-6">
                <h3 className="font-bold text-blue-800 mb-2">HESI HINT</h3>
                <p>
                  The NCLEX will test your clinical judgment to differentiate
                  between normal and pathologic causes of skin and hair
                  conditions, for example the differences between seborrheic
                  keratosis and melanoma.
                </p>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 mb-6">
                <h3 className="font-bold text-blue-800 mb-2">
                  Clinical Judgment Measures: Integumentary System
                </h3>
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-blue-100">
                      <th className="border border-blue-200 p-2 text-left">
                        Clinical Judgment Measure
                      </th>
                      <th className="border border-blue-200 p-2 text-left">
                        Assessment Characteristics
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-blue-200 p-2 align-top font-semibold">
                        Recognize Cues
                      </td>
                      <td className="border border-blue-200 p-2">
                        <ul className="list-disc ml-4">
                          <li>Skin dryness and tears</li>
                          <li>
                            Nails for changes in shape, color, and brittleness
                          </li>
                          <li>Lesions to differentiate normal from abnormal</li>
                          <li>Bony prominences for signs of pressure ulcers</li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-blue-200 p-2 align-top font-semibold">
                        Analyze Cues
                      </td>
                      <td className="border border-blue-200 p-2">
                        <ul className="list-disc ml-4">
                          <li>
                            Determine types of skin (open wound, infection)
                          </li>
                          <li>
                            Potential skin integrity issues that impact
                            assessment
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-blue-200 p-2 align-top font-semibold">
                        Prioritize Cues
                      </td>
                      <td className="border border-blue-200 p-2">
                        <ul className="list-disc ml-4">
                          <li>Determine if a problem is emergent</li>
                          <li>
                            Determine wound scale measurement score (Braden's
                            scale 9–23, lower score = higher risk)
                          </li>
                          <li>
                            Determine the impact of the problem on the patient's
                            overall health status
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-blue-200 p-2 align-top font-semibold">
                        Solutions
                      </td>
                      <td className="border border-blue-200 p-2">
                        <ul className="list-disc ml-4">
                          <li>
                            Encourage the use of oils or lubricants on the skin
                            at least twice a day
                          </li>
                          <li>
                            Discourage the use of powder, which can be drying
                          </li>
                          <li>Teach to avoid overexposure to sunlight</li>
                          <li>
                            Encourage balanced nutrition and increased fluid
                            intake
                          </li>
                          <li>
                            Teach to maintain adequate humidity in the
                            environment
                          </li>
                          <li>Teach to avoid temperature extremes</li>
                          <li>Teach good foot care</li>
                          <li>
                            Observe bony prominences for signs of pressure
                          </li>
                          <li>
                            Teach that poor peripheral circulation may slow the
                            healing of foot and hand lesions
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-blue-200 p-2 align-top font-semibold">
                        Actions
                      </td>
                      <td className="border border-blue-200 p-2">
                        <ul className="list-disc ml-4">
                          <li>
                            Apply topical moisturizing non-allergic lubricant to
                            skin every morning and evening
                          </li>
                          <li>
                            Measure humidity in the room so that it is within
                            normal limits (between 30%–60%, Wolkoff, P. 2018)
                          </li>
                          <li>
                            Perform foot care and have patient demonstrate
                            understanding back to you
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-blue-200 p-2 align-top font-semibold">
                        Evaluate Outcomes
                      </td>
                      <td className="border border-blue-200 p-2">
                        <ul className="list-disc ml-4">
                          <li>
                            The overall status of the patient's skin has
                            improved from the first to the second visit
                            (improved skin turgor, no signs or symptoms of skin
                            tears or wounds)
                          </li>
                          <li>Height and weight is normal for age</li>
                        </ul>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-xl font-bold mt-6 mb-3">
                Case Study: Mrs. Chen, 82-year-old with Dry, Fragile Skin
              </h3>

              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 mb-6">
                <p className="mb-4">
                  Mrs. Chen, 82, has been admitted to your long-term care
                  facility. During assessment, you notice her skin is extremely
                  dry with several tears on her forearms. She mentions that "my
                  skin tears so easily these days."
                </p>

                <h4 className="font-bold mt-4 mb-2">
                  Clinical Judgment Process:
                </h4>

                <div className="mb-2">
                  <h5 className="font-semibold">Recognize Cues:</h5>
                  <ul className="list-disc ml-8">
                    <li>Dry, fragile skin with tears</li>
                    <li>Advanced age</li>
                    <li>
                      Potential for pressure ulcers due to decreased mobility
                    </li>
                  </ul>
                </div>

                <div className="mb-2">
                  <h5 className="font-semibold">Analyze Cues:</h5>
                  <ul className="list-disc ml-8">
                    <li>
                      Determine skin integrity issues that impact assessment
                    </li>
                    <li>
                      Evaluate environmental factors (humidity, temperature)
                    </li>
                    <li>Consider hydration status</li>
                  </ul>
                </div>

                <div className="mb-2">
                  <h5 className="font-semibold">Prioritize Cues:</h5>
                  <ul className="list-disc ml-8">
                    <li>
                      Determine if immediate intervention is needed for existing
                      tears
                    </li>
                    <li>Assess impact on overall health status</li>
                  </ul>
                </div>

                <div className="mb-2">
                  <h5 className="font-semibold">Solutions:</h5>
                  <ul className="list-disc ml-8">
                    <li>
                      Encourage use of oils/lubricants on skin twice daily
                    </li>
                    <li>Discourage use of powder (drying effect)</li>
                    <li>Teach about adequate hydration and humidity control</li>
                    <li>Implement gentle handling techniques</li>
                  </ul>
                </div>

                <div className="mb-2">
                  <h5 className="font-semibold">Actions:</h5>
                  <ul className="list-disc ml-8">
                    <li>
                      Apply hypoallergenic moisturizer morning and evening
                    </li>
                    <li>Adjust room humidity to 30-40%</li>
                    <li>Implement pressure relief measures</li>
                    <li>Perform comprehensive skin assessment</li>
                  </ul>
                </div>

                <div className="mb-2">
                  <h5 className="font-semibold">Evaluate Outcomes:</h5>
                  <ul className="list-disc ml-8">
                    <li>Monitor for improvement in skin tears</li>
                    <li>Document changes in skin integrity</li>
                    <li>Reassess in one week for improvement</li>
                  </ul>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-bold mb-4">
                  Interactive Activity: Skin Assessment
                </h3>
                <SkinAssessmentActivity
                  onComplete={() => {
                    setProgress({
                      ...progress,
                      module2: Math.max(progress.module2, 14),
                    });
                  }}
                />
              </div>
            </div>
          ),
        },
        {
          id: "musculoskeletal",
          title: "Musculoskeletal System",
          content: (
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-4">
                Musculoskeletal System
              </h2>

              <h3 className="text-xl font-bold mb-3">Age-Related Changes:</h3>

              <ul className="list-disc ml-8 mb-6">
                <li>
                  Bone loss beginning around age 40 (more common in women)
                </li>
                <li>Loss of bone calcium and muscle mass</li>
                <li>Shortened trunk due to thinning vertebral disks</li>
                <li>Decreased range of motion</li>
                <li>Bone mass decreases with increased body fat</li>
              </ul>

              <p className="mb-4">
                Age-related changes in the musculoskeletal system often have a
                significant impact on levels of mobility, which puts older
                adults at risk for falls and fractures.
              </p>

              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 mb-6">
                <h3 className="font-bold text-blue-800 mb-2">HESI HINT</h3>
                <p>
                  Clinical judgment differentials include impaired skin
                  integrity, decreased peripheral circulation, and a lack of
                  physical activity, all of which place the older adults at risk
                  for the development of pressure injuries.
                </p>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 mb-6">
                <h3 className="font-bold text-blue-800 mb-2">
                  Clinical Judgment Measures: Musculoskeletal System
                </h3>
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-blue-100">
                      <th className="border border-blue-200 p-2 text-left">
                        Clinical Judgment Measure
                      </th>
                      <th className="border border-blue-200 p-2 text-left">
                        Assessment Characteristics
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-blue-200 p-2 align-top font-semibold">
                        Recognize Cues
                      </td>
                      <td className="border border-blue-200 p-2">
                        <ul className="list-disc ml-4">
                          <li>Dietary intake of calcium and vitamin D</li>
                          <li>Weight, underweight or overweight</li>
                          <li>Height</li>
                          <li>
                            Lifestyle habits: inappropriate nutrition, smoking,
                            and inadequate exercise
                          </li>
                          <li>History of fractures</li>
                          <li>ROM</li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-blue-200 p-2 align-top font-semibold">
                        Analyze Cues
                      </td>
                      <td className="border border-blue-200 p-2">
                        <ul className="list-disc ml-4">
                          <li>Pain and chronic pain management strategies</li>
                          <li>Determine type of diet for adequate intake</li>
                          <li>Verify lifestyle habits (smoking, exercise)</li>
                          <li>
                            Ascertain ability to functionally move (ROM, walk
                            without limp or pain)
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-blue-200 p-2 align-top font-semibold">
                        Prioritize Cues
                      </td>
                      <td className="border border-blue-200 p-2">
                        <ul className="list-disc ml-4">
                          <li>
                            Determine risk factors for fractures (emergent
                            versus non-emergent)
                          </li>
                          <li>Clarify nutritional factors</li>
                          <li>Establish weight parameters</li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-blue-200 p-2 align-top font-semibold">
                        Solutions
                      </td>
                      <td className="border border-blue-200 p-2">
                        <ul className="list-disc ml-4">
                          <li>
                            Teach that adequate calcium intake may help lessen
                            osteoporotic changes
                          </li>
                          <li>
                            Establish muscle-strengthening program (small
                            weights, aquatic therapy)
                          </li>
                          <li>
                            Prevent accidents by ensuring a clutter-free, safe
                            environment
                          </li>
                          <li>
                            Provide adequate lighting day and night to prevent
                            falls
                          </li>
                          <li>
                            Teach clients not to back up but to turn around to
                            move in the direction they wish to go
                          </li>
                          <li>
                            Teach clients to walk looking straight ahead instead
                            of looking down at their feet to optimize balance
                          </li>
                          <li>
                            Encourage regular exercise inclusive of balance,
                            weight-bearing, and low-resistance training
                          </li>
                          <li>Teach to avoid excessive joint strain</li>
                          <li>
                            Teach that medications (diuretics and sedatives) may
                            contribute to falls
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-blue-200 p-2 align-top font-semibold">
                        Actions
                      </td>
                      <td className="border border-blue-200 p-2">
                        <ul className="list-disc ml-4">
                          <li>Provide patient with nutritionist appointment</li>
                          <li>
                            Communicate which exercise programs are available
                          </li>
                          <li>Enroll patient into fall prevention class</li>
                          <li>
                            Educate patient about healthy lifestyle (cessation
                            of smoking, overeating, immobility)
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-blue-200 p-2 align-top font-semibold">
                        Evaluate Outcomes
                      </td>
                      <td className="border border-blue-200 p-2">
                        <ul className="list-disc ml-4">
                          <li>
                            The overall status of the patient's musculoskeletal
                            system has improved from the first to the second
                            visit (improved balance, walking without cane, no
                            signs or symptoms of joint injuries)
                          </li>
                          <li>Weight is improved (loss or added)</li>
                        </ul>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-xl font-bold mt-6 mb-3">
                Case Study: Mr. Rodriguez, 78-year-old with Recent Fall
              </h3>

              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 mb-6">
                <p className="mb-4">
                  Mr. Rodriguez, 78, was recently admitted after experiencing a
                  fall at home. He has a history of osteoarthritis and takes
                  multiple medications. He expresses fear about falling again
                  and has been limiting his movement.
                </p>

                <h4 className="font-bold mt-4 mb-2">
                  Clinical Judgment Process:
                </h4>

                <div className="mb-2">
                  <h5 className="font-semibold">Recognize Cues:</h5>
                  <ul className="list-disc ml-8">
                    <li>History of falls</li>
                    <li>Musculoskeletal pain and decreased ROM</li>
                    <li>Fear-related activity restriction</li>
                    <li>Multiple medications</li>
                  </ul>
                </div>

                <div className="mb-2">
                  <h5 className="font-semibold">Analyze Cues:</h5>
                  <ul className="list-disc ml-8">
                    <li>
                      Determine ability to functionally move (ROM, walk without
                      pain)
                    </li>
                    <li>Assess for risk factors for future falls</li>
                    <li>Evaluate nutritional status (calcium, vitamin D)</li>
                  </ul>
                </div>

                <div className="mb-2">
                  <h5 className="font-semibold">Prioritize Cues:</h5>
                  <ul className="list-disc ml-8">
                    <li>Determine emergent versus non-emergent risk factors</li>
                    <li>Establish mobility baseline and goals</li>
                  </ul>
                </div>

                <div className="mb-2">
                  <h5 className="font-semibold">Solutions:</h5>
                  <ul className="list-disc ml-8">
                    <li>
                      Establish muscle-strengthening program with small weights
                    </li>
                    <li>
                      Create safe environment (adequate lighting, clear
                      pathways)
                    </li>
                    <li>
                      Teach proper body mechanics and fall prevention strategies
                    </li>
                    <li>Address fear through gradual confidence building</li>
                  </ul>
                </div>

                <div className="mb-2">
                  <h5 className="font-semibold">Actions:</h5>
                  <ul className="list-disc ml-8">
                    <li>Enroll patient in fall prevention class</li>
                    <li>Consult with nutritionist</li>
                    <li>Implement exercise program with physical therapy</li>
                    <li>Evaluate home for safety modifications</li>
                  </ul>
                </div>

                <div className="mb-2">
                  <h5 className="font-semibold">Evaluate Outcomes:</h5>
                  <ul className="list-disc ml-8">
                    <li>Monitor improvements in balance and strength</li>
                    <li>Document any pain reduction</li>
                    <li>Assess confidence in mobility</li>
                  </ul>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-bold mb-4">
                  Interactive Activity: Fall Risk Assessment
                </h3>
                <FallRiskAssessment
                  onComplete={() => {
                    setProgress({
                      ...progress,
                      module2: Math.max(progress.module2, 28),
                    });
                  }}
                />
              </div>
            </div>
          ),
        },
        {
          id: "cardiovascular",
          title: "Cardiovascular System",
          content: (
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-4">Cardiovascular System</h2>

              <h3 className="text-xl font-bold mb-3">Age-Related Changes:</h3>

              <ul className="list-disc ml-8 mb-6">
                <li>Increased systolic BP due to decreased elasticity</li>
                <li>Cardiac output decreases</li>
                <li>Decreased response to increased demands</li>
                <li>Diastolic murmurs more common (thickened valves)</li>
                <li>
                  Age-related changes predispose the older person to the
                  development of dysrhythmias and other cardiac problems
                </li>
                <li>
                  Cardiac output decreases as a result of a decrease in heart
                  rate and stroke volume
                </li>
                <li>
                  Cardiac output decreases because vessels lose elasticity; the
                  heart's contractility decreases in response to increased
                  demands
                </li>
                <li>
                  Diastolic murmurs are present in more than one-half of older
                  adults because the mitral and aortic valves become thick and
                  rigid
                </li>
              </ul>

              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 mb-6">
                <h3 className="font-bold text-blue-800 mb-2">HESI HINT</h3>
                <p>
                  Clinical judgment differentials for angina include myocardial
                  infarction, esophagitis or musculoskeletal disorders, all of
                  which must be investigated in older adults.
                </p>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 mb-6">
                <h3 className="font-bold text-blue-800 mb-2">
                  Clinical Judgment Measures: Cardiovascular System
                </h3>
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-blue-100">
                      <th className="border border-blue-200 p-2 text-left">
                        Clinical Judgment Measure
                      </th>
                      <th className="border border-blue-200 p-2 text-left">
                        Assessment Characteristics
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-blue-200 p-2 align-top font-semibold">
                        Recognize Cues
                      </td>
                      <td className="border border-blue-200 p-2">
                        <ul className="list-disc ml-4">
                          <li>BP and vital signs</li>
                          <li>
                            History of dizziness or blackouts with sudden
                            position change (orthostatic hypotension)
                          </li>
                          <li>Diuresis after lying down</li>
                          <li>Feelings of heart palpitations</li>
                          <li>
                            Angina
                            <ol className="ml-6 list-decimal">
                              <li>
                                Angina symptoms may be absent in older adults
                              </li>
                              <li>
                                They can also be confused with gastrointestinal
                                (GI) symptoms
                              </li>
                            </ol>
                          </li>
                          <li>
                            Swelling in hands and feet (rings and shoes have
                            become tight)
                          </li>
                          <li>Weight gain without changes in eating pattern</li>
                          <li>
                            Difficulty breathing at night (without elevation of
                            the head of the bed). Confusion and personality
                            changes can result from oxygen deficit
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-blue-200 p-2 align-top font-semibold">
                        Analyze Cues
                      </td>
                      <td className="border border-blue-200 p-2">
                        <ul className="list-disc ml-4">
                          <li>
                            BP and vital signs are consistent with age and
                            diagnosis of patient
                          </li>
                          <li>
                            Neuro status is stable (no dizziness, movement)
                          </li>
                          <li>
                            Breathing patterns are regular for age and diagnosis
                            of patient
                          </li>
                          <li>Mini-mental exam reliable for patient status</li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-blue-200 p-2 align-top font-semibold">
                        Prioritize Cues
                      </td>
                      <td className="border border-blue-200 p-2">
                        <ul className="list-disc ml-4">
                          <li>
                            Keep in mind any emergent issue related to airway,
                            breathing, or circulation (A, B, Cs)
                          </li>
                          <li>
                            Mentation intact measured by mini-mental exam
                            (confusion, speech, responses)
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-blue-200 p-2 align-top font-semibold">
                        Solutions
                      </td>
                      <td className="border border-blue-200 p-2">
                        <ul className="list-disc ml-4">
                          <li>
                            Monitor BP in lying, sitting, and standing positions
                          </li>
                          <li>
                            Encourage frequent rest periods to avoid fatigue
                          </li>
                          <li>Encourage regular, low-impact exercise</li>
                          <li>
                            Teach to change positions slowly to avoid falls and
                            injuries
                          </li>
                          <li>
                            Take apical and radial pulse; note deficits or
                            rhythm abnormalities
                          </li>
                          <li>
                            Teach to avoid extreme hot and cold because of
                            decreased peripheral sensation
                          </li>
                          <li>
                            Teach to avoid sitting with feet in a dependent
                            position
                          </li>
                          <li>Assess edema. Weigh daily if indicated</li>
                          <li>
                            Encourage strict adherence to medication regimen
                          </li>
                          <li>
                            Teach not to stop medications without prior approval
                            from the health care provider
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-blue-200 p-2 align-top font-semibold">
                        Actions
                      </td>
                      <td className="border border-blue-200 p-2">
                        <ul className="list-disc ml-4">
                          <li>
                            Check vital signs for the normalcy of the patient's
                            age
                          </li>
                          <li>List up-coming doctor appointments</li>
                          <li>
                            Evaluate patient's understanding of current cardiac
                            medications
                          </li>
                          <li>
                            Examine patient's ability to understand changes in
                            cardiac status (when to call 911, when to contact
                            doctor)
                          </li>
                          <li>
                            Reassess patient's overall ability to ambulate and
                            do routine ADLs
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-blue-200 p-2 align-top font-semibold">
                        Evaluate Outcomes
                      </td>
                      <td className="border border-blue-200 p-2">
                        <ul className="list-disc ml-4">
                          <li>
                            The patient's overall cardiac status is stable for
                            health condition
                          </li>
                          <li>
                            Patient or caregiver demonstrates an understanding
                            of cardiac medications and follow-up health visits
                          </li>
                          <li>Patient's functional status is intact (ADL)</li>
                        </ul>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-xl font-bold mt-6 mb-3">
                Case Study: Mrs. Washington, 84-year-old with Orthostatic
                Hypotension
              </h3>

              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 mb-6">
                <p className="mb-4">
                  Mrs. Washington, 84, has been experiencing dizziness when
                  getting up from her chair. She takes antihypertensive
                  medication and has recently started limiting her fluid intake
                  because "I don't want to have to go to the bathroom so often."
                </p>

                <h4 className="font-bold mt-4 mb-2">
                  Clinical Judgment Process:
                </h4>

                <div className="mb-2">
                  <h5 className="font-semibold">Recognize Cues:</h5>
                  <ul className="list-disc ml-8">
                    <li>Dizziness with position changes</li>
                    <li>Antihypertensive medication use</li>
                    <li>Intentional fluid restriction</li>
                    <li>Advanced age</li>
                  </ul>
                </div>

                <div className="mb-2">
                  <h5 className="font-semibold">Analyze Cues:</h5>
                  <ul className="list-disc ml-8">
                    <li>
                      BP readings in lying, sitting, and standing positions
                    </li>
                    <li>Neuro status assessment for stability</li>
                    <li>Hydration status evaluation</li>
                  </ul>
                </div>

                <div className="mb-2">
                  <h5 className="font-semibold">Prioritize Cues:</h5>
                  <ul className="list-disc ml-8">
                    <li>Monitor for circulation issues (A, B, C's)</li>
                    <li>Assess fall risk related to orthostatic hypotension</li>
                  </ul>
                </div>

                <div className="mb-2">
                  <h5 className="font-semibold">Solutions:</h5>
                  <ul className="list-disc ml-8">
                    <li>Teach to change positions slowly</li>
                    <li>Encourage adequate hydration</li>
                    <li>Monitor BP in three positions</li>
                    <li>Review medication effects and timing</li>
                  </ul>
                </div>

                <div className="mb-2">
                  <h5 className="font-semibold">Actions:</h5>
                  <ul className="list-disc ml-8">
                    <li>Check vital signs in all positions</li>
                    <li>Educate about medication timing</li>
                    <li>Implement fall prevention measures</li>
                    <li>Evaluate understanding of when to call for help</li>
                  </ul>
                </div>

                <div className="mb-2">
                  <h5 className="font-semibold">Evaluate Outcomes:</h5>
                  <ul className="list-disc ml-8">
                    <li>Monitor for reduction in dizziness episodes</li>
                    <li>Assess compliance with position change techniques</li>
                    <li>Document BP readings across positions</li>
                  </ul>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-bold mb-4">
                  Interactive Activity: Orthostatic Hypotension Assessment
                </h3>
                <OrthostaticHypotensionActivity
                  onComplete={() => {
                    setProgress({
                      ...progress,
                      module2: Math.max(progress.module2, 42),
                    });
                  }}
                />
              </div>
            </div>
          ),
        },
        {
          id: "respiratory",
          title: "Respiratory System",
          content: (
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-4">Respiratory System</h2>

              <h3 className="text-xl font-bold mb-3">Age-Related Changes:</h3>

              <ul className="list-disc ml-8 mb-6">
                <li>Lungs lose elasticity</li>
                <li>Decreased muscle strength impairs cough efficiency</li>
                <li>Increased risk for respiratory infections</li>
                <li>Decreased response to hypoxemia</li>
                <li>
                  Major age-related changes to the respiratory system include:
                  <ol className="list-decimal ml-8">
                    <li>
                      Breathing mechanics: Lungs lose elasticity; muscles become
                      rigid and lose muscle mass and strength
                      <ul className="list-disc ml-8">
                        <li>
                          Declining muscle strength may impair cough efficiency
                        </li>
                        <li>
                          This factor makes older people more susceptible to
                          chronic bronchitis, emphysema, and pneumonia
                        </li>
                      </ul>
                    </li>
                    <li>
                      Oxygenation: Increased ventilation-perfusion imbalance,
                      increased dead space, and decrease of alveolar surface
                      area
                    </li>
                    <li>
                      Ventilation control: Decreased response of the central
                      chemoreceptors
                    </li>
                    <li>
                      Immune response: Decreased efficiency of mucociliary
                      clearance
                    </li>
                  </ol>
                </li>
              </ul>

              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 mb-6">
                <h3 className="font-bold text-blue-800 mb-2">HESI HINT</h3>
                <p>
                  Chronic obstructive pulmonary disease is the major cause of
                  respiratory disability in older adults. Aspiration pneumonia
                  is one of the major clinical judgment diagnoses that must be
                  considered in older adults because it accounts for an overall
                  rate of 21% and a 29.7% rate for "in-hospital" deaths (Ramage
                  and Hoo, 2018).
                </p>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 mb-6">
                <h3 className="font-bold text-blue-800 mb-2">
                  Clinical Judgment Measures: Respiratory System
                </h3>
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-blue-100">
                      <th className="border border-blue-200 p-2 text-left">
                        Clinical Judgment Measure
                      </th>
                      <th className="border border-blue-200 p-2 text-left">
                        Assessment Characteristics
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-blue-200 p-2 align-top font-semibold">
                        Recognize Cues
                      </td>
                      <td className="border border-blue-200 p-2">
                        <ul className="list-disc ml-4">
                          <li>
                            Confusion (may be the first sign of respiratory
                            infection)
                          </li>
                          <li>
                            Vital signs for elevated temperature, BP, or
                            elevated/decreased respiratory rate
                          </li>
                          <li>
                            Lungs for congestion or atelectasis vital capacity
                          </li>
                          <li>Dyspnea and fatigue</li>
                          <li>Cough reflex and sputum production</li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-blue-200 p-2 align-top font-semibold">
                        Analyze Cues
                      </td>
                      <td className="border border-blue-200 p-2">
                        <ul className="list-disc ml-4">
                          <li>
                            Breathing patterns are consistent with age of
                            patient without shortness of breath (SOB),
                            confusion, orthopnea
                          </li>
                          <li>
                            Respiratory rate, BP, and other vital signs are
                            consistent with age and diagnosis of patient
                          </li>
                          <li>Productive/non-productive cough</li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-blue-200 p-2 align-top font-semibold">
                        Prioritize Cues
                      </td>
                      <td className="border border-blue-200 p-2">
                        <ul className="list-disc ml-4">
                          <li>
                            Keep in mind any emergent issue related to airway,
                            breathing, or circulation (A, B, C)
                          </li>
                          <li>
                            Mentation is what is expected for age and diagnosis
                            without confusion in speech, or wrong responses to
                            questions
                          </li>
                          <li>Change in skin color (pale, cyanosis)</li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-blue-200 p-2 align-top font-semibold">
                        Solutions
                      </td>
                      <td className="border border-blue-200 p-2">
                        <ul className="list-disc ml-4">
                          <li>
                            Encourage clients to receive an influenza vaccine
                            yearly
                          </li>
                          <li>
                            Encourage clients to receive the pneumonia vaccine
                            after age 65 (a second dose may be given one
                            additional time after about 5 years)
                          </li>
                          <li>
                            Remember that hypoxia can manifest as confusion
                          </li>
                          <li>
                            If the client is a smoker, encourage him or her to
                            stop (Regardless of age, cardiovascular and
                            respiratory status improve with smoking cessation
                            and exercise)
                          </li>
                          <li>
                            For older postoperative clients, turning, deep
                            breathing, and use of incentive spirometer are
                            imperative to prevent complications
                          </li>
                          <li>Encourage deep breathing</li>
                          <li>
                            Teach breathing techniques such as pursed-lip
                            breathing to facilitate respiration
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-blue-200 p-2 align-top font-semibold">
                        Actions
                      </td>
                      <td className="border border-blue-200 p-2">
                        <ul className="list-disc ml-4">
                          <li>Test mental status (date, time, place)</li>
                          <li>
                            Check vital signs for normalcy of patient's age
                          </li>
                          <li>
                            Note that respiratory rate is within normal limits
                          </li>
                          <li>
                            Review medications for respiratory system (have
                            patient recite medication, dosage, and routine)
                          </li>
                          <li>Auscultate lungs for consolidation</li>
                          <li>
                            Reassess patient's overall ability to ambulate and
                            do routine ADLs
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-blue-200 p-2 align-top font-semibold">
                        Evaluate Outcomes
                      </td>
                      <td className="border border-blue-200 p-2">
                        <ul className="list-disc ml-4">
                          <li>
                            Respiratory status has improved (respiratory rate
                            normal, color good, use of oxygen properly if
                            ordered for age and patient's diagnosis)
                          </li>
                          <li>
                            Mentation within normal limits (recites date, time,
                            mini-mental exam)
                          </li>
                          <li>
                            Respiratory rate consistent with activity (walking,
                            ADL)
                          </li>
                          <li>
                            Patient is able to recite the list of respiratory
                            medications and dosage
                          </li>
                        </ul>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-xl font-bold mt-6 mb-3">
                Case Study: Mr. Taylor, 80-year-old with COPD
              </h3>

              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 mb-6">
                <p className="mb-4">
                  Mr. Taylor, 80, has advanced COPD and requires home oxygen.
                  During your home health visit, you notice he appears more
                  short of breath than usual and has a productive cough. He
                  mentions he hasn't been using his inhaler because "I don't
                  think it helps anymore."
                </p>

                <h4 className="font-bold mt-4 mb-2">
                  Clinical Judgment Process:
                </h4>

                <div className="mb-2">
                  <h5 className="font-semibold">Recognize Cues:</h5>
                  <ul className="list-disc ml-8">
                    <li>Increased shortness of breath</li>
                    <li>Productive cough</li>
                    <li>Medication non-adherence</li>
                    <li>History of COPD</li>
                  </ul>
                </div>

                <div className="mb-2">
                  <h5 className="font-semibold">Analyze Cues:</h5>
                  <ul className="list-disc ml-8">
                    <li>Assess breathing patterns</li>
                    <li>Evaluate respiratory rate, breath sounds</li>
                    <li>Review medication usage patterns</li>
                  </ul>
                </div>

                <div className="mb-2">
                  <h5 className="font-semibold">Prioritize Cues:</h5>
                  <ul className="list-disc ml-8">
                    <li>
                      Determine if current symptoms represent acute exacerbation
                    </li>
                    <li>Assess for hypoxia signs (confusion, cyanosis)</li>
                  </ul>
                </div>

                <div className="mb-2">
                  <h5 className="font-semibold">Solutions:</h5>
                  <ul className="list-disc ml-8">
                    <li>Encourage proper inhaler technique</li>
                    <li>Promote vaccination (influenza, pneumonia)</li>
                    <li>Teach breathing techniques</li>
                    <li>Review medication importance</li>
                  </ul>
                </div>

                <div className="mb-2">
                  <h5 className="font-semibold">Actions:</h5>
                  <ul className="list-disc ml-8">
                    <li>Demonstrate and practice correct inhaler use</li>
                    <li>Auscultate lungs for comparison</li>
                    <li>Educate about early infection signs</li>
                    <li>Ensure oxygen is being used properly</li>
                  </ul>
                </div>

                <div className="mb-2">
                  <h5 className="font-semibold">Evaluate Outcomes:</h5>
                  <ul className="list-disc ml-8">
                    <li>Monitor respiratory status</li>
                    <li>Assess medication adherence</li>
                    <li>Document oxygen saturation levels</li>
                  </ul>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-bold mb-4">
                  Interactive Activity: Respiratory Assessment
                </h3>
                <RespiratoryAssessmentActivity
                  onComplete={() => {
                    setProgress({
                      ...progress,
                      module2: Math.max(progress.module2, 56),
                    });
                  }}
                />
              </div>
            </div>
          ),
        },
        {
          id: "gastrointestinal",
          title: "Gastrointestinal System",
          content: (
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-4">
                Gastrointestinal System
              </h2>

              <h3 className="text-xl font-bold mb-3">Age-Related Changes:</h3>

              <ul className="list-disc ml-8 mb-6">
                <li>Decreased saliva production</li>
                <li>Diminished taste sensation</li>
                <li>Decreased GI motility</li>
                <li>Slower digestion and increased feeling of fullness</li>
                <li>
                  Dental caries (tooth decay) and loss of teeth increase,
                  resulting in decreased ability to chew food
                </li>
                <li>
                  Hunger sensations decrease due to diminishing taste buds
                </li>
                <li>
                  Relaxation of the lower esophageal sphincter or a sliding
                  hiatal hernia increase the risk for gastroesophageal reflux
                  disease and aspiration
                </li>
                <li>
                  The production of pepsin and hydrochloric acid decreases
                </li>
                <li>
                  Delayed gastric emptying makes digestion of large amounts of
                  food difficult
                </li>
                <li>
                  Decreased peristalsis and decreased absorption in the small
                  intestine of protein, fats, minerals (calcium), vitamins B1
                  and B12, and carbohydrates contribute to constipation problems
                </li>
                <li>
                  Decreased muscle tone of the colon also causes constipation
                </li>
              </ul>

              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 mb-6">
                <h3 className="font-bold text-blue-800 mb-2">HESI HINT</h3>
                <p>
                  Older people may appear to eat small quantities of food at
                  mealtimes. This is because the digestive system of older
                  people features a decrease in the contraction time of the
                  muscles, resulting in more time needed for the cardiac
                  sphincter to open. It takes more time for the food to be
                  transmitted to the stomach; thus, the sensation of fullness
                  may occur before the entire meal is consumed (Dumic et al.,
                  2019).
                </p>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 mb-6">
                <h3 className="font-bold text-blue-800 mb-2">
                  Clinical Judgment Measures: Gastrointestinal System
                </h3>
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-blue-100">
                      <th className="border border-blue-200 p-2 text-left">
                        Clinical Judgment Measure
                      </th>
                      <th className="border border-blue-200 p-2 text-left">
                        Assessment Characteristics
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-blue-200 p-2 align-top font-semibold">
                        Recognize Cues
                      </td>
                      <td className="border border-blue-200 p-2">
                        <ul className="list-disc ml-4">
                          <li>Brittle teeth due to thinning enamel</li>
                          <li>
                            Receding gums resulting from periodontal disease
                            (the major cause of tooth loss after the age of 30)
                          </li>
                          <li>Decrease in taste sensation and appetite</li>
                          <li>
                            Dry mouth due to a decrease in saliva production
                          </li>
                          <li>
                            Elimination pattern for evidence of constipation or
                            diarrhea
                          </li>
                          <li>
                            Use of pain medications that may cause constipation
                          </li>
                          <li>
                            Poor tolerance of high-fat meals and poor absorption
                            of fat-soluble vitamins
                          </li>
                          <li>Decreased glucose tolerance</li>
                          <li>Fluid intake</li>
                          <li>Weight change</li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-blue-200 p-2 align-top font-semibold">
                        Analyze Cues
                      </td>
                      <td className="border border-blue-200 p-2">
                        <ul className="list-disc ml-4">
                          <li>
                            Condition of teeth consistent with age (repairs,
                            dentures, gums)
                          </li>
                          <li>
                            Taste, appetite, and eating patterns suitable for
                            age
                          </li>
                          <li>Bowel habits acceptable for age</li>
                          <li>
                            Food tolerance (regular, soft, portion size)
                            consistent with age
                          </li>
                          <li>
                            Nutritional status (gain or loss of weight) proper
                            for age
                          </li>
                          <li>
                            Fluid intake of 7–8 (8 oz/day) Picetti et al.
                            (2017). Vitamin intake consistent with
                            recommendations for people over 51
                            (https://www.nia.nih.gov/health/vitamins-and-minerals-older-adults)
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-blue-200 p-2 align-top font-semibold">
                        Prioritize Cues
                      </td>
                      <td className="border border-blue-200 p-2">
                        <ul className="list-disc ml-4">
                          <li>
                            Nutritional status (gain or loss of weight) proper
                            for age
                          </li>
                          <li>
                            Fluid intake of 7–8 (8 oz/day) Picetti et al.
                            (2017). Vitamin intake consistent with
                            recommendations for people over 51
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-blue-200 p-2 align-top font-semibold">
                        Solutions
                      </td>
                      <td className="border border-blue-200 p-2">
                        <ul className="list-disc ml-4">
                          <li>
                            Encourage good oral hygiene (the use of a soft
                            tooth, dental floss, and regular dental visits)
                          </li>
                          <li>Assess dentures for proper fit</li>
                          <li>
                            Educate older clients about hidden sodium (canned
                            soups, antacids, over-the-counter medications)
                          </li>
                          <li>
                            Promote adequate bowel functioning:
                            <ul className="list-disc ml-6">
                              <li>
                                Determine what is normal GI functioning for each
                                individual
                              </li>
                              <li>
                                Encourage the client to increase fiber and bulk
                                in the diet
                              </li>
                              <li>Provide adequate hydration</li>
                              <li>Encourage regular exercise</li>
                              <li>Encourage eating small, frequent meals</li>
                              <li>
                                Discourage the use of laxatives and enemas
                              </li>
                              <li>
                                Document bowel movements: frequency and
                                consistency
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-blue-200 p-2 align-top font-semibold">
                        Actions
                      </td>
                      <td className="border border-blue-200 p-2">
                        <ul className="list-disc ml-4">
                          <li>
                            Verify nutritional status (nutrition for age and
                            weight). Provide vitamins for any deficiency
                          </li>
                          <li>Check height and weight</li>
                          <li>
                            Provide a list of community services for seniors
                            (food banks, meals on wheels, community lunches)
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-blue-200 p-2 align-top font-semibold">
                        Evaluate Outcomes
                      </td>
                      <td className="border border-blue-200 p-2">
                        <ul className="list-disc ml-4">
                          <li>Patient maintains a healthy weight for age</li>
                          <li>Annual or semi-annual dental visits</li>
                          <li>Patient is engaged in senior lunch programs</li>
                        </ul>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-xl font-bold mt-6 mb-3">
                Case Study: Mrs. Garcia, 86-year-old with Unintended Weight Loss
              </h3>

              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 mb-6">
                <p className="mb-4">
                  Mrs. Garcia, 86, has lost 10 pounds over the past three
                  months. She reports "food just doesn't taste good anymore" and
                  complains of feeling full quickly. Her daughter notes she's
                  been eating less at meals.
                </p>

                <h4 className="font-bold mt-4 mb-2">
                  Clinical Judgment Process:
                </h4>

                <div className="mb-2">
                  <h5 className="font-semibold">Recognize Cues:</h5>
                  <ul className="list-disc ml-8">
                    <li>Unintended weight loss</li>
                    <li>Decreased appetite and early satiety</li>
                    <li>Altered taste perception</li>
                    <li>Advanced age</li>
                  </ul>
                </div>

                <div className="mb-2">
                  <h5 className="font-semibold">Analyze Cues:</h5>
                  <ul className="list-disc ml-8">
                    <li>Assess current eating patterns</li>
                    <li>Evaluate oral health (teeth, dentures)</li>
                    <li>Consider medication side effects</li>
                  </ul>
                </div>

                <div className="mb-2">
                  <h5 className="font-semibold">Prioritize Cues:</h5>
                  <ul className="list-disc ml-8">
                    <li>Determine nutritional status urgency</li>
                    <li>Assess for underlying pathology</li>
                  </ul>
                </div>

                <div className="mb-2">
                  <h5 className="font-semibold">Solutions:</h5>
                  <ul className="list-disc ml-8">
                    <li>Encourage small, frequent meals</li>
                    <li>Address oral hygiene needs</li>
                    <li>Consider nutrient-dense foods</li>
                    <li>Increase fiber and hydration gradually</li>
                  </ul>
                </div>

                <div className="mb-2">
                  <h5 className="font-semibold">Actions:</h5>
                  <ul className="list-disc ml-8">
                    <li>Consult with dietitian</li>
                    <li>Implement oral care protocol</li>
                    <li>Monitor weight weekly</li>
                    <li>Provide information on community meal programs</li>
                  </ul>
                </div>

                <div className="mb-2">
                  <h5 className="font-semibold">Evaluate Outcomes:</h5>
                  <ul className="list-disc ml-8">
                    <li>Document weight trends</li>
                    <li>Assess improved oral intake</li>
                    <li>Monitor for improved energy levels</li>
                  </ul>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-bold mb-4">
                  Interactive Activity: Nutritional Assessment
                </h3>
                <NutritionalAssessmentActivity
                  onComplete={() => {
                    setProgress({
                      ...progress,
                      module2: Math.max(progress.module2, 70),
                    });
                  }}
                />
              </div>
            </div>
          ),
        },
        {
          id: "genitourinary",
          title: "Genitourinary System",
          content: (
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-4">Genitourinary System</h2>

              <h3 className="text-xl font-bold mb-3">Age-Related Changes:</h3>

              <ul className="list-disc ml-8 mb-6">
                <li>Decreased bladder capacity</li>
                <li>Weakened pelvic muscles</li>
                <li>Decreased sensation of urge to void</li>
                <li>Increased risk for UTIs</li>
                <li>
                  Glomerular filtration rate decreases due to a decrease in
                  renal blood flow resulting from the lower cardiac output.
                  Decreased renal clearance of drugs is the result
                </li>
                <li>Tubular function diminishes</li>
                <li>Increased risk for reflux of urine into the ureters</li>
                <li>
                  Chronic diseases such as atherosclerosis and hypertension also
                  decrease renal functioning in older adults
                </li>
                <li>
                  The capacity of the bladder decreases by one-half, resulting
                  in urinary frequency and nocturia
                </li>
                <li>
                  Emptying the bladder may become difficult because of a
                  weakening of the bladder and perineal muscles because of a
                  decrease in the sensation of urge to void (This sets up a
                  propensity for urinary tract infections [UTIs] due to residual
                  urine in the bladder)
                </li>
                <li>Women may experience stress incontinence</li>
              </ul>

              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 mb-6">
                <h3 className="font-bold text-blue-800 mb-2">HESI HINT</h3>
                <p>
                  Clinical judgment measures include that incontinence can cause
                  depression since older adults may be embarrassed in social
                  situations or become recluse, which may lead to loneliness or
                  isolation or become hyper-vigilant about accidents in public
                  places.
                </p>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 mb-6">
                <h3 className="font-bold text-blue-800 mb-2">
                  Clinical Judgment Measures: Genitourinary System
                </h3>
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-blue-100">
                      <th className="border border-blue-200 p-2 text-left">
                        Clinical Judgment Measure
                      </th>
                      <th className="border border-blue-200 p-2 text-left">
                        Assessment Characteristics
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-blue-200 p-2 align-top font-semibold">
                        Recognize Cues
                        <br />
                        <em>Kidney</em>
                      </td>
                      <td className="border border-blue-200 p-2">
                        <ul className="list-disc ml-4">
                          <li>
                            Signs of dehydration or electrolyte imbalance
                            <ul className="list-disc ml-6">
                              <li>Decreased skin turgor (tenting)</li>
                              <li>Intake/output</li>
                              <li>Confusion</li>
                              <li>Concentrated urine</li>
                              <li>Medications such as diuretics</li>
                            </ul>
                          </li>
                          <li>
                            Laboratory values
                            <ul className="list-disc ml-6">
                              <li>Proteinuria</li>
                              <li>
                                Increased blood urea nitrogen (BUN) and
                                creatinine
                              </li>
                              <li>Presence of blood in urine</li>
                            </ul>
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-blue-200 p-2 align-top font-semibold">
                        Recognize Cues
                        <br />
                        <em>Bladder</em>
                      </td>
                      <td className="border border-blue-200 p-2">
                        <ul className="list-disc ml-4">
                          <li>
                            Signs of UTI
                            <ul className="list-disc ml-6">
                              <li>
                                Urinary elimination patterns: normal voiding
                                patterns and symptoms such as burning, urgency,
                                and frequency
                              </li>
                              <li>
                                Mental status (knowledge of name, date, time,
                                place)
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-blue-200 p-2 align-top font-semibold">
                        Analyze Cues
                        <br />
                        <em>Kidney</em>
                      </td>
                      <td className="border border-blue-200 p-2">
                        <p>
                          Laboratory values assessed for the development of
                          acute kidney insufficiency (an elevated BUN level, an
                          elevation in serum creatinine, and a decrease in
                          creatinine clearance accompanied by a decrease in
                          urine output)
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-blue-200 p-2 align-top font-semibold">
                        Analyze Cues
                        <br />
                        <em>Bladder</em>
                      </td>
                      <td className="border border-blue-200 p-2">
                        <p>
                          Urinary output consistent for age (urinary output
                          measured 800–2400 mL/day [Corder et al., 2020])
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-blue-200 p-2 align-top font-semibold">
                        Prioritize Cues
                        <br />
                        <em>Kidney</em>
                      </td>
                      <td className="border border-blue-200 p-2">
                        <ul className="list-disc ml-4">
                          <li>
                            Keep in mind acute renal failure issues (BP changes,
                            laboratory value changes) for age and diagnosis
                          </li>
                          <li>Changes in heart rate (heart failure)</li>
                          <li>Impaired cognition (disorientation)</li>
                          <li>Immune function (infection/sepsis)</li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-blue-200 p-2 align-top font-semibold">
                        Prioritize Cues
                        <br />
                        <em>Bladder</em>
                      </td>
                      <td className="border border-blue-200 p-2">
                        <ul className="list-disc ml-4">
                          <li>
                            Monitor symptoms:
                            <ul className="list-disc ml-6">
                              <li>
                                Lower UTI: dysuria, urgency, frequency, and
                                hematuria
                              </li>
                              <li>
                                Upper UTI: chills, fever, flank pain, mentation
                                changes (septicemia)
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-blue-200 p-2 align-top font-semibold">
                        Solutions
                        <br />
                        <em>Kidney</em>
                      </td>
                      <td className="border border-blue-200 p-2">
                        <ul className="list-disc ml-4">
                          <li>
                            Encourage an intake of at least 2–3 L of fluid
                            daily, if not contraindicated
                          </li>
                          <li>
                            Instruct client about signs and symptoms of
                            dehydration and to contact health care provider
                            immediately
                          </li>
                          <li>
                            Instruct client about the importance of completing
                            antibiotics until the entire prescription is gone,
                            even if symptoms go away
                          </li>
                          <li>
                            Write out antibiotic schedule, including any special
                            instructions. Print in large letters
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-blue-200 p-2 align-top font-semibold">
                        Solutions
                        <br />
                        <em>Bladder</em>
                      </td>
                      <td className="border border-blue-200 p-2">
                        <ul className="list-disc ml-4">
                          <li>
                            Initiate a bladder-training program if indicated
                          </li>
                          <li>
                            Encourage older women to void at first urge when
                            possible
                          </li>
                          <li>
                            Initiate a skin-care program if incontinence is
                            present
                          </li>
                          <li>
                            Provide methods of dealing with incontinence. Kegel
                            exercises can help
                          </li>
                          <li>
                            Kegel exercises consist of tightening and relaxing
                            the vaginal and urinary meatus muscles
                            <ul className="list-disc ml-6">
                              <li>
                                Teach to avoid sleeping pills and sedation,
                                which may cause nocturnal incontinence
                              </li>
                              <li>
                                Teach to avoid caffeine because it promotes
                                diuresis
                              </li>
                              <li>
                                Caffeine inhibits the production of antidiuretic
                                hormone (ADH)
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-blue-200 p-2 align-top font-semibold">
                        Actions
                        <br />
                        <em>Kidney</em>
                      </td>
                      <td className="border border-blue-200 p-2">
                        <ul className="list-disc ml-4">
                          <li>Monitor vital signs</li>
                          <li>Monitor fluid intake and urinary output</li>
                          <li>Monitor laboratory values</li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-blue-200 p-2 align-top font-semibold">
                        Actions
                        <br />
                        <em>Bladder</em>
                      </td>
                      <td className="border border-blue-200 p-2">
                        <ul className="list-disc ml-4">
                          <li>
                            Determine suitable mentation for age and diagnosis
                          </li>
                          <li>Monitor fluid intake and urinary output</li>
                          <li>Monitor vital signs</li>
                          <li>Provide mini-mental health score</li>
                          <li>
                            Monitor sleep patterns (waking up to urinate,
                            frequency, odor)
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-blue-200 p-2 align-top font-semibold">
                        Evaluate Outcomes
                        <br />
                        <em>Kidney</em>
                      </td>
                      <td className="border border-blue-200 p-2">
                        <ul className="list-disc ml-4">
                          <li>
                            Quality of life report is good for age and patient's
                            condition
                          </li>
                          <li>
                            Renal function is stable (levels of BUN, creatinine,
                            hematocrit, fluid, and electrolytes are normal for
                            age)
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-blue-200 p-2 align-top font-semibold">
                        Evaluate Outcomes
                        <br />
                        <em>Bladder</em>
                      </td>
                      <td className="border border-blue-200 p-2">
                        <p>
                          Vital signs, functional status, ADLs for age, and
                          health condition is fitting
                        </p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-xl font-bold mt-6 mb-3">
                Case Study: Mr. Johnson, 82-year-old with Urinary Symptoms
              </h3>

              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 mb-6">
                <p className="mb-4">
                  Mr. Johnson, 82, has been experiencing increased urinary
                  frequency, especially at night. He reports some difficulty
                  starting his stream and his urine appears concentrated. He has
                  begun limiting fluids after 6 pm.
                </p>

                <h4 className="font-bold mt-4 mb-2">
                  Clinical Judgment Process:
                </h4>

                <div className="mb-2">
                  <h5 className="font-semibold">Recognize Cues:</h5>
                  <ul className="list-disc ml-8">
                    <li>Urinary frequency and nocturia</li>
                    <li>Concentrated urine</li>
                    <li>Hesitancy in starting stream</li>
                    <li>Self-imposed fluid restriction</li>
                  </ul>
                </div>

                <div className="mb-2">
                  <h5 className="font-semibold">Analyze Cues:</h5>
                  <ul className="list-disc ml-8">
                    <li>Assess for UTI symptoms</li>
                    <li>Consider prostate enlargement</li>
                    <li>Evaluate intake/output patterns</li>
                  </ul>
                </div>

                <div className="mb-2">
                  <h5 className="font-semibold">Prioritize Cues:</h5>
                  <ul className="list-disc ml-8">
                    <li>Monitor for infection signs</li>
                    <li>Assess impact on sleep and quality of life</li>
                  </ul>
                </div>

                <div className="mb-2">
                  <h5 className="font-semibold">Solutions:</h5>
                  <ul className="list-disc ml-8">
                    <li>Encourage fluid intake of 2-3L daily</li>
                    <li>Teach about signs of dehydration</li>
                    <li>Encourage timed voiding</li>
                    <li>Consider bladder training program</li>
                  </ul>
                </div>

                <div className="mb-2">
                  <h5 className="font-semibold">Actions:</h5>
                  <ul className="list-disc ml-8">
                    <li>Monitor fluid balance</li>
                    <li>Screen for UTI symptoms</li>
                    <li>Assess for post-void residual if indicated</li>
                    <li>Educate about when to seek medical attention</li>
                  </ul>
                </div>

                <div className="mb-2">
                  <h5 className="font-semibold">Evaluate Outcomes:</h5>
                  <ul className="list-disc ml-8">
                    <li>Record frequency of nighttime voiding</li>
                    <li>Monitor urine characteristics</li>
                    <li>Assess hydration status</li>
                  </ul>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-bold mb-4">
                  Interactive Activity: Urinary Assessment
                </h3>
                <UrinaryAssessmentActivity
                  onComplete={() => {
                    setProgress({
                      ...progress,
                      module2: Math.max(progress.module2, 84),
                    });
                  }}
                />
              </div>
            </div>
          ),
        },
        {
          id: "neurologic-sensory",
          title: "Neurologic and Sensory Systems",
          content: (
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-4">
                Neurologic and Sensory Systems
              </h2>

              <h3 className="text-xl font-bold mb-3">Age-Related Changes:</h3>

              <ul className="list-disc ml-8 mb-6">
                <li>Decreased reaction time</li>
                <li>Slower cognitive processing</li>
                <li>Diminished sensory acuity (vision, hearing)</li>
                <li>Changes in sleep-wake cycle</li>
                <li>
                  Increased intraocular pressure (IOP), usually bilaterally,
                  leads to optic nerve damage (glaucoma)
                </li>
                <li>
                  Hearing of high pitches diminishes first; the ability to
                  discriminate tones is lost (presbycusis)
                </li>
                <li>
                  The sensory system consists of vision, hearing, taste, touch,
                  and smell. Changes in the sensory system, including balance,
                  occur gradually and are often unnoticed:
                  <ol className="list-decimal ml-8">
                    <li>
                      A loss of cells in the olfactory bulb of the brain and a
                      decrease in sensory cells in the nasal lining occur
                    </li>
                    <li>Sensitivity to smells declines</li>
                    <li>
                      Taste perception decreases due to the loss of taste buds
                      on the tongue
                    </li>
                    <li>Tear production decreases</li>
                    <li>
                      Abnormal, progressive clouding or opacity of the lens in
                      the eyes occurs (cataracts)
                    </li>
                    <li>
                      A partial or complete white ring encircles the periphery
                      of the cornea (arcus senilis)
                    </li>
                  </ol>
                </li>
              </ul>

              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 mb-6">
                <h3 className="font-bold text-blue-800 mb-2">HESI HINT</h3>
                <p>
                  Clinical judgment measures associated with changes in the
                  sensory system are important to determine the overall
                  functional status of older adults.
                </p>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 mb-6">
                <h3 className="font-bold text-blue-800 mb-2">
                  Clinical Judgment Measures: Sensory System
                </h3>
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-blue-100">
                      <th className="border border-blue-200 p-2 text-left">
                        Clinical Judgment Measure
                      </th>
                      <th className="border border-blue-200 p-2 text-left">
                        Assessment Characteristics
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-blue-200 p-2 align-top font-semibold">
                        Recognize Cues
                      </td>
                      <td className="border border-blue-200 p-2">
                        <ul className="list-disc ml-4">
                          <li>
                            Assess visual and hearing acuity, as well as glasses
                            and/or hearing aids used
                          </li>
                          <li>Eyes for cloudiness or opacity</li>
                          <li>Ears for wax and hearing loss</li>
                          <li>
                            Evaluate dietary intake for unplanned weight loss
                            and salt and sugar intake
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-blue-200 p-2 align-top font-semibold">
                        Analyze Cues
                      </td>
                      <td className="border border-blue-200 p-2">
                        <ul className="list-disc ml-4">
                          <li>Vital signs are consistent for age of patient</li>
                          <li>
                            Able to clearly read (patient reads simple list,
                            assess for accuracy)
                          </li>
                          <li>
                            Understands simple directions (responds to health
                            care provider without increasing voice)
                          </li>
                          <li>Weight consistent for age</li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-blue-200 p-2 align-top font-semibold">
                        Prioritize Cues
                      </td>
                      <td className="border border-blue-200 p-2">
                        <ul className="list-disc ml-4">
                          <li>
                            Concentrate on vital signs, mentation changes (acute
                            disorientation)
                          </li>
                          <li>Acute pain in eyes, ears, nose, or mouth</li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-blue-200 p-2 align-top font-semibold">
                        Solutions
                      </td>
                      <td className="border border-blue-200 p-2">
                        <ul className="list-disc ml-4">
                          <li>
                            Provide interventions to supplement the loss of
                            sensory input
                          </li>
                          <li>Encourage social interaction</li>
                          <li>
                            Make the client's environment as safe as possible to
                            increase orientation and decrease confusion
                          </li>
                          <li>
                            Maximize visual and nonvisual aids, such as bright
                            colors, large print for written material, recorded
                            books, lighted mirror, and glasses, if applicable
                          </li>
                          <li>
                            Encourage the use of hearing aids with frequent
                            battery changes, if applicable
                          </li>
                          <li>
                            The nurse should use a lower tone of voice when
                            talking to an older person who is hearing impaired
                            <ul className="list-disc ml-6">
                              <li>
                                High-pitched tones (e.g., women's voices) are
                                the first to become difficult to hear
                              </li>
                            </ul>
                          </li>
                          <li>
                            Encourage the use of glasses and frequent cleaning,
                            if applicable
                          </li>
                          <li>
                            Diminished eyesight results in the following:
                            <ol className="list-decimal ml-6">
                              <li>
                                A loss of independence (driving and the ability
                                to perform ADLs)
                              </li>
                              <li>A lack of stimulation</li>
                              <li>
                                The inability to read (recommend audiotapes)
                              </li>
                              <li>The fear of blindness</li>
                            </ol>
                          </li>
                          <li>
                            Decreased independence due to fear of not being able
                            to clearly see
                          </li>
                          <li>
                            Encourage the use of artificial tears; teach to
                            avoid rubbing and touching of the eyes (increases
                            risk for infection)
                          </li>
                          <li>Encourage regular eye examinations</li>
                          <li>
                            Directly face hearing-impaired clients so they may
                            read lips and view facial expressions
                          </li>
                          <li>
                            Adapt ethnic favorites to dietary and taste
                            limitations
                          </li>
                          <li>
                            Use frequent touch to compensate for visual and
                            auditory sensory loss and decrease the sense of
                            isolation
                            <ol className="list-decimal ml-6">
                              <li>
                                The nurse should make the older adult aware that
                                he or she is going to be touched and should
                                therefore ask permission before touching the
                                client. The nurse should be cognizant of
                                cultural differences with direct eye contact,
                                touch, and taste
                              </li>
                              <li>
                                The nurse should teach the caregiver or patient
                                to carefully use sharp kitchen utensils since
                                the patient may unintentionally injure
                                themselves
                              </li>
                            </ol>
                          </li>
                          <li>
                            Educate the client's support system about
                            interventions to maintain a safe and comfortable
                            environment
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-blue-200 p-2 align-top font-semibold">
                        Actions
                      </td>
                      <td className="border border-blue-200 p-2">
                        <ul className="list-disc ml-4">
                          <li>Vital signs normal for age</li>
                          <li>Mini-mental status exam intact</li>
                          <li>
                            Functional exam for vision, hearing, and taste
                            stable for age (use of glasses, hearing aids, diet
                            recall)
                          </li>
                          <li>Judgment intact for ADLs</li>
                          <li>Check vital signs for consistency for age</li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-blue-200 p-2 align-top font-semibold">
                        Evaluate Outcomes
                      </td>
                      <td className="border border-blue-200 p-2">
                        <ul className="list-disc ml-4">
                          <li>
                            Functional status exam normal for age related to
                            vision (screen with Simple eye chart to check vision
                            [SNELLEN exam], screen for hearing
                          </li>
                          <li>
                            ADLs as reported by caregiver (able to eat and feed
                            self, smell intact)
                          </li>
                        </ul>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 mb-6">
                <h3 className="font-bold text-blue-800 mb-2">
                  Clinical Judgment Measures: Neurologic System
                </h3>
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-blue-100">
                      <th className="border border-blue-200 p-2 text-left">
                        Clinical Judgment Measure
                      </th>
                      <th className="border border-blue-200 p-2 text-left">
                        Assessment Characteristics
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-blue-200 p-2 align-top font-semibold">
                        Recognize Cues
                      </td>
                      <td className="border border-blue-200 p-2">
                        <ul className="list-disc ml-4">
                          <li>
                            Comprehensive functional assessment: weaknesses,
                            tremors, and gait disturbances
                          </li>
                          <li>History of falls</li>
                          <li>
                            Pain, headaches, ROM, and neuropathies in
                            extremities
                          </li>
                          <li>
                            Sudden changes in vision, cognition, and muscle
                            weakness
                          </li>
                          <li>Depression</li>
                          <li>Sleep patterns</li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-blue-200 p-2 align-top font-semibold">
                        Analyze Cues
                      </td>
                      <td className="border border-blue-200 p-2">
                        <ul className="list-disc ml-4">
                          <li>
                            Sleep disorders (sleep-wake cycle) consistent for
                            age
                          </li>
                          <li>
                            Answers related to old and new information
                            dependable for age, memory reliable
                          </li>
                          <li>
                            Hearing, smell, vibratory sensations, taste
                            consistent for age
                          </li>
                          <li>Balance steady for age</li>
                          <li>
                            Mini cog—screens for cognitive impairment,
                            consistent for age
                          </li>
                          <li>
                            Mental status assessment: attention, memory,
                            orientation, etc. intact for age and diagnosis
                          </li>
                          <li>
                            Neurologic assessment: cranial nerves, gait,
                            balance, distal deep tendon reflexes, plantar
                            responses, primary sensory modalities in lower
                            extremities, and cerebrovascular integrity intact
                            for age
                          </li>
                          <li>
                            Functional assessment: Dementia Severity Rating
                            Scale (DSRS) normal score 4 or less (increases with
                            age), consistent for age
                          </li>
                          <li>
                            Mini cog—screens for cognitive impairment,
                            consistent for age
                          </li>
                          <li>
                            Screen for age-associated issues: The three Ds:
                            depression, delirium, and dementia: consistent for
                            age
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-blue-200 p-2 align-top font-semibold">
                        Prioritize Cues
                      </td>
                      <td className="border border-blue-200 p-2">
                        <ul className="list-disc ml-4">
                          <li>
                            Keep in mind acute changes with patient: changes in
                            vital signs, stroke assessment (headaches, vomiting,
                            seizures, mental status changes [including coma],
                            fevers, and electrocardiogram [ECG] changes
                            mentation, slurred speech, ABCs
                          </li>
                          <li>
                            Cognitive changes, outbursts, disorientation,
                            emotional or sensory overload, confusion, agitation
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-blue-200 p-2 align-top font-semibold">
                        Solutions
                      </td>
                      <td className="border border-blue-200 p-2">
                        <ul className="list-disc ml-4">
                          <li>Perform a complete mental status examination</li>
                          <li>Screen for depression</li>
                          <li>Screen for cognitive impairment</li>
                          <li>
                            Monitor for conditions caused by lack of sleep:
                            <ul className="list-disc ml-6">
                              <li>Fatigue, confusion, disorientation</li>
                            </ul>
                          </li>
                          <li>Monitor blood pressure and hydration status</li>
                          <li>
                            Request physical and occupational service
                            evaluations, if indicated
                          </li>
                          <li>
                            Provide assistive devices as needed for ambulation
                          </li>
                          <li>Encourage walking, ROM, and balance exercises</li>
                          <li>
                            Teach individual relaxation techniques, stress
                            management, and adaptive self-care management
                          </li>
                          <li>
                            Minimize potential sources of injury in the
                            environment
                          </li>
                          <li>
                            Educate family and caregivers about support groups
                            and other resources (agencies)
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-blue-200 p-2 align-top font-semibold">
                        Actions
                      </td>
                      <td className="border border-blue-200 p-2">
                        <ul className="list-disc ml-4">
                          <li>Vital signs assess and normal for age</li>
                          <li>Mini-mental status exam intact</li>
                          <li>Functional status exam stable for age</li>
                          <li>
                            Judgment, home activities, personal care, speech and
                            language recognition, feeding, incontinence, and
                            mobility or walking consistent for age
                          </li>
                          <li>
                            Physical activities consistent for age (ROM,
                            balance, gait) and appraised by the care provider
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-blue-200 p-2 align-top font-semibold">
                        Evaluate Outcomes
                      </td>
                      <td className="border border-blue-200 p-2">
                        <ul className="list-disc ml-4">
                          <li>Check vital signs for normalcy for age</li>
                          <li>
                            Behavioral changes (mood, sleep patterns, fatigue,
                            confusion, orientation) consistent for age and
                            diagnosis of the patient as reported by the care
                            provider and/or patient
                          </li>
                          <li>
                            No gait or balance issues, no falls in home
                            environment
                          </li>
                          <li>
                            Effectiveness of health teaching evident in
                            patient's ability to effectively balance when
                            walking and report by caregiver about community
                            senior support groups
                          </li>
                        </ul>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-xl font-bold mt-6 mb-3">
                Case Study: Mrs. Bryant, 79-year-old with Hearing Loss
              </h3>

              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 mb-6">
                <p className="mb-4">
                  Mrs. Bryant, 79, has been having difficulty participating in
                  group activities at the senior center. She often asks people
                  to repeat themselves and sometimes responds inappropriately to
                  questions. Her son mentions she's been turning the TV volume
                  increasingly louder.
                </p>

                <h4 className="font-bold mt-4 mb-2">
                  Clinical Judgment Process:
                </h4>

                <div className="mb-2">
                  <h5 className="font-semibold">Recognize Cues:</h5>
                  <ul className="list-disc ml-8">
                    <li>Difficulty hearing in conversations</li>
                    <li>Inappropriate responses</li>
                    <li>Increased TV volume</li>
                    <li>Social withdrawal</li>
                  </ul>
                </div>

                <div className="mb-2">
                  <h5 className="font-semibold">Analyze Cues:</h5>
                  <ul className="list-disc ml-8">
                    <li>Assess hearing acuity</li>
                    <li>Evaluate for cerumen impaction</li>
                    <li>Consider impact on social engagement</li>
                  </ul>
                </div>

                <div className="mb-2">
                  <h5 className="font-semibold">Prioritize Cues:</h5>
                  <ul className="list-disc ml-8">
                    <li>Determine impact on communication</li>
                    <li>Assess for safety concerns related to hearing loss</li>
                  </ul>
                </div>

                <div className="mb-2">
                  <h5 className="font-semibold">Solutions:</h5>
                  <ul className="list-disc ml-8">
                    <li>Use lower voice tones when speaking</li>
                    <li>Face client directly for lip reading</li>
                    <li>Consider hearing aid evaluation</li>
                    <li>Modify environment to reduce background noise</li>
                  </ul>
                </div>

                <div className="mb-2">
                  <h5 className="font-semibold">Actions:</h5>
                  <ul className="list-disc ml-8">
                    <li>Screen for cerumen impaction</li>
                    <li>Refer for formal hearing evaluation</li>
                    <li>Educate about communication techniques</li>
                    <li>Assess for assistive devices</li>
                  </ul>
                </div>

                <div className="mb-2">
                  <h5 className="font-semibold">Evaluate Outcomes:</h5>
                  <ul className="list-disc ml-8">
                    <li>Monitor increased participation in activities</li>
                    <li>Assess improvement in communication</li>
                    <li>Document adaptation to hearing strategies</li>
                  </ul>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-bold mb-4">
                  Interactive Activity: Sensory Assessment
                </h3>
                <SensoryAssessmentActivity
                  onComplete={() => {
                    setProgress({
                      ...progress,
                      module2: Math.max(progress.module2, 100),
                    });
                  }}
                />
              </div>
            </div>
          ),
        },
        {
          id: "neurocognitive",
          title: "Neurocognitive Disorders",
          content: (
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-4">
                Neurocognitive Disorders
              </h2>

              <h3 className="text-xl font-bold mb-3">
                Age-Related Changes vs. Pathological:
              </h3>

              <ul className="list-disc ml-8 mb-6">
                <li>
                  Normal: Slower processing, mild short-term memory changes
                </li>
                <li>
                  Pathological: Significant memory loss, disorientation,
                  judgment impairment
                </li>
              </ul>

              <p className="mb-4">
                Dementia is the permanent, progressive impairment in cognitive
                functioning (memory, problem solving, thinking) manifested by
                memory impairment in both long term and short term) and
                accompanied by impairment in judgment, abstract thinking, and
                social behavior.
              </p>

              <p className="mb-4">
                Dementia is characterized by the following:
              </p>
              <ol className="list-decimal ml-8 mb-6">
                <li>Personality changes</li>
                <li>Confusion</li>
                <li>Disorientation</li>
                <li>
                  Deterioration of intellectual functioning, loss of memory
                </li>
                <li>Decline of appropriate judgment and ADLs</li>
                <li>Difficulty performing familiar tasks</li>
                <li>Misplacing things</li>
                <li>Problems with abstract thinking</li>
                <li>Changes in mood or behavior</li>
              </ol>

              <p className="mb-4">
                The four A's of cognitive impairment are agnosis, amnesia,
                apraxia, and aphasia.
              </p>

              <p className="mb-4">Types of dementia include:</p>
              <ol className="list-decimal ml-8 mb-6">
                <li>
                  Alzheimer disease: The brains of individuals with Alzheimer
                  disease have an abundance of beta-amyloid plaques,
                  neurofibrillary tangles, and atrophic brain cells and tissue.
                  Alzheimer's disease is the most common brain disorder and is
                  one of the leading causes of death in the older adult.
                </li>
                <li>
                  Vascular or multifocal dementia: Ischemic brain lesions
                  develop as a result of a history of hyperlipidemia,
                  hypertension, smoking, or alcohol.
                </li>
              </ol>

              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 mb-6">
                <h3 className="font-bold text-blue-800 mb-2">
                  Clinical Judgment Measures: Neurocognitive Disorder: Dementia
                </h3>
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-blue-100">
                      <th className="border border-blue-200 p-2 text-left">
                        Clinical Judgment Measure
                      </th>
                      <th className="border border-blue-200 p-2 text-left">
                        Assessment Characteristics
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-blue-200 p-2 align-top font-semibold">
                        Recognize Cues
                      </td>
                      <td className="border border-blue-200 p-2">
                        <ul className="list-disc ml-4">
                          <li>
                            Memory complaints: short term/long term; recognition
                            of family, friends, or environment
                          </li>
                          <li>
                            Impaired physical functioning: shuffling, difficulty
                            swallowing, and inability to perform ADLs
                          </li>
                          <li>Conditions that mimic dementia</li>
                          <li>
                            Unrecognized medical conditions
                            <ol className="list-decimal ml-6">
                              <li>
                                Acute infection (UTI), dehydration (electrolyte
                                imbalance), medication, pain, and metabolic
                                disorder
                              </li>
                              <li>
                                Medications, adverse reactions & nursing
                                implications (Table 8.12)
                              </li>
                            </ol>
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-blue-200 p-2 align-top font-semibold">
                        Analyze Cues
                      </td>
                      <td className="border border-blue-200 p-2">
                        <ul className="list-disc ml-4">
                          <li>Vital signs are normal for age</li>
                          <li>
                            Mini-mental score is normal (cognitive assessment
                            score is not elevated, able to complete a clock
                            drawing test with number spacing that is correct)
                          </li>
                          <li>Laboratory values normal (WBC count normal)</li>
                          <li>
                            No nausea or vomiting associated with medications
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-blue-200 p-2 align-top font-semibold">
                        Prioritize Cues
                      </td>
                      <td className="border border-blue-200 p-2">
                        <ul className="list-disc ml-4">
                          <li>Vital signs normal for age</li>
                          <li>
                            Acute cognitive changes (delirium, no recognition of
                            family or caregiver)
                          </li>
                          <li>Headache, dizziness, or GI distress</li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-blue-200 p-2 align-top font-semibold">
                        Solutions
                      </td>
                      <td className="border border-blue-200 p-2">
                        <ul className="list-disc ml-4">
                          <li>
                            Administer screening tools for depression and
                            cognitive impairment
                          </li>
                          <li>
                            Keep the client functioning and actively involved in
                            social and family activities for as long as possible
                          </li>
                          <li>
                            Maintain an orderly, almost ritualistic, schedule to
                            promote a sense of security
                          </li>
                          <li>
                            Maintain a regularly scheduled reality orientation
                            on a daily basis
                            <ol className="list-decimal ml-6">
                              <li>
                                Keep the client oriented as to time, place, and
                                person (repeatedly)
                              </li>
                              <li>
                                Keep a calendar and clock within sight at all
                                times
                                <ol className="list-lower-alpha ml-8">
                                  <li>
                                    Display a calendar and clock that can be
                                    read by the older person (i.e., a clock with
                                    large numbers and a calendar that can be
                                    read by those with deteriorating vision)
                                  </li>
                                  <li>
                                    Be sure the date and time are accurate
                                    (i.e., keep the calendar current and the
                                    clock in working order)
                                  </li>
                                </ol>
                              </li>
                            </ol>
                          </li>
                          <li>
                            Keep familiar objects, such as family pictures, in
                            the older adult's environment to promote a sense of
                            continuity and security
                          </li>
                          <li>
                            Administer prescribed drugs to reduce emotional
                            lability, agitation, and irritability or prescribed
                            antidepressant, as indicated
                          </li>
                          <li>Speak in a slow, calm voice; avoid excitement</li>
                          <li>
                            Redirect the client who exhibits combative behavior
                          </li>
                          <li>
                            Educate family and caregivers on a safe home
                            environment
                          </li>
                          <li>
                            Provide support and education to family and
                            long-term caregivers
                          </li>
                          <li>
                            Encourage end-of-life planning, including a will, do
                            not resuscitate status, power of attorney, and
                            funeral arrangements
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-blue-200 p-2 align-top font-semibold">
                        Actions
                      </td>
                      <td className="border border-blue-200 p-2">
                        <ul className="list-disc ml-4">
                          <li>Vital signs normal for age</li>
                          <li>Oriented to place, time, environment</li>
                          <li>Mini-mental status exam intact</li>
                          <li>
                            ADLs intact (teach family/caregiver changes in the
                            ability to complete daily activities: eating,
                            bathing)
                          </li>
                          <li>Medication regime adequate for diagnosis</li>
                          <li>
                            Teach family/caregiver to take medications with
                            meals to avoid GI upset
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-blue-200 p-2 align-top font-semibold">
                        Evaluate Outcomes
                      </td>
                      <td className="border border-blue-200 p-2">
                        <ul className="list-disc ml-4">
                          <li>Check vital signs for consistency for age</li>
                          <li>Mini-mental status exam intact for age</li>
                          <li>
                            ADLs as reported by caregiver (able to eat, feed
                            self, and bathe self)
                          </li>
                          <li>
                            Medication compliance adherence as reported by
                            family or caregiver
                          </li>
                        </ul>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-xl font-bold mt-6 mb-3">
                Case Study: Mr. Woods, 76-year-old with Dementia
              </h3>

              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 mb-6">
                <p className="mb-4">
                  Mr. Woods, 76, lives in a long-term care facility with
                  dementia. He is dependent on nursing staff for assistance with
                  bathing, dressing, and meals. He can feed himself but requires
                  supervision as he forgets why he's sitting at the table. His
                  urine is concentrated and his skin is dry.
                </p>

                <h4 className="font-bold mt-4 mb-2">
                  Clinical Judgment Process:
                </h4>

                <div className="mb-2">
                  <h5 className="font-semibold">Recognize Cues:</h5>
                  <ul className="list-disc ml-8">
                    <li>Memory impairment (short/long term)</li>
                    <li>Need for supervision with ADLs</li>
                    <li>Signs of dehydration</li>
                    <li>Potential for confusion</li>
                  </ul>
                </div>

                <div className="mb-2">
                  <h5 className="font-semibold">Analyze Cues:</h5>
                  <ul className="list-disc ml-8">
                    <li>Assess cognitive status (mini-mental)</li>
                    <li>Evaluate hydration status</li>
                    <li>Consider medication effects</li>
                  </ul>
                </div>

                <div className="mb-2">
                  <h5 className="font-semibold">Prioritize Cues:</h5>
                  <ul className="list-disc ml-8">
                    <li>Address acute cognitive changes if present</li>
                    <li>Prioritize hydration needs</li>
                    <li>Assess safety concerns</li>
                  </ul>
                </div>

                <div className="mb-2">
                  <h5 className="font-semibold">Solutions:</h5>
                  <ul className="list-disc ml-8">
                    <li>Maintain consistent daily schedule</li>
                    <li>Keep oriented to time, place, person</li>
                    <li>Provide calendar and clock within sight</li>
                    <li>Speak calmly and avoid excitement</li>
                  </ul>
                </div>

                <div className="mb-2">
                  <h5 className="font-semibold">Actions:</h5>
                  <ul className="list-disc ml-8">
                    <li>Monitor vital signs</li>
                    <li>Maintain orientation cues</li>
                    <li>Ensure adequate hydration</li>
                    <li>Assess medication regimen</li>
                  </ul>
                </div>

                <div className="mb-2">
                  <h5 className="font-semibold">Evaluate Outcomes:</h5>
                  <ul className="list-disc ml-8">
                    <li>Monitor cognitive status consistency</li>
                    <li>Assess ADL completion</li>
                    <li>Document hydration status</li>
                    <li>Evaluate caregiver reports</li>
                  </ul>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-bold mb-4">
                  Interactive Activity: Next-Generation NCLEX (NGN) - Bowtie
                  Question
                </h3>
                <BowTieQuestionActivity
                  onComplete={() => {
                    setProgress({
                      ...progress,
                      module3: Math.max(progress.module3, 50),
                    });
                  }}
                />
              </div>
            </div>
          ),
        },
      ],
    },
    {
      id: "psychosocial",
      title: "Psychosocial Aspects of Aging",
      icon: <Brain />,
      content: null,
      submodules: [
        {
          id: "loss-grief",
          title: "Loss and Grief",
          content: (
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-4">
                Psychosocial Aspects of Aging: Loss and Grief
              </h2>

              <h3 className="text-xl font-bold mb-3">Key Concepts</h3>

              <div className="mb-6">
                <p className="mb-4">
                  Loss includes loss of functional ability, self-image changes,
                  and death of significant others. Each loss can potentially
                  cause grief. Grief is individual and influenced by cultural
                  factors. Support systems are crucial during bereavement.
                </p>

                <ul className="list-disc ml-8 mb-4">
                  <li>
                    Loss includes loss of functional ability, decreased
                    self-image, and death of significant others (family members,
                    friends, or pets)
                  </li>
                  <li>
                    Loss is a universal, incontestable event of the human
                    experience
                  </li>
                  <li>
                    Regardless of the loss, each event has the potential to
                    cause grief and the process called bereavement or mourning
                  </li>
                  <li>
                    Grief is an individual response and is different depending
                    on social and cultural norms
                  </li>
                  <li>
                    Losses may be compound (e.g., relocation, loss of support
                    network, economic changes, and/or role changes), causing
                    bereavement overload
                  </li>
                  <li>
                    Losses can make the older adult prone to emotional and
                    mental stress, depression, and substance abuse
                  </li>
                </ul>
              </div>

              <h3 className="text-xl font-bold mt-6 mb-3">
                Understanding Loss and Grief in Older Adults
              </h3>

              <div className="mb-6">
                <p className="mb-4">
                  Family bereavement support is essential because survivors are
                  at an increased risk for illness or death. Normal responses to
                  grief can be physical, psychological, cognitive, and/or
                  spiritual. Uncomplicated grief is a dynamic, pervasive, and
                  highly individualized process. Individuals who are overwhelmed
                  or remain interminably in the state of grief without
                  progression through the mourning process to completion may be
                  experiencing complicated grief.
                </p>

                <p className="mb-4">
                  When the nurse identifies complicated grief, it should be
                  reported so that a referral for help can be made to the
                  correct provider, such as a bereavement counselor.
                </p>
              </div>

              <div className="bg-amber-50 p-4 rounded-lg border border-amber-200 mb-6">
                <h3 className="font-bold text-amber-800 mb-2">
                  Differentiating Normal vs. Complicated Grief
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2">Normal Grief</h4>
                    <ul className="list-disc ml-4">
                      <li>Gradual adjustment to the loss</li>
                      <li>Decreased intensity of emotions over time</li>
                      <li>
                        Ability to remember positive aspects of what was lost
                      </li>
                      <li>
                        Gradual reengagement in daily activities and
                        relationships
                      </li>
                      <li>Maintains basic self-care</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Complicated Grief</h4>
                    <ul className="list-disc ml-4">
                      <li>Prolonged intense grief reactions</li>
                      <li>
                        Persistent yearning and preoccupation with the loss
                      </li>
                      <li>Difficulty accepting the loss</li>
                      <li>Avoidance of reminders of the loss</li>
                      <li>Persistent bitterness or anger</li>
                      <li>
                        Diminished sense of identity or feeling that life is
                        meaningless
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-bold mt-6 mb-3">
                Case Study: Mrs. Anderson, 81-year-old Widow
              </h3>

              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 mb-6">
                <p className="mb-4">
                  Mrs. Anderson, 81, lost her husband of 58 years three months
                  ago. She has stopped attending her weekly bridge club and
                  church services. Her daughter reports she often finds her
                  mother crying and not eating regular meals.
                </p>

                <h4 className="font-bold mt-4 mb-2">
                  Clinical Judgment Process:
                </h4>

                <div className="mb-2">
                  <h5 className="font-semibold">Recognize Cues:</h5>
                  <ul className="list-disc ml-8">
                    <li>Recent significant loss</li>
                    <li>Social withdrawal</li>
                    <li>Crying episodes</li>
                    <li>Altered eating patterns</li>
                  </ul>
                </div>

                <div className="mb-2">
                  <h5 className="font-semibold">Analyze Cues:</h5>
                  <ul className="list-disc ml-8">
                    <li>Assess for normal versus complicated grief</li>
                    <li>Evaluate depression risk</li>
                    <li>Consider impact on daily functioning</li>
                  </ul>
                </div>

                <div className="mb-2">
                  <h5 className="font-semibold">Prioritize Cues:</h5>
                  <ul className="list-disc ml-8">
                    <li>Determine risk level for depression</li>
                    <li>Assess nutritional status impact</li>
                    <li>Evaluate social support availability</li>
                  </ul>
                </div>

                <div className="mb-2">
                  <h5 className="font-semibold">Solutions:</h5>
                  <ul className="list-disc ml-8">
                    <li>Maintain engagement in social activities</li>
                    <li>Refer to bereavement counseling if needed</li>
                    <li>Encourage expression of emotions</li>
                    <li>Promote self-care activities</li>
                  </ul>
                </div>

                <div className="mb-2">
                  <h5 className="font-semibold">Actions:</h5>
                  <ul className="list-disc ml-8">
                    <li>Screen for depression</li>
                    <li>Monitor nutritional intake</li>
                    <li>Facilitate connection with support groups</li>
                    <li>Educate family about grief process</li>
                  </ul>
                </div>

                <div className="mb-2">
                  <h5 className="font-semibold">Evaluate Outcomes:</h5>
                  <ul className="list-disc ml-8">
                    <li>Track re-engagement with social activities</li>
                    <li>Monitor emotional expression</li>
                    <li>Assess nutritional status improvement</li>
                  </ul>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-bold mb-4">
                  Interactive Activity: Assessing Grief Responses
                </h3>
                <GriefAssessmentActivity
                  onComplete={() => {
                    setProgress({
                      ...progress,
                      module3: Math.max(progress.module3, 100),
                    });
                  }}
                />
              </div>
            </div>
          ),
        },
      ],
    },
    {
      id: "clinical-decision",
      title: "Clinical Decision-Making: Putting it All Together",
      icon: <HelpCircle />,
      content: null,
      submodules: [
        {
          id: "bowtie-approach",
          title: 'The "Bowtie Question" Approach to Clinical Judgment',
          content: (
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-4">
                The "Bowtie Question" Approach to Clinical Judgment
              </h2>

              <p className="mb-6">
                The NCLEX Next-Generation (NGN) examination uses "Bowtie
                Questions" to assess clinical judgment. This format requires you
                to:
              </p>

              <ul className="list-disc ml-8 mb-6">
                <li>
                  Identify which potential condition the client is most likely
                  experiencing
                </li>
                <li>Select appropriate actions to take</li>
                <li>Determine parameters to monitor</li>
              </ul>

              <div className="bg-amber-50 p-4 rounded-lg border border-amber-200 mb-6">
                <h3 className="font-bold text-amber-800 mb-2">
                  Bowtie Question Structure
                </h3>
                <p className="mb-2">
                  A bowtie question has a central "knot" that represents the
                  client's condition, with "wings" extending to the left and
                  right:
                </p>
                <div className="flex justify-center my-4">
                  <div className="flex items-center">
                    <div className="border border-gray-300 rounded p-2 bg-blue-100 w-32 text-center">
                      <p className="font-semibold">Nursing Actions</p>
                    </div>
                    <div className="border-t-2 border-gray-400 w-16"></div>
                    <div className="border border-gray-300 rounded p-2 bg-amber-100 w-32 text-center">
                      <p className="font-semibold">Potential Conditions</p>
                    </div>
                    <div className="border-t-2 border-gray-400 w-16"></div>
                    <div className="border border-gray-300 rounded p-2 bg-green-100 w-32 text-center">
                      <p className="font-semibold">Parameters to Monitor</p>
                    </div>
                  </div>
                </div>
                <p>
                  For this type of question, you'll need to analyze the client's
                  case information, determine the most likely condition, select
                  appropriate nursing actions, and identify relevant monitoring
                  parameters.
                </p>
              </div>

              <h3 className="text-xl font-bold mt-6 mb-3">Practice Example</h3>

              <div className="mb-6">
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 mb-4">
                  <h4 className="font-bold mb-2">Medical Record:</h4>
                  <p>
                    Mr. James, 76-year-old male with dementia in long-term care
                    facility, dependent for ADLs, concentrated urine, dry skin.
                  </p>
                </div>

                <p className="mb-2">Complete the diagram by selecting:</p>
                <ol className="list-decimal ml-8 mb-4">
                  <li>
                    Potential Condition: Constipation or Dehydration or UTI
                  </li>
                  <li>
                    Actions to Take: Assist in feeding patient, Monitor I & O,
                    Increase fluid intake
                  </li>
                  <li>
                    Parameters to Monitor: Oriented to time, person, and place;
                    &gt;1000 cc fluid intake per day, Urine color and
                    concentration
                  </li>
                </ol>
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-bold mb-4">
                  Interactive Activity: Bowtie Question Practice
                </h3>
                <BowtiePracticeActivity
                  onComplete={() => {
                    setProgress({
                      ...progress,
                      module4: Math.max(progress.module4, 50),
                    });
                  }}
                />
              </div>
            </div>
          ),
        },
        {
          id: "integrated-case",
          title: "Integrated Case Study: Mrs. Lopez",
          content: (
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-4">
                Integrated Case Study: Mrs. Lopez
              </h2>

              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 mb-6">
                <p className="mb-4">
                  Mrs. Lopez, 88, has been admitted to your medical unit with
                  dehydration, confusion, and a UTI. She has a history of
                  hypertension, osteoporosis, and mild cognitive impairment.
                  During your assessment, you notice she is disoriented to time
                  and place, has dry skin with poor turgor, concentrated urine,
                  and is reluctant to walk due to dizziness when standing.
                </p>
              </div>

              <h3 className="text-xl font-bold mb-3">Your Challenge</h3>

              <ul className="list-disc ml-8 mb-6">
                <li>Identify the key cues across multiple body systems</li>
                <li>
                  Analyze how these cues interact with age-related changes
                </li>
                <li>Prioritize interventions based on immediate needs</li>
                <li>
                  Develop a comprehensive care plan addressing:
                  <ul className="list-disc ml-8">
                    <li>Hydration status</li>
                    <li>Infection treatment</li>
                    <li>Cognitive orientation</li>
                    <li>Fall prevention</li>
                    <li>Mobility maintenance</li>
                  </ul>
                </li>
                <li>Determine appropriate evaluation metrics</li>
              </ul>

              <h3 className="text-xl font-bold mb-3">Systems Involved</h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <h4 className="font-semibold text-blue-800 mb-2">
                    Neurologic/Cognitive
                  </h4>
                  <ul className="list-disc ml-4">
                    <li>Confusion</li>
                    <li>Disorientation</li>
                    <li>Mild cognitive impairment (pre-existing)</li>
                  </ul>
                </div>

                <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                  <h4 className="font-semibold text-green-800 mb-2">
                    Genitourinary
                  </h4>
                  <ul className="list-disc ml-4">
                    <li>UTI</li>
                    <li>Concentrated urine</li>
                    <li>Possible decreased renal function</li>
                  </ul>
                </div>

                <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
                  <h4 className="font-semibold text-amber-800 mb-2">
                    Cardiovascular
                  </h4>
                  <ul className="list-disc ml-4">
                    <li>Hypertension (pre-existing)</li>
                    <li>Orthostatic hypotension (dizziness)</li>
                    <li>Dehydration affecting blood pressure</li>
                  </ul>
                </div>

                <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                  <h4 className="font-semibold text-purple-800 mb-2">
                    Integumentary
                  </h4>
                  <ul className="list-disc ml-4">
                    <li>Dry skin</li>
                    <li>Poor skin turgor</li>
                    <li>Risk for skin breakdown</li>
                  </ul>
                </div>

                <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                  <h4 className="font-semibold text-red-800 mb-2">
                    Musculoskeletal
                  </h4>
                  <ul className="list-disc ml-4">
                    <li>Osteoporosis (pre-existing)</li>
                    <li>Reluctance to walk</li>
                    <li>Fall risk</li>
                  </ul>
                </div>

                <div className="bg-teal-50 p-4 rounded-lg border border-teal-200">
                  <h4 className="font-semibold text-teal-800 mb-2">
                    Fluid/Electrolyte
                  </h4>
                  <ul className="list-disc ml-4">
                    <li>Dehydration</li>
                    <li>Potential electrolyte imbalances</li>
                    <li>Poor fluid intake</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-xl font-bold mb-3">
                Clinical Judgment Process
              </h3>

              <div className="bg-white p-4 rounded-lg border border-gray-300 mb-6">
                <h4 className="font-bold mb-2">1. Recognize Cues</h4>
                <ul className="list-disc ml-6">
                  <li>Age: 88 years old with multiple chronic conditions</li>
                  <li>Presenting problems: Dehydration, confusion, UTI</li>
                  <li>
                    Physical assessment findings: Disorientation, dry skin, poor
                    turgor, concentrated urine, dizziness when standing
                  </li>
                  <li>
                    Past medical history: Hypertension, osteoporosis, mild
                    cognitive impairment
                  </li>
                </ul>

                <h4 className="font-bold mt-4 mb-2">2. Analyze Cues</h4>
                <ul className="list-disc ml-6">
                  <li>
                    Dehydration is likely causing or exacerbating confusion
                  </li>
                  <li>
                    UTI in older adults often presents with confusion rather
                    than typical symptoms
                  </li>
                  <li>
                    Orthostatic hypotension may be related to dehydration and
                    medications
                  </li>
                  <li>
                    Fall risk is increased due to multiple factors (dizziness,
                    confusion, osteoporosis)
                  </li>
                  <li>
                    Age-related decreased thirst sensation may have contributed
                    to dehydration
                  </li>
                </ul>

                <h4 className="font-bold mt-4 mb-2">3. Prioritize Concerns</h4>
                <ol className="list-decimal ml-6">
                  <li>Dehydration - immediate fluid restoration needed</li>
                  <li>UTI - antibiotic treatment</li>
                  <li>Confusion/disorientation - safety risk</li>
                  <li>Fall risk - immediate safety measures</li>
                  <li>
                    Mobility maintenance - important but after acute issues
                    addressed
                  </li>
                </ol>

                <h4 className="font-bold mt-4 mb-2">4. Solutions</h4>
                <ul className="list-disc ml-6">
                  <li>IV or oral fluid rehydration based on severity</li>
                  <li>Appropriate antibiotic therapy for UTI</li>
                  <li>Frequent orientation techniques</li>
                  <li>Fall precautions implementation</li>
                  <li>Gradual mobilization with assistance</li>
                  <li>Environmental modifications for safety</li>
                </ul>

                <h4 className="font-bold mt-4 mb-2">5. Actions</h4>
                <ul className="list-disc ml-6">
                  <li>
                    Administer prescribed IV fluids and monitor intake/output
                  </li>
                  <li>
                    Administer antibiotics as ordered and monitor for
                    effectiveness
                  </li>
                  <li>
                    Implement orientation strategies (clock, calendar, familiar
                    objects)
                  </li>
                  <li>Assist with ambulation and install bed/chair alarms</li>
                  <li>
                    Monitor vital signs, especially for orthostatic changes
                  </li>
                  <li>Consult with physical therapy for mobility plan</li>
                </ul>

                <h4 className="font-bold mt-4 mb-2">6. Evaluate Outcomes</h4>
                <ul className="list-disc ml-6">
                  <li>
                    Improved hydration status (skin turgor, urine concentration,
                    lab values)
                  </li>
                  <li>Resolution of UTI symptoms</li>
                  <li>Improved orientation and cognitive status</li>
                  <li>No falls or injury</li>
                  <li>Improved mobility and independence</li>
                </ul>
              </div>

              <h3 className="text-xl font-bold mb-3">Reflection Questions</h3>

              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 mb-6">
                <ol className="list-decimal ml-6">
                  <li className="mb-2">
                    How do Mrs. Lopez's symptoms in one body system affect other
                    systems?
                  </li>
                  <li className="mb-2">
                    Which interventions should take priority and why?
                  </li>
                  <li className="mb-2">
                    What age-specific considerations should guide your care
                    plan?
                  </li>
                  <li className="mb-2">
                    How would your approach differ if Mrs. Lopez had severe
                    dementia?
                  </li>
                </ol>
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-bold mb-4">
                  Interactive Activity: Comprehensive Care Planning
                </h3>
                <ComprehensiveCareActivity
                  onComplete={() => {
                    setProgress({
                      ...progress,
                      module4: Math.max(progress.module4, 100),
                    });
                  }}
                />
              </div>
            </div>
          ),
        },
      ],
    },
    {
      id: "special-considerations",
      title: "Special Considerations in Gerontologic Nursing",
      icon: <Thermometer />,
      content: null,
      submodules: [
        {
          id: "polypharmacy",
          title: "Polypharmacy and Medication Management",
          content: (
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-4">
                Polypharmacy and Medication Management
              </h2>

              <h3 className="text-xl font-bold mb-3">Key Concepts</h3>

              <ul className="list-disc ml-8 mb-6">
                <li>Decreased renal clearance affects medication metabolism</li>
                <li>Higher risk for adverse drug reactions</li>
                <li>Need for regular medication review</li>
                <li>Challenges with medication adherence</li>
              </ul>

              <p className="mb-4">
                As people age, the total number of functioning glomeruli
                decreases by nearly 40% until renal function has been reduced by
                nearly 50%. Age-related changes in medication metabolism
                include:
              </p>

              <div className="bg-amber-50 p-4 rounded-lg border border-amber-200 mb-6">
                <ol className="list-decimal ml-6">
                  <li>
                    These drugs remain active longer in an older person's
                    system.
                  </li>
                  <li>
                    As people age, the total number of functioning glomeruli
                    decreases by nearly 40% until renal function has been
                    reduced by nearly 50%.
                  </li>
                  <li>
                    Drug levels may be more potent, indicating a need to
                    adjust/reduce the dose and frequency of administration.
                  </li>
                </ol>
              </div>

              <h3 className="text-xl font-bold mt-6 mb-3">
                Polypharmacy Risks in Older Adults
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <h4 className="font-bold mb-2">Physiological Factors</h4>
                  <ul className="list-disc ml-4">
                    <li>Decreased liver metabolism</li>
                    <li>Decreased renal excretion</li>
                    <li>Changes in body composition (less water, more fat)</li>
                    <li>Altered receptor sensitivity</li>
                    <li>Blood-brain barrier changes</li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <h4 className="font-bold mb-2">Medication-Related Risks</h4>
                  <ul className="list-disc ml-4">
                    <li>Drug-drug interactions</li>
                    <li>Drug-disease interactions</li>
                    <li>
                      Cascade prescribing (treating side effects with more
                      medications)
                    </li>
                    <li>Inappropriate dosing</li>
                    <li>Medication adherence challenges</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-xl font-bold mt-6 mb-3">Beers Criteria</h3>

              <p className="mb-4">
                The Beers Criteria, developed by the American Geriatrics
                Society, identifies potentially inappropriate medications for
                older adults. These medications should be avoided or used with
                caution because the risks outweigh the benefits for most older
                adults.
              </p>

              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 mb-6">
                <h4 className="font-bold text-blue-800 mb-2">
                  Common Medication Classes in Beers Criteria
                </h4>
                <ul className="list-disc ml-6">
                  <li>
                    First-generation antihistamines (diphenhydramine,
                    hydroxyzine)
                  </li>
                  <li>Certain antipsychotics</li>
                  <li>Benzodiazepines</li>
                  <li>Non-benzodiazepine hypnotics (zolpidem, eszopiclone)</li>
                  <li>Certain anticholinergics</li>
                  <li>Non-COX-selective NSAIDs</li>
                  <li>Muscle relaxants</li>
                </ul>
              </div>

              <h3 className="text-xl font-bold mt-6 mb-3">
                Nursing Considerations for Medication Management
              </h3>

              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 mb-6">
                <ol className="list-decimal ml-6">
                  <li className="mb-2">
                    <span className="font-semibold">
                      Comprehensive Assessment:
                    </span>{" "}
                    Review all medications (prescription, OTC, supplements)
                  </li>
                  <li className="mb-2">
                    <span className="font-semibold">
                      Medication Reconciliation:
                    </span>{" "}
                    Ensure accurate medication lists across care transitions
                  </li>
                  <li className="mb-2">
                    <span className="font-semibold">Monitoring:</span> Assess
                    for adverse effects, therapeutic efficacy, and adherence
                  </li>
                  <li className="mb-2">
                    <span className="font-semibold">Education:</span> Provide
                    clear instructions and rationale for medications
                  </li>
                  <li className="mb-2">
                    <span className="font-semibold">Simplification:</span> Work
                    with providers to simplify regimens when possible
                  </li>
                  <li className="mb-2">
                    <span className="font-semibold">Adherence Aids:</span>{" "}
                    Recommend pill organizers, alarms, or apps as appropriate
                  </li>
                </ol>
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-bold mb-4">
                  Clinical Judgment Exercise: Medication Review
                </h3>
                <p className="mb-4">
                  Review the medication list for a typical older adult with four
                  chronic conditions. Identify potential interactions,
                  inappropriate medications based on Beers Criteria, and
                  strategies to improve medication management.
                </p>
                <MedicationReviewActivity
                  onComplete={() => {
                    setProgress({
                      ...progress,
                      module5: Math.max(progress.module5, 50),
                    });
                  }}
                />
              </div>
            </div>
          ),
        },
        {
          id: "fall-prevention",
          title: "Fall Prevention and Safety",
          content: (
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-4">
                Fall Prevention and Safety
              </h2>

              <h3 className="text-xl font-bold mb-3">Key Concepts</h3>

              <ul className="list-disc ml-8 mb-6">
                <li>
                  Falls result from cardiovascular, musculoskeletal, and
                  neurologic changes
                </li>
                <li>Environmental factors play significant role</li>
                <li>Fear of falling can limit activity and increase risk</li>
                <li>Comprehensive assessment needed</li>
              </ul>

              <p className="mb-4">
                Falls are the result of cardiovascular changes, musculoskeletal
                system changes, and neurologic system changes.
              </p>

              <div className="bg-amber-50 p-4 rounded-lg border border-amber-200 mb-6">
                <h3 className="font-bold text-amber-800 mb-2">
                  Fall Risk Factors in Older Adults
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2">Intrinsic Factors</h4>
                    <ul className="list-disc ml-4">
                      <li>Age-related changes in gait and balance</li>
                      <li>Muscle weakness</li>
                      <li>Vision impairment</li>
                      <li>Cognitive impairment</li>
                      <li>
                        Chronic conditions (arthritis, Parkinson's, stroke)
                      </li>
                      <li>Postural hypotension</li>
                      <li>Medication effects</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Extrinsic Factors</h4>
                    <ul className="list-disc ml-4">
                      <li>Poor lighting</li>
                      <li>Loose rugs or cluttered walkways</li>
                      <li>Absence of grab bars or handrails</li>
                      <li>Inappropriate footwear</li>
                      <li>Uneven surfaces</li>
                      <li>Inadequate assistive devices</li>
                      <li>Weather conditions (ice, rain)</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-bold mt-6 mb-3">
                Fall Prevention Strategies
              </h3>

              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 mb-6">
                <h4 className="font-bold mb-2">
                  Multifactorial Approach to Fall Prevention:
                </h4>
                <ol className="list-decimal ml-6">
                  <li className="mb-2">
                    <span className="font-semibold">Assessment:</span>{" "}
                    Comprehensive fall risk assessment
                  </li>
                  <li className="mb-2">
                    <span className="font-semibold">
                      Environmental Modifications:
                    </span>
                    <ul className="list-disc ml-6">
                      <li>Install adequate lighting</li>
                      <li>Install grab bars in bathrooms</li>
                      <li>
                        Ensure proper footwear that supports the foot and
                        contributes to balance
                      </li>
                      <li>
                        Place a bell on any resident cats (cats move quickly and
                        can get underfoot)
                      </li>
                      <li>Paint the edges of stairs a bright color</li>
                    </ul>
                  </li>
                  <li className="mb-2">
                    <span className="font-semibold">Physical Activity:</span>
                    <ul className="list-disc ml-6">
                      <li>Encourage regular, low-impact exercise</li>
                      <li>
                        Establish muscle-strengthening program with small
                        weights
                      </li>
                      <li>
                        Encourage regular exercise inclusive of balance,
                        weight-bearing, and low-resistance training
                      </li>
                    </ul>
                  </li>
                  <li className="mb-2">
                    <span className="font-semibold">Medication Review:</span>{" "}
                    Identify medications that increase fall risk
                  </li>
                  <li className="mb-2">
                    <span className="font-semibold">Education:</span>
                    <ul className="list-disc ml-6">
                      <li>
                        Teach to change positions slowly to avoid orthostatic
                        hypotension
                      </li>
                      <li>
                        Teach clients not to back up but to turn around to move
                        in the direction they wish to go
                      </li>
                      <li>
                        Teach clients to walk looking straight ahead instead of
                        looking down at their feet to optimize balance
                      </li>
                    </ul>
                  </li>
                  <li className="mb-2">
                    <span className="font-semibold">
                      Appropriate Assistive Devices:
                    </span>{" "}
                    Proper fitting and use of walkers, canes, etc.
                  </li>
                  <li className="mb-2">
                    <span className="font-semibold">
                      Vision and Hearing Corrections:
                    </span>{" "}
                    Regular check-ups and proper use of aids
                  </li>
                </ol>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 mb-6">
                <h3 className="font-bold text-blue-800 mb-2">
                  Standardized Fall Risk Assessment Tools
                </h3>
                <ul className="list-disc ml-6">
                  <li>
                    <span className="font-semibold">Morse Fall Scale:</span>{" "}
                    Assesses six risk factors including history of falling,
                    secondary diagnosis, ambulatory aid, IV/heparin lock, gait,
                    and mental status
                  </li>
                  <li>
                    <span className="font-semibold">
                      STRATIFY (St. Thomas Risk Assessment Tool in Falling
                      Elderly Inpatients):
                    </span>{" "}
                    Five-item tool that assesses risk factors such as prior
                    falls, agitation, visual impairment, frequent toileting, and
                    transfer/mobility deficits
                  </li>
                  <li>
                    <span className="font-semibold">
                      Hendrich II Fall Risk Model:
                    </span>{" "}
                    Assesses risk factors including confusion/disorientation,
                    depression, altered elimination, dizziness, male gender,
                    antiepileptic/benzodiazepine use, and performance on the
                    "Get Up and Go" test
                  </li>
                </ul>
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-bold mb-4">
                  Clinical Judgment Exercise: Fall Risk Assessment
                </h3>
                <p className="mb-4">
                  Conduct a fall risk assessment using a standardized tool.
                  Develop a personalized fall prevention plan addressing
                  patient-specific risk factors.
                </p>
                <FallPreventionActivity
                  onComplete={() => {
                    setProgress({
                      ...progress,
                      module5: Math.max(progress.module5, 100),
                    });
                  }}
                />
              </div>
            </div>
          ),
        },
      ],
    },
  ];

  // Main module navigation structure
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
      {/* Sidebar Navigation */}
      {showSidebar && (
        <div className="w-full md:w-64 bg-gray-800 md:min-h-screen text-white p-4">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold">Module Navigation</h2>
            <button
              className="md:hidden text-white"
              onClick={() => setShowSidebar(false)}
            >
              <X size={20} />
            </button>
          </div>

          <div className="space-y-4">
            {modules.map((module, moduleIndex) => (
              <div key={moduleIndex} className="space-y-1">
                <button
                  className={`flex items-center w-full text-left p-2 rounded transition ${
                    currentModule === moduleIndex
                      ? "bg-blue-600"
                      : "hover:bg-gray-700"
                  }`}
                  onClick={() => {
                    setCurrentModule(moduleIndex);
                    setCurrentSubmodule(0);
                    setShowSidebar(false);
                  }}
                >
                  <div className="mr-2">{module.icon}</div>
                  <span>{module.title}</span>
                </button>

                {module.submodules.length > 0 &&
                  currentModule === moduleIndex && (
                    <div className="ml-6 space-y-1">
                      {module.submodules.map((submodule, subIndex) => (
                        <button
                          key={subIndex}
                          className={`w-full text-left p-1 pl-4 rounded transition ${
                            currentSubmodule === subIndex
                              ? "bg-blue-500"
                              : "hover:bg-gray-700"
                          }`}
                          onClick={() => {
                            setCurrentSubmodule(subIndex);
                            setShowSidebar(false);
                          }}
                        >
                          {submodule.title}
                        </button>
                      ))}
                    </div>
                  )}
              </div>
            ))}
          </div>

          <div className="mt-8">
            <h3 className="font-semibold mb-2">Module Progress</h3>
            <div className="space-y-2">
              <div>
                <p className="text-sm mb-1">Module 1</p>
                <div className="w-full bg-gray-700 rounded-full h-2.5">
                  <div
                    className="bg-green-600 h-2.5 rounded-full"
                    style={{ width: `${progress.module1}%` }}
                  ></div>
                </div>
              </div>
              <div>
                <p className="text-sm mb-1">Module 2</p>
                <div className="w-full bg-gray-700 rounded-full h-2.5">
                  <div
                    className="bg-green-600 h-2.5 rounded-full"
                    style={{ width: `${progress.module2}%` }}
                  ></div>
                </div>
              </div>
              <div>
                <p className="text-sm mb-1">Module 3</p>
                <div className="w-full bg-gray-700 rounded-full h-2.5">
                  <div
                    className="bg-green-600 h-2.5 rounded-full"
                    style={{ width: `${progress.module3}%` }}
                  ></div>
                </div>
              </div>
              <div>
                <p className="text-sm mb-1">Module 4</p>
                <div className="w-full bg-gray-700 rounded-full h-2.5">
                  <div
                    className="bg-green-600 h-2.5 rounded-full"
                    style={{ width: `${progress.module4}%` }}
                  ></div>
                </div>
              </div>
              <div>
                <p className="text-sm mb-1">Module 5</p>
                <div className="w-full bg-gray-700 rounded-full h-2.5">
                  <div
                    className="bg-green-600 h-2.5 rounded-full"
                    style={{ width: `${progress.module5}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Content Area */}
      <div className="flex-1">
        {/* Top Navigation Bar */}
        <div className="bg-white border-b p-4 flex justify-between items-center">
          <button className="md:hidden" onClick={() => setShowSidebar(true)}>
            <GripVertical size={20} />
          </button>

          <h1 className="text-xl font-bold">
            Gerontologic Nursing: Clinical Judgment in Practice
          </h1>

          <div className="flex space-x-2">
            <button
              className={`p-2 rounded ${
                currentModule === 0 && currentSubmodule === 0
                  ? "text-gray-400"
                  : "text-blue-600 hover:bg-blue-50"
              }`}
              onClick={() => {
                if (currentSubmodule > 0) {
                  setCurrentSubmodule(currentSubmodule - 1);
                } else if (currentModule > 0) {
                  setCurrentModule(currentModule - 1);
                  setCurrentSubmodule(
                    modules[currentModule - 1].submodules.length - 1
                  );
                }
              }}
              disabled={currentModule === 0 && currentSubmodule === 0}
            >
              <ChevronLeft size={20} />
            </button>

            <button
              className={`p-2 rounded ${
                currentModule === modules.length - 1 &&
                currentSubmodule ===
                  modules[currentModule].submodules.length - 1
                  ? "text-gray-400"
                  : "text-blue-600 hover:bg-blue-50"
              }`}
              onClick={() => {
                if (
                  currentSubmodule <
                  modules[currentModule].submodules.length - 1
                ) {
                  setCurrentSubmodule(currentSubmodule + 1);
                } else if (currentModule < modules.length - 1) {
                  setCurrentModule(currentModule + 1);
                  setCurrentSubmodule(0);
                }
              }}
              disabled={
                currentModule === modules.length - 1 &&
                currentSubmodule ===
                  modules[currentModule].submodules.length - 1
              }
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="p-4">
          {/* Display current module content */}
          {modules[currentModule].content && (
            <div>{modules[currentModule].content}</div>
          )}

          {/* Display current submodule content if no main module content */}
          {!modules[currentModule].content &&
            modules[currentModule].submodules[currentSubmodule].content && (
              <div>
                {modules[currentModule].submodules[currentSubmodule].content}
              </div>
            )}

          {/* Navigation buttons at bottom of content */}
          <div className="mt-8 flex justify-between">
            <button
              className={`flex items-center px-4 py-2 rounded ${
                currentModule === 0 && currentSubmodule === 0
                  ? "bg-gray-300 text-gray-600"
                  : "bg-blue-600 text-white hover:bg-blue-700"
              }`}
              onClick={() => {
                if (currentSubmodule > 0) {
                  setCurrentSubmodule(currentSubmodule - 1);
                } else if (currentModule > 0) {
                  setCurrentModule(currentModule - 1);
                  setCurrentSubmodule(
                    modules[currentModule - 1].submodules.length - 1
                  );
                }
              }}
              disabled={currentModule === 0 && currentSubmodule === 0}
            >
              <ChevronLeft className="mr-1" size={16} />
              Previous
            </button>

            <button
              className={`flex items-center px-4 py-2 rounded ${
                currentModule === modules.length - 1 &&
                currentSubmodule ===
                  modules[currentModule].submodules.length - 1
                  ? "bg-gray-300 text-gray-600"
                  : "bg-blue-600 text-white hover:bg-blue-700"
              }`}
              onClick={() => {
                if (
                  currentSubmodule <
                  modules[currentModule].submodules.length - 1
                ) {
                  setCurrentSubmodule(currentSubmodule + 1);
                } else if (currentModule < modules.length - 1) {
                  setCurrentModule(currentModule + 1);
                  setCurrentSubmodule(0);
                }
              }}
              disabled={
                currentModule === modules.length - 1 &&
                currentSubmodule ===
                  modules[currentModule].submodules.length - 1
              }
            >
              Next
              <ChevronRight className="ml-1" size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GerontologicNursingModule;
