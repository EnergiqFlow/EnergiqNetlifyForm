import React from 'react';

interface PersonalInfoStepProps {
  formData: any;
  setFormData: (data: any) => void;
}

const PersonalInfoStep: React.FC<PersonalInfoStepProps> = ({ formData, setFormData }) => {
  const updatePersonalInfo = (field: string, value: string) => {
    setFormData({
      ...formData,
      personalInfo: {
        ...formData.personalInfo,
        [field]: value
      }
    });
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-slate-800 mb-6">Let's get to know you</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-slate-700 font-medium mb-2">First Name *</label>
          <input
            type="text"
            required
            name="firstName"
            value={formData.personalInfo.firstName || ''}
            onChange={(e) => updatePersonalInfo('firstName', e.target.value)}
            className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
            placeholder="Your first name"
          />
        </div>

        <div>
          <label className="block text-slate-700 font-medium mb-2">Last Name *</label>
          <input
            type="text"
            required
            name="lastName"
            value={formData.personalInfo.lastName || ''}
            onChange={(e) => updatePersonalInfo('lastName', e.target.value)}
            className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
            placeholder="Your last name"
          />
        </div>

        <div>
          <label className="block text-slate-700 font-medium mb-2">Email *</label>
          <input
            type="email"
            required
            name="email"
            value={formData.personalInfo.email || ''}
            onChange={(e) => updatePersonalInfo('email', e.target.value)}
            className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
            placeholder="your.email@example.com"
          />
        </div>

        <div>
          <label className="block text-slate-700 font-medium mb-2">Phone</label>
          <input
            type="tel"
            name="phone"
            value={formData.personalInfo.phone || ''}
            onChange={(e) => updatePersonalInfo('phone', e.target.value)}
            className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
            placeholder="Your phone number"
          />
        </div>
      </div>

      <div>
        <label className="block text-slate-700 font-medium mb-3">Gender Identity</label>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {['Female', 'Male', 'Non-binary', 'Prefer not to say'].map((gender) => (
            <label key={gender} className="flex items-center space-x-2 cursor-pointer p-3 border border-slate-300 rounded-lg hover:bg-slate-50">
              <input
                type="radio"
                name="gender"
                value={gender}
                checked={formData.personalInfo.gender === gender}
                onChange={(e) => updatePersonalInfo('gender', e.target.value)}
                className="w-4 h-4 text-amber-600 border-slate-300 focus:ring-amber-500"
              />
              <span className="text-sm text-slate-700">{gender}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-slate-700 font-medium mb-3">Age Range</label>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {['18-25', '26-50', '51-75', '76+'].map((range) => (
            <label key={range} className="flex items-center space-x-2 cursor-pointer p-3 border border-slate-300 rounded-lg hover:bg-slate-50">
              <input
                type="radio"
                name="ageRange"
                value={range}
                checked={formData.personalInfo.ageRange === range}
                onChange={(e) => updatePersonalInfo('ageRange', e.target.value)}
                className="w-4 h-4 text-amber-600 border-slate-300 focus:ring-amber-500"
              />
              <span className="text-sm text-slate-700">{range}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PersonalInfoStep;