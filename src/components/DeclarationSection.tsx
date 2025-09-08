import React from 'react';

interface Props {
  formData: any;
  handleInputChange: (field: string, value: string) => void;
}

const DeclarationSection: React.FC<Props> = ({ formData, handleInputChange }) => {
  const handleConsentChange = (checked: boolean) => {
    handleInputChange('consent', checked.toString());
  };

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-light text-slate-800 mb-2">Declaration & Consent</h2>
        <p className="text-slate-600">Please review and confirm your consent</p>
      </div>

      <div className="space-y-6">
        <div className="bg-slate-50 p-6 rounded-lg">
          <h3 className="font-medium text-slate-800 mb-4">Informed Consent for Spinal Flow Treatment</h3>
          <div className="text-sm text-slate-700 space-y-3">
            <p>I understand that Spinal Flow Technique is a gentle, non-invasive approach that works with the body's natural healing mechanisms.</p>
            <p>I acknowledge that:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>This is not a medical treatment and does not replace medical care</li>
              <li>Results may vary and are not guaranteed</li>
              <li>I should continue with any prescribed medical treatments</li>
              <li>I will inform my practitioner of any changes in my health</li>
            </ul>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">
            Full Name (Electronic Signature) *
          </label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName || ''}
            onChange={(e) => handleInputChange('fullName', e.target.value)}
            className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
            placeholder="Type your full name as electronic signature"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">
            Date *
          </label>
          <input
            type="date"
            name="date"
            value={formData.date || ''}
            onChange={(e) => handleInputChange('date', e.target.value)}
            className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
            required
          />
        </div>

        <div className="space-y-4">
          <div className="flex items-start space-x-3">
            <input
              type="checkbox"
              id="consent"
              checked={formData.consent === 'true'}
              onChange={(e) => handleConsentChange(e.target.checked)}
              className="mt-1 h-4 w-4 text-amber-600 focus:ring-amber-500 border-slate-300 rounded"
              required
            />
            <label htmlFor="consent" className="text-sm text-slate-700">
              I have read and understood the above information and consent to Spinal Flow treatment. *
            </label>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">
            Permission for photos/videos for educational purposes
          </label>
          <div className="space-y-2">
            <label className="flex items-center">
              <input
                type="radio"
                name="photoPermission"
                value="yes"
                checked={formData.photoPermission === 'yes'}
                onChange={(e) => handleInputChange('photoPermission', e.target.value)}
                className="h-4 w-4 text-amber-600 focus:ring-amber-500 border-slate-300"
              />
              <span className="ml-2 text-sm text-slate-700">Yes, I give permission</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="photoPermission"
                value="no"
                checked={formData.photoPermission === 'no'}
                onChange={(e) => handleInputChange('photoPermission', e.target.value)}
                className="h-4 w-4 text-amber-600 focus:ring-amber-500 border-slate-300"
              />
              <span className="ml-2 text-sm text-slate-700">No, I do not give permission</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeclarationSection;