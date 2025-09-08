import React from 'react';

interface FormData {
  personalInfo: any;
  currentWellness: any;
  lifestyle: any;
  healthHistory: any;
  goals: {
    mainGoals: string;
    dailyLifeImpact: string;
    hopingToImprove: string;
    readinessLevel: string;
    additionalInfo: string;
    spinalFlowGoals: string;
    readyToChange: string;
  };
  signature: any;
}

interface Props {
  formData: FormData;
  setFormData: (data: FormData) => void;
}

const GoalsStep: React.FC<Props> = ({ formData, setFormData }) => {
  const updateGoals = (field: string, value: string) => {
    setFormData({
      ...formData,
      goals: {
        ...formData.goals,
        [field]: value
      }
    });
  };

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-light text-slate-800 mb-2">Goals & Expectations</h2>
        <p className="text-slate-600">Help us understand your wellness goals and readiness for change</p>
      </div>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">
            What are you looking to get out of Spinal Flow? *
          </label>
          <textarea
            value={formData.goals?.spinalFlowGoals || ''}
            onChange={(e) => updateGoals('spinalFlowGoals', e.target.value)}
            className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
            rows={4}
            placeholder="Please describe what you hope to achieve through Spinal Flow treatment..."
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-3">
            Are you ready to make changes? *
          </label>
          <div className="space-y-3">
            {[
              { value: 'very-ready', label: 'Yes, I am very ready to make changes' },
              { value: 'somewhat-ready', label: 'I am somewhat ready to make changes' },
              { value: 'unsure', label: 'I am unsure about making changes' },
              { value: 'not-ready', label: 'I am not ready to make changes right now' }
            ].map((option) => (
              <label key={option.value} className="flex items-center space-x-3 cursor-pointer p-3 border border-slate-300 rounded-lg hover:bg-slate-50">
                <input
                  type="radio"
                  name="readyToChange"
                  value={option.value}
                  checked={formData.goals?.readyToChange === option.value}
                  onChange={(e) => updateGoals('readyToChange', e.target.value)}
                  className="w-4 h-4 text-amber-600 border-slate-300 focus:ring-amber-500"
                />
                <span className="text-sm text-slate-700">{option.label}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">
            How is your current condition affecting your daily life?
          </label>
          <textarea
            value={formData.goals?.dailyLifeImpact || ''}
            onChange={(e) => updateGoals('dailyLifeImpact', e.target.value)}
            className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
            rows={3}
            placeholder="Please describe how your condition impacts your daily activities..."
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">
            What activities or aspects of life are you hoping to improve or return to?
          </label>
          <textarea
            value={formData.goals?.hopingToImprove || ''}
            onChange={(e) => updateGoals('hopingToImprove', e.target.value)}
            className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
            rows={3}
            placeholder="Please describe what you hope to achieve or return to..."
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">
            Is there anything else you'd like us to know about your health or wellness journey?
          </label>
          <textarea
            value={formData.goals?.additionalInfo || ''}
            onChange={(e) => updateGoals('additionalInfo', e.target.value)}
            className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
            rows={4}
            placeholder="Please share any additional information that might be helpful..."
          />
        </div>
      </div>
    </div>
  );
};

export default GoalsStep;