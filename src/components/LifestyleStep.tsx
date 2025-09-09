import React from 'react';

interface FormData {
  personalInfo: any;
  currentWellness: any;
  lifestyle: {
    stressLevel: string;
    happinessLevel: string;
    sleepHours: string;
    sleepQuality: string;
  };
  healthHistory: any;
  goals: any;
  signature: any;
}

interface Props {
  formData: FormData;
  setFormData: (data: FormData) => void;
}

const LifestyleStep: React.FC<Props> = ({ formData, setFormData }) => {
  const updateLifestyle = (field: string, value: string) => {
    setFormData({
      ...formData,
      lifestyle: {
        ...formData.lifestyle,
        [field]: value
      }
    });
  };
  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-light text-slate-800 mb-2">Lifestyle Assessment</h2>
        <p className="text-slate-600">Understanding your lifestyle helps us provide better care</p>
      </div>

      <div className="space-y-8">
        {/* Stress Level */}
        <div className="bg-slate-50 p-6 rounded-lg">
          <label className="block text-sm font-medium text-slate-700 mb-3">
            Current Stress Level (1 = No Stress, 10 = Extremely Stressed)
          </label>
          <div className="space-y-3">
            <div className="flex items-center justify-between text-sm text-slate-600">
              <span>No Stress</span>
              <span>Extremely Stressed</span>
            </div>
            <div className="grid grid-cols-10 gap-2">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                <label key={num} className="flex flex-col items-center cursor-pointer">
                  <input
                    type="radio"
                    name="stressLevel"
                    value={num.toString()}
                    checked={formData.lifestyle?.stressLevel === num.toString()}
                    onChange={(e) => updateLifestyle('stressLevel', e.target.value)}
                    className="mb-1 h-4 w-4 text-amber-600 focus:ring-amber-500"
                  />
                  <span className="text-sm font-medium text-slate-700">{num}</span>
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* Happiness Level */}
        <div className="bg-slate-50 p-6 rounded-lg">
          <label className="block text-sm font-medium text-slate-700 mb-3">
            Current Happiness Level (1 = Very Unhappy, 10 = Very Happy)
          </label>
          <div className="space-y-3">
            <div className="flex items-center justify-between text-sm text-slate-600">
              <span>Very Unhappy</span>
              <span>Very Happy</span>
            </div>
            <div className="grid grid-cols-10 gap-2">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                <label key={num} className="flex flex-col items-center cursor-pointer">
                  <input
                    type="radio"
                    name="happinessLevel"
                    value={num.toString()}
                    checked={formData.lifestyle?.happinessLevel === num.toString()}
                    onChange={(e) => updateLifestyle('happinessLevel', e.target.value)}
                    className="mb-1 h-4 w-4 text-amber-600 focus:ring-amber-500"
                  />
                  <span className="text-sm font-medium text-slate-700">{num}</span>
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* Sleep */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Hours of sleep per night</label>
            <select
              value={formData.lifestyle?.sleepHours || ''}
              onChange={(e) => updateLifestyle('sleepHours', e.target.value)}
              className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
            >
              <option value="">Select hours</option>
              <option value="less-than-5">Less than 5 hours</option>
              <option value="5-6">5-6 hours</option>
              <option value="7-8">7-8 hours</option>
              <option value="9-plus">9+ hours</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Sleep quality</label>
            <select
              value={formData.lifestyle?.sleepQuality || ''}
              onChange={(e) => updateLifestyle('sleepQuality', e.target.value)}
              className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
            >
              <option value="">Select quality</option>
              <option value="poor">Poor</option>
              <option value="fair">Fair</option>
              <option value="good">Good</option>
              <option value="excellent">Excellent</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};


export default LifestyleStep;
