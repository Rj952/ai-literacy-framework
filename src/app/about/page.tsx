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
        {/* Header */}
        <section aria-labelledby="about-heading" className="py-16 border-b border-slate-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 id="about-heading" className="text-4xl md:text-5xl font-bold text-slate-100 mb-4">
              About the Platform
            </h1>
            <p className="text-xl text-slate-400 leading-relaxed">
              Building the bridge between national AI policy and organizational
              readiness.
            </p>
          </div>
        </section>

        {/* Creator */}
        <section aria-labelledby="creator-heading" className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="card p-8 md:p-10 bg-gradient-to-br from-blue-950/30 to-slate-900/60
                            border-blue-800/20">
              <div className="flex flex-col md:flex-row items-start gap-8">
                <div className="flex-shrink-0 w-24 h-24 rounded-2xl bg-gradient-to-br
                                from-blue-500 to-blue-700 flex items-center justify-center
                                text-white text-3xl font-bold"
                  aria-hidden="true">
                  RJ
                </div>
                <div>
                  <h2 id="creator-heading" className="text-2xl md:text-3xl font-bold text-slate-100 mb-2">
                    Rohan Jowallah
                  </h2>
                  <p className="text-blue-400 font-semibold mb-4">
                    Creator &amp; Platform Architect
                  </p>
                  <p className="text-slate-400 leading-relaxed mb-4">
                    Rohan Jowallah is an AI education strategist, consultant, and
                    thought leader dedicated to empowering organizations across
                    higher education, government, and the Global South to navigate
                    the AI transformation. With deep expertise in instructional design,
                    educational technology, and AI literacy, Rohan bridges the gap
                    between cutting-edge AI policy and practical institutional deployment.
                  </p>
                  <p className="text-slate-400 leading-relaxed">
                    This platform represents the culmination of years of work in
                    AI literacy consulting, curriculum design, and workforce development.
                    It translates the U.S. Department of Labor&apos;s AI Literacy Framework
                    into a practical, customizable tool that any organization can use
                    to build AI-literate teams.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Vision */}
        <section aria-labelledby="vision-heading"
          className="py-16 border-t border-slate-800 bg-slate-900/20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 id="vision-heading" className="text-2xl font-bold text-slate-100 mb-6">
              Platform Vision
            </h2>

            <div className="space-y-6">
              <div className="card p-6">
                <h3 className="text-lg font-semibold text-slate-200 mb-2">
                  Democratize AI Literacy
                </h3>
                <p className="text-slate-400">
                  Every organization — regardless of size, sector, or geography — should
                  have access to a structured, evidence-based approach to AI literacy that
                  aligns with national standards and best practices.
                </p>
              </div>

              <div className="card p-6">
                <h3 className="text-lg font-semibold text-slate-200 mb-2">
                  Policy-to-Practice Bridge
                </h3>
                <p className="text-slate-400">
                  National AI policies set the direction, but organizations need practical
                  tools to implement them. This platform translates policy frameworks into
                  actionable, customizable literacy programs.
                </p>
              </div>

              <div className="card p-6">
                <h3 className="text-lg font-semibold text-slate-200 mb-2">
                  Context-Aware Customization
                </h3>
                <p className="text-slate-400">
                  AI literacy is not one-size-fits-all. The platform enables organizations
                  to adapt the framework to their specific sectors, workforce needs, and
                  institutional contexts while maintaining alignment with national standards.
                </p>
              </div>

              <div className="card p-6">
                <h3 className="text-lg font-semibold text-slate-200 mb-2">
                  Accessible by Design
                </h3>
                <p className="text-slate-400">
                  Built with WCAG 2.1 Level AA accessibility standards at its core, the
                  platform ensures that AI literacy resources are available to everyone,
                  including users with disabilities, those using assistive technologies,
                  and those with varying levels of digital literacy.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Accessibility Statement */}
        <section aria-labelledby="a11y-heading" className="py-16 border-t border-slate-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 id="a11y-heading" className="text-2xl font-bold text-slate-100 mb-6">
              Accessibility Commitment
            </h2>
            <div className="card p-8">
              <p className="text-slate-400 leading-relaxed mb-4">
                The AI Literacy Framework Platform is committed to ensuring digital
                accessibility for people with disabilities. We continually work to
                improve the user experience for everyone and apply the relevant
                accessibility standards.
              </p>

              <h3 className="text-lg font-semibold text-slate-200 mb-3 mt-6">
                Conformance Status
              </h3>
              <p className="text-slate-400 leading-relaxed mb-4">
                This platform is designed to conform with WCAG 2.1 Level AA standards.
                Our accessibility features include:
              </p>

              <ul className="space-y-2 text-slate-400 mb-6">
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1" aria-hidden="true">✓</span>
                  <span>Semantic HTML structure with proper heading hierarchy</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1" aria-hidden="true">✓</span>
                  <span>ARIA landmarks, labels, and live regions for dynamic content</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1" aria-hidden="true">✓</span>
                  <span>Keyboard navigation support throughout all interactive elements</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1" aria-hidden="true">✓</span>
                  <span>Skip navigation links for screen reader users</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1" aria-hidden="true">✓</span>
                  <span>Color contrast ratios meeting AA standards (4.5:1 for text)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1" aria-hidden="true">✓</span>
                  <span>Reduced motion support for users with vestibular disorders</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1" aria-hidden="true">✓</span>
                  <span>Focus indicators visible on all interactive elements</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1" aria-hidden="true">✓</span>
                  <span>Responsive design supporting text zoom up to 200%</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1" aria-hidden="true">✓</span>
                  <span>High contrast mode (forced-colors) support</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1" aria-hidden="true">✓</span>
                  <span>Form labels and error messages associated with inputs</span>
                </li>
              </ul>

              <p className="text-sm text-slate-500">
                If you encounter any accessibility barriers while using this platform,
                please contact Rohan Jowallah. We take accessibility feedback seriously
                and will work to address any issues promptly.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 border-t border-slate-800 text-center">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-slate-100 mb-4">
              Ready to Explore?
            </h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6">
              <Link href="/framework" className="btn-primary">
                Explore Framework
              </Link>
              <Link href="/assessment" className="btn-secondary">
                Take Self-Assessment
              </Link>
              <Link href="/policy-alignment" className="btn-secondary">
                View Policy Alignment
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
