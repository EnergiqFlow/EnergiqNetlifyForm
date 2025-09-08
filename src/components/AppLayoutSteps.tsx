import React from 'react';

interface AppLayoutStepsProps {
  currentStep: number;
  formData: any;
  handleInputChange: (field: string, value: string) => void;
  handleCheckboxChange: (field: string, value: string, checked: boolean) => void;
}

const AppLayoutSteps: React.FC<AppLayoutStepsProps> = ({ 
  currentStep, 
  formData, 
  handleInputChange, 
  handleCheckboxChange 
}) => {
  return (
    <>
      {/* Step 1: Personal Information */}
      <div className={`step-content ${currentStep === 1 ? 'active' : ''}`}>
        <h2 className="text-3xl font-light text-slate-800 mb-6 text-center">Personal Information</h2>
        <div className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-slate-700 font-medium mb-2">Full Name *</label>
              <input 
                type="text" 
                name="name" 
                required 
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-orange-500" 
              />
            </div>
            <div>
              <label className="block text-slate-700 font-medium mb-2">Age *</label>
              <input 
                type="number" 
                name="age" 
                required 
                value={formData.age}
                onChange={(e) => handleInputChange('age', e.target.value)}
                className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-orange-500" 
              />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-slate-700 font-medium mb-2">Email *</label>
              <input 
                type="email" 
                name="email" 
                required 
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-orange-500" 
              />
            </div>
            <div>
              <label className="block text-slate-700 font-medium mb-2">Phone *</label>
              <input 
                type="tel" 
                name="phone" 
                required 
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-orange-500" 
              />
            </div>
          </div>
          <div>
            <label className="block text-slate-700 font-medium mb-2">Occupation</label>
            <input 
              type="text" 
              name="occupation" 
              value={formData.occupation}
              onChange={(e) => handleInputChange('occupation', e.target.value)}
              className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-orange-500" 
            />
          </div>
          <div>
            <label className="block text-slate-700 font-medium mb-2">Emergency Contact Name</label>
            <input 
              type="text" 
              name="emergency_contact" 
              value={formData.emergencyContact}
              onChange={(e) => handleInputChange('emergencyContact', e.target.value)}
              className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-orange-500" 
            />
          </div>
          <div>
            <label className="block text-slate-700 font-medium mb-2">Emergency Contact Phone</label>
            <input 
              type="tel" 
              name="emergency_phone" 
              value={formData.emergencyPhone}
              onChange={(e) => handleInputChange('emergencyPhone', e.target.value)}
              className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-orange-500" 
            />
          </div>
        </div>
      </div>

      {/* Step 2: Health History */}
      <div className={`step-content ${currentStep === 2 ? 'active' : ''}`}>
        <h2 className="text-3xl font-light text-slate-800 mb-6 text-center">Health History</h2>
        <div className="space-y-6">
          <div>
            <label className="block text-slate-700 font-medium mb-4">Do you have any of the following conditions? (Select all that apply)</label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {['Diabetes', 'High Blood Pressure', 'Heart Disease', 'Arthritis', 'Depression/Anxiety', 'Autoimmune Disorder'].map((condition) => (
                <label key={condition} className="flex items-center space-x-3">
                  <input 
                    type="checkbox" 
                    name="conditions" 
                    value={condition} 
                    checked={formData.conditions.includes(condition)}
                    onChange={(e) => handleCheckboxChange('conditions', condition, e.target.checked)}
                    className="rounded" 
                  />
                  <span>{condition}</span>
                </label>
              ))}
            </div>
          </div>
          <div>
            <label className="block text-slate-700 font-medium mb-2">Current Medications</label>
            <textarea 
              name="medications" 
              rows={3} 
              placeholder="Please list all current medications and supplements" 
              value={formData.medications}
              onChange={(e) => handleInputChange('medications', e.target.value)}
              className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-orange-500"
            ></textarea>
          </div>
          <div>
            <label className="block text-slate-700 font-medium mb-2">Previous Surgeries or Major Injuries</label>
            <textarea 
              name="surgeries" 
              rows={3} 
              placeholder="Please describe any surgeries or major injuries" 
              value={formData.surgeries}
              onChange={(e) => handleInputChange('surgeries', e.target.value)}
              className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-orange-500"
            ></textarea>
          </div>
          <div>
            <label className="block text-slate-700 font-medium mb-4">Are you currently pregnant or breastfeeding?</label>
            <div className="space-y-2">
              {['No', 'Pregnant', 'Breastfeeding', 'Not Applicable'].map((option) => (
                <label key={option} className="flex items-center space-x-3">
                  <input 
                    type="radio" 
                    name="pregnancy" 
                    value={option} 
                    checked={formData.pregnancy === option}
                    onChange={(e) => handleInputChange('pregnancy', e.target.value)}
                    className="rounded-full" 
                  />
                  <span>{option}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppLayoutSteps;