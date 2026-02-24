'use client';
import { useState, useRef } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { CONTENT_AREAS, ASSESSMENT_LEVELS } from '@/data/framework';

export default function AssessmentPage() {
    const [responses, setResponses] = useState<Record<number, number>>({});
    const [submitted, setSubmitted] = useState(false);
    const [name, setName] = useState('');
    const resultsRef = useRef<HTMLDivElement>(null);

  const allAnswered = CONTENT_AREAS.every(a => responses[a.id] !== undefined);

  const handleSubmit = () => {
        setSubmitted(true);
        setTimeout(() => { resultsRef.current?.scrollIntoView({ behavior: 'smooth' }); }, 100);
  };

  const averageScore = Object.values(responses).length > 0
      ? Object.values(responses).reduce((a, b) => a + b, 0) / Object.values(responses).length : 0;

  const getLevel = (s: number) => {
        if (s >= 3.5) return { label: 'Proficient', color: '#22c55e' };
        if (s >= 2.5) return { label: 'Developing', color: '#3b82f6' };
        if (s >= 1.5) return { label: 'Emerging', color: '#f59e0b' };
        return { label: 'Beginning', color: '#94a3b8' };
  };

  return (
        <>
              <Navigation />
              <main id="main-content">
                      <section aria-labelledby="assess-heading" className="py-16 border-b border-slate-800">
                                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                                            <h1 id="assess-heading" className="text-4xl md:text-5xl font-bold text-slate-100 mb-4">AI Literacy Self-Assessment</h1>h1>
                                            <p className="text-xl text-slate-400 max-w-3xl">Rate your confidence across the five foundational content areas.</p>p>
                                </div>div>
                      </section>section>
              
                      <section className="py-16">
                                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                                            <div className="card p-6 mb-8">
                                                          <label htmlFor="resp-name" className="block text-sm font-medium text-slate-400 mb-2">Your Name (Optional)</label>label>
                                                          <input id="resp-name" type="text" value={name} onChange={e=>setName(e.target.value)} placeholder="Enter your name" className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-slate-100 placeholder:text-slate-600 focus:border-blue-500 outline-none" />
                                            </div>div>
                                
                                            <div className="card p-6 mb-8">
                                                          <h2 className="text-sm font-bold text-slate-500 uppercase mb-4">Rating Scale</h2>h2>
                                                          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                                                            {ASSESSMENT_LEVELS.map(l => (
                            <div key={l.value} className="p-3 rounded-lg bg-slate-800/50 border border-slate-700/50 text-center">
                                                <div className="text-2xl font-bold text-blue-400">{l.value}</div>div>
                                                <div className="text-sm font-semibold text-slate-300">{l.label}</div>div>
                                                <div className="text-xs text-slate-500 mt-1">{l.description}</div>div>
                            </div>div>
                          ))}
                                                          </div>div>
                                            </div>div>
                                
                                            <div className="space-y-6">
                                              {CONTENT_AREAS.map(area => (
                          <fieldset key={area.id} className="card p-6">
                                            <legend className="sr-only">{area.assessmentQuestion}</legend>legend>
                                            <div className="flex items-center gap-3 mb-4">
                                                                <span className="text-2xl">{area.icon}</span>span>
                                                                <div><span className="text-xs font-bold uppercase" style={{color:area.colorAccent}}>Area {area.id}</span>span><h3 className="text-lg font-bold text-slate-100">{area.title}</h3>h3></div>div>
                                            </div>div>
                                            <p className="text-slate-400 text-sm mb-4">{area.assessmentQuestion}</p>p>
                                            <div className="flex flex-wrap gap-3">
                                              {ASSESSMENT_LEVELS.map(level => (
                                                  <label key={level.value} className={"flex items-center gap-2 px-4 py-3 rounded-lg border cursor-pointer transition-all " + (responses[area.id]===level.value ? "border-blue-500 bg-blue-500/10 text-blue-300" : "border-slate-700 text-slate-400 hover:border-slate-600")}>
                                                                          <input type="radio" name={"area-"+area.id} value={level.value} checked={responses[area.id]===level.value} onChange={()=>setResponses(prev=>({...prev,[area.id]:level.value}))} className="sr-only" />
                                                                          <span className="font-bold">{level.value}</span>span>
                                                                          <span className="text-sm">{level.label}</span>span>
                                                  </label>label>
                                                ))}
                                            </div>div>
                          </fieldset>fieldset>
                        ))}
                                            </div>div>
                                
                                            <div className="mt-8 text-center">
                                                          <button onClick={handleSubmit} disabled={!allAnswered} className={"btn-primary text-lg px-10 py-4 " + (!allAnswered ? "opacity-50 cursor-not-allowed" : "")}>
                                                                          View Results
                                                          </button>button>
                                              {!allAnswered && <p className="mt-3 text-sm text-slate-500">Please rate all 5 areas to see results.</p>p>}
                                            </div>div>
                                
                                  {submitted && (
                        <div ref={resultsRef} tabIndex={-1} aria-live="polite" className="mt-12 card p-8">
                                        <h2 className="text-2xl font-bold text-slate-100 mb-2">Your Results</h2>h2>
                          {name && <p className="text-slate-400 mb-4">Assessment for: <strong className="text-slate-200">{name}</strong>strong></p>p>}
                                        <div className="text-center py-6 mb-6 border-b border-slate-700">
                                                          <div className="text-5xl font-bold mb-2" style={{color:getLevel(averageScore).color}}>{averageScore.toFixed(1)}</div>div>
                                                          <div className="text-xl font-semibold" style={{color:getLevel(averageScore).color}}>{getLevel(averageScore).label}</div>div>
                                        </div>div>
                                        <div className="space-y-4">
                                          {CONTENT_AREAS.map(area => (
                                              <div key={area.id}>
                                                                    <div className="flex justify-between text-sm mb-1"><span className="text-slate-300">{area.icon} {area.title}</span>span><span className="font-bold" style={{color:area.colorAccent}}>{responses[area.id]}/4</span>span></div>div>
                                                                    <div className="h-3 bg-slate-800 rounded-full overflow-hidden" role="progressbar" aria-valuenow={responses[area.id]} aria-valuemin={1} aria-valuemax={4}>
                                                                                            <div className="h-full rounded-full transition-all" style={{width:(responses[area.id]/4*100)+'%',backgroundColor:area.colorAccent}} />
                                                                    </div>div>
                                              </div>div>
                                            ))}
                                        </div>div>
                                        <div className="mt-8 flex gap-4 justify-center">
                                                          <button onClick={()=>window.print()} className="btn-secondary">Print Results</button>button>
                                                          <button onClick={()=>{setResponses({});setSubmitted(false);}} className="btn-secondary">Retake Assessment</button>button>
                                        </div>div>
                        </div>div>
                                            )}
                                </div>div>
                      </section>section>
              </main>main>
              <Footer />
        </>>
      );
}</>
