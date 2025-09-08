          {/* Main Form Section */}
          <div className="form-section p-6 sm:p-8 lg:p-10">
            
            <form name="wellness-questionnaire" method="POST" data-netlify="true" className={isLoading ? 'loading' : ''}>
              <input type="hidden" name="form-name" value="wellness-questionnaire" />
              
              {/* Step 0: Welcome */}
              {currentStep === 0 && (
                <div className="step-content active text-center space-y-6">
                  <div className="flex justify-center mb-8">
                    <div className="w-32 h-32 rounded-full bg-gradient-to-br from-slate-600 to-slate-800 flex items-center justify-center border-4 border-orange-400 shadow-xl">
                      <img src="https://d64gsuwffb70l.cloudfront.net/68bd09722a407a11f171e74d_1757221607531_f2a28785.webp" alt="Energiq Logo" className="w-20 h-20 rounded-full object-cover" />
                    </div>
                  </div>
                  <h1 className="text-3xl sm:text-4xl font-light text-slate-800 mb-4">Spinal Flow Wellness Journey</h1>
                  <p className="text-lg text-slate-600 italic mb-6">"A little action often spurs a lot of momentum"</p>
                  <div className="max-w-2xl mx-auto text-slate-700 space-y-4 text-left">
                    <p>Welcome to your wellness journey. There is an innate intelligence inside every human body to grow, repair, and heal itself.</p>
                    <p>The Spinal Flow Technique helps your spine and nervous system release stored stressors, enabling your body's natural healing wisdom to flow freely.</p>
                    <p className="font-medium copper-text">Let's find out about you now...</p>
                  </div>
                </div>
              )}

              {/* Step 1: Personal Information */}
              {currentStep === 1 && (
                <div className="step-content active">
                  <h2 className="text-2xl font-semibold text-slate-800 mb-6">Personal Information</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        placeholder="hello@energiq.nz"
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Phone Number *</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        placeholder="+64 21 123 4567"
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Age</label>
                      <input
                        type="number"
                        name="age"
                        value={formData.age}
                        onChange={(e) => setFormData({...formData, age: e.target.value})}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-slate-700 mb-2">Occupation</label>
                      <input
                        type="text"
                        name="occupation"
                        value={formData.occupation}
                        onChange={(e) => setFormData({...formData, occupation: e.target.value})}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Step 2: Current Wellness */}
              {currentStep === 2 && (
                <div className="step-content active">
                  <h2 className="text-2xl font-semibold text-slate-800 mb-6">Current Wellness</h2>
                  
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-4">What symptoms are you currently experiencing? (Select all that apply)</label>
                      <div className="symptom-grid">
                        {['Back pain', 'Neck pain', 'Headaches', 'Fatigue', 'Stress', 'Sleep issues', 'Joint pain', 'Muscle tension', 'Digestive issues', 'Anxiety', 'Depression', 'Other'].map((symptom) => (
                          <label key={symptom} className="flex items-center space-x-3 p-3 border border-slate-200 rounded-lg hover:bg-slate-50">
                            <input
                              type="checkbox"
                              checked={formData.currentSymptoms.includes(symptom)}
                              onChange={(e) => handleSymptomChange(symptom, e.target.checked)}
                              className="w-4 h-4 text-orange-600 border-slate-300 rounded focus:ring-orange-500"
                            />
                            <span className="text-sm text-slate-700">{symptom}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Pain Level (0-10 scale)</label>
                      <input
                        type="range"
                        min="0"
                        max="10"
                        value={formData.painLevel}
                        onChange={(e) => setFormData({...formData, painLevel: e.target.value})}
                        className="w-full custom-range"
                      />
                      <div className="flex justify-between text-xs text-slate-500 mt-1">
                        <span>0 - No pain</span>
                        <span className="font-medium">Current: {formData.painLevel}</span>
                        <span>10 - Severe pain</span>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-4">Previous treatments you've tried (Select all that apply)</label>
                      <div className="symptom-grid">
                        {['Physiotherapy', 'Chiropractic', 'Massage therapy', 'Acupuncture', 'Osteopathy', 'Medication', 'Surgery', 'Counselling', 'None', 'Other'].map((treatment) => (
                          <label key={treatment} className="flex items-center space-x-3 p-3 border border-slate-200 rounded-lg hover:bg-slate-50">
                            <input
                              type="checkbox"
                              checked={formData.previousTreatments.includes(treatment)}
                              onChange={(e) => handleTreatmentChange(treatment, e.target.checked)}
                              className="w-4 h-4 text-orange-600 border-slate-300 rounded focus:ring-orange-500"
                            />
                            <span className="text-sm text-slate-700">{treatment}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Current medications or supplements</label>
                      <textarea
                        name="medications"
                        value={formData.medications}
                        onChange={(e) => setFormData({...formData, medications: e.target.value})}
                        rows={3}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        placeholder="Please list any medications or supplements you're currently taking..."
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Previous surgeries or major injuries</label>
                      <textarea
                        name="surgeries"
                        value={formData.surgeries}
                        onChange={(e) => setFormData({...formData, surgeries: e.target.value})}
                        rows={3}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        placeholder="Please describe any previous surgeries or major injuries..."
                      />
                    </div>
                  </div>
                </div>
              )}