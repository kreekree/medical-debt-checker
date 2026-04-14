'use client';

import { useState } from 'react';
import { RULES, SORTED_STATES, type StateRule } from '@/lib/rules';

type DebtType = 'medical' | 'credit_card' | 'personal_loan' | 'other';
type EmpType = 'w2' | '1099' | 'unemployed';

interface Result {
  rule: StateRule;
  stateCode: string;
  debtAmount: number;
  debtType: DebtType;
  empType: EmpType;
}

const DEBT_TYPES: { value: DebtType; label: string; emoji: string }[] = [
  { value: 'medical', label: 'Medical', emoji: '🏥' },
  { value: 'credit_card', label: 'Credit Card', emoji: '💳' },
  { value: 'personal_loan', label: 'Personal Loan', emoji: '🏦' },
  { value: 'other', label: 'Other', emoji: '📋' },
];

const EMP_TYPES: { value: EmpType; label: string; emoji: string }[] = [
  { value: 'w2', label: 'W-2 Employee', emoji: '💼' },
  { value: '1099', label: 'Self-Employed', emoji: '📊' },
  { value: 'unemployed', label: 'Unemployed', emoji: '🔍' },
];

function plBadge(pl: StateRule['pl']) {
  if (pl === 'none') return { text: 'Wages Protected', cls: 'bg-green-100 text-green-800 border-green-200' };
  if (pl === 'strong') return { text: 'Strong Protection', cls: 'bg-blue-100 text-blue-800 border-blue-200' };
  if (pl === 'moderate') return { text: 'Moderate Protection', cls: 'bg-yellow-100 text-yellow-800 border-yellow-200' };
  return { text: 'Federal Baseline', cls: 'bg-gray-100 text-gray-700 border-gray-200' };
}

function riskLevel(rule: StateRule, empType: EmpType) {
  if (empType === 'unemployed') return { level: 'low', label: 'Low Risk', color: 'text-green-700', bg: 'bg-green-50 border-green-200', note: 'Unemployed individuals have no wages to garnish. Creditors may still pursue bank levies or property liens.' };
  if (empType === '1099') return { level: 'medium', label: 'Varies', color: 'text-yellow-700', bg: 'bg-yellow-50 border-yellow-200', note: 'Self-employed income may be more difficult to garnish directly, but creditors can pursue bank levies after obtaining a judgment.' };
  if (rule.pl === 'none') return { level: 'low', label: 'Wages Protected', color: 'text-green-700', bg: 'bg-green-50 border-green-200', note: 'Your state prohibits wage garnishment for most private consumer debts.' };
  if (rule.pl === 'strong') return { level: 'medium', label: 'Limited Risk', color: 'text-blue-700', bg: 'bg-blue-50 border-blue-200', note: `Your state limits garnishment to ${rule.maxPct}% — below the federal 25% cap.` };
  if (rule.pl === 'moderate') return { level: 'medium', label: 'Moderate Risk', color: 'text-yellow-700', bg: 'bg-yellow-50 border-yellow-200', note: `Your state caps garnishment at ${rule.maxPct}% of disposable income.` };
  return { level: 'high', label: 'Standard Federal Risk', color: 'text-red-700', bg: 'bg-red-50 border-red-200', note: 'Your state follows the federal 25% cap — up to 25% of disposable income can be garnished.' };
}

export default function GarnishmentChecker() {
  const [stateCode, setStateCode] = useState('');
  const [debtAmount, setDebtAmount] = useState('');
  const [debtType, setDebtType] = useState<DebtType>('medical');
  const [empType, setEmpType] = useState<EmpType>('w2');
  const [result, setResult] = useState<Result | null>(null);
  const [stateErr, setStateErr] = useState(false);
  const [amountErr, setAmountErr] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const amt = parseFloat(debtAmount);
    const sErr = !stateCode;
    const aErr = !debtAmount || isNaN(amt) || amt <= 0;
    setStateErr(sErr);
    setAmountErr(aErr);
    if (sErr || aErr) return;

    setLoading(true);
    setTimeout(() => {
      setResult({ rule: RULES[stateCode], stateCode, debtAmount: amt, debtType, empType });
      setLoading(false);
    }, 600);
  }

  const risk = result ? riskLevel(result.rule, result.empType) : null;
  const badge = result ? plBadge(result.rule.pl) : null;

  return (
    <section id="checker" className="py-16 sm:py-24 bg-slate-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-3">
            Check Your Garnishment Risk
          </h2>
          <p className="text-gray-500 text-base">
            Enter your state and debt details for an instant risk assessment and state-specific rules.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl ring-1 ring-gray-100 p-7 sm:p-10">
          <form onSubmit={handleSubmit} noValidate>
            <div className="space-y-7">
              {/* State + Amount */}
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="state-select" className="block text-sm font-semibold text-gray-700 mb-1.5">
                    Your State
                  </label>
                  <div className="relative">
                    <select
                      id="state-select"
                      value={stateCode}
                      onChange={(e) => { setStateCode(e.target.value); setStateErr(false); }}
                      className="w-full appearance-none border border-gray-300 rounded-xl px-4 py-3 pr-10 text-sm text-gray-900 bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                    >
                      <option value="">— Select state —</option>
                      {SORTED_STATES.map(([code, d]) => (
                        <option key={code} value={code}>{d.stateName}</option>
                      ))}
                    </select>
                    <svg className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                  {stateErr && <p className="text-xs text-red-500 mt-1.5">Please select your state.</p>}
                </div>
                <div>
                  <label htmlFor="debt-amount" className="block text-sm font-semibold text-gray-700 mb-1.5">
                    Debt Amount
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm pointer-events-none">$</span>
                    <input
                      type="number"
                      id="debt-amount"
                      value={debtAmount}
                      onChange={(e) => { setDebtAmount(e.target.value); setAmountErr(false); }}
                      min="1"
                      step="0.01"
                      placeholder="0.00"
                      inputMode="decimal"
                      className="w-full border border-gray-300 rounded-xl pl-8 pr-4 py-3 text-sm text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                    />
                  </div>
                  {amountErr && <p className="text-xs text-red-500 mt-1.5">Please enter an amount greater than $0.</p>}
                </div>
              </div>

              {/* Debt type */}
              <div>
                <p className="text-sm font-semibold text-gray-700 mb-3">Type of Debt</p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {DEBT_TYPES.map(({ value, label, emoji }) => (
                    <label key={value} className="cursor-pointer select-none">
                      <input
                        type="radio"
                        name="debtType"
                        value={value}
                        checked={debtType === value}
                        onChange={() => setDebtType(value)}
                        className="sr-only"
                      />
                      <div
                        className="border-2 rounded-xl p-3 text-center text-xs sm:text-sm font-semibold transition-all"
                        style={{
                          borderColor: debtType === value ? '#2563eb' : '',
                          backgroundColor: debtType === value ? '#eff6ff' : '',
                          color: debtType === value ? '#1d4ed8' : '#4b5563',
                        }}
                      >
                        <div className="text-xl sm:text-2xl mb-1">{emoji}</div>
                        {label}
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Employment type */}
              <div>
                <p className="text-sm font-semibold text-gray-700 mb-3">Your Employment Type</p>
                <div className="grid grid-cols-3 gap-2">
                  {EMP_TYPES.map(({ value, label, emoji }) => (
                    <label key={value} className="cursor-pointer select-none">
                      <input
                        type="radio"
                        name="empType"
                        value={value}
                        checked={empType === value}
                        onChange={() => setEmpType(value)}
                        className="sr-only"
                      />
                      <div
                        className="border-2 rounded-xl p-3 text-center text-xs sm:text-sm font-semibold transition-all"
                        style={{
                          borderColor: empType === value ? '#2563eb' : '',
                          backgroundColor: empType === value ? '#eff6ff' : '',
                          color: empType === value ? '#1d4ed8' : '#4b5563',
                        }}
                      >
                        <div className="text-xl sm:text-2xl mb-1">{emoji}</div>
                        {label}
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-600 hover:bg-blue-700 active:scale-[0.98] text-white font-bold py-4 rounded-xl text-base transition-all shadow-lg shadow-blue-200 flex items-center justify-center gap-2 disabled:opacity-70"
              >
                {loading ? (
                  <>
                    <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                    </svg>
                    Analyzing your risk…
                  </>
                ) : (
                  <>
                    Check My Garnishment Risk
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </>
                )}
              </button>
            </div>
          </form>
        </div>

        {/* Results */}
        {result && risk && badge && (
          <div className="mt-8 space-y-5" aria-live="polite">
            {/* Risk card */}
            <div className={`rounded-2xl border p-6 ${risk.bg}`}>
              <div className="flex items-center justify-between flex-wrap gap-3 mb-3">
                <h3 className={`text-xl font-extrabold ${risk.color}`}>{risk.label}</h3>
                <span className={`inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1 rounded-full border ${badge.cls}`}>
                  {badge.text}
                </span>
              </div>
              <p className="text-sm text-gray-700 leading-relaxed">{risk.note}</p>
            </div>

            {/* State details */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-md p-6 space-y-5">
              <h3 className="text-lg font-extrabold text-gray-900">
                {result.rule.stateName} — Wage Garnishment Rules
              </h3>
              <div className="grid sm:grid-cols-3 gap-4">
                <div className="bg-slate-50 rounded-xl p-4 text-center">
                  <div className="text-2xl font-extrabold text-blue-600">
                    {result.rule.maxPct === 0 ? 'Banned' : `${result.rule.maxPct}%`}
                  </div>
                  <div className="text-xs text-gray-500 mt-1">Max garnishment rate</div>
                </div>
                <div className="bg-slate-50 rounded-xl p-4 text-center">
                  <div className="text-2xl font-extrabold text-blue-600">{result.rule.limitYrs} yrs</div>
                  <div className="text-xs text-gray-500 mt-1">Statute of limitations</div>
                </div>
                <div className="bg-slate-50 rounded-xl p-4 text-center">
                  <div className="text-2xl font-extrabold text-blue-600">
                    {result.rule.lawsuit ? 'Required' : 'Not Required'}
                  </div>
                  <div className="text-xs text-gray-500 mt-1">Lawsuit to garnish</div>
                </div>
              </div>

              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">Garnishment Rule</p>
                <p className="text-sm text-gray-700 leading-relaxed">{result.rule.alt}</p>
              </div>

              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">What This Means</p>
                <p className="text-sm text-gray-700 leading-relaxed">{result.rule.notes}</p>
              </div>

              {result.rule.links.length > 0 && (
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">Official Resources</p>
                  <div className="flex flex-wrap gap-2">
                    {result.rule.links.map((lnk) => (
                      <a
                        key={lnk.url}
                        href={lnk.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs text-blue-600 hover:text-blue-700 bg-blue-50 border border-blue-100 px-3 py-1.5 rounded-lg font-semibold transition"
                      >
                        {lnk.l} ↗
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <p className="text-xs text-gray-400 text-center leading-relaxed">
              Data is for informational purposes only. Laws may change. Consult a licensed attorney for legal advice.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
