import React from 'react';

interface Props {
  formData: any;
  handleInputChange: (field: string, value: string) => void;
}

const GoalsSection: React.FC<Props> = ({ formData, handleInputChange }) => {
  const createRatingScale = (field: string, label: string) => (
    <div className="space-y-3">
      <label className="block text-sm font-medium text-slate-700">{label}</label>
      <div className="rating-scale">
        <span className="text-sm text-slate-600 min-w-0">Not ready</span>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
          <div
            key={num}
            className={`rating-number ${formData[field] == num ? 'active' : ''}`}
            onClick={() => handleInputChange(field, num.toString())}
          >
            {num}
          </div>
        ))}
        <span className="text-sm text-slate-600 min-w-0">Very ready</span>
      </div>
    </div>
  );

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-light text-slate-800 mb-2">Treatment Goals</h2>
        <p className="text-slate-600">Help us understand what you hope to achieve</p>
      </div>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">
            What are your main goals for treatment? *
          </label>
          <textarea
            name="treatmentGoals"
            value={formData.treatmentGoals || ''}
            onChange={(e) => handleInputChange('treatmentGoals', e.target.value)}
            className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
            rows={3}
            placeholder="Please describe what you hope to achieve through treatment..."
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">
            How is your current condition impacting your daily life?
          </label>
          <textarea
            name="dailyLifeImpact"
            value={formData.dailyLifeImpact || ''}
            onChange={(e) => handleInputChange('dailyLifeImpact', e.target.value)}
            className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
            rows={3}
            placeholder="Please describe how your symptoms affect your daily activities..."
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">
            What activities would you most like to improve or return to?
          </label>
          <textarea
            name="activitiesToImprove"
            value={formData.activitiesToImprove || ''}
            onChange={(e) => handleInputChange('activitiesToImprove', e.target.value)}
            className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
            rows={3}
            placeholder="Please list activities you'd like to improve or return to..."
          />
        </div>

        {createRatingScale('readinessLevel', 'How ready are you to make lifestyle changes to support your healing? *')}

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">
            Is there anything else you'd like us to know?
          </label>
          <textarea
            name="additionalInfo"
            value={formData.additionalInfo || ''}
            onChange={(e) => handleInputChange('additionalInfo', e.target.value)}
            className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
            rows={3}
            placeholder="Any additional information you'd like to share..."
          />
        </div>
      </div>
    </div>
  );
};

export default GoalsSection;