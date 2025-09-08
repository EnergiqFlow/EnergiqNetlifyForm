import React from 'react';

interface CurrentWellnessSectionProps {
  formData: any;
  handleInputChange: (field: string, value: string) => void;
  handleCheckboxChange: (field: string, value: string, checked: boolean) => void;
  bodySymptoms: string[];
}

const CurrentWellnessSection: React.FC<CurrentWellnessSectionProps> = ({ 
  formData, handleInputChange, handleCheckboxChange, bodySymptoms 
}) => {
  const RatingScale = ({ label, field, lowLabel, highLabel }: any) => (
    <div className="space-y-3">
      <label className="block text-slate-700 font-medium">{label}</label>
      <div className="flex items-center justify-between">
        <span className="text-sm text-slate-500">{lowLabel}</span>
        <div className="rating-scale flex-1 mx-4">
          {[1,2,3,4,5,6,7,8,9,10].map((num) => (
            <div 
              key={num}
              className={`rating-number ${formData[field] === num.toString() ? 'active' : ''}`}
              onClick={() => handleInputChange(field, num.toString())}
            >
              {num}
            </div>
          ))}
        </div>
        <span className="text-sm text-slate-500">{highLabel}</span>
      </div>
    </div>
  );

  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-light text-slate-800 mb-8 text-center">2. Current Wellness Assessment</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <RatingScale 
          label="On a scale of 1-10 how much stress is in your life?" 
          field="stressLevel" 
          lowLabel="No stress" 
          highLabel="Very stressed" 
        />
        <RatingScale 
          label="On a scale of 1-10 how happy are you?" 
          field="happinessLevel" 
          lowLabel="Not happy" 
          highLabel="Very happy" 
        />
      </div>
      


      <div>
        <label className="block text-slate-700 font-medium mb-4">What is your body telling you right now? Please tick any symptoms you are experiencing right now.</label>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 max-h-96 overflow-y-auto border border-slate-200 rounded-lg p-4">
          {bodySymptoms.map((symptom) => (
            <label key={symptom} className="flex items-center space-x-3 cursor-pointer hover:bg-slate-50 p-2 rounded">
              <input 
                type="checkbox" 
                name="bodySymptoms" 
                value={symptom} 
                checked={(formData.bodySymptoms && Array.isArray(formData.bodySymptoms) && formData.bodySymptoms.includes(symptom)) || false}
                onChange={(e) => handleCheckboxChange('bodySymptoms', symptom, e.target.checked)} 
                className="w-4 h-4 rounded border-slate-300 text-amber-600 focus:ring-amber-500" 
              />
              <span className="text-sm text-slate-700">{symptom}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-slate-700 font-medium mb-3">What is your body telling you? Please explain and describe any symptoms and what is happening in your body.</label>
        <textarea
          value={formData.currentFeeling || ''}
          onChange={(e) => handleInputChange('currentFeeling', e.target.value)}
          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
          rows={4}
          placeholder="Describe in detail what you're experiencing in your body, any pain, discomfort, or other symptoms..."
          required
        />
      </div>
    </div>
  );
};

export default CurrentWellnessSection;