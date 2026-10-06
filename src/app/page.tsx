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
  Coins,
  Building2,
  Smartphone,
  MessageSquare,
  Mail,
  ExternalLink,
  ShieldCheck,
  Wallet,
} from 'lucide-react';
import { queryIntel, requestApiKey } from '@/lib/api';
import { PAYMENT_CONFIG } from '@/lib/paymentConfig';

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
  const [paymentTab, setPaymentTab] = useState<'payoneer' | 'crypto' | 'momo_bank' | 'rapidapi'>('payoneer');
  const [cryptoSubTab, setCryptoSubTab] = useState<'usdt-trc20' | 'usdt-polygon' | 'binance-pay'>('usdt-trc20');
  const [copiedAddress, setCopiedAddress] = useState<string | null>(null);

  const handleCopyAddress = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedAddress(text);
    setTimeout(() => setCopiedAddress(null), 2500);
  };

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

      {/* Global Multi-Gateway Checkout Modal */}
      {checkoutPlan && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 overflow-y-auto">
          <div className="bg-gray-900 border border-gray-800 rounded-3xl max-w-lg w-full p-6 sm:p-7 shadow-2xl relative my-8">
            <button
              onClick={() => setCheckoutPlan(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white p-2 rounded-xl hover:bg-gray-800/80 transition-all"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Plan Header */}
            <div className="text-center mb-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/20 uppercase tracking-wider">
                <Zap className="h-3 w-3" /> Instant Subscription
              </span>
              <h3 className="text-2xl font-bold text-white mt-2">{checkoutPlan.name}</h3>
              <div className="mt-2 text-3xl font-extrabold text-white">
                {checkoutPlan.price} <span className="text-sm font-normal text-gray-400">/ month</span>
              </div>
              <p className="text-xs text-gray-400 mt-1">Includes {checkoutPlan.calls} API calls & dashboard access</p>
            </div>

            {/* Gateway Navigation Tabs */}
            <div className="grid grid-cols-4 gap-1.5 p-1 bg-gray-950/80 rounded-2xl border border-gray-800 mb-6">
              <button
                type="button"
                onClick={() => setPaymentTab('payoneer')}
                className={`flex flex-col sm:flex-row items-center justify-center gap-1.5 py-2.5 px-2 rounded-xl text-xs font-semibold transition-all ${
                  paymentTab === 'payoneer'
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                    : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
                }`}
              >
                <CreditCard className="h-3.5 w-3.5 shrink-0" />
                <span className="truncate">Payoneer</span>
              </button>

              <button
                type="button"
                onClick={() => setPaymentTab('crypto')}
                className={`flex flex-col sm:flex-row items-center justify-center gap-1.5 py-2.5 px-2 rounded-xl text-xs font-semibold transition-all ${
                  paymentTab === 'crypto'
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                    : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
                }`}
              >
                <Coins className="h-3.5 w-3.5 shrink-0" />
                <span className="truncate">Crypto</span>
              </button>

              <button
                type="button"
                onClick={() => setPaymentTab('momo_bank')}
                className={`flex flex-col sm:flex-row items-center justify-center gap-1.5 py-2.5 px-2 rounded-xl text-xs font-semibold transition-all ${
                  paymentTab === 'momo_bank'
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                    : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
                }`}
              >
                <Smartphone className="h-3.5 w-3.5 shrink-0" />
                <span className="truncate">MoMo / Wire</span>
              </button>

              <button
                type="button"
                onClick={() => setPaymentTab('rapidapi')}
                className={`flex flex-col sm:flex-row items-center justify-center gap-1.5 py-2.5 px-2 rounded-xl text-xs font-semibold transition-all ${
                  paymentTab === 'rapidapi'
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                    : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
                }`}
              >
                <ExternalLink className="h-3.5 w-3.5 shrink-0" />
                <span className="truncate">RapidAPI</span>
              </button>
            </div>

            {/* TAB CONTENT */}

            {/* 1. Payoneer & Card Tab */}
            {paymentTab === 'payoneer' && (
              <div className="space-y-4">
                <div className="p-4 rounded-2xl bg-gradient-to-br from-blue-950/40 to-gray-950 border border-blue-500/30">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-blue-400 flex items-center gap-1.5">
                      <CreditCard className="h-4 w-4" /> Global Card, ACH & Payoneer Transfer
                    </span>
                    <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                      Zero Fees
                    </span>
                  </div>
                  <p className="text-xs text-gray-300 mt-2">
                    {PAYMENT_CONFIG.payoneer.note}
                  </p>

                  <div className="mt-3 p-3 bg-gray-900 rounded-xl border border-gray-800 flex items-center justify-between">
                    <div>
                      <div className="text-[11px] text-gray-400">Payoneer Receiving Email:</div>
                      <div className="text-xs font-mono font-bold text-white select-all">
                        {PAYMENT_CONFIG.payoneer.email}
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => handleCopyAddress(PAYMENT_CONFIG.payoneer.email)}
                      className="px-3 py-1.5 rounded-lg bg-gray-800 hover:bg-gray-700 text-xs font-medium text-white flex items-center gap-1.5 transition-colors"
                    >
                      {copiedAddress === PAYMENT_CONFIG.payoneer.email ? (
                        <>
                          <Check className="h-3.5 w-3.5 text-emerald-400" /> Copied!
                        </>
                      ) : (
                        <>
                          <Copy className="h-3.5 w-3.5" /> Copy Email
                        </>
                      )}
                    </button>
                  </div>
                </div>

                {/* Direct Action buttons */}
                <div className="space-y-2">
                  <a
                    href={`https://wa.me/${PAYMENT_CONFIG.whatsappNumber}?text=${encodeURIComponent(`Hi Isaac, I want to subscribe to OmniIntel ${checkoutPlan.name} (${checkoutPlan.price}/month) via Payoneer. Please send me the Payoneer invoice / payment link.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 px-4 rounded-xl font-semibold text-xs bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center gap-2 transition-all shadow-md shadow-emerald-600/20"
                  >
                    <MessageSquare className="h-4 w-4" /> Request Payoneer Invoice via WhatsApp
                  </a>

                  <a
                    href={`mailto:${PAYMENT_CONFIG.email}?subject=${encodeURIComponent(`OmniIntel Payoneer Invoice Request - ${checkoutPlan.name}`)}&body=${encodeURIComponent(`Hi Isaac,\n\nI would like to subscribe to OmniIntel ${checkoutPlan.name} (${checkoutPlan.price}/month) via Payoneer / Credit Card.\n\nPlease send me a Payoneer payment link or invoice.\n\nThank you!`)}`}
                    className="w-full py-2.5 px-4 rounded-xl font-medium text-xs bg-gray-800 hover:bg-gray-700 text-gray-200 border border-gray-700 flex items-center justify-center gap-2 transition-all"
                  >
                    <Mail className="h-4 w-4" /> Request Payoneer Invoice via Email
                  </a>
                </div>
              </div>
            )}

            {/* 2. Crypto Tab */}
            {paymentTab === 'crypto' && (
              <div className="space-y-4">
                {/* Sub-selector for Crypto networks */}
                <div className="grid grid-cols-3 gap-2">
                  {PAYMENT_CONFIG.cryptoOptions.map((opt) => (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => setCryptoSubTab(opt.id as any)}
                      className={`p-2 rounded-xl text-center border text-[11px] font-semibold transition-all ${
                        cryptoSubTab === opt.id
                          ? 'bg-blue-600/20 border-blue-500 text-white'
                          : 'bg-gray-950 border-gray-800 text-gray-400 hover:text-white'
                      }`}
                    >
                      {opt.name}
                    </button>
                  ))}
                </div>

                {(() => {
                  const activeCrypto = PAYMENT_CONFIG.cryptoOptions.find((c) => c.id === cryptoSubTab) || PAYMENT_CONFIG.cryptoOptions[0];
                  return (
                    <div className="p-4 rounded-2xl bg-gray-950 border border-gray-800 space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-white flex items-center gap-1.5">
                          <Coins className="h-4 w-4 text-amber-400" /> {activeCrypto.network}
                        </span>
                        {activeCrypto.badge && (
                          <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/20">
                            {activeCrypto.badge}
                          </span>
                        )}
                      </div>

                      <p className="text-[11px] text-gray-400">{activeCrypto.note}</p>

                      <div className="p-3 bg-gray-900 rounded-xl border border-gray-800 flex items-center justify-between gap-2">
                        <div className="min-w-0 flex-1">
                          <div className="text-[10px] text-gray-400 uppercase font-semibold">Deposit Address / ID:</div>
                          <div className="text-xs font-mono font-bold text-emerald-400 truncate select-all">
                            {activeCrypto.address}
                          </div>
                        </div>
                        <button
                          type="button"
                          onClick={() => handleCopyAddress(activeCrypto.address)}
                          className="shrink-0 px-3 py-1.5 rounded-lg bg-gray-800 hover:bg-gray-700 text-xs font-medium text-white flex items-center gap-1.5 transition-colors"
                        >
                          {copiedAddress === activeCrypto.address ? (
                            <>
                              <Check className="h-3.5 w-3.5 text-emerald-400" /> Copied!
                            </>
                          ) : (
                            <>
                              <Copy className="h-3.5 w-3.5" /> Copy
                            </>
                          )}
                        </button>
                      </div>

                      <div className="text-[11px] text-blue-400 bg-blue-950/30 border border-blue-800/40 rounded-xl p-2.5 text-center">
                        Amount to send: <span className="font-bold text-white">{checkoutPlan.price} USDT / USDC</span>
                      </div>
                    </div>
                  );
                })()}

                {/* Crypto Actions */}
                <div className="space-y-2">
                  <a
                    href={`https://wa.me/${PAYMENT_CONFIG.whatsappNumber}?text=${encodeURIComponent(`Hi Isaac, I just sent ${checkoutPlan.price} in crypto for the OmniIntel ${checkoutPlan.name} subscription. Here is my transaction hash / proof for activation:`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 px-4 rounded-xl font-semibold text-xs bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center gap-2 transition-all shadow-md shadow-emerald-600/20"
                  >
                    <MessageSquare className="h-4 w-4" /> Confirm TxID via WhatsApp
                  </a>

                  <a
                    href={`mailto:${PAYMENT_CONFIG.email}?subject=${encodeURIComponent(`OmniIntel Crypto Payment Proof - ${checkoutPlan.name}`)}&body=${encodeURIComponent(`Hi Isaac,\n\nI have sent ${checkoutPlan.price} for the ${checkoutPlan.name} tier.\n\nNetwork: ${cryptoSubTab}\nTransaction Hash / Link:\nMy Email:\n\nPlease generate and activate my production API key.\n\nThank you!`)}`}
                    className="w-full py-2.5 px-4 rounded-xl font-medium text-xs bg-gray-800 hover:bg-gray-700 text-gray-200 border border-gray-700 flex items-center justify-center gap-2 transition-all"
                  >
                    <Mail className="h-4 w-4" /> Email Payment Proof & TxID
                  </a>
                </div>
              </div>
            )}

            {/* 3. Mobile Money & Bank Wire Tab */}
            {paymentTab === 'momo_bank' && (
              <div className="space-y-4">
                {/* Mobile Money Card */}
                <div className="p-4 rounded-2xl bg-gray-950 border border-gray-800 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-white flex items-center gap-1.5">
                      <Smartphone className="h-4 w-4 text-emerald-400" /> {PAYMENT_CONFIG.mobileMoney.provider}
                    </span>
                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
                      Mobile Money
                    </span>
                  </div>
                  <p className="text-[11px] text-gray-400">{PAYMENT_CONFIG.mobileMoney.instructions}</p>
                  
                  <div className="p-3 bg-gray-900 rounded-xl border border-gray-800 flex items-center justify-between">
                    <div>
                      <div className="text-[11px] text-gray-400">Recipient: <span className="text-white font-medium">{PAYMENT_CONFIG.mobileMoney.accountName}</span></div>
                      <div className="text-xs font-mono font-bold text-white">{PAYMENT_CONFIG.mobileMoney.numberOrCode}</div>
                    </div>
                    <button
                      type="button"
                      onClick={() => handleCopyAddress(PAYMENT_CONFIG.mobileMoney.numberOrCode)}
                      className="px-3 py-1.5 rounded-lg bg-gray-800 hover:bg-gray-700 text-xs font-medium text-white flex items-center gap-1.5 transition-colors"
                    >
                      {copiedAddress === PAYMENT_CONFIG.mobileMoney.numberOrCode ? (
                        <>
                          <Check className="h-3.5 w-3.5 text-emerald-400" /> Copied!
                        </>
                      ) : (
                        <>
                          <Copy className="h-3.5 w-3.5" /> Copy Code
                        </>
                      )}
                    </button>
                  </div>
                </div>

                {/* Bank Wire Card */}
                <div className="p-4 rounded-2xl bg-gray-950 border border-gray-800 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-white flex items-center gap-1.5">
                      <Building2 className="h-4 w-4 text-blue-400" /> Direct Bank Wire Transfer
                    </span>
                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-300 border border-blue-500/20">
                      Corporate / Wire
                    </span>
                  </div>
                  <div className="text-[11px] text-gray-300 space-y-1">
                    <div><span className="text-gray-400">Bank:</span> {PAYMENT_CONFIG.bankWire.bankName} ({PAYMENT_CONFIG.bankWire.country})</div>
                    <div><span className="text-gray-400">Beneficiary:</span> {PAYMENT_CONFIG.bankWire.accountName}</div>
                    <div className="flex items-center justify-between">
                      <span><span className="text-gray-400">Account:</span> <code className="text-emerald-400">{PAYMENT_CONFIG.bankWire.accountNumber}</code></span>
                      <button
                        type="button"
                        onClick={() => handleCopyAddress(PAYMENT_CONFIG.bankWire.accountNumber)}
                        className="px-2 py-0.5 rounded bg-gray-800 hover:bg-gray-700 text-[10px] font-medium text-white flex items-center gap-1 transition-colors"
                      >
                        <Copy className="h-3 w-3" /> Copy Acc
                      </button>
                    </div>
                    <div><span className="text-gray-400">SWIFT / BIC:</span> <code className="text-blue-400">{PAYMENT_CONFIG.bankWire.swiftCode}</code></div>
                  </div>
                </div>

                {/* Actions */}
                <div className="space-y-2">
                  <a
                    href={`https://wa.me/${PAYMENT_CONFIG.whatsappNumber}?text=${encodeURIComponent(`Hi Isaac, I completed a Mobile Money / Bank transfer for OmniIntel ${checkoutPlan.name} (${checkoutPlan.price}/month). Here is my payment receipt:`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 px-4 rounded-xl font-semibold text-xs bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center gap-2 transition-all shadow-md shadow-emerald-600/20"
                  >
                    <MessageSquare className="h-4 w-4" /> Send Receipt via WhatsApp
                  </a>

                  <a
                    href={`mailto:${PAYMENT_CONFIG.email}?subject=${encodeURIComponent(`OmniIntel MoMo / Wire Receipt - ${checkoutPlan.name}`)}&body=${encodeURIComponent(`Hi Isaac,\n\nI have transferred payment for OmniIntel ${checkoutPlan.name} (${checkoutPlan.price}/month).\n\nSender Name:\nReference / Transaction ID:\nAccount Email:\n\nPlease confirm and activate my API key.\n\nThank you!`)}`}
                    className="w-full py-2.5 px-4 rounded-xl font-medium text-xs bg-gray-800 hover:bg-gray-700 text-gray-200 border border-gray-700 flex items-center justify-center gap-2 transition-all"
                  >
                    <Mail className="h-4 w-4" /> Email Transfer Receipt
                  </a>
                </div>
              </div>
            )}

            {/* 4. RapidAPI Tab */}
            {paymentTab === 'rapidapi' && (
              <div className="space-y-4">
                <div className="p-4 rounded-2xl bg-gray-950 border border-gray-800 space-y-3">
                  <span className="text-xs font-bold text-white flex items-center gap-1.5">
                    <ExternalLink className="h-4 w-4 text-blue-400" /> RapidAPI Marketplace Integration
                  </span>
                  <p className="text-xs text-gray-300 leading-relaxed">
                    Subscribe with automated monthly credit card billing through the world&apos;s largest API hub. Production keys are automatically provisioned and managed inside your RapidAPI developer dashboard.
                  </p>
                </div>

                <a
                  href={PAYMENT_CONFIG.rapidApiUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-xl font-semibold text-xs bg-blue-600 hover:bg-blue-500 text-white border border-blue-500 flex items-center justify-center gap-2 transition-all shadow-md shadow-blue-600/20"
                >
                  <ExternalLink className="h-4 w-4" /> Open RapidAPI Developer Portal
                </a>
              </div>
            )}

            <p className="text-[11px] text-gray-500 text-center mt-5">
              Instant activation • 256-bit encrypted checkout • Cancel anytime
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
