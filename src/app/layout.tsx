import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'AI Literacy Framework Platform',
  description: 'AI Literacy Framework aligned with U.S. Department of Labor standards. Created by Rohan Jowallah.',
  keywords: ['AI literacy', 'workforce development', 'Department of Labor', 'AI education'],
  authors: [{ name: 'Rohan Jowallah' }],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" dir="ltr">
      <body>
        <a href="#main-content" className="skip-link">Skip to main content</a>
        <a href="#navigation" className="skip-link">Skip to navigation</a>
        {children}
      </body>
    </html>
  );
}
