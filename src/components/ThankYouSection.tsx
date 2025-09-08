import React from 'react';

const ThankYouSection: React.FC = () => {
  return (
    <div className="text-center space-y-8">
      <div className="w-32 h-32 mx-auto rounded-full flex items-center justify-center shadow-2xl overflow-hidden" style={{background: 'linear-gradient(135deg, #059669 0%, #047857 100%)'}}>
        <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      </div>
      
      <div className="space-y-4">
        <h1 className="text-4xl font-light text-slate-800">Thank You!</h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto">
          Your wellness questionnaire has been submitted successfully.
        </p>
      </div>

      <div className="bg-white/60 p-8 rounded-xl max-w-3xl mx-auto">
        <div className="space-y-6 text-left">
          <div>
            <h3 className="text-lg font-medium text-slate-800 mb-2">What happens next?</h3>
            <ul className="space-y-2 text-slate-700">
              <li className="flex items-start">
                <span className="text-amber-600 mr-2">•</span>
                We will review your information before your spinal flow session
              </li>
              <li className="flex items-start">
                <span className="text-amber-600 mr-2">•</span>
                We may discuss some of the items with you at your appointment
              </li>
              <li className="flex items-start">
                <span className="text-amber-600 mr-2">•</span>
                Your personalized session will be tailored to your specific needs
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium text-slate-800 mb-2">Questions?</h3>
            <p className="text-slate-700">
              If you have any questions or concerns, please don't hesitate to contact us at{' '}
              <a href="mailto:info@energiqflow.com" className="text-amber-600 hover:text-amber-700">
                info@energiqflow.com
              </a>{' '}
              or call us directly.
            </p>
          </div>

          <div className="text-center pt-4">
            <p className="text-slate-600 italic">
              "Your journey to wellness begins with a single step. Thank you for taking that step with us."
            </p>
          </div>
        </div>
      </div>

      {/* What to Expect Image - Made Bigger */}
      <div className="max-w-4xl mx-auto">
        <img 
          src="https://cdn.openai.com/API/docs/images/file-iKOGVhBGEt6dYJzjOGxbJMm4" 
          alt="What to Expect in a Spinal Flow Session with Mel" 
          className="w-full h-auto rounded-xl shadow-lg"
        />
      </div>

      <div className="flex justify-center space-x-4">
        <button 
          onClick={() => window.location.reload()} 
          className="px-6 py-3 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors"
        >
          Submit Another Form
        </button>
        <button 
          onClick={() => window.print()} 
          className="px-6 py-3 bg-slate-200 text-slate-700 rounded-lg hover:bg-slate-300 transition-colors"
        >
          Print Confirmation
        </button>
      </div>
    </div>
  );
};

export default ThankYouSection;