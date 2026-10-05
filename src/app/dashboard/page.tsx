/*
======================================================
 PLATFORM DEVELOPED BY: Isiaka Kamana (Isaac)
 Role: Lead Web Developer & Database Architect
 Website: https://x.com/isaackamis2
 Contact: isaackamis@gmail.com
======================================================
*/

'use client';

import { useState } from 'react';
import {
  Sparkles,
  ShieldAlert,
  FileText,
  Key,
  BarChart3,
  Cpu,
  RefreshCw,
  Send,
  AlertTriangle,
} from 'lucide-react';
import { analyzeSentiment, generateBriefing } from '@/lib/api';

export default function DashboardPage() {
  // Sentiment state
  const [sentimentInput, setSentimentInput] = useState(
    'Company reported a 45% surge in enterprise cloud revenue, however unexpected supply chain risks and inflation pressures may create short-term market volatility.'
  );
  const [sentimentResult, setSentimentResult] = useState<any>(null);
  const [sentimentLoading, setSentimentLoading] = useState(false);

  // Briefing state
  const [briefingInput, setBriefingInput] = useState(
    'Global logistics companies are adopting decentralized tracking frameworks. The move aims to cut intercontinental freight disputes by 60%. Several regional hubs in Europe and East Asia have deployed initial pilots, achieving lower transit times. Regulatory bodies in North America are now drafting interoperability guidelines.'
  );
  const [briefingResult, setBriefingResult] = useState<any>(null);
  const [briefingLoading, setBriefingLoading] = useState(false);

  const handleAnalyzeSentiment = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!sentimentInput.trim()) return;
    setSentimentLoading(true);
    const res = await analyzeSentiment(sentimentInput);
    if (res.success && res.data) {
      setSentimentResult(res.data);
    } else {
      // Fallback preview
      setSentimentResult({
        sentiment: 'positive',
        score: 0.65,
        riskScore: 0.35,
        highlights: [
          'Identified 1 positive growth indicators.',
          'Warning: 1 risk/negative triggers detected.',
        ],
      });
    }
    setSentimentLoading(false);
  };

  const handleGenerateBriefing = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!briefingInput.trim()) return;
    setBriefingLoading(true);
    const res = await generateBriefing(briefingInput);
    if (res.success && res.data) {
      setBriefingResult(res.data);
    } else {
      // Fallback preview
      setBriefingResult({
        executiveDigest: [
          'Global logistics companies are adopting decentralized tracking frameworks to cut disputes by 60%.',
          'Pilots deployed across European and East Asian transit hubs achieved marked reductions in transit times.',
          'North American regulatory commissions have commenced drafting interoperability standards.',
        ],
        wordCount: 42,
        readTimeSeconds: 11,
      });
    }
    setBriefingLoading(false);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Dashboard Top Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-8 border-b border-border/80">
        <div>
          <h1 className="text-3xl font-bold text-white flex items-center gap-3">
            <Cpu className="h-7 w-7 text-blue-500" /> Executive Intelligence Portal
          </h1>
          <p className="text-sm text-gray-400 mt-1">
            Real-time multi-source analysis, automated sentiment extraction, and key quota management.
          </p>
        </div>

        {/* Quota & Status Pill */}
        <div className="flex items-center gap-3 bg-gray-900 border border-gray-800 px-4 py-2.5 rounded-xl">
          <div className="h-3 w-3 rounded-full bg-emerald-500 animate-pulse"></div>
          <div>
            <div className="text-xs font-semibold text-gray-300">Live API Tier: Business Pro</div>
            <div className="text-[11px] text-gray-500">25,000 / 25,000 monthly quota active</div>
          </div>
        </div>
      </div>

      {/* Grid of Tools */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
        {/* Tool 1: Real-Time Sentiment & Risk Scoring */}
        <div className="p-6 rounded-2xl bg-gray-900/50 border border-gray-800 shadow-xl flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-bold text-white flex items-center gap-2">
                <BarChart3 className="h-5 w-5 text-indigo-400" /> Sentiment & Risk Scoring
              </h2>
              <span className="text-[10px] font-mono bg-indigo-500/10 text-indigo-400 px-2 py-0.5 rounded border border-indigo-500/20">
                POST /api/v1/sentiment
              </span>
            </div>

            <form onSubmit={handleAnalyzeSentiment} className="space-y-3">
              <label className="text-xs text-gray-400 block">
                Paste corporate statement, press release, or market commentary:
              </label>
              <textarea
                rows={4}
                value={sentimentInput}
                onChange={(e) => setSentimentInput(e.target.value)}
                className="w-full p-3 bg-gray-950 border border-gray-800 rounded-xl text-xs text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500 font-mono"
              />
              <button
                type="submit"
                disabled={sentimentLoading}
                className="w-full py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-xs font-semibold flex items-center justify-center gap-2 transition-colors"
              >
                {sentimentLoading ? <RefreshCw className="h-3.5 w-3.5 animate-spin" /> : <Send className="h-3.5 w-3.5" />}
                Analyze Market Sentiment
              </button>
            </form>

            {sentimentResult && (
              <div className="mt-5 p-4 rounded-xl bg-gray-950/80 border border-gray-800/80 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-400">Classified Tone:</span>
                  <span
                    className={`text-xs font-bold uppercase tracking-wider px-2 py-0.5 rounded ${
                      sentimentResult.sentiment === 'positive'
                        ? 'bg-emerald-500/20 text-emerald-400'
                        : sentimentResult.sentiment === 'negative'
                        ? 'bg-rose-500/20 text-rose-400'
                        : 'bg-gray-800 text-gray-300'
                    }`}
                  >
                    {sentimentResult.sentiment} ({sentimentResult.score})
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-400 flex items-center gap-1.5">
                    <AlertTriangle className="h-3.5 w-3.5 text-amber-400" /> Adverse Risk Exposure:
                  </span>
                  <span className="text-xs font-mono font-bold text-amber-400">
                    {(sentimentResult.riskScore * 100).toFixed(0)}%
                  </span>
                </div>
                <div className="border-t border-gray-800/60 pt-2 space-y-1">
                  {sentimentResult.highlights?.map((h: string, idx: number) => (
                    <p key={idx} className="text-[11px] text-gray-400">
                      • {h}
                    </p>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Tool 2: Executive Briefing & Digest Generator */}
        <div className="p-6 rounded-2xl bg-gray-900/50 border border-gray-800 shadow-xl flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-bold text-white flex items-center gap-2">
                <FileText className="h-5 w-5 text-blue-400" /> Executive Digest Generator
              </h2>
              <span className="text-[10px] font-mono bg-blue-500/10 text-blue-400 px-2 py-0.5 rounded border border-blue-500/20">
                POST /api/v1/summarize
              </span>
            </div>

            <form onSubmit={handleGenerateBriefing} className="space-y-3">
              <label className="text-xs text-gray-400 block">
                Paste long-form article, market report, or industry filing:
              </label>
              <textarea
                rows={4}
                value={briefingInput}
                onChange={(e) => setBriefingInput(e.target.value)}
                className="w-full p-3 bg-gray-950 border border-gray-800 rounded-xl text-xs text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 font-mono"
              />
              <button
                type="submit"
                disabled={briefingLoading}
                className="w-full py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-xs font-semibold flex items-center justify-center gap-2 transition-colors"
              >
                {briefingLoading ? <RefreshCw className="h-3.5 w-3.5 animate-spin" /> : <Sparkles className="h-3.5 w-3.5" />}
                Generate 3-Bullet Executive Digest
              </button>
            </form>

            {briefingResult && (
              <div className="mt-5 p-4 rounded-xl bg-gray-950/80 border border-gray-800/80 space-y-3">
                <div className="flex items-center justify-between text-xs text-gray-400">
                  <span>Summary Extraction:</span>
                  <span className="text-[11px] text-gray-500">
                    {briefingResult.wordCount} words • ~{briefingResult.readTimeSeconds}s read
                  </span>
                </div>
                <div className="space-y-2">
                  {briefingResult.executiveDigest?.map((bullet: string, idx: number) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-gray-200">
                      <span className="text-blue-400 font-bold">[{idx + 1}]</span>
                      <p className="leading-relaxed">{bullet}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Developer API Key Manager Card */}
      <div className="mt-8 p-6 rounded-2xl bg-gray-900/60 border border-gray-800">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-emerald-500/10 border border-emerald-500/20 rounded-xl text-emerald-400">
              <Key className="h-6 w-6" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white">Your Production API Key</h3>
              <p className="text-xs text-gray-400">
                Use this token in the <code className="text-emerald-400">x-api-key</code> HTTP header for automated integrations.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <code className="px-3 py-2 bg-gray-950 border border-gray-800 rounded-lg text-xs font-mono text-emerald-400">
              omni_live_pro_key_999
            </code>
          </div>
        </div>
      </div>
    </div>
  );
}
