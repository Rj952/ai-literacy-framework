import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { CONTENT_AREAS, DELIVERY_PRINCIPLES } from '@/data/framework';

export default function HomePage() {
  return (
    <>
      <Navigation />
      <main id="main-content">
        <section aria-labelledby="hero-heading" className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-950/30 via-slate-950 to-slate-950" aria-hidden="true" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-8">
              Aligned with U.S. Department of Labor Standards
            </div>
            <h1 id="hero-heading" className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-slate-100 tracking-tight max-w-4xl mx-auto leading-[1.1]">
              AI Literacy<span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">Framework Platform</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
              Empowering organizations to create, customize, and publish AI literacy guidelines for workforce readiness — built on the U.S. Department of Labor&apos;s national framework.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/framework" className="btn-primary text-lg px-8 py-4">Explore the Framework</Link>
              <Link href="/assessment" className="btn-secondary text-lg px-8 py-4">Take Self-Assessment</Link>
            </div>
            <p className="mt-8 text-sm text-slate-600">Created by <strong className="text-slate-400">Rohan Jowallah</strong></p>
          </div>
        </section>

        <section aria-label="Key statistics" className="border-y border-slate-800 bg-slate-900/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[{value:'5',label:'Content Areas'},{value:'7',label:'Delivery Principles'},{value:'8+',label:'Policy Alignments'},{value:'4',label:'Proficiency Levels'}].map(stat => (
                <div key={stat.label}><div className="text-3xl font-bold text-blue-400">{stat.value}</div><div className="text-sm text-slate-500 mt-1">{stat.label}</div></div>
              ))}
            </div>
          </div>
        </section>

        <section aria-labelledby="areas-heading" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <p className="text-sm font-semibold text-blue-400 uppercase tracking-widest mb-3">Five Foundational Areas</p>
              <h2 id="areas-heading" className="section-heading">What AI Literacy Covers</h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {CONTENT_AREAS.map(area => (
                <article key={area.id} className="card p-8" style={{borderTopColor:area.colorAccent,borderTopWidth:'3px'}}>
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-3xl" role="img" aria-label={area.shortTitle}>{area.icon}</span>
                    <div><span className="text-xs font-bold uppercase tracking-widest" style={{color:area.colorAccent}}>Area {area.id}</span><h3 className="text-lg font-bold text-slate-100">{area.title}</h3></div>
                  </div>
                  <p className="text-sm text-slate-400 leading-relaxed mb-4">{area.description}</p>
                  <ul className="space-y-1.5" aria-label={"Key topics for "+area.title}>
                    {area.details.slice(0,3).map((d,i)=>(<li key={i} className="flex items-start gap-2 text-xs text-slate-500"><span className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{backgroundColor:area.colorAccent}} aria-hidden="true"/>{d}</li>))}
                  </ul>
                </article>
              ))}
            </div>
            <div className="text-center mt-12"><Link href="/framework" className="btn-primary">View Complete Framework</Link></div>
          </div>
        </section>

        <section aria-labelledby="principles-heading" className="py-20 bg-slate-900/30 border-y border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <p className="text-sm font-semibold text-blue-400 uppercase tracking-widest mb-3">Seven Guiding Principles</p>
              <h2 id="principles-heading" className="section-heading">How to Deliver AI Literacy</h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {DELIVERY_PRINCIPLES.map(p => (
                <article key={p.id} className="card p-6">
                  <span className="text-2xl" role="img" aria-label={p.title}>{p.icon}</span>
                  <div className="text-xs font-bold text-blue-400 uppercase tracking-wider mt-3 mb-1">Principle {p.id}</div>
                  <h3 className="text-base font-bold text-slate-200 mb-2">{p.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{p.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-b from-slate-950 to-blue-950/20">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-4">Assess Your AI Literacy</h2>
            <p className="text-lg text-slate-400 mb-8 leading-relaxed">Take the self-assessment to rate your confidence across all five content areas.</p>
            <Link href="/assessment" className="btn-primary text-lg px-10 py-4">Start the Assessment</Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
