import React from 'react';

interface Props {
  formData: any;
  handleInputChange: (field: string, value: string) => void;
}

const HealthHistorySection: React.FC<Props> = ({ formData, handleInputChange }) => {
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
            name="symptomsStart"
            value={formData.symptomsStart || ''}
            onChange={(e) => handleInputChange('symptomsStart', e.target.value)}
            className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
            rows={3}
            placeholder="Please describe when your symptoms started..."
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">
            What do you believe may have caused or contributed to your current condition?
          </label>
          <textarea
            name="causedBy"
            value={formData.causedBy || ''}
            onChange={(e) => handleInputChange('causedBy', e.target.value)}
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
            name="previousTreatments"
            value={formData.previousTreatments || ''}
            onChange={(e) => handleInputChange('previousTreatments', e.target.value)}
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
            name="medications"
            value={formData.medications || ''}
            onChange={(e) => handleInputChange('medications', e.target.value)}
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
            name="allergies"
            value={formData.allergies || ''}
            onChange={(e) => handleInputChange('allergies', e.target.value)}
            className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
            rows={3}
            placeholder="Please list any allergies, medical conditions, or important health information..."
          />
        </div>
      </div>
    </div>
  );
};

export default HealthHistorySection;