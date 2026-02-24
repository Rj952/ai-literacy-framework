'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const links = [
    { href: '/', label: 'Home' },
    { href: '/framework', label: 'Framework' },
    { href: '/assessment', label: 'Self-Assessment' },
    { href: '/policy-alignment', label: 'Policy Alignment' },
    { href: '/about', label: 'About' },
  ];

  return (
    <nav id="navigation" role="navigation" aria-label="Main navigation" className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-lg font-bold text-white" aria-label="AI Literacy Framework - Home">
            AI Literacy Framework
          </Link>
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 text-slate-400 hover:text-white" aria-expanded={isOpen} aria-controls="mobile-menu" aria-label="Toggle navigation menu">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              {isOpen ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
          <div className="hidden md:flex items-center gap-1">
            {links.map(link => (
              <Link key={link.href} href={link.href} className="px-3 py-2 text-sm text-slate-300 hover:text-white rounded-md transition-colors">{link.label}</Link>
            ))}
          </div>
        </div>
      </div>
      {isOpen && (
        <div id="mobile-menu" className="md:hidden border-t border-slate-800">
          <div className="px-4 py-3 space-y-1">
            {links.map(link => (
              <Link key={link.href} href={link.href} onClick={() => setIsOpen(false)} className="block px-3 py-2 text-slate-300 hover:text-white rounded-md">{link.label}</Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
