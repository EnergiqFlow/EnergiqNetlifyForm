import React from 'react';

interface PersonalInfoSectionProps {
  formData: any;
  handleInputChange: (field: string, value: string) => void;
}

const PersonalInfoSection: React.FC<PersonalInfoSectionProps> = ({ formData, handleInputChange }) => {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-light text-slate-800 mb-8 text-center">1. Personal Information</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label className="block text-slate-700 font-medium mb-2">First Name *</label>
          <input 
            type="text" 
            name="firstName" 
            required 
            value={formData.firstName} 
            onChange={(e) => handleInputChange('firstName', e.target.value)} 
            className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500" 
            placeholder="Your first name" 
          />
        </div>
        <div>
          <label className="block text-slate-700 font-medium mb-2">Last Name *</label>
          <input 
            type="text" 
            name="lastName" 
            required 
            value={formData.lastName} 
            onChange={(e) => handleInputChange('lastName', e.target.value)} 
            className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500" 
            placeholder="Your last name" 
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
            className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500" 
            placeholder="your.email@example.com" 
          />
        </div>
        <div>
          <label className="block text-slate-700 font-medium mb-2">Phone</label>
          <input 
            type="tel" 
            name="phone" 
            value={formData.phone} 
            onChange={(e) => handleInputChange('phone', e.target.value)} 
            className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500" 
            placeholder="Your phone number" 
          />
        </div>
      </div>
      
      <div>
        <label className="block text-slate-700 font-medium mb-3">Age Range</label>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {['18-25', '26-50', '51-75', '76+'].map((range) => (
            <label key={range} className="flex items-center space-x-2 cursor-pointer p-3 border border-slate-300 rounded-lg hover:bg-slate-50 transition-colors">
              <input 
                type="radio" 
                name="ageRange" 
                value={range} 
                checked={formData.ageRange === range} 
                onChange={(e) => handleInputChange('ageRange', e.target.value)} 
                className="w-4 h-4 text-amber-600 border-slate-300 focus:ring-amber-500" 
              />
              <span className="text-sm text-slate-700">{range}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-slate-700 font-medium mb-3">Weight Range</label>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
          {['<50 kg', '50-69 kg', '70-89 kg', '90-109 kg', '>110 kg'].map((range) => (
            <label key={range} className="flex items-center space-x-2 cursor-pointer p-3 border border-slate-300 rounded-lg hover:bg-slate-50 transition-colors">
              <input 
                type="radio" 
                name="weightRange" 
                value={range} 
                checked={formData.weightRange === range} 
                onChange={(e) => handleInputChange('weightRange', e.target.value)} 
                className="w-4 h-4 text-amber-600 border-slate-300 focus:ring-amber-500" 
              />
              <span className="text-sm text-slate-700">{range}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-slate-700 font-medium mb-3">Recent state of health (current symptoms)</label>
        <p className="text-slate-600 mb-4">Please describe any current symptoms or health concerns you're experiencing...</p>
        <textarea 
          name="currentFeeling" 
          rows={4} 
          value={formData.currentFeeling} 
          onChange={(e) => handleInputChange('currentFeeling', e.target.value)} 
          className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500" 
          placeholder="Describe your current health state and any symptoms..."
        />
      </div>
    </div>
  );
};

export default PersonalInfoSection;