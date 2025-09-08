import React, { useState } from 'react';

interface ValidationAlertProps {
  message: string;
  type: 'error' | 'success' | 'warning';
  onClose: () => void;
}

export const ValidationAlert: React.FC<ValidationAlertProps> = ({ message, type, onClose }) => {
  const bgColor = type === 'error' ? 'bg-red-100 border-red-400 text-red-700' : 
                  type === 'success' ? 'bg-green-100 border-green-400 text-green-700' :
                  'bg-yellow-100 border-yellow-400 text-yellow-700';
  
  return (
    <div className={`border px-4 py-3 rounded mb-4 ${bgColor}`} role="alert">
      <div className="flex justify-between items-center">
        <span>{message}</span>
        <button onClick={onClose} className="ml-4 text-lg font-bold">×</button>
      </div>
    </div>
  );
};

export const validateStep = (step: number, formData: any): string | null => {
  switch (step) {
    case 1: // Personal Info
      if (!formData.firstName || !formData.lastName || !formData.email) {
        return 'Please fill in all required personal information fields.';
      }
      if (!/\S+@\S+\.\S+/.test(formData.email)) {
        return 'Please enter a valid email address.';
      }
      break;
    case 2: // Current Wellness
      if (!formData.currentFeeling) {
        return 'Please describe how you are currently feeling.';
      }
      break;
    case 4: // Health History
      if (!formData.symptomsStart) {
        return 'Please describe when your symptoms started.';
      }
      break;
    case 5: // Goals
      if (!formData.treatmentGoals) {
        return 'Please describe your treatment goals.';
      }
      break;
    case 6: // Declaration
      if (!formData.fullName || !formData.date || formData.consent !== 'true') {
        return 'Please complete all required declaration fields and provide consent.';
      }
      break;
  }
  return null;
};

export const useFormValidation = () => {
  const [alert, setAlert] = useState<{message: string, type: 'error' | 'success' | 'warning'} | null>(null);

  const showAlert = (message: string, type: 'error' | 'success' | 'warning' = 'error') => {
    setAlert({ message, type });
    setTimeout(() => setAlert(null), 5000);
  };

  const clearAlert = () => setAlert(null);

  return { alert, showAlert, clearAlert };
};