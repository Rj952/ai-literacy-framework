import Link from 'next/link';

export default function Footer() {
  return (
    <footer role="contentinfo" className="bg-slate-950 border-t border-slate-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold text-slate-100 mb-3">AI Literacy Framework</h3>
            <p className="text-slate-400 text-sm">Aligned with the U.S. Department of Labor AI Literacy Framework and federal AI policy standards.</p>
          </div>
          <div>
            <h3 className="text-lg font-bold text-slate-100 mb-3">Quick Links</h3>
            <div className="space-y-2">
              <Link href="/framework" className="block text-slate-400 hover:text-white text-sm">Framework</Link>
              <Link href="/assessment" className="block text-slate-400 hover:text-white text-sm">Self-Assessment</Link>
              <Link href="/policy-alignment" className="block text-slate-400 hover:text-white text-sm">Policy Alignment</Link>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold text-slate-100 mb-3">Accessibility</h3>
            <p className="text-slate-400 text-sm">This platform conforms with WCAG 2.1 Level AA standards for digital accessibility.</p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-slate-800 text-center">
          <p className="text-slate-500 text-sm">Created by Rohan Jowallah. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
