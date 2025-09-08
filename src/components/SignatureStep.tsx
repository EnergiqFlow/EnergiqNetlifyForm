import React from 'react';

interface FormData {
  personalInfo: any;
  currentWellness: any;
  lifestyle: any;
  healthHistory: any;
  goals: any;
  signature: {
    consentTreatment: boolean;
    consentInfo: boolean;
    understandSymptoms: boolean;
    understandProcess: boolean;
    consentDecision: boolean;
    readUnderstood: boolean;
    photoPermission: string;
    fullName: string;
    date: string;
  };
}

interface Props {
  formData: FormData;
  setFormData: (data: FormData) => void;
}

const SignatureStep: React.FC<Props> = ({ formData, setFormData }) => {
  const updateSignature = (field: string, value: string | boolean) => {
    setFormData({
      ...formData,
      signature: {
        ...formData.signature,
        [field]: value
      }
    });
  };

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-light text-slate-800 mb-2">Client Declaration</h2>
        <p className="text-slate-600">Please read and agree to the following statements</p>
      </div>

      <div className="space-y-4">
        <div className="bg-slate-50 p-6 rounded-lg space-y-4">
          <div className="flex items-start space-x-3">
            <input
              type="checkbox"
              id="consentTreatment"
              checked={formData.signature?.consentTreatment || false}
              onChange={(e) => updateSignature('consentTreatment', e.target.checked)}
              className="mt-1 h-4 w-4 text-amber-600 focus:ring-amber-500 border-slate-300 rounded"
            />
            <label htmlFor="consentTreatment" className="text-sm text-slate-700">
              By signing this form I consent to receiving the Spinal Flow technique.
            </label>
          </div>

          <div className="flex items-start space-x-3">
            <input
              type="checkbox"
              id="consentInfo"
              checked={formData.signature?.consentInfo || false}
              onChange={(e) => updateSignature('consentInfo', e.target.checked)}
              className="mt-1 h-4 w-4 text-amber-600 focus:ring-amber-500 border-slate-300 rounded"
            />
            <label htmlFor="consentInfo" className="text-sm text-slate-700">
              I understand the information I provide will only be used by Energiq Spinal Flow.
            </label>
          </div>

          <div className="flex items-start space-x-3">
            <input
              type="checkbox"
              id="understandSymptoms"
              checked={formData.signature?.understandSymptoms || false}
              onChange={(e) => updateSignature('understandSymptoms', e.target.checked)}
              className="mt-1 h-4 w-4 text-amber-600 focus:ring-amber-500 border-slate-300 rounded"
            />
            <label htmlFor="understandSymptoms" className="text-sm text-slate-700">
              I understand that with any healing process and work on my body, my symptoms may worsen before they improve.
            </label>
          </div>

          <div className="flex items-start space-x-3">
            <input
              type="checkbox"
              id="understandProcess"
              checked={formData.signature?.understandProcess || false}
              onChange={(e) => updateSignature('understandProcess', e.target.checked)}
              className="mt-1 h-4 w-4 text-amber-600 focus:ring-amber-500 border-slate-300 rounded"
            />
            <label htmlFor="understandProcess" className="text-sm text-slate-700">
              I understand this technique is designed to help remove stressors from the body to promote healing and health. I understand that results can take time and optimal health can be a process.
            </label>
          </div>

          <div className="flex items-start space-x-3">
            <input
              type="checkbox"
              id="consentDecision"
              checked={formData.signature?.consentDecision || false}
              onChange={(e) => updateSignature('consentDecision', e.target.checked)}
              className="mt-1 h-4 w-4 text-amber-600 focus:ring-amber-500 border-slate-300 rounded"
            />
            <label htmlFor="consentDecision" className="text-sm text-slate-700">
              I have freely decided to undergo the recommended treatment and hereby give my full consent to treatment.
            </label>
          </div>

          <div className="flex items-start space-x-3">
            <input
              type="checkbox"
              id="readUnderstood"
              checked={formData.signature?.readUnderstood || false}
              onChange={(e) => updateSignature('readUnderstood', e.target.checked)}
              className="mt-1 h-4 w-4 text-amber-600 focus:ring-amber-500 border-slate-300 rounded"
            />
            <label htmlFor="readUnderstood" className="text-sm text-slate-700 font-medium">
              I have read and understood the above declaration and give my consent to treatment.
            </label>
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-3">
              Do you give permission for Energiq - Spinal Flow to use your photos/videos for promotional purposes?
            </label>
            <div className="space-y-2">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="photoPermission"
                  value="yes"
                  checked={formData.signature?.photoPermission === 'yes'}
                  onChange={(e) => updateSignature('photoPermission', e.target.value)}
                  className="mr-2 h-4 w-4 text-amber-600 focus:ring-amber-500"
                />
                <span className="text-sm text-slate-700">Yes, I give permission</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="photoPermission"
                  value="no"
                  checked={formData.signature?.photoPermission === 'no'}
                  onChange={(e) => updateSignature('photoPermission', e.target.value)}
                  className="mr-2 h-4 w-4 text-amber-600 focus:ring-amber-500"
                />
                <span className="text-sm text-slate-700">No, I do not give permission</span>
              </label>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Full Name (Signature) *
              </label>
              <input
                type="text"
                value={formData.signature?.fullName || ''}
                onChange={(e) => updateSignature('fullName', e.target.value)}
                className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                placeholder="Enter your full name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Date *
              </label>
              <input
                type="date"
                value={formData.signature?.date || new Date().toISOString().split('T')[0]}
                onChange={(e) => updateSignature('date', e.target.value)}
                className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignatureStep;