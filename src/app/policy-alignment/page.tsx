import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { POLICY_ALIGNMENTS, CONTENT_AREAS } from '@/data/framework';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Policy Alignment | AI Literacy Framework Platform',
  description: 'How the AI Literacy Framework aligns with U.S. federal AI policies.',
};

export default function PolicyAlignmentPage() {
  return (
    <>
      <Navigation />
      <main id="main-content">
        <section aria-labelledby="policy-heading" className="py-16 border-b border-slate-800">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6">United States Federal Policy</div>
            <h1 id="policy-heading" className="text-4xl md:text-5xl font-bold text-slate-100 mb-4">U.S. AI Literacy Policy Alignment</h1>
            <p className="text-xl text-slate-400 max-w-3xl leading-relaxed">This platform directly supports and aligns with major U.S. federal policies on AI.</p>
          </div>
        </section>

        <section aria-labelledby="dol-heading" className="py-16 bg-slate-900/20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="card p-8 bg-gradient-to-br from-blue-950/50 to-slate-900/60 border-blue-800/30">
              <h2 id="dol-heading" className="text-2xl font-bold text-slate-100 mb-4">Foundation: U.S. Department of Labor AI Literacy Framework</h2>
              <p className="text-slate-300 leading-relaxed mb-6">Built directly on the DOL framework (2025) establishing national standards for AI literacy.</p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-5 rounded-xl bg-slate-800/40 border border-slate-700/50">
                  <h3 className="text-sm font-bold text-blue-400 uppercase mb-3">5 Content Areas</h3>
                  <ul className="space-y-2">{CONTENT_AREAS.map(a=>(<li key={a.id} className="flex items-center gap-2 text-sm text-slate-300"><span aria-hidden="true">{a.icon}</span>{a.title}</li>))}</ul>
                </div>
                <div className="p-5 rounded-xl bg-slate-800/40 border border-slate-700/50">
                  <h3 className="text-sm font-bold text-blue-400 uppercase mb-3">Key DOL Principles</h3>
                  <ul className="space-y-2 text-sm text-slate-300">
                    <li>Experiential Learning</li><li>Context-Embedded</li><li>Human-Complementary</li><li>Prerequisite-Aware</li><li>Pathway-Oriented</li><li>Enabling-Role Prepared</li><li>Agile by Design</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section aria-labelledby="alignments-heading" className="py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 id="alignments-heading" className="text-2xl font-bold text-slate-100 mb-8">Complete Policy Alignment Map</h2>
            <div className="space-y-6">
              {POLICY_ALIGNMENTS.map((a,i) => (
                <article key={i} className="card p-6 md:p-8">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div><h3 className="text-lg font-bold text-slate-100">{a.policy}</h3><p className="text-sm text-blue-400">{a.source} ({a.year})</p></div>
                    <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-medium whitespace-nowrap">{a.year}</span>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed">{a.connection}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
