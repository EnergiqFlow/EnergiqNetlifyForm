import React from 'react';

interface AppLayoutSteps2Props {
  currentStep: number;
  formData: any;
  handleInputChange: (field: string, value: string) => void;
  handleCheckboxChange: (field: string, value: string, checked: boolean) => void;
}

const AppLayoutSteps2: React.FC<AppLayoutSteps2Props> = ({ 
  currentStep, 
  formData, 
  handleInputChange, 
  handleCheckboxChange 
}) => {
  return (
    <>
      {/* Step 3: Current Wellness */}
      <div className={`step-content ${currentStep === 3 ? 'active' : ''}`}>
        <h2 className="text-3xl font-light text-slate-800 mb-6 text-center">Current Wellness</h2>
        <div className="space-y-6">
          <div>
            <label className="block text-slate-700 font-medium mb-4">What symptoms are you currently experiencing? (Select all that apply)</label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {['Back Pain', 'Neck Pain', 'Headaches', 'Fatigue', 'Stress/Anxiety', 'Sleep Issues', 'Digestive Issues', 'Joint Pain'].map((symptom) => (
                <label key={symptom} className="flex items-center space-x-3">
                  <input 
                    type="checkbox" 
                    name="symptoms" 
                    value={symptom} 
                    checked={formData.currentSymptoms.includes(symptom)}
                    onChange={(e) => handleCheckboxChange('currentSymptoms', symptom, e.target.checked)}
                    className="rounded" 
                  />
                  <span>{symptom}</span>
                </label>
              ))}
            </div>
          </div>
          <div>
            <label className="block text-slate-700 font-medium mb-2">Overall Pain Level (0-10)</label>
            <input 
              type="range" 
              name="painLevel" 
              min="0" 
              max="10" 
              value={formData.painLevel} 
              onChange={(e) => handleInputChange('painLevel', e.target.value)}
              className="w-full custom-range" 
            />
            <div className="flex justify-between text-sm text-slate-500 mt-1">
              <span>0 - No Pain</span>
              <span>Current: {formData.painLevel}</span>
              <span>10 - Severe Pain</span>
            </div>
          </div>
          <div>
            <label className="block text-slate-700 font-medium mb-2">How long have you been experiencing these symptoms?</label>
            <select 
              name="symptom_duration" 
              value={formData.symptomDuration}
              onChange={(e) => handleInputChange('symptomDuration', e.target.value)}
              className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-orange-500"
            >
              <option value="">Select duration</option>
              <option value="Less than 1 month">Less than 1 month</option>
              <option value="1-3 months">1-3 months</option>
              <option value="3-6 months">3-6 months</option>
              <option value="6-12 months">6-12 months</option>
              <option value="1-2 years">1-2 years</option>
              <option value="More than 2 years">More than 2 years</option>
            </select>
          </div>
          <div>
            <label className="block text-slate-700 font-medium mb-2">Previous Treatments Tried</label>
            <textarea 
              name="previousTreatments" 
              rows={3} 
              placeholder="Please describe any previous treatments (chiropractic, massage, physiotherapy, etc.)" 
              value={formData.previousTreatments}
              onChange={(e) => handleInputChange('previousTreatments', e.target.value)}
              className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-orange-500"
            ></textarea>
          </div>
        </div>
      </div>

      {/* Step 4: Lifestyle */}
      <div className={`step-content ${currentStep === 4 ? 'active' : ''}`}>
        <h2 className="text-3xl font-light text-slate-800 mb-6 text-center">Lifestyle Assessment</h2>
        <div className="space-y-6">
          <div>
            <label className="block text-slate-700 font-medium mb-2">Stress Level (0-10)</label>
            <input 
              type="range" 
              name="stressLevel" 
              min="0" 
              max="10" 
              value={formData.stressLevel} 
              onChange={(e) => handleInputChange('stressLevel', e.target.value)}
              className="w-full custom-range" 
            />
            <div className="flex justify-between text-sm text-slate-500 mt-1">
              <span>0 - No Stress</span>
              <span>Current: {formData.stressLevel}</span>
              <span>10 - Very Stressed</span>
            </div>
          </div>
          <div>
            <label className="block text-slate-700 font-medium mb-4">Sleep Quality</label>
            <div className="space-y-2">
              {['Excellent', 'Good', 'Fair', 'Poor', 'Very Poor'].map((quality) => (
                <label key={quality} className="flex items-center space-x-3">
                  <input 
                    type="radio" 
                    name="sleepQuality" 
                    value={quality} 
                    checked={formData.sleepQuality === quality}
                    onChange={(e) => handleInputChange('sleepQuality', e.target.value)}
                    className="rounded-full" 
                  />
                  <span>{quality}</span>
                </label>
              ))}
            </div>
          </div>
          <div>
            <label className="block text-slate-700 font-medium mb-4">Exercise Frequency</label>
            <div className="space-y-2">
              {['Daily', '3-5 times per week', '1-2 times per week', 'Rarely', 'Never'].map((frequency) => (
                <label key={frequency} className="flex items-center space-x-3">
                  <input 
                    type="radio" 
                    name="exercise" 
                    value={frequency} 
                    checked={formData.exercise === frequency}
                    onChange={(e) => handleInputChange('exercise', e.target.value)}
                    className="rounded-full" 
                  />
                  <span>{frequency}</span>
                </label>
              ))}
            </div>
          </div>
          <div>
            <label className="block text-slate-700 font-medium mb-2">Work Environment</label>
            <textarea 
              name="workEnvironment" 
              rows={3} 
              placeholder="Describe your typical work environment and daily activities" 
              value={formData.workEnvironment}
              onChange={(e) => handleInputChange('workEnvironment', e.target.value)}
              className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-orange-500"
            ></textarea>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppLayoutSteps2;