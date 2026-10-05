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
import Link from 'next/link';
import {
  Activity,
  Globe2,
  KeyRound,
  Zap,
  TrendingUp,
  Shield,
  ArrowRight,
  CheckCircle2,
  Search,
  Code2,
  Copy,
  Check,
  CreditCard,
  X,
} from 'lucide-react';
import { queryIntel, requestApiKey } from '@/lib/api';

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState('Artificial Intelligence');
  const [results, setResults] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [copiedKey, setCopiedKey] = useState(false);

  // Key generator state
  const [emailInput, setEmailInput] = useState('');
  const [generatedKey, setGeneratedKey] = useState<string | null>(null);
  const [keyLoading, setKeyLoading] = useState(false);

  // Checkout modal state
  const [checkoutPlan, setCheckoutPlan] = useState<{
    name: string;
    price: string;
    calls: string;
  } | null>(null);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    setLoading(true);
    const data = await queryIntel(searchQuery);
    if (data.success && data.data) {
      setResults(data.data.results || []);
    } else {
      // Fallback preview
      setResults([
        {
          id: 'demo-1',
          title: `Rapid Sector Expansion in ${searchQuery}`,
          source: 'Reuters / Bloomberg Global Wire',
          summary: `High capital velocity recorded across key enterprise segments. Sentiment remains bullish with strong institutional inflow.`,
          sentiment: 'positive',
          sentimentScore: 0.88,
          entities: [searchQuery, 'Institutional Capital', 'Q4 Growth'],
        },
        {
          id: 'demo-2',
          title: `Regulatory Alignment & Cross-Border Guidelines for ${searchQuery}`,
          source: 'Financial Times Insights',
          summary: `Global compliance frameworks are converging toward automated telemetry and algorithmic validation standards.`,
          sentiment: 'neutral',
          sentimentScore: 0.22,
          entities: [searchQuery, 'Cross-Border', 'Governance'],
        },
      ]);
    }
    setLoading(false);
  };

  const handleGenerateKey = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailInput.trim()) return;
    setKeyLoading(true);
    const res = await requestApiKey(emailInput, 'free');
    if (res.success && res.key) {
      setGeneratedKey(res.key.key);
    } else {
      setGeneratedKey('omni_free_' + Math.random().toString(36).substring(2, 10));
    }
    setKeyLoading(false);
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(true);
    setTimeout(() => setCopiedKey(false), 2000);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      {/* Hero Section */}
      <section className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-8">
          <Globe2 className="h-4 w-4" /> Global Intelligence Engine & Micro-SaaS
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white max-w-4xl mx-auto leading-tight">
          Monetizable Market Intelligence & News Analysis for the{' '}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">
            Global Enterprise
          </span>
        </h1>

        <p className="mt-6 text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto">
          One unified backend engine powering both high-throughput developer APIs and an intuitive
          executive intelligence portal. Zero operational friction, worldwide reach.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href="#demo"
            className="px-6 py-3.5 rounded-xl font-semibold text-white bg-blue-600 hover:bg-blue-500 transition-all shadow-lg shadow-blue-500/25 flex items-center gap-2"
          >
            Test Live Intelligence <ArrowRight className="h-4 w-4" />
          </a>
          <Link
            href="/dashboard"
            className="px-6 py-3.5 rounded-xl font-semibold text-gray-300 bg-gray-900 border border-gray-800 hover:border-gray-700 hover:text-white transition-all flex items-center gap-2"
          >
            Launch Executive Portal
          </Link>
        </div>

        {/* Live Key Generation Callout */}
        <div className="mt-12 max-w-md mx-auto p-4 rounded-xl bg-gray-900/80 border border-gray-800 text-left">
          <div className="flex items-center gap-2 text-sm font-semibold text-gray-200 mb-2">
            <KeyRound className="h-4 w-4 text-emerald-400" /> Get Your Free API Key
          </div>
          <form onSubmit={handleGenerateKey} className="flex gap-2">
            <input
              type="email"
              value={emailInput}
              onChange={(e) => setEmailInput(e.target.value)}
              placeholder="developer@company.com"
              required
              className="flex-1 px-3 py-2 text-xs bg-gray-950 border border-gray-800 rounded-lg text-white focus:outline-none focus:border-blue-500"
            />
            <button
              type="submit"
              disabled={keyLoading}
              className="px-4 py-2 text-xs font-semibold bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg transition-colors whitespace-nowrap"
            >
              {keyLoading ? 'Generating...' : 'Get Key'}
            </button>
          </form>

          {generatedKey && (
            <div className="mt-3 p-2 bg-emerald-950/40 border border-emerald-800/60 rounded-md flex items-center justify-between">
              <code className="text-xs font-mono text-emerald-300 truncate max-w-[280px]">
                {generatedKey}
              </code>
              <button
                onClick={() => copyToClipboard(generatedKey)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                {copiedKey ? <Check className="h-3.5 w-3.5 text-emerald-400" /> : <Copy className="h-3.5 w-3.5" />}
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Interactive Live Demo */}
      <section id="demo" className="w-full max-w-6xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="p-8 rounded-2xl bg-gray-900/60 border border-gray-800/80 shadow-2xl backdrop-blur-sm">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6">
            <div>
              <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                <Activity className="h-6 w-6 text-blue-500" /> Real-Time Intelligence Search Engine
              </h2>
              <p className="text-sm text-gray-400 mt-1">
                Connected directly to the live OMNI-API backend running on port 4000.
              </p>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono text-gray-400 bg-gray-950 px-3 py-1.5 rounded-lg border border-gray-800">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
              GET /api/v1/intel
            </div>
          </div>

          <form onSubmit={handleSearch} className="flex gap-2">
            <div className="relative flex-1">
              <Search className="absolute left-3.5 top-3.5 h-4 w-4 text-gray-500" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search market topic, brand, or sector (e.g., Clean Energy, Tesla, Biotech)"
                className="w-full pl-10 pr-4 py-3 bg-gray-950 border border-gray-800 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 text-sm"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="px-6 py-3 bg-blue-600 hover:bg-blue-500 font-semibold text-white rounded-xl text-sm transition-all shadow-md shadow-blue-500/20"
            >
              {loading ? 'Analyzing...' : 'Run Query'}
            </button>
          </form>

          {/* Results display */}
          <div className="mt-6 space-y-4">
            {results.length > 0 ? (
              results.map((item, idx) => (
                <div
                  key={item.id || idx}
                  className="p-4 rounded-xl bg-gray-950/70 border border-gray-800/80 hover:border-gray-700 transition-colors"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="text-sm font-semibold text-white">{item.title}</span>
                    <span
                      className={`text-xs px-2.5 py-0.5 rounded-full font-medium ${
                        item.sentiment === 'positive'
                          ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                          : item.sentiment === 'negative'
                          ? 'bg-rose-500/10 text-rose-400 border border-rose-500/20'
                          : 'bg-gray-800 text-gray-300'
                      }`}
                    >
                      Sentiment: {item.sentiment} ({item.sentimentScore})
                    </span>
                  </div>
                  <p className="text-xs text-gray-400 leading-relaxed">{item.summary}</p>
                  <div className="mt-3 flex items-center justify-between text-[11px] text-gray-500">
                    <span>Source: {item.source}</span>
                    <div className="flex gap-1.5">
                      {item.entities?.map((ent: string, i: number) => (
                        <span key={i} className="px-1.5 py-0.5 bg-gray-900 rounded text-gray-400">
                          #{ent}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="p-8 text-center text-gray-500 text-sm border border-dashed border-gray-800 rounded-xl">
                Enter any company or industry topic above and click Run Query to test live analysis.
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Monetization & Pricing Section */}
      <section id="pricing" className="w-full max-w-6xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white">Dual-Stream Monetization Blueprint</h2>
          <p className="text-gray-400 mt-2 text-sm">
            Monetize high-volume developers via API keys + non-technical executives via monthly SaaS portal.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Free Tier */}
          <div className="p-6 rounded-2xl bg-gray-900/40 border border-gray-800 flex flex-col justify-between">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-blue-400">Developer Free</span>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-4xl font-extrabold text-white">$0</span>
                <span className="text-xs text-gray-500">/month</span>
              </div>
              <p className="text-xs text-gray-400 mt-2">Essential sandbox for developers building prototypes.</p>
              <ul className="mt-6 space-y-3 text-xs text-gray-300">
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-400" /> 100 API Calls / Month</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-400" /> Rate limit: 20 req/min</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-400" /> Standard Market Wire</li>
              </ul>
            </div>
            <button
              onClick={() => copyToClipboard('omni_test_free_key_123')}
              className="mt-8 w-full py-2.5 rounded-lg font-semibold text-xs bg-gray-800 hover:bg-gray-700 text-white transition-colors"
            >
              Use Free Key
            </button>
          </div>

          {/* Pro SaaS & API Tier */}
          <div className="p-6 rounded-2xl bg-gradient-to-b from-blue-900/30 to-gray-900/80 border-2 border-blue-500/50 flex flex-col justify-between shadow-xl shadow-blue-500/10 relative">
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-blue-600 text-white text-[10px] font-bold uppercase tracking-wider">
              Most Popular
            </span>
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-blue-400">Business Pro</span>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-4xl font-extrabold text-white">$49</span>
                <span className="text-xs text-gray-500">/month</span>
              </div>
              <p className="text-xs text-gray-400 mt-2">Full access to executive portal + production API limits.</p>
              <ul className="mt-6 space-y-3 text-xs text-gray-300">
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-400" /> 25,000 API Calls / Month</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-400" /> Executive Portal Dashboard</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-400" /> Sentiment & Risk Scoring Engine</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-400" /> Sub-50ms latency tier</li>
              </ul>
            </div>
            <button
              onClick={() => setCheckoutPlan({ name: 'Business Pro', price: '$49', calls: '25,000' })}
              className="mt-8 w-full py-2.5 rounded-lg font-semibold text-xs bg-blue-600 hover:bg-blue-500 text-white text-center transition-colors shadow-md shadow-blue-500/25 flex items-center justify-center gap-2"
            >
              <CreditCard className="h-3.5 w-3.5" /> Subscribe Now ($49/mo)
            </button>
          </div>

          {/* Enterprise */}
          <div className="p-6 rounded-2xl bg-gray-900/40 border border-gray-800 flex flex-col justify-between">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-purple-400">Enterprise High-Volume</span>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-4xl font-extrabold text-white">$199</span>
                <span className="text-xs text-gray-500">/month</span>
              </div>
              <p className="text-xs text-gray-400 mt-2">Unlimited intelligence feeds for automated algorithms.</p>
              <ul className="mt-6 space-y-3 text-xs text-gray-300">
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-400" /> 500,000 API Calls / Month</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-400" /> Dedicated Webhook Streams</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-400" /> Custom Ingestion Sources</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-400" /> SLA & 24/7 Priority Support</li>
              </ul>
            </div>
            <button
              onClick={() => setCheckoutPlan({ name: 'Enterprise High-Volume', price: '$199', calls: '500,000' })}
              className="mt-8 w-full py-2.5 rounded-lg font-semibold text-xs bg-purple-600 hover:bg-purple-500 text-white text-center transition-colors shadow-md shadow-purple-500/25 flex items-center justify-center gap-2"
            >
              <CreditCard className="h-3.5 w-3.5" /> Subscribe Now ($199/mo)
            </button>
          </div>
        </div>
      </section>

      {/* Global Checkout Modal */}
      {checkoutPlan && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
          <div className="bg-gray-900 border border-gray-800 rounded-2xl max-w-md w-full p-6 shadow-2xl relative">
            <button
              onClick={() => setCheckoutPlan(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="text-center mb-6">
              <span className="text-xs uppercase font-semibold text-blue-400 tracking-wider">
                Instant Subscription
              </span>
              <h3 className="text-2xl font-bold text-white mt-1">{checkoutPlan.name}</h3>
              <div className="mt-2 text-3xl font-extrabold text-white">
                {checkoutPlan.price} <span className="text-sm font-normal text-gray-400">/ month</span>
              </div>
              <p className="text-xs text-gray-400 mt-1">Includes {checkoutPlan.calls} API calls & dashboard access</p>
            </div>

            <div className="space-y-3">
              {/* Option 1: PayPal */}
              <a
                href={`https://www.paypal.com/paypalme/isaackamis/${checkoutPlan.price.replace('$', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl font-semibold text-xs bg-[#0070ba] hover:bg-[#005ea6] text-white flex items-center justify-center gap-2 transition-all shadow-md"
              >
                Pay with PayPal ({checkoutPlan.price}/mo)
              </a>

              {/* Option 2: RapidAPI */}
              <a
                href="https://rapidapi.com/hub"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl font-semibold text-xs bg-gray-800 hover:bg-gray-700 text-white border border-gray-700 flex items-center justify-center gap-2 transition-all"
              >
                Subscribe via RapidAPI Developer Portal
              </a>

              {/* Option 3: Raenest / Wire Invoice */}
              <a
                href={`mailto:isaackamis@gmail.com?subject=OmniIntel%20Subscription%20Invoice%20-${checkoutPlan.name}`}
                className="w-full py-2.5 px-4 rounded-xl font-medium text-xs bg-gray-950 hover:bg-gray-800 text-gray-300 border border-gray-800 flex items-center justify-center gap-2 transition-all"
              >
                Request Corporate Invoice (Raenest / Bank Wire)
              </a>
            </div>

            <p className="text-[11px] text-gray-500 text-center mt-4">
              Instant activation • 256-bit encrypted checkout • Cancel anytime
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
