'use client';

import { useState, useRef } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { CONTENT_AREAS, ASSESSMENT_LEVELS } from '@/data/framework';

export default function AssessmentPage() {
  const [responses, setResponses] = useState<Record<number, number>>({});
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const resultsRef = useRef<HTMLDivElement>(null);

  const allAnswered = CONTENT_AREAS.every(area => responses[area.id] !== undefined);

  const handleSelect = (areaId: number, value: number) => {
    setResponses(prev => ({ ...prev, [areaId]: value }));
  };

  const handleSubmit = () => {
    setSubmitted(true);
    setTimeout(() => {
      resultsRef.current?.scrollIntoView({ behavior: 'smooth' });
      resultsRef.current?.focus();
    }, 100);
  };

  const handleReset = () => {
    setResponses({});
    setSubmitted(false);
  };

  const averageScore = Object.values(responses).length > 0
    ? Object.values(responses).reduce((a, b) => a + b, 0) / Object.values(responses).length
    : 0;

  const getOverallLevel = (score: number) => {
    if (score >= 3.5) return { label: 'Proficient', color: '#22c55e', description: 'You demonstrate strong AI literacy across all areas.' };
    if (score >= 2.5) return { label: 'Developing', color: '#3b82f6', description: 'You have a solid foundation with room to deepen your skills.' };
    if (score >= 1.5) return { label: 'Emerging', color: '#f59e0b', description: 'You have basic awareness and are beginning your AI literacy journey.' };
    return { label: 'Beginning', color: '#94a3b8', description: 'You are at the start of your AI literacy journey with significant growth opportunities.' };
  };

  return (
    <>
      <Navigation />
      <main id="main-content">
        {/* Header */}
        <section aria-labelledby="assess-heading" className="py-16 border-b border-slate-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-sm font-semibold text-blue-400 uppercase tracking-widest mb-3">
              Self-Assessment Tool
            </p>
            <h1 id="assess-heading" className="text-4xl md:text-5xl font-bold text-slate-100 mb-4">
              AI Literacy Self-Assessment
            </h1>
            <p className="text-xl text-slate-400 max-w-3xl leading-relaxed">
              Rate your current confidence across each of the five foundational
              content areas. This assessment is designed for personal reflection
              and professional development planning.
            </p>
          </div>
        </section>

        {/* Assessment Form */}
        <section aria-labelledby="form-heading" className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Optional Info */}
            <div className="card p-6 mb-8">
              <h2 id="form-heading" className="text-lg font-semibold text-slate-200 mb-4">
                About You <span className="text-sm text-slate-500 font-normal">(Optional)</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="respondent-name"
                    className="block text-sm font-medium text-slate-400 mb-2">
                    Your Name
                  </label>
                  <input
                    id="respondent-name"
                    type="text"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    placeholder="Enter your name"
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-700
                               rounded-lg text-slate-100 placeholder:text-slate-600
                               focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
                    autoComplete="name"
                  />
                </div>
                <div>
                  <label htmlFor="respondent-role"
                    className="block text-sm font-medium text-slate-400 mb-2">
                    Your Role
                  </label>
                  <select
                    id="respondent-role"
                    value={role}
                    onChange={e => setRole(e.target.value)}
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-700
                               rounded-lg text-slate-100
                               focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
                  >
                    <option value="">Select your role</option>
                    <option value="faculty">Faculty / Instructor</option>
                    <option value="staff">Staff / Administrator</option>
                    <option value="student">Student</option>
                    <option value="manager">Manager / Leader</option>
                    <option value="it">IT Professional</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Legend */}
            <div className="card p-6 mb-8" role="note" aria-label="Rating scale explanation">
              <h3 className="text-sm font-bold text-slate-300 uppercase tracking-wider mb-3">
                Rating Scale
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {ASSESSMENT_LEVELS.map(level => (
                  <div key={level.value} className="flex items-start gap-2">
                    <span className="w-3 h-3 rounded-full mt-1 flex-shrink-0"
                      style={{ backgroundColor: level.color }} aria-hidden="true" />
                    <div>
                      <span className="text-sm font-semibold text-slate-200">
                        {level.value}. {level.label}
                      </span>
                      <p className="text-xs text-slate-500">{level.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Questions */}
            <form onSubmit={e => { e.preventDefault(); handleSubmit(); }}
              aria-label="AI Literacy Self-Assessment">
              <div className="space-y-6">
                {CONTENT_AREAS.map(area => (
                  <fieldset key={area.id} className="card p-6 md:p-8"
                    style={{ borderLeftColor: area.colorAccent, borderLeftWidth: '4px' }}>
                    <legend className="sr-only">
                      {area.title}: {area.assessmentQuestion}
                    </legend>

                    <div className="flex items-start gap-4 mb-4">
                      <span className="text-3xl flex-shrink-0" aria-hidden="true">
                        {area.icon}
                      </span>
                      <div>
                        <span className="text-xs font-bold uppercase tracking-widest"
                          style={{ color: area.colorAccent }}>
                          Area {area.id}: {area.shortTitle}
                        </span>
                        <h3 className="text-lg font-bold text-slate-100 mt-1">
                          {area.title}
                        </h3>
                      </div>
                    </div>

                    <p className="text-slate-300 mb-6 italic">
                      &ldquo;{area.assessmentQuestion}&rdquo;
                    </p>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3" role="radiogroup"
                      aria-label={`Rating for ${area.title}`}>
                      {ASSESSMENT_LEVELS.map(level => {
                        const isSelected = responses[area.id] === level.value;
                        return (
                          <label key={level.value}
                            className={`relative flex flex-col items-center p-4 rounded-xl
                                       border-2 cursor-pointer transition-all text-center
                                       ${isSelected
                                ? 'border-blue-500 bg-blue-500/10 shadow-lg shadow-blue-500/10'
                                : 'border-slate-700 bg-slate-800/40 hover:border-slate-600'}`}>
                            <input
                              type="radio"
                              name={`area-${area.id}`}
                              value={level.value}
                              checked={isSelected}
                              onChange={() => handleSelect(area.id, level.value)}
                              className="sr-only"
                              aria-label={`${level.label}: ${level.description}`}
                            />
                            <span className="w-8 h-8 rounded-full flex items-center justify-center
                                             text-sm font-bold mb-2"
                              style={{
                                backgroundColor: isSelected ? level.color + '33' : 'transparent',
                                color: isSelected ? level.color : '#64748b',
                                border: `2px solid ${isSelected ? level.color : '#334155'}`,
                              }}>
                              {level.value}
                            </span>
                            <span className={`text-sm font-semibold ${isSelected ? 'text-slate-100' : 'text-slate-400'}`}>
                              {level.label}
                            </span>
                          </label>
                        );
                      })}
                    </div>
                  </fieldset>
                ))}
              </div>

              <div className="mt-8 text-center">
                <button
                  type="submit"
                  disabled={!allAnswered}
                  className="btn-primary text-lg px-10 py-4 disabled:opacity-40 disabled:cursor-not-allowed"
                  aria-describedby="submit-help"
                >
                  View My Results
                </button>
                <p id="submit-help" className="text-sm text-slate-500 mt-3">
                  {allAnswered
                    ? 'All areas rated. Click to see your results.'
                    : `Please rate all ${CONTENT_AREAS.length} areas to view results. (${Object.keys(responses).length}/${CONTENT_AREAS.length} completed)`
                  }
                </p>
              </div>
            </form>

            {/* Results */}
            {submitted && (
              <div ref={resultsRef} tabIndex={-1}
                className="mt-16 scroll-mt-24" aria-live="polite">
                <div className="card p-8 md:p-10 bg-gradient-to-br from-blue-950/30 to-slate-900/60
                                border-blue-800/30">
                  <h2 className="text-2xl font-bold text-slate-100 mb-6">
                    Your AI Literacy Profile
                    {name && <span className="text-blue-400"> â {name}</span>}
                  </h2>

                  {/* Overall Score */}
                  <div className="flex items-center gap-6 mb-8 p-6 rounded-xl bg-slate-800/40
                                  border border-slate-700/50">
                    <div className="text-center">
                      <div className="text-4xl font-bold" style={{ color: getOverallLevel(averageScore).color }}>
                        {averageScore.toFixed(1)}
                      </div>
                      <div className="text-xs text-slate-500 mt-1">out of 4.0</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold" style={{ color: getOverallLevel(averageScore).color }}>
                        {getOverallLevel(averageScore).label}
                      </div>
                      <p className="text-sm text-slate-400">
                        {getOverallLevel(averageScore).description}
                      </p>
                    </div>
                  </div>

                  {/* Area Breakdown */}
                  <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4">
                    Area-by-Area Breakdown
                  </h3>
                  <div className="space-y-4">
                    {CONTENT_AREAS.map(area => {
                      const score = responses[area.id] || 0;
                      const level = ASSESSMENT_LEVELS.find(l => l.value === score);
                      const percentage = (score / 4) * 100;

                      return (
                        <div key={area.id} className="flex items-center gap-4">
                          <span className="text-xl flex-shrink-0" aria-hidden="true">
                            {area.icon}
                          </span>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between mb-1">
                              <span className="text-sm font-semibold text-slate-200 truncate">
                                {area.title}
                              </span>
                              <span className="text-sm font-bold ml-2"
                                style={{ color: level?.color }}>
                                {level?.label}
                              </span>
                            </div>
                            <div className="h-2.5 rounded-full bg-slate-800 overflow-hidden"
                              role="progressbar"
                              aria-valuenow={score}
                              aria-valuemin={1}
                              aria-valuemax={4}
                              aria-label={`${area.title}: ${level?.label} (${score} out of 4)`}>
                              <div className="h-full rounded-full transition-all duration-500"
                                style={{
                                  width: `${percentage}%`,
                                  backgroundColor: level?.color,
                                }} />
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Actions */}
                  <div className="mt-8 flex flex-col sm:flex-row gap-4">
                    <button onClick={handleReset} className="btn-secondary">
                      Retake Assessment
                    </button>
                    <button
                      onClick={() => {
                        if (typeof window !== 'undefined') {
                          window.print();
                        }
                      }}
                      className="btn-secondary"
                      aria-label="Print or save your results"
                    >
                      Print Results
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
