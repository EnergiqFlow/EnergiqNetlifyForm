  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-amber-800 via-slate-600 to-slate-800 flex items-center justify-center p-4">
        <div className="bg-white bg-opacity-95 rounded-xl shadow-2xl p-8 text-center max-w-2xl">
          <div className="relative w-32 h-32 mx-auto mb-6">
            <div className="w-32 h-32 bg-gradient-to-br from-slate-600 to-slate-800 rounded-full flex items-center justify-center shadow-xl">
              <div className="text-3xl font-serif text-amber-600">
                <span>Ene</span><span className="relative inline-block">r<svg viewBox="0 0 24 24" fill="#b45309" className="absolute w-3 h-3" style={{top: '-8px', left: '8px', transform: 'rotate(-15deg)'}}><path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z"/></svg></span><span>giq</span>
              </div>
            </div>
            <img 
              src="https://d64gsuwffb70l.cloudfront.net/68bd09722a407a11f171e74d_1757227702924_0d7b252e.webp" 
              alt="Copper spiral" 
              className="absolute inset-0 w-full h-full object-contain opacity-60"
            />
          </div>
          <h3 className="text-3xl font-light text-slate-800 mb-4">Thank You!</h3>
          <p className="text-lg text-slate-600 mb-4">Your Spinal Flow Wellness Questionnaire has been submitted successfully.</p>
          <p className="text-xl font-medium text-amber-700 mb-6">Let's get back to YOU!!</p>
          <div className="text-slate-700 space-y-2">
            <p>Your information will help us provide the most effective treatment for your unique needs.</p>
            <p className="font-medium text-slate-800">Energiq SPINAL FLOW</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-800 via-slate-600 to-slate-800">
      <div className="max-w-4xl mx-auto px-4 py-8">
        
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((step, index) => (
              <div
                key={step}
                className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300 ${
                  index < currentStep
                    ? 'bg-green-500 text-white transform scale-1.1'
                    : index === currentStep
                    ? 'bg-amber-600 text-white transform scale-1.1'
                    : 'bg-slate-300 text-slate-600'
                }`}
              >
                {step}
              </div>
            ))}
          </div>
          <div className="w-full bg-slate-300 h-2 rounded-full">
            <div 
              className="h-full bg-amber-600 rounded-full transition-all duration-500"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
        </div>

        {/* Form Container */}
        <div className="bg-white bg-opacity-90 rounded-xl shadow-2xl p-8">
          
          {/* Step 1: Welcome */}
          {currentStep === 0 && (
            <div className="text-center space-y-6">
              <div className="relative w-32 h-32 mx-auto">
                <div className="w-32 h-32 bg-gradient-to-br from-slate-600 to-slate-800 rounded-full flex items-center justify-center shadow-xl">
                  <div className="text-3xl font-serif text-amber-600">
                    <span>Ene</span><span className="relative inline-block">r<svg viewBox="0 0 24 24" fill="#b45309" className="absolute w-3 h-3" style={{top: '-8px', left: '8px', transform: 'rotate(-15deg)'}}><path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z"/></svg></span><span>giq</span>
                  </div>
                </div>
                <img 
                  src="https://d64gsuwffb70l.cloudfront.net/68bd09722a407a11f171e74d_1757227702924_0d7b252e.webp" 
                  alt="Copper spiral" 
                  className="absolute inset-0 w-full h-full object-contain opacity-60"
                />
              </div>
              <div>
                <h1 className="text-3xl font-light text-slate-800 mb-4">Spinal Flow Wellness Journey</h1>
                <p className="text-lg text-slate-600 italic mb-6">"A little action often spurs a lot of momentum"</p>
                <div className="max-w-2xl mx-auto text-slate-700 space-y-4">
                  <p>Welcome to your wellness journey. There is an innate intelligence inside every human body to grow, repair, and heal itself.</p>
                  <p>The Spinal Flow Technique helps your spine and nervous system release stored stressors, enabling your body's natural healing wisdom to flow freely.</p>
                  <p className="font-medium text-amber-700">Let's find out about you now...</p>
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Personal Info */}
          {currentStep === 1 && (
            <PersonalInfoStep formData={formData} setFormData={setFormData} />
          )}

          {/* Step 3: Current Wellness */}
          {currentStep === 2 && (
            <CurrentWellnessStep formData={formData} setFormData={setFormData} />
          )}

          {/* Step 4: Lifestyle */}
          {currentStep === 3 && (
            <LifestyleStep formData={formData} setFormData={setFormData} />
          )}

          {/* Step 5: Symptom Details */}
          {currentStep === 4 && (
            <SymptomDetailsStep formData={formData} setFormData={setFormData} />
          )}

          {/* Step 6: Health History */}
          {currentStep === 5 && (
            <HealthHistoryStepNew formData={formData} setFormData={setFormData} />
          )}

          {/* Step 7: Goals */}
          {currentStep === 6 && (
            <GoalsStep formData={formData} setFormData={setFormData} />
          )}

          {/* Step 8: Signature */}
          {currentStep === 7 && (
            <SignatureStep formData={formData} setFormData={setFormData} />
          )}

          {/* Navigation */}
          <div className="flex justify-between mt-8">
            <button
              onClick={prevStep}
              disabled={currentStep === 0}
              className="px-6 py-3 bg-slate-200 text-slate-600 rounded-lg hover:bg-slate-300 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Previous
            </button>
            
            {currentStep < totalSteps - 1 ? (
              <button
                onClick={nextStep}
                className="px-6 py-3 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors"
              >
                Next
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
              >
                Submit
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WellnessForm;