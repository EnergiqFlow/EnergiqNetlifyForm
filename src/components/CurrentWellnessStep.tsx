import React from 'react';

interface CurrentWellnessStepProps {
  formData: any;
  setFormData: (data: any) => void;
}

const CurrentWellnessStep: React.FC<CurrentWellnessStepProps> = ({ formData, setFormData }) => {
  const updateCurrentWellness = (field: string, value: any) => {
    setFormData({
      ...formData,
      currentWellness: {
        ...formData.currentWellness,
        [field]: value
      }
    });
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-slate-800 mb-6">How are you feeling right now?</h2>
      <p className="text-slate-600 mb-6">Tell us about your current state of health and any symptoms you're experiencing...</p>
      
      <div>
        <label className="block text-slate-700 font-medium mb-3">Please describe how you're feeling today and any symptoms you're experiencing:</label>
        <textarea
          value={formData.currentWellness.currentFeeling || ''}
          onChange={(e) => updateCurrentWellness('currentFeeling', e.target.value)}
          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
          rows={4}
          placeholder="Describe your current physical, emotional, and mental state. Include any pain, discomfort, stress, energy levels, sleep quality, or other concerns you may have..."
        />
      </div>

      <div>
        <label className="block text-slate-700 font-medium mb-3">On a scale of 1-10, how would you rate your overall wellness today?</label>
        <div className="flex items-center space-x-4">
          <span className="text-sm text-slate-500">Poor (1)</span>
          <div className="flex space-x-2">
            {[1,2,3,4,5,6,7,8,9,10].map(rating => (
              <label key={rating} className="flex items-center">
                <input
                  type="radio"
                  name="overallWellness"
                  value={rating}
                  checked={formData.currentWellness.overallWellness === rating.toString()}
                  onChange={(e) => updateCurrentWellness('overallWellness', e.target.value)}
                  className="w-4 h-4 text-amber-600 border-slate-300 focus:ring-amber-500"
                />
                <span className="ml-1 text-sm text-slate-700">{rating}</span>
              </label>
            ))}
          </div>
          <span className="text-sm text-slate-500">Excellent (10)</span>
        </div>
      </div>

      <div>
        <label className="block text-slate-700 font-medium mb-3">What is your main concern or reason for seeking Spinal Flow™ treatment?</label>
        <textarea
          value={formData.currentWellness.mainConcern || ''}
          onChange={(e) => updateCurrentWellness('mainConcern', e.target.value)}
          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
          rows={3}
          placeholder="What would you most like to address or improve through this treatment?"
        />
      </div>

      <div>
        <label className="block text-slate-700 font-medium mb-3">How long have you been experiencing these concerns?</label>
        <select
          value={formData.currentWellness.duration || ''}
          onChange={(e) => updateCurrentWellness('duration', e.target.value)}
          className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500"
        >
          <option value="">Select duration</option>
          <option value="Less than 1 month">Less than 1 month</option>
          <option value="1-3 months">1-3 months</option>
          <option value="3-6 months">3-6 months</option>
          <option value="6-12 months">6-12 months</option>
          <option value="1-2 years">1-2 years</option>
          <option value="2-5 years">2-5 years</option>
          <option value="More than 5 years">More than 5 years</option>
        </select>
      </div>
    </div>
  );
};

export default CurrentWellnessStep;