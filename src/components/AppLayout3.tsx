              {/* Step 3: Lifestyle */}
              {currentStep === 3 && (
                <div className="step-content active">
                  <h2 className="text-2xl font-semibold text-slate-800 mb-6">Lifestyle</h2>
                  
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Stress Level (0-10 scale)</label>
                      <input
                        type="range"
                        min="0"
                        max="10"
                        value={formData.stressLevel}
                        onChange={(e) => setFormData({...formData, stressLevel: e.target.value})}
                        className="w-full custom-range"
                      />
                      <div className="flex justify-between text-xs text-slate-500 mt-1">
                        <span>0 - No stress</span>
                        <span className="font-medium">Current: {formData.stressLevel}</span>
                        <span>10 - Very stressed</span>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Sleep Quality</label>
                      <select
                        name="sleepQuality"
                        value={formData.sleepQuality}
                        onChange={(e) => setFormData({...formData, sleepQuality: e.target.value})}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      >
                        <option value="">Select sleep quality</option>
                        <option value="excellent">Excellent - Sleep soundly through the night</option>
                        <option value="good">Good - Occasional disruptions</option>
                        <option value="fair">Fair - Some difficulty falling/staying asleep</option>
                        <option value="poor">Poor - Frequent sleep problems</option>
                        <option value="very-poor">Very Poor - Severe sleep issues</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Exercise Frequency</label>
                      <select
                        name="exercise"
                        value={formData.exercise}
                        onChange={(e) => setFormData({...formData, exercise: e.target.value})}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      >
                        <option value="">Select exercise frequency</option>
                        <option value="daily">Daily</option>
                        <option value="several-times-week">Several times per week</option>
                        <option value="weekly">Weekly</option>
                        <option value="occasionally">Occasionally</option>
                        <option value="rarely">Rarely</option>
                        <option value="never">Never</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Diet Quality</label>
                      <select
                        name="diet"
                        value={formData.diet}
                        onChange={(e) => setFormData({...formData, diet: e.target.value})}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      >
                        <option value="">Select diet quality</option>
                        <option value="excellent">Excellent - Balanced, nutritious meals</option>
                        <option value="good">Good - Mostly healthy choices</option>
                        <option value="fair">Fair - Some healthy, some processed foods</option>
                        <option value="poor">Poor - Mostly processed/fast foods</option>
                        <option value="very-poor">Very Poor - Irregular, unhealthy eating</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Work Environment</label>
                      <textarea
                        name="workEnvironment"
                        value={formData.workEnvironment}
                        onChange={(e) => setFormData({...formData, workEnvironment: e.target.value})}
                        rows={3}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        placeholder="Describe your work environment (desk job, physical labor, stress levels, etc.)"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Step 4: Goals */}
              {currentStep === 4 && (
                <div className="step-content active">
                  <h2 className="text-2xl font-semibold text-slate-800 mb-6">Your Wellness Goals</h2>
                  
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-4">What are your primary goals? (Select all that apply)</label>
                      <div className="symptom-grid">
                        {['Pain relief', 'Stress reduction', 'Better sleep', 'Increased energy', 'Improved mobility', 'Better posture', 'Emotional balance', 'Overall wellness', 'Injury prevention', 'Performance enhancement'].map((goal) => (
                          <label key={goal} className="flex items-center space-x-3 p-3 border border-slate-200 rounded-lg hover:bg-slate-50">
                            <input
                              type="checkbox"
                              checked={formData.primaryGoals.includes(goal)}
                              onChange={(e) => handleGoalChange(goal, e.target.checked)}
                              className="w-4 h-4 text-orange-600 border-slate-300 rounded focus:ring-orange-500"
                            />
                            <span className="text-sm text-slate-700">{goal}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">What do you hope to achieve through Spinal Flow?</label>
                      <textarea
                        name="expectations"
                        value={formData.expectations}
                        onChange={(e) => setFormData({...formData, expectations: e.target.value})}
                        rows={4}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        placeholder="Please describe your expectations and what you hope to achieve..."
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Commitment Level</label>
                      <select
                        name="commitment"
                        value={formData.commitment}
                        onChange={(e) => setFormData({...formData, commitment: e.target.value})}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      >
                        <option value="">Select your commitment level</option>
                        <option value="very-committed">Very Committed - Ready to make necessary changes</option>
                        <option value="committed">Committed - Willing to try new approaches</option>
                        <option value="somewhat-committed">Somewhat Committed - Open to suggestions</option>
                        <option value="exploring">Just Exploring - Learning about options</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 5: Digital Signature & Declaration */}
              {currentStep === 5 && (
                <div className="step-content active">
                  <h2 className="text-2xl font-semibold text-slate-800 mb-6">Client Declaration & Digital Signature</h2>
                  
                  <div className="space-y-6">
                    <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
                      <h3 className="text-lg font-semibold text-slate-800 mb-4">Client Declaration</h3>
                      <div className="text-sm text-slate-700 space-y-3">
                        <p>I acknowledge that:</p>
                        <ul className="list-disc list-inside space-y-2 ml-4">
                          <li>The information provided in this questionnaire is accurate and complete to the best of my knowledge.</li>
                          <li>Spinal Flow Technique is a complementary wellness approach and not a substitute for medical treatment.</li>
                          <li>I will inform my practitioner of any changes to my health status or medications.</li>
                          <li>I understand that results may vary and no specific outcomes are guaranteed.</li>
                          <li>I consent to the practitioner using this information to provide appropriate care.</li>
                        </ul>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Digital Signature (Full Name) *</label>
                      <input
                        type="text"
                        name="clientName"
                        value={formData.clientName}
                        onChange={(e) => setFormData({...formData, clientName: e.target.value})}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        placeholder="Type your full name as digital signature"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Date *</label>
                      <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={(e) => setFormData({...formData, date: e.target.value})}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        required
                      />
                    </div>

                    <div className="flex items-start space-x-3">
                      <input
                        type="checkbox"
                        id="agreement"
                        checked={formData.agreement}
                        onChange={(e) => setFormData({...formData, agreement: e.target.checked})}
                        className="w-5 h-5 text-orange-600 border-slate-300 rounded focus:ring-orange-500 mt-1"
                        required
                      />
                      <label htmlFor="agreement" className="text-sm text-slate-700">
                        I agree to the above declaration and consent to the collection and use of my personal information for the purpose of providing Spinal Flow wellness services. *
                      </label>
                    </div>
                  </div>
                </div>
              )}

              {/* Navigation */}
              <div className="flex justify-between mt-8">
                <button
                  type="button"
                  onClick={prevStep}
                  disabled={currentStep === 0}
                  className="px-6 py-3 bg-slate-200 text-slate-600 rounded-lg hover:bg-slate-300 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Previous
                </button>
                
                {currentStep < totalSteps - 1 ? (
                  <button
                    type="button"
                    onClick={nextStep}
                    className="px-6 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors"
                  >
                    Next
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={handleSubmit}
                    disabled={!formData.agreement || !formData.clientName || isLoading}
                    className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isLoading ? 'Submitting...' : 'Submit Questionnaire'}
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppLayout;