/*
======================================================
 PLATFORM DEVELOPED BY: Isiaka Kamana (Isaac)
 Role: Lead Web Developer & Database Architect
 Website: https://x.com/isaackamis2
 Contact: isaackamis@gmail.com
======================================================
*/

import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'OmniIntel — Global Web & Media Intelligence Engine',
  description: 'Worldwide API and Micro-SaaS for real-time market sentiment, automated news intelligence, and executive briefing extraction.',
  authors: [{ name: 'Isiaka Kamana (Isaac)', url: 'https://x.com/isaackamis2' }],
  creator: 'Isiaka Kamana (Isaac)',
  keywords: ['Intelligence API', 'Sentiment Analysis', 'Executive Briefing', 'Micro-SaaS', 'Market Monitoring'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="text/developer-signature"
          dangerouslySetInnerHTML={{
            __html: `
======================================================
 PLATFORM DEVELOPED BY: Isiaka Kamana (Isaac)
 Role: Lead Web Developer & Database Architect
 Website: https://x.com/isaackamis2
 Contact: isaackamis@gmail.com
======================================================
`,
          }}
        />
        <meta name="platform-developer" content="Isiaka Kamana (Isaac)" />
        <meta name="platform-role" content="Lead Web Developer & Database Architect" />
        <meta name="platform-website" content="https://x.com/isaackamis2" />
        <meta name="platform-contact" content="isaackamis@gmail.com" />
      </head>
      <body className="antialiased flex flex-col min-h-screen">
        {/*
        ======================================================
         PLATFORM DEVELOPED BY: Isiaka Kamana (Isaac)
         Role: Lead Web Developer & Database Architect
         Website: https://x.com/isaackamis2
         Contact: isaackamis@gmail.com
        ======================================================
        */}
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
