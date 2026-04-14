'use client';

import { useState } from 'react';
import { RULES, SORTED_STATES, type StateRule } from '@/lib/rules';

type DebtType = 'medical' | 'credit_card' | 'personal_loan' | 'other';
type EmpType = 'w2' | '1099' | 'unemployed';
type Step = 1 | 2 | 3;

interface Result {
  rule: StateRule;
  stateCode: string;
  debtAmount: number;
  debtType: DebtType;
  empType: EmpType;
}

const DEBT_TYPES: { value: DebtType; label: string; sub: string }[] = [
  { value: 'medical', label: 'Medical Bill', sub: 'Hospital, clinic, or provider debt' },
  { value: 'credit_card', label: 'Credit Card', sub: 'Unpaid card balance' },
  { value: 'personal_loan', label: 'Personal Loan', sub: 'Bank or online lender' },
  { value: 'other', label: 'Other Debt', sub: 'Utility, rent, or other' },
];

const EMP_TYPES: { value: EmpType; label: string; sub: string }[] = [
  { value: 'w2', label: 'W-2 Employee', sub: 'Traditional payroll employment' },
  { value: '1099', label: 'Self-Employed', sub: 'Freelance, contractor, or business owner' },
  { value: 'unemployed', label: 'Currently Unemployed', sub: 'No active paycheck' },
];

function plBadge(pl: StateRule['pl']) {
  if (pl === 'none') return { text: 'Wages Protected', cls: 'bg-emerald-50 text-emerald-700 border-emerald-200' };
  if (pl === 'strong') return { text: 'Strong Protection', cls: 'bg-teal-50 text-teal-700 border-teal-200' };
  if (pl === 'moderate') return { text: 'Moderate Protection', cls: 'bg-amber-50 text-amber-700 border-amber-200' };
  return { text: 'Federal Baseline', cls: 'bg-slate-100 text-slate-600 border-slate-200' };
}

function riskLevel(rule: StateRule, empType: EmpType) {
  if (empType === 'unemployed') return {
    level: 'low',
    label: 'Low Risk',
    color: 'text-emerald-700',
    bg: 'bg-emerald-50 border-emerald-200',
    bar: 'bg-emerald-400',
    pct: 15,
    note: 'Unemployed individuals have no wages to garnish. Creditors may still pursue bank levies or property liens, but direct wage garnishment requires active employment.',
  };
  if (empType === '1099') return {
    level: 'medium',
    label: 'Varies by Situation',
    color: 'text-amber-700',
    bg: 'bg-amber-50 border-amber-200',
    bar: 'bg-amber-400',
    pct: 50,
    note: 'Self-employed income is harder to garnish directly since there is no employer to issue withholding orders. Creditors may pursue bank levies after obtaining a court judgment.',
  };
  if (rule.pl === 'none') return {
    level: 'low',
    label: 'Wages Protected',
    color: 'text-emerald-700',
    bg: 'bg-emerald-50 border-emerald-200',
    bar: 'bg-emerald-400',
    pct: 10,
    note: 'Your state prohibits wage garnishment for most private consumer debts. This is one of the strongest protections available — creditors have very limited collection options against wages.',
  };
  if (rule.pl === 'strong') return {
    level: 'medium',
    label: 'Limited Risk',
    color: 'text-teal-700',
    bg: 'bg-teal-50 border-teal-200',
    bar: 'bg-teal-500',
    pct: 35,
    note: `Your state limits garnishment to ${rule.maxPct}% — below the federal 25% cap. This gives you meaningful protection against aggressive creditors.`,
  };
  if (rule.pl === 'moderate') return {
    level: 'medium',
    label: 'Moderate Risk',
    color: 'text-amber-700',
    bg: 'bg-amber-50 border-amber-200',
    bar: 'bg-amber-400',
    pct: 60,
    note: `Your state caps garnishment at ${rule.maxPct}% of disposable income. You have some protection, but creditors can still take a significant portion of your paycheck after winning a judgment.`,
  };
  return {
    level: 'high',
    label: 'Elevated Risk',
    color: 'text-red-700',
    bg: 'bg-red-50 border-red-200',
    bar: 'bg-red-400',
    pct: 85,
    note: 'Your state follows the federal 25% cap. Up to 25% of your disposable income can be garnished per paycheck. Acting early — before a judgment is entered — gives you the most options.',
  };
}

const STEPS = ['Your State', 'Debt Type', 'Your Situation'];

export default function GarnishmentChecker() {
  const [step, setStep] = useState<Step>(1);
  const [stateCode, setStateCode] = useState('');
  const [debtAmount, setDebtAmount] = useState('');
  const [debtType, setDebtType] = useState<DebtType | null>(null);
  const [empType, setEmpType] = useState<EmpType | null>(null);
  const [result, setResult] = useState<Result | null>(null);
  const [stateErr, setStateErr] = useState(false);
  const [amountErr, setAmountErr] = useState(false);

  function goStep2() {
    if (!stateCode) { setStateErr(true); return; }
    setStateErr(false);
    setStep(2);
  }

  function goStep3() {
    if (!debtType) return;
    setStep(3);
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const amt = parseFloat(debtAmount);
    const aErr = !debtAmount || isNaN(amt) || amt <= 0;
    setAmountErr(aErr);
    if (aErr || !empType) return;
    setResult({
      rule: RULES[stateCode],
      stateCode,
      debtAmount: amt,
      debtType: debtType!,
      empType,
    });
  }

  function reset() {
    setStep(1);
    setStateCode('');
    setDebtAmount('');
    setDebtType(null);
    setEmpType(null);
    setResult(null);
    setStateErr(false);
    setAmountErr(false);
  }

  const risk = result ? riskLevel(result.rule, result.empType) : null;
  const badge = result ? plBadge(result.rule.pl) : null;
  const selectedStateName = stateCode ? RULES[stateCode]?.stateName : '';

  return (
    <section id="checker" className="py-16 sm:py-24 bg-slate-50">
      <div className="max-w-2xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-3">
            Check Your Garnishment Risk
          </h2>
          <p className="text-slate-500 text-base max-w-lg mx-auto">
            Answer three quick questions. We'll show you exactly what creditors can do in your state.
          </p>
        </div>

        {/* Card */}
        <div className="bg-white rounded-2xl shadow-sm ring-1 ring-slate-200 overflow-hidden">

          {/* Progress bar */}
          {!result && (
            <div className="px-8 pt-7 pb-0">
              <div className="flex items-center gap-0 mb-6">
                {STEPS.map((label, i) => {
                  const stepNum = (i + 1) as Step;
                  const isActive = step === stepNum;
                  const isDone = step > stepNum;
                  return (
                    <div key={label} className="flex items-center flex-1">
                      <div className="flex flex-col items-center">
                        <div
                          className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-colors ${
                            isDone
                              ? 'bg-teal-600 text-white'
                              : isActive
                              ? 'bg-teal-600 text-white ring-4 ring-teal-100'
                              : 'bg-slate-100 text-slate-400'
                          }`}
                        >
                          {isDone ? (
                            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          ) : (
                            stepNum
                          )}
                        </div>
                        <span className={`text-[11px] mt-1 font-medium hidden sm:block ${isActive || isDone ? 'text-teal-700' : 'text-slate-400'}`}>
                          {label}
                        </span>
                      </div>
                      {i < STEPS.length - 1 && (
                        <div className={`flex-1 h-0.5 mx-2 mb-4 sm:mb-5 transition-colors ${isDone ? 'bg-teal-400' : 'bg-slate-200'}`} />
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          <div className="px-8 pb-8 pt-2">

            {/* ── STEP 1: State ── */}
            {!result && step === 1 && (
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-1">Which state do you live in?</h3>
                <p className="text-slate-500 text-sm mb-6">Garnishment rules vary significantly by state.</p>

                <div className="relative mb-2">
                  <select
                    value={stateCode}
                    onChange={(e) => { setStateCode(e.target.value); setStateErr(false); }}
                    className="w-full appearance-none border border-slate-300 rounded-xl px-4 py-3.5 pr-10 text-sm text-slate-900 bg-white focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition"
                  >
                    <option value="">— Select your state —</option>
                    {SORTED_STATES.map(([code, d]) => (
                      <option key={code} value={code}>{d.stateName}</option>
                    ))}
                  </select>
                  <svg className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
                {stateErr && <p className="text-xs text-red-500 mb-4">Please select your state to continue.</p>}

                <button
                  onClick={goStep2}
                  className="w-full mt-4 bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3.5 rounded-xl transition flex items-center justify-center gap-2"
                >
                  Continue
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            )}

            {/* ── STEP 2: Debt Type ── */}
            {!result && step === 2 && (
              <div>
                <div className="flex items-center gap-2 mb-5">
                  <span className="text-xs font-semibold bg-teal-50 text-teal-700 px-2.5 py-1 rounded-full border border-teal-100">{selectedStateName}</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-1">What type of debt is this?</h3>
                <p className="text-slate-500 text-sm mb-6">Some states have different rules for specific debt types.</p>

                <div className="space-y-2.5">
                  {DEBT_TYPES.map(({ value, label, sub }) => (
                    <label key={value} className="cursor-pointer block">
                      <input type="radio" name="debtType" value={value} checked={debtType === value} onChange={() => setDebtType(value)} className="sr-only" />
                      <div className={`flex items-center justify-between px-4 py-3.5 rounded-xl border-2 transition-all ${debtType === value ? 'border-teal-500 bg-teal-50' : 'border-slate-200 hover:border-slate-300 bg-white'}`}>
                        <div>
                          <p className={`text-sm font-semibold ${debtType === value ? 'text-teal-800' : 'text-slate-800'}`}>{label}</p>
                          <p className={`text-xs mt-0.5 ${debtType === value ? 'text-teal-600' : 'text-slate-400'}`}>{sub}</p>
                        </div>
                        <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-colors ${debtType === value ? 'border-teal-500 bg-teal-500' : 'border-slate-300'}`}>
                          {debtType === value && (
                            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          )}
                        </div>
                      </div>
                    </label>
                  ))}
                </div>

                <div className="flex gap-3 mt-6">
                  <button onClick={() => setStep(1)} className="flex items-center gap-1.5 text-sm text-slate-500 hover:text-slate-700 font-medium px-4 py-3 rounded-xl border border-slate-200 hover:border-slate-300 transition">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    Back
                  </button>
                  <button
                    onClick={goStep3}
                    disabled={!debtType}
                    className="flex-1 bg-teal-600 hover:bg-teal-700 disabled:opacity-40 disabled:cursor-not-allowed text-white font-semibold py-3 rounded-xl transition flex items-center justify-center gap-2"
                  >
                    Continue
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            )}

            {/* ── STEP 3: Employment + Amount ── */}
            {!result && step === 3 && (
              <form onSubmit={handleSubmit} noValidate>
                <div className="flex items-center gap-2 mb-5">
                  <span className="text-xs font-semibold bg-teal-50 text-teal-700 px-2.5 py-1 rounded-full border border-teal-100">{selectedStateName}</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-1">Tell us a bit more</h3>
                <p className="text-slate-500 text-sm mb-6">This helps us give you the most accurate risk picture.</p>

                <p className="text-sm font-semibold text-slate-700 mb-2.5">Your employment status</p>
                <div className="space-y-2.5 mb-6">
                  {EMP_TYPES.map(({ value, label, sub }) => (
                    <label key={value} className="cursor-pointer block">
                      <input type="radio" name="empType" value={value} checked={empType === value} onChange={() => setEmpType(value)} className="sr-only" />
                      <div className={`flex items-center justify-between px-4 py-3.5 rounded-xl border-2 transition-all ${empType === value ? 'border-teal-500 bg-teal-50' : 'border-slate-200 hover:border-slate-300 bg-white'}`}>
                        <div>
                          <p className={`text-sm font-semibold ${empType === value ? 'text-teal-800' : 'text-slate-800'}`}>{label}</p>
                          <p className={`text-xs mt-0.5 ${empType === value ? 'text-teal-600' : 'text-slate-400'}`}>{sub}</p>
                        </div>
                        <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-colors ${empType === value ? 'border-teal-500 bg-teal-500' : 'border-slate-300'}`}>
                          {empType === value && (
                            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          )}
                        </div>
                      </div>
                    </label>
                  ))}
                </div>

                <div className="mb-2">
                  <label htmlFor="debt-amount" className="block text-sm font-semibold text-slate-700 mb-2">
                    Approximately how much do you owe?
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-sm font-medium pointer-events-none">$</span>
                    <input
                      type="number"
                      id="debt-amount"
                      value={debtAmount}
                      onChange={(e) => { setDebtAmount(e.target.value); setAmountErr(false); }}
                      min="1"
                      step="0.01"
                      placeholder="0.00"
                      inputMode="decimal"
                      className="w-full border border-slate-300 rounded-xl pl-8 pr-4 py-3.5 text-sm text-slate-900 focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition"
                    />
                  </div>
                  {amountErr && <p className="text-xs text-red-500 mt-1.5">Please enter an amount greater than $0.</p>}
                </div>

                <div className="flex gap-3 mt-6">
                  <button type="button" onClick={() => setStep(2)} className="flex items-center gap-1.5 text-sm text-slate-500 hover:text-slate-700 font-medium px-4 py-3 rounded-xl border border-slate-200 hover:border-slate-300 transition">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    Back
                  </button>
                  <button
                    type="submit"
                    disabled={!empType}
                    className="flex-1 bg-teal-600 hover:bg-teal-700 disabled:opacity-40 disabled:cursor-not-allowed text-white font-semibold py-3 rounded-xl transition flex items-center justify-center gap-2"
                  >
                    Show My Results
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </form>
            )}

            {/* ── RESULTS ── */}
            {result && risk && badge && (
              <div aria-live="polite">
                {/* Risk summary */}
                <div className={`rounded-xl border p-5 mb-5 ${risk.bg}`}>
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">Your Risk Level</p>
                      <h3 className={`text-2xl font-extrabold ${risk.color}`}>{risk.label}</h3>
                    </div>
                    <span className={`inline-flex items-center text-xs font-semibold px-3 py-1.5 rounded-full border whitespace-nowrap ${badge.cls}`}>
                      {badge.text}
                    </span>
                  </div>
                  {/* Risk bar */}
                  <div className="w-full bg-white/60 rounded-full h-2 mb-3">
                    <div className={`h-2 rounded-full transition-all ${risk.bar}`} style={{ width: `${risk.pct}%` }} />
                  </div>
                  <p className="text-sm text-slate-700 leading-relaxed">{risk.note}</p>
                </div>

                {/* State rules card */}
                <div className="rounded-xl border border-slate-200 bg-white p-5 mb-5">
                  <h4 className="text-base font-bold text-slate-900 mb-4">
                    {result.rule.stateName} — Garnishment Rules
                  </h4>
                  <div className="grid grid-cols-3 gap-3 mb-5">
                    <div className="bg-slate-50 rounded-xl p-3 text-center">
                      <div className="text-xl font-extrabold text-teal-600">
                        {result.rule.maxPct === 0 ? 'Banned' : `${result.rule.maxPct}%`}
                      </div>
                      <div className="text-[11px] text-slate-500 mt-1 leading-tight">Max garnishment rate</div>
                    </div>
                    <div className="bg-slate-50 rounded-xl p-3 text-center">
                      <div className="text-xl font-extrabold text-teal-600">{result.rule.limitYrs} yrs</div>
                      <div className="text-[11px] text-slate-500 mt-1 leading-tight">Statute of limitations</div>
                    </div>
                    <div className="bg-slate-50 rounded-xl p-3 text-center">
                      <div className="text-xl font-extrabold text-teal-600">
                        {result.rule.lawsuit ? 'Yes' : 'No'}
                      </div>
                      <div className="text-[11px] text-slate-500 mt-1 leading-tight">Lawsuit required first</div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1.5">State Rule</p>
                      <p className="text-sm text-slate-700 leading-relaxed">{result.rule.alt}</p>
                    </div>
                    <div>
                      <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1.5">What This Means for You</p>
                      <p className="text-sm text-slate-700 leading-relaxed">{result.rule.notes}</p>
                    </div>
                    {result.rule.links.length > 0 && (
                      <div>
                        <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1.5">Official Sources</p>
                        <div className="flex flex-wrap gap-2">
                          {result.rule.links.map((lnk) => (
                            <a
                              key={lnk.url}
                              href={lnk.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 text-xs text-teal-700 hover:text-teal-800 bg-teal-50 border border-teal-100 px-3 py-1.5 rounded-lg font-semibold transition"
                            >
                              {lnk.l} ↗
                            </a>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* CTA card */}
                <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 mb-4">
                  <p className="text-sm font-semibold text-slate-800 mb-1">Want to know all your options?</p>
                  <p className="text-xs text-slate-500 mb-3 leading-relaxed">Many consumer law attorneys offer free consultations. Understanding your rights early gives you the most leverage.</p>
                  <a
                    href="https://www.lawhelp.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-teal-700 hover:text-teal-800 transition"
                  >
                    Find free legal help in your state →
                  </a>
                </div>

                <p className="text-[11px] text-slate-400 text-center leading-relaxed mb-4">
                  For informational purposes only. Laws may change. Consult a licensed attorney for legal advice.
                </p>

                <button
                  onClick={reset}
                  className="w-full text-sm text-slate-500 hover:text-slate-700 font-medium py-2.5 rounded-xl border border-slate-200 hover:border-slate-300 transition"
                >
                  Start over
                </button>
              </div>
            )}

          </div>
        </div>
      </div>
    </section>
  );
}
