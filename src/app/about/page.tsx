import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'About | AI Literacy Framework Platform',
    description: 'About the AI Literacy Framework Platform and its creator, Rohan Jowallah.',
};

export default function AboutPage() {
    return (
          <>
                <Navigation />
                <main id="main-content">
                        <section aria-labelledby="about-heading" className="py-16 border-b border-slate-800">
                                  <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                                              <h1 id="about-heading" className="text-4xl md:text-5xl font-bold text-slate-100 mb-4">About the Platform</h1>h1>
                                              <p className="text-xl text-slate-400">Building the bridge between national AI policy and organizational readiness.</p>p>
                                  </div>div>
                        </section>section>
                
                        <section aria-labelledby="creator-heading" className="py-16">
                                  <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                                              <div className="card p-8 bg-gradient-to-br from-blue-950/30 to-slate-900/60 border-blue-800/20">
                                                            <div className="flex flex-col md:flex-row items-start gap-8">
                                                                            <div className="flex-shrink-0 w-24 h-24 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-white text-3xl font-bold" aria-hidden="true">RJ</div>div>
                                                                            <div>
                                                                                              <h2 id="creator-heading" className="text-2xl md:text-3xl font-bold text-slate-100 mb-2">Rohan Jowallah</h2>h2>
                                                                                              <p className="text-blue-400 font-semibold mb-4">Creator &amp; Platform Architect</p>p>
                                                                                              <p className="text-slate-400 leading-relaxed mb-4">Rohan Jowallah is an AI education strategist, consultant, and thought leader dedicated to empowering organizations across higher education, government, and the Global South to navigate the AI transformation.</p>p>
                                                                                              <p className="text-slate-400 leading-relaxed">This platform translates the U.S. Department of Labor&apos;s AI Literacy Framework into a practical, customizable tool for building AI-literate teams.</p>p>
                                                                            </div>div>
                                                            </div>div>
                                              </div>div>
                                  </div>div>
                        </section>section>
                
                        <section className="py-16 border-t border-slate-800">
                                  <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                                              <h2 className="text-2xl font-bold text-slate-100 mb-6">Platform Vision</h2>h2>
                                              <div className="space-y-6">
                                                {[{t:'Democratize AI Literacy',d:'Every organization should have access to structured, evidence-based AI literacy aligned with national standards.'},{t:'Policy-to-Practice Bridge',d:'Translates national AI policies into actionable, customizable literacy programs.'},{t:'Context-Aware Customization',d:'Enables adaptation to specific sectors and workforce needs while maintaining policy alignment.'},{t:'Accessible by Design',d:'Built with WCAG 2.1 Level AA accessibility standards, ensuring resources are available to everyone.'}].map(v=>(
                            <div key={v.t} className="card p-6"><h3 className="text-lg font-semibold text-slate-200 mb-2">{v.t}</h3>h3><p className="text-slate-400">{v.d}</p>p></div>div>
                          ))}
                                              </div>div>
                                  </div>div>
                        </section>section>
                
                        <section className="py-16 border-t border-slate-800 text-center">
                                  <div className="max-w-3xl mx-auto px-4">
                                              <h2 className="text-2xl font-bold text-slate-100 mb-4">Ready to Explore?</h2>h2>
                                              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6">
                                                            <Link href="/framework" className="btn-primary">Explore Framework</Link>Link>
                                                            <Link href="/assessment" className="btn-secondary">Take Self-Assessment</Link>Link>
                                                            <Link href="/policy-alignment" className="btn-secondary">View Policy Alignment</Link>Link>
                                              </div>div>
                                  </div>div>
                        </section>section>
                </main>main>
                <Footer />
          </>>
        );
}</>
