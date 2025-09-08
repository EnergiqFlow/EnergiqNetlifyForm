import React from 'react';

interface HealthHistoryStepNewProps {
  formData: any;
  setFormData: (data: any) => void;
}

const HealthHistoryStepNew: React.FC<HealthHistoryStepNewProps> = ({ formData, setFormData }) => {
  const updateHealthHistory = (field: string, value: any) => {
    setFormData({
      ...formData,
      healthHistory: {
        ...formData.healthHistory,
        [field]: value
      }
    });
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-slate-800 mb-6">Health History</h2>
      
      <div>
        <label className="block text-slate-700 font-medium mb-3">Please describe when your symptoms first started:</label>
        <textarea
          value={formData.healthHistory.symptomsBegin || ''}
          onChange={(e) => updateHealthHistory('symptomsBegin', e.target.value)}
          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
          rows={3}
          placeholder="When did your symptoms first begin? What was happening in your life at that time?"
        />
      </div>

      <div>
        <label className="block text-slate-700 font-medium mb-3">Do you have any current or past injuries? If yes, please specify:</label>
        <textarea
          value={formData.healthHistory.injuries || ''}
          onChange={(e) => updateHealthHistory('injuries', e.target.value)}
          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
          rows={3}
          placeholder="Please describe any current or past injuries..."
        />
      </div>

      <div>
        <label className="block text-slate-700 font-medium mb-3">Have you ever had surgery? If yes, please specify:</label>
        <textarea
          value={formData.healthHistory.surgeries || ''}
          onChange={(e) => updateHealthHistory('surgeries', e.target.value)}
          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
          rows={3}
          placeholder="Please describe any surgeries you have had..."
        />
      </div>

      <div>
        <label className="block text-slate-700 font-medium mb-3">Do you have trouble sleeping? What is your sleeping position?</label>
        <textarea
          value={formData.healthHistory.sleepIssues || ''}
          onChange={(e) => updateHealthHistory('sleepIssues', e.target.value)}
          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
          rows={3}
          placeholder="Please describe any sleep troubles and your preferred sleeping position..."
        />
      </div>

      <div>
        <label className="block text-slate-700 font-medium mb-3">Have you suffered any significant events that have impacted your health and wellbeing? If yes, please specify:</label>
        <textarea
          value={formData.healthHistory.significantEvents || ''}
          onChange={(e) => updateHealthHistory('significantEvents', e.target.value)}
          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
          rows={4}
          placeholder="Please describe any significant life events that have affected your health..."
        />
      </div>

      <div>
        <label className="block text-slate-700 font-medium mb-3">Did you have any childhood illnesses? If yes, please specify:</label>
        <textarea
          value={formData.healthHistory.childhoodIllnesses || ''}
          onChange={(e) => updateHealthHistory('childhoodIllnesses', e.target.value)}
          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
          rows={3}
          placeholder="Please describe any childhood illnesses or conditions..."
        />
      </div>
    </div>
  );
};

export default HealthHistoryStepNew;