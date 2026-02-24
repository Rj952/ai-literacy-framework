import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { CONTENT_AREAS, DELIVERY_PRINCIPLES } from '@/data/framework';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Framework | AI Literacy Framework Platform',
  description: 'Explore the five content areas and seven delivery principles of the AI Literacy Framework.',
};

export default function FrameworkPage() {
  return (
    <>
      <Navigation />
      <main id="main-content">
        <section aria-labelledby="framework-heading" className="py-16 border-b border-slate-800">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 id="framework-heading" className="text-4xl md:text-5xl font-bold text-slate-100 mb-4">AI Literacy Framework</h1>
            <p className="text-xl text-slate-400 max-w-3xl leading-relaxed">A comprehensive framework built on the U.S. Department of Labor&apos;s national standards.</p>
          </div>
        </section>

        <section aria-labelledby="areas-heading" className="py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 id="areas-heading" className="text-3xl font-bold text-slate-100 mb-8">Foundational Content Areas</h2>
            <div className="space-y-8">
              {CONTENT_AREAS.map(area => (
                <article key={area.id} className="card p-8" style={{borderLeftColor:area.colorAccent,borderLeftWidth:'4px'}}>
                  <div className="flex items-start gap-4 mb-4">
                    <span className="text-4xl">{area.icon}</span>
                    <div>
                      <span className="text-xs font-bold uppercase" style={{color:area.colorAccent}}>Content Area {area.id}</span>
                      <h3 className="text-2xl font-bold text-slate-100 mt-1">{area.title}</h3>
                    </div>
                  </div>
                  <p className="text-slate-400 leading-relaxed mb-6">{area.description}</p>
                  <h4 className="text-xs font-bold text-slate-500 uppercase mb-3">Key Topics</h4>
                  <ol className="space-y-2">
                    {area.details.map((d,i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold flex-shrink-0" style={{backgroundColor:area.colorAccent+'20',color:area.colorAccent}}>{i+1}</span>
                        <span className="text-slate-300 pt-1">{d}</span>
                      </li>
                    ))}
                  </ol>
                  <div className="mt-6 p-4 rounded-lg bg-slate-800/30 border border-slate-700/50">
                    <p className="text-sm text-slate-500"><strong className="text-slate-400">Self-Assessment:</strong> {area.assessmentQuestion}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section aria-labelledby="dp-heading" className="py-16 border-t border-slate-800">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 id="dp-heading" className="text-3xl font-bold text-slate-100 mb-8">Delivery Principles</h2>
            <div className="grid gap-6 md:grid-cols-2">
              {DELIVERY_PRINCIPLES.map(p => (
                <article key={p.id} className="card p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-2xl">{p.icon}</span>
                    <div><span className="text-xs font-bold text-blue-400 uppercase">Principle {p.id}</span><h3 className="text-lg font-bold text-slate-200">{p.title}</h3></div>
                  </div>
                  <p className="text-sm text-slate-400">{p.description}</p>
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
