import React from 'react';

interface LifestyleSectionProps {
  formData: any;
  handleInputChange: (field: string, value: string) => void;
  handleCheckboxChange: (field: string, value: string, checked: boolean) => void;
}

const LifestyleSection: React.FC<LifestyleSectionProps> = ({ 
  formData, handleInputChange, handleCheckboxChange 
}) => {
  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-light text-slate-800 mb-8 text-center">3. Lifestyle & Daily Habits</h2>
      
      <div>
        <label className="block text-slate-700 font-medium mb-4">How would you describe your current activity level?</label>
        <div className="space-y-3">
          {[
            { value: 'sedentary', label: 'Sedentary (little to no exercise)' },
            { value: 'light', label: 'Lightly active (light exercise 1-3 days/week)' },
            { value: 'moderate', label: 'Moderately active (moderate exercise 3-5 days/week)' },
            { value: 'very-active', label: 'Very active (hard exercise 6-7 days/week)' }
          ].map((option) => (
            <label key={option.value} className="flex items-center space-x-3 cursor-pointer p-3 border border-slate-300 rounded-lg hover:bg-slate-50 transition-colors">
              <input 
                type="radio" 
                name="activityLevel" 
                value={option.value} 
                checked={formData.activityLevel === option.value} 
                onChange={(e) => handleInputChange('activityLevel', e.target.value)} 
                className="w-4 h-4 text-amber-600 border-slate-300 focus:ring-amber-500" 
              />
              <span className="text-slate-700">{option.label}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-slate-700 font-medium mb-2">How many hours of sleep do you typically get per night?</label>
        <input 
          type="number" 
          name="sleepHours" 
          min="1" 
          max="12" 
          value={formData.sleepHours} 
          onChange={(e) => handleInputChange('sleepHours', e.target.value)} 
          className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500" 
          placeholder="e.g., 7" 
        />
      </div>

      <div>
        <label className="block text-slate-700 font-medium mb-4">How would you rate your sleep quality?</label>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {['Excellent', 'Good', 'Fair', 'Poor'].map((quality) => (
            <label key={quality} className="flex items-center space-x-2 cursor-pointer p-3 border border-slate-300 rounded-lg hover:bg-slate-50 transition-colors">
              <input 
                type="radio" 
                name="sleepQuality" 
                value={quality} 
                checked={formData.sleepQuality === quality} 
                onChange={(e) => handleInputChange('sleepQuality', e.target.value)} 
                className="w-4 h-4 text-amber-600 border-slate-300 focus:ring-amber-500" 
              />
              <span className="text-sm text-slate-700">{quality}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-slate-700 font-medium mb-4">Do you consume any of the following regularly? (Select all that apply)</label>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {['Caffeine', 'Alcohol', 'Tobacco', 'Processed foods', 'Sugar', 'None of the above'].map((item) => (
            <label key={item} className="flex items-center space-x-3 cursor-pointer p-3 border border-slate-300 rounded-lg hover:bg-slate-50 transition-colors">
              <input 
                type="checkbox" 
                name="consumptions" 
                value={item} 
                checked={(formData.consumptions && Array.isArray(formData.consumptions) && formData.consumptions.includes(item)) || false}
                onChange={(e) => handleCheckboxChange('consumptions', item, e.target.checked)} 
                className="w-4 h-4 rounded border-slate-300 text-amber-600 focus:ring-amber-500" 
              />
              <span className="text-sm text-slate-700">{item}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LifestyleSection;