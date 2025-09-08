import React from 'react';

interface SymptomDetailsStepProps {
  formData: any;
  setFormData: (data: any) => void;
}

const SymptomDetailsStep: React.FC<SymptomDetailsStepProps> = ({ formData, setFormData }) => {
  const updateSymptomDetails = (field: string, value: string) => {
    setFormData({
      ...formData,
      symptomDetails: {
        ...formData.symptomDetails,
        [field]: value
      }
    });
  };

  const handleSymptomCheckbox = (symptom: string, checked: boolean) => {
    const currentSymptoms = formData.symptomDetails?.currentSymptoms || [];
    let newSymptoms;
    if (checked) {
      newSymptoms = [...currentSymptoms, symptom];
    } else {
      newSymptoms = currentSymptoms.filter((s: string) => s !== symptom);
    }
    setFormData({
      ...formData,
      symptomDetails: {
        ...formData.symptomDetails,
        currentSymptoms: newSymptoms
      }
    });
  };

  const symptoms = [
    'Dizziness', 'Fainting', 'Loss of memory', 'Tension and irritability', 'Headaches', 'Tinnitus',
    'Migraine', 'Hearing problems', 'Loss of smell/taste', 'Light bothers eyes', 'Insomnia/sleeping issues',
    'Neck pain/stiffness', 'Thyroid issues', 'Numbness of fingers', 'Shoulder pain', 'Cold hands/feet',
    'Nervousness', 'Pins and needles in arms', 'Weight problems', 'Cold/flu symptoms', 'Chest pain',
    'Allergies', 'Cold sweats', 'Shortness of breath', 'Pain in mid-spine', 'Stomach/digestive issues',
    'Constipation/diarrhoea', 'Sciatica', 'Menstrual pain', 'Lower back pain', 'Balance loss',
    'Numb toes', 'Stress', 'Depression', 'Chronic fatigue', 'Pins and needles Legs/Feet',
    'Knee pain', 'Fibromyalgia'
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-slate-800 mb-6">What is your body telling you?</h2>
      
      {/* Stress Level */}
      <div className="bg-slate-50 p-6 rounded-lg">
        <label className="block text-slate-700 font-medium mb-3">On a scale of 1-10 how much stress is in your life?</label>
        <div className="flex items-center space-x-4">
          <span className="text-sm text-slate-500">Low (1)</span>
          <div className="flex space-x-2">
            {[1,2,3,4,5,6,7,8,9,10].map(rating => (
              <label key={rating} className="flex items-center">
                <input
                  type="radio"
                  name="stressLevel"
                  value={rating}
                  checked={formData.symptomDetails?.stressLevel === rating.toString()}
                  onChange={(e) => updateSymptomDetails('stressLevel', e.target.value)}
                  className="w-4 h-4 text-amber-600 border-slate-300 focus:ring-amber-500"
                />
                <span className="ml-1 text-sm text-slate-700">{rating}</span>
              </label>
            ))}
          </div>
          <span className="text-sm text-slate-500">High (10)</span>
        </div>
      </div>

      {/* Happiness Level */}
      <div className="bg-slate-50 p-6 rounded-lg">
        <label className="block text-slate-700 font-medium mb-3">On a scale of 1-10 how happy are you?</label>
        <div className="flex items-center space-x-4">
          <span className="text-sm text-slate-500">Low (1)</span>
          <div className="flex space-x-2">
            {[1,2,3,4,5,6,7,8,9,10].map(rating => (
              <label key={rating} className="flex items-center">
                <input
                  type="radio"
                  name="happinessLevel"
                  value={rating}
                  checked={formData.symptomDetails?.happinessLevel === rating.toString()}
                  onChange={(e) => updateSymptomDetails('happinessLevel', e.target.value)}
                  className="w-4 h-4 text-amber-600 border-slate-300 focus:ring-amber-500"
                />
                <span className="ml-1 text-sm text-slate-700">{rating}</span>
              </label>
            ))}
          </div>
          <span className="text-sm text-slate-500">High (10)</span>
        </div>
      </div>

      {/* Symptom Checklist */}
      <div>
        <label className="block text-slate-700 font-medium mb-4">What is your body telling you right now? Please tick any symptoms you are experiencing right now.</label>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 max-h-96 overflow-y-auto border border-slate-200 rounded-lg p-4">
          {symptoms.map((symptom) => (
            <label key={symptom} className="flex items-center space-x-3 cursor-pointer p-2 hover:bg-slate-50 rounded">
              <input
                type="checkbox"
                checked={Array.isArray(formData.symptomDetails?.currentSymptoms) && formData.symptomDetails.currentSymptoms.includes(symptom)}
                onChange={(e) => handleSymptomCheckbox(symptom, e.target.checked)}
                className="w-4 h-4 text-amber-600 border-slate-300 rounded focus:ring-amber-500"
              />
              <span className="text-sm text-slate-700">{symptom}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-slate-700 font-medium mb-3">Please describe any additional symptoms or concerns:</label>
        <textarea
          value={formData.symptomDetails?.bodySymptoms || ''}
          onChange={(e) => updateSymptomDetails('bodySymptoms', e.target.value)}
          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
          rows={4}
          placeholder="Describe any other symptoms or details about your current health concerns..."
        />
      </div>
    </div>
  );
};

export default SymptomDetailsStep;