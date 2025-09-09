import React, { useState } from 'react';
import PersonalInfoStep from './PersonalInfoStep';
import CurrentWellnessStep from './CurrentWellnessStep';
import LifestyleStep from './LifestyleStep';
import SymptomDetailsStep from './SymptomDetailsStep';
import HealthHistoryStepNew from './HealthHistoryStepNew';
import GoalsStep from './GoalsStep';
import SignatureStep from './SignatureStep';

interface FormData {
  personalInfo: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    ageRange: string;
    weightRange: string;
    gender: string;
  };
  currentWellness: {
    currentFeeling: string;
    overallWellness: string;
    mainConcern: string;
    duration: string;
  };
  lifestyle: {
    stressLevel: string;
    happinessLevel: string;
    sleepHours: string;
    sleepQuality: string;
  };
  symptomDetails: {
    currentSymptoms: string[];
    bodySymptoms: string;
    dailyImpact: string;
    symptomSeverity: string;
  };
  healthHistory: {
    symptomsBegin: string;
    causedBy: string;
    previousTreatments: string;
    medications: string;
    allergies: string;
    injuries: string;
    surgeries: string;
    sleepIssues: string;
    significantEvents: string;
    childhoodIllnesses: string;
  };
  goals: {
    mainGoals: string;
    dailyLifeImpact: string;
    hopingToImprove: string;
    readinessLevel: string;
    additionalInfo: string;
    spinalFlowGoals: string;
    readyToChange: string;
  };
  signature: {
    consentTreatment: boolean;
    consentInfo: boolean;
    understandSymptoms: boolean;
    understandProcess: boolean;
    consentDecision: boolean;
    readUnderstood: boolean;
    photoPermission: string;
    fullName: string;
    date: string;
  };
}

const WellnessForm: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    personalInfo: { firstName: '', lastName: '', email: '', phone: '', ageRange: '', weightRange: '', gender: '' },
    currentWellness: { currentFeeling: '', overallWellness: '', mainConcern: '', duration: '' },
    lifestyle: { stressLevel: '', happinessLevel: '', sleepHours: '', sleepQuality: '' },
    symptomDetails: { currentSymptoms: [], bodySymptoms: '', dailyImpact: '', symptomSeverity: '' },
    healthHistory: { symptomsBegin: '', causedBy: '', previousTreatments: '', medications: '', allergies: '', injuries: '', surgeries: '', sleepIssues: '', significantEvents: '', childhoodIllnesses: '' },
    goals: { mainGoals: '', dailyLifeImpact: '', hopingToImprove: '', readinessLevel: '', additionalInfo: '', spinalFlowGoals: '', readyToChange: '' },
    signature: { consentTreatment: false, consentInfo: false, understandSymptoms: false, understandProcess: false, consentDecision: false, readUnderstood: false, photoPermission: '', fullName: '', date: new Date().toISOString().split('T')[0] }
  });

  const totalSteps = 8;
  const progressPercentage = ((currentStep + 1) / totalSteps) * 100;

  const nextStep = () => {
    if (currentStep < totalSteps - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async () => {
    try {
      const formPayload = new FormData();
      formPayload.append('form-name', 'wellness-questionnaire');
      Object.entries(formData).forEach(([section, data]) => {
        if (typeof data === 'object') {
          Object.entries(data).forEach(([key, value]) => {
            if (Array.isArray(value)) {
              formPayload.append(key, value.join(', '));
            } else {
              formPayload.append(key, String(value));
            }
          });
        }
      });

      await fetch('/', {
        method: 'POST',
        body: formPayload
      });
      
      setIsSubmitted(true);
    } catch (error) {
      console.error('Submission error:', error);
      alert('There was an error submitting your form. Please try again.');
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-amber-800 via-slate-600 to-slate-800 flex items-center justify-center p-4">
        <div className="bg-white bg-opacity-95 rounded-xl shadow-2xl p-8 text-center max-w-2xl">
          <h3 className="text-3xl font-light text-slate-800 mb-4">Thank You!</h3>
          <p className="text-lg text-slate-600 mb-4">Your Spinal Flow Wellness Questionnaire has been submitted successfully.</p>
          <p className="text-xl font-medium text-amber-700 mb-6">Let's get back to YOU!!</p>
          <div className="mt-8">
            <img 
              src="https://d64gsuwffb70l.cloudfront.net/68bcdf7e981a91b2529aeb09_1757236074675_bc42d12b.jpg" 
              alt="What to Expect in a Spinal Flow Session with Mel - Energiq Flow" 
              className="w-full max-w-lg mx-auto rounded-lg shadow-lg"
            />
            <p className="text-sm text-slate-600 mt-4">What to expect in your Spinal Flow session with Mel</p>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-800 via-slate-600 to-slate-800">
      <div className="max-w-4xl mx-auto px-4 py-8">
        
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((step, index) => (
              <div
                key={step}
                className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300 ${
                  index < currentStep
                    ? 'bg-amber-800 text-white transform scale-1.1'
                    : index === currentStep
                    ? 'bg-amber-600 text-white transform scale-1.1'
                    : 'bg-slate-300 text-slate-600'
                }`}
              >
                {step}
              </div>
            ))}
          </div>
          <div className="w-full bg-slate-300 h-2 rounded-full">
            <div 
              className="h-full bg-amber-600 rounded-full transition-all duration-500"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
        </div>

        {/* Form Container */}
        <div className="bg-white bg-opacity-90 rounded-xl shadow-2xl p-8">
          
          {/* Step 1: Welcome */}
          {currentStep === 0 && (
            <div className="text-center space-y-6">
              <div className="relative w-48 h-48 mx-auto">
                <img 
                  src="https://d64gsuwffb70l.cloudfront.net/68bcdf7e981a91b2529aeb09_1757235842476_a949e8a7.PNG" 
                  alt="Energiq FLOW Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h1 className="text-3xl font-light text-slate-800 mb-4">Spinal Flow Wellness Journey</h1>
                <p className="text-lg text-slate-600 italic mb-6">"A little action often spurs a lot of momentum"</p>
                <div className="max-w-2xl mx-auto text-slate-700 space-y-4">
                  <p>Welcome to your wellness journey. There is an innate intelligence inside every human body to grow, repair, and heal itself.</p>
                  <p>The Spinal Flow Technique helps your spine and nervous system release stored stressors, enabling your body's natural healing wisdom to flow freely.</p>
                  <p className="font-medium text-amber-700">Let's find out about you now...</p>
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Personal Info */}
          {currentStep === 1 && (
            <PersonalInfoStep formData={formData} setFormData={setFormData} />
          )}

          {/* Step 3: Current Wellness */}
          {currentStep === 2 && (
            <CurrentWellnessStep formData={formData} setFormData={setFormData} />
          )}

          {/* Step 4: Lifestyle */}
          {currentStep === 3 && (
            <LifestyleStep formData={formData} setFormData={setFormData} />
          )}

          {/* Step 5: Symptom Details */}
          {currentStep === 4 && (
            <SymptomDetailsStep formData={formData} setFormData={setFormData} />
          )}

          {/* Step 6: Health History */}
          {currentStep === 5 && (
            <HealthHistoryStepNew formData={formData} setFormData={setFormData} />
          )}

          {/* Step 7: Goals */}
          {currentStep === 6 && (
            <GoalsStep formData={formData} setFormData={setFormData} />
          )}

          {/* Step 8: Signature */}
          {currentStep === 7 && (
            <SignatureStep formData={formData} setFormData={setFormData} />
          )}

          {/* Navigation */}
          <div className="flex justify-between mt-8">
            <button
              onClick={prevStep}
              disabled={currentStep === 0}
              className="px-6 py-3 bg-slate-200 text-slate-600 rounded-lg hover:bg-slate-300 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Previous
            </button>
            
            {currentStep < totalSteps - 1 ? (
              <button
                onClick={nextStep}
                className="px-6 py-3 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors"
              >
                Next
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
              >
                Submit
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WellnessForm;