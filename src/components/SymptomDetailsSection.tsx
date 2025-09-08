import React from 'react';

interface SymptomDetailsSectionProps {
  formData: any;
  handleInputChange: (field: string, value: string) => void;
  handleCheckboxChange: (field: string, value: string, checked: boolean) => void;
}

const SymptomDetailsSection: React.FC<SymptomDetailsSectionProps> = ({ 
  formData, handleInputChange, handleCheckboxChange 
}) => {
  const impactAreas = ['Work', 'Sleep', 'Routine'];

  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-light text-slate-800 mb-8 text-center">3. Symptom Details</h2>
      
      <div>
        <label className="block text-slate-700 font-medium mb-3">When did this start?</label>
        <textarea
          value={formData.symptomsStart || ''}
          onChange={(e) => handleInputChange('symptomsStart', e.target.value)}
          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500"
          rows={3}
          placeholder="Please describe when your symptoms first began..."
        />
      </div>

      <div>
        <label className="block text-slate-700 font-medium mb-3">What do you think the cause is?</label>
        <textarea
          value={formData.causedBy || ''}
          onChange={(e) => handleInputChange('causedBy', e.target.value)}
          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500"
          rows={3}
          placeholder="What do you believe may have caused these symptoms?"
        />
      </div>

      <div>
        <label className="block text-slate-700 font-medium mb-3">Does this impact: (Select all that apply)</label>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {impactAreas.map((area) => (
            <label key={area} className="flex items-center space-x-3 cursor-pointer p-3 border border-slate-300 rounded-lg hover:bg-slate-50">
              <input 
                type="checkbox" 
                value={area} 
                checked={formData.impactAreas?.includes(area) || false} 
                onChange={(e) => handleCheckboxChange('impactAreas', area, e.target.checked)} 
                className="w-4 h-4 rounded border-slate-300 text-amber-600 focus:ring-amber-500" 
              />
              <span className="text-sm text-slate-700">{area}</span>
            </label>
          ))}
        </div>
        <div className="mt-3">
          <input
            type="text"
            value={formData.otherImpact || ''}
            onChange={(e) => handleInputChange('otherImpact', e.target.value)}
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500"
            placeholder="Other (please specify)"
          />
        </div>
      </div>

      <div>
        <label className="block text-slate-700 font-medium mb-3">What is this stopping you from doing?</label>
        <textarea
          value={formData.stoppingYou || ''}
          onChange={(e) => handleInputChange('stoppingYou', e.target.value)}
          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500"
          rows={3}
          placeholder="Describe activities or things you can no longer do because of these symptoms..."
        />
      </div>

      <div>
        <label className="block text-slate-700 font-medium mb-3">What activities aggravate your symptoms?</label>
        <textarea
          value={formData.aggravatingActivities || ''}
          onChange={(e) => handleInputChange('aggravatingActivities', e.target.value)}
          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500"
          rows={3}
          placeholder="List activities that make your symptoms worse..."
        />
      </div>

      <div>
        <label className="block text-slate-700 font-medium mb-3">What are you looking to get out of Spinal Flow?</label>
        <textarea
          value={formData.treatmentGoals || ''}
          onChange={(e) => handleInputChange('treatmentGoals', e.target.value)}
          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500"
          rows={4}
          placeholder="Describe your goals and expectations for treatment..."
        />
      </div>

      <div>
        <label className="block text-slate-700 font-medium mb-3">Are you ready to make changes in your life in order to heal, even if some of these changes are inconvenient to your lifestyle?</label>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {['Yes', 'No', 'Maybe'].map((option) => (
            <label key={option} className="flex items-center space-x-3 cursor-pointer p-3 border border-slate-300 rounded-lg hover:bg-slate-50">
              <input 
                type="radio" 
                name="readyForChanges" 
                value={option} 
                checked={formData.readyForChanges === option} 
                onChange={(e) => handleInputChange('readyForChanges', e.target.value)} 
                className="w-4 h-4 text-amber-600 border-slate-300 focus:ring-amber-500" 
              />
              <span className="text-sm text-slate-700">{option}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SymptomDetailsSection;