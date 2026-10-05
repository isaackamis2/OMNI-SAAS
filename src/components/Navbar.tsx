/*
======================================================
 PLATFORM DEVELOPED BY: Isiaka Kamana (Isaac)
 Role: Lead Web Developer & Database Architect
 Website: https://x.com/isaackamis2
 Contact: isaackamis@gmail.com
======================================================
*/

'use client';

import Link from 'next/link';
import { Activity, ShieldCheck, Terminal, Sparkles } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="h-9 w-9 rounded-lg bg-gradient-to-tr from-blue-600 to-indigo-500 flex items-center justify-center shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
            <Activity className="h-5 w-5 text-white" />
          </div>
          <div>
            <span className="font-bold text-lg tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-400">
              OMNI<span className="text-blue-500">INTEL</span>
            </span>
            <span className="hidden sm:inline-block ml-2 text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
              v1.0 Global
            </span>
          </div>
        </Link>

        <nav className="flex items-center gap-6">
          <Link href="/#demo" className="text-sm text-gray-300 hover:text-white transition-colors">
            Live Engine
          </Link>
          <Link href="/#pricing" className="text-sm text-gray-300 hover:text-white transition-colors">
            Monetization & Plans
          </Link>
          <Link href="/dashboard" className="text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-1.5">
            <Sparkles className="h-4 w-4" />
            Portal
          </Link>
          <a
            href="http://localhost:4000"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-mono bg-gray-800 text-gray-300 border border-gray-700 hover:border-gray-600 transition-colors"
          >
            <Terminal className="h-3.5 w-3.5 text-emerald-400" />
            API Port :4000
          </a>
        </nav>
      </div>
    </header>
  );
}
