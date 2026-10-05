/*
======================================================
 PLATFORM DEVELOPED BY: Isiaka Kamana (Isaac)
 Role: Lead Web Developer & Database Architect
 Website: https://x.com/isaackamis2
 Contact: isaackamis@gmail.com
======================================================
*/

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-border/80 bg-background/95 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <p className="text-sm font-semibold text-gray-300">
            OmniIntel Global Intelligence Engine & Micro-SaaS
          </p>
          <p className="text-xs text-gray-500 mt-1">
            Built for enterprise-grade speed, automated market sensing, and global scale.
          </p>
        </div>

        <div className="rounded-lg p-3 bg-gray-900/60 border border-gray-800 text-center md:text-right">
          <p className="text-xs text-gray-400">
            Platform Architected & Developed by:{' '}
            <a
              href="https://x.com/isaackamis2"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 font-medium hover:underline"
            >
              Isiaka Kamana (Isaac)
            </a>
          </p>
          <p className="text-[11px] text-gray-500 mt-0.5">
            Lead Web Developer & Database Architect • Contact: isaackamis@gmail.com
          </p>
        </div>
      </div>
    </footer>
  );
}
