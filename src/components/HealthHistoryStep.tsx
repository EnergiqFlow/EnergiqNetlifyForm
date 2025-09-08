import React from 'react';

interface FormData {
  personalInfo: any;
  currentWellness: any;
  lifestyle: any;
  healthHistory: {
    symptomsBegin: string;
    causedBy: string;
    previousTreatments: string;
    medications: string;
    allergies: string;
  };
  goals: any;
  signature: any;
}

interface Props {
  formData: FormData;
  setFormData: (data: FormData) => void;
}

const HealthHistoryStep: React.FC<Props> = ({ formData, setFormData }) => {
  const updateHealthHistory = (field: string, value: string) => {
    setFormData({
      ...formData,
      healthHistory: {
        ...formData.healthHistory,
        [field]: value
      }
    });
  };

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-light text-slate-800 mb-2">Health History</h2>
        <p className="text-slate-600">Help us understand your health background</p>
      </div>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">
            When did your current symptoms/concerns first begin? *
          </label>
          <textarea
            value={formData.healthHistory?.symptomsBegin || ''}
            onChange={(e) => updateHealthHistory('symptomsBegin', e.target.value)}
            className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
            rows={3}
            placeholder="Please describe when your symptoms started..."
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">
            What do you believe may have caused or contributed to your current condition?
          </label>
          <textarea
            value={formData.healthHistory?.causedBy || ''}
            onChange={(e) => updateHealthHistory('causedBy', e.target.value)}
            className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
            rows={3}
            placeholder="Please describe any potential causes..."
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">
            Have you received any previous treatments for your condition? If yes, please describe:
          </label>
          <textarea
            value={formData.healthHistory?.previousTreatments || ''}
            onChange={(e) => updateHealthHistory('previousTreatments', e.target.value)}
            className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
            rows={3}
            placeholder="Please list any previous treatments, therapies, or interventions..."
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">
            Are you currently taking any medications or supplements?
          </label>
          <textarea
            value={formData.healthHistory?.medications || ''}
            onChange={(e) => updateHealthHistory('medications', e.target.value)}
            className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
            rows={3}
            placeholder="Please list all current medications and supplements..."
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">
            Do you have any allergies or medical conditions we should be aware of?
          </label>
          <textarea
            value={formData.healthHistory?.allergies || ''}
            onChange={(e) => updateHealthHistory('allergies', e.target.value)}
            className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
            rows={3}
            placeholder="Please list any allergies, medical conditions, or important health information..."
          />
        </div>
      </div>
    </div>
  );
};

export default HealthHistoryStep;