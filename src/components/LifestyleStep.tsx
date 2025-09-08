import React from 'react';

interface FormData {
  personalInfo: any;
  currentWellness: any;
  lifestyle: {
    stressLevel: string;
    happinessLevel: string;
    sleepHours: string;
    sleepQuality: string;
    exerciseFrequency: string;
    exerciseType: string;
    dietType: string;
    waterIntake: string;
    smokingStatus: string;
    alcoholConsumption: string;
    workEnvironment: string;
    relationshipStatus: string;
    consumptions: string[];
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

  const handleCheckboxChange = (field: string, value: string, checked: boolean) => {
    const currentArray = formData.lifestyle[field as keyof typeof formData.lifestyle] as string[] || [];
    let newArray;
    if (checked) {
      newArray = [...currentArray, value];
    } else {
      newArray = currentArray.filter(item => item !== value);
    }
    setFormData({
      ...formData,
      lifestyle: {
        ...formData.lifestyle,
        [field]: newArray
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

        {/* Exercise */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Exercise frequency</label>
            <select
              value={formData.lifestyle?.exerciseFrequency || ''}
              onChange={(e) => updateLifestyle('exerciseFrequency', e.target.value)}
              className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
            >
              <option value="">Select frequency</option>
              <option value="never">Never</option>
              <option value="rarely">Rarely (1-2 times/month)</option>
              <option value="sometimes">Sometimes (1-2 times/week)</option>
              <option value="regularly">Regularly (3-4 times/week)</option>
              <option value="daily">Daily</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Type of exercise</label>
            <input
              type="text"
              value={formData.lifestyle?.exerciseType || ''}
              onChange={(e) => updateLifestyle('exerciseType', e.target.value)}
              className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
              placeholder="e.g., Walking, Gym, Yoga, Swimming"
            />
          </div>
        </div>

        {/* Diet and Water */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Diet type</label>
            <select
              value={formData.lifestyle?.dietType || ''}
              onChange={(e) => updateLifestyle('dietType', e.target.value)}
              className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
            >
              <option value="">Select diet type</option>
              <option value="standard">Standard/Mixed</option>
              <option value="vegetarian">Vegetarian</option>
              <option value="vegan">Vegan</option>
              <option value="keto">Keto</option>
              <option value="paleo">Paleo</option>
              <option value="mediterranean">Mediterranean</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Daily water intake</label>
            <select
              value={formData.lifestyle?.waterIntake || ''}
              onChange={(e) => updateLifestyle('waterIntake', e.target.value)}
              className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
            >
              <option value="">Select intake</option>
              <option value="less-than-1L">Less than 1L</option>
              <option value="1-2L">1-2 Liters</option>
              <option value="2-3L">2-3 Liters</option>
              <option value="more-than-3L">More than 3L</option>
            </select>
          </div>
        </div>

        {/* Smoking and Alcohol */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Smoking status</label>
            <select
              value={formData.lifestyle?.smokingStatus || ''}
              onChange={(e) => updateLifestyle('smokingStatus', e.target.value)}
              className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
            >
              <option value="">Select status</option>
              <option value="never">Never smoked</option>
              <option value="former">Former smoker</option>
              <option value="occasional">Occasional smoker</option>
              <option value="regular">Regular smoker</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Alcohol consumption</label>
            <select
              value={formData.lifestyle?.alcoholConsumption || ''}
              onChange={(e) => updateLifestyle('alcoholConsumption', e.target.value)}
              className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
            >
              <option value="">Select consumption</option>
              <option value="never">Never</option>
              <option value="rarely">Rarely</option>
              <option value="socially">Socially (1-2 drinks/week)</option>
              <option value="regularly">Regularly (3-7 drinks/week)</option>
              <option value="heavily">Heavily (8+ drinks/week)</option>
            </select>
          </div>
        </div>

        {/* Work Environment and Relationship */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Work environment</label>
            <select
              value={formData.lifestyle?.workEnvironment || ''}
              onChange={(e) => updateLifestyle('workEnvironment', e.target.value)}
              className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
            >
              <option value="">Select environment</option>
              <option value="office-desk">Office/Desk work</option>
              <option value="physical-labor">Physical labor</option>
              <option value="healthcare">Healthcare</option>
              <option value="retail-service">Retail/Service</option>
              <option value="remote-home">Remote/Home</option>
              <option value="outdoor">Outdoor work</option>
              <option value="retired">Retired</option>
              <option value="student">Student</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Relationship status</label>
            <select
              value={formData.lifestyle?.relationshipStatus || ''}
              onChange={(e) => updateLifestyle('relationshipStatus', e.target.value)}
              className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
            >
              <option value="">Select status</option>
              <option value="single">Single</option>
              <option value="partnered">In a relationship</option>
              <option value="married">Married</option>
              <option value="divorced">Divorced</option>
              <option value="widowed">Widowed</option>
              <option value="prefer-not-to-say">Prefer not to say</option>
            </select>
          </div>
        </div>

        {/* Consumption Habits */}
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-4">Do you consume any of the following regularly? (Select all that apply)</label>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {['Caffeine', 'Alcohol', 'Tobacco', 'Processed foods', 'Sugar', 'None of the above'].map((item) => (
              <label key={item} className="flex items-center space-x-3 cursor-pointer p-3 border border-slate-300 rounded-lg hover:bg-slate-50 transition-colors">
                <input 
                  type="checkbox" 
                  name="consumptions" 
                  value={item} 
                  checked={(formData.lifestyle.consumptions && Array.isArray(formData.lifestyle.consumptions) && formData.lifestyle.consumptions.includes(item)) || false}
                  onChange={(e) => handleCheckboxChange('consumptions', item, e.target.checked)} 
                  className="w-4 h-4 rounded border-slate-300 text-amber-600 focus:ring-amber-500" 
                />
                <span className="text-sm text-slate-700">{item}</span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LifestyleStep;
