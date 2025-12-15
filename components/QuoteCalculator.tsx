'use client'

import { useState, useMemo } from 'react'

const DEVICE_TYPES = [
  { value: 'insulin-pump', label: 'Insulin Pump', description: 'Pump device only' },
  { value: 'cgm', label: 'CGM Only', description: 'Continuous glucose monitor' },
  { value: 'pump-and-cgm', label: 'Pump & CGM', description: 'Complete system', popular: true },
  { value: 'pdm', label: 'PDM/Handset', description: 'Personal diabetes manager' },
]

const PUMP_BRANDS = [
  { value: 'medtronic', label: 'Medtronic', description: '780G, 670G, 640G' },
  { value: 'omnipod', label: 'Omnipod', description: 'Dash, 5' },
  { value: 'tandem', label: 'Tandem', description: 't:slim X2' },
  { value: 'ypsomed', label: 'Ypsomed', description: 'MyLife' },
]

const CGM_BRANDS = [
  { value: 'dexcom', label: 'Dexcom', description: 'G6, G7' },
  { value: 'freestyle', label: 'FreeStyle Libre', description: 'Libre 2, 3' },
  { value: 'medtronic-cgm', label: 'Medtronic Guardian', description: 'Guardian 4' },
]

const COVER_TYPES = [
  { value: 'comprehensive', label: 'Comprehensive', description: 'Accidental damage, theft, loss & liquid damage', multiplier: 1.0, popular: true },
  { value: 'accidental', label: 'Accidental Damage Only', description: 'Drops, knocks and liquid damage', multiplier: 0.7 },
  { value: 'theft', label: 'Theft & Loss', description: 'Theft and loss coverage only', multiplier: 0.6 },
]

const COVERAGE_AMOUNTS = [
  { value: '2000', label: '£2,000', multiplier: 0.8 },
  { value: '3000', label: '£3,000', multiplier: 0.9 },
  { value: '5000', label: '£5,000', multiplier: 1.0 },
  { value: '7500', label: '£7,500', multiplier: 1.1 },
  { value: '10000', label: '£10,000', multiplier: 1.2 },
]

const EXCESS_OPTIONS = [
  { value: '0', label: '£0 Excess', multiplier: 1.15 },
  { value: '25', label: '£25 Excess', multiplier: 1.0 },
  { value: '50', label: '£50 Excess', multiplier: 0.85 },
  { value: '100', label: '£100 Excess', multiplier: 0.7 },
]

const ADDITIONAL_OPTIONS = [
  { value: 'accessories', label: 'Accessories Cover', description: 'Transmitters, sensors, infusion sets' },
  { value: 'worldwide', label: 'Worldwide Cover', description: '90 days per year travel coverage' },
  { value: 'loan-equipment', label: 'Loan Equipment', description: 'Cover for loan devices' },
]

function estimatePremium(
  coverType: string,
  coverageAmount: string,
  excess: string,
  additionalOptions: string[]
) {
  // Base premium for insulin pump insurance
  const baseMonthly = 7.50

  // Apply cover type multiplier
  const coverMultiplier = COVER_TYPES.find(c => c.value === coverType)?.multiplier || 1.0

  // Apply coverage amount multiplier
  const coverageMultiplier = COVERAGE_AMOUNTS.find(c => c.value === coverageAmount)?.multiplier || 1.0

  // Apply excess multiplier
  const excessMultiplier = EXCESS_OPTIONS.find(e => e.value === excess)?.multiplier || 1.0

  // Calculate monthly premium
  let monthlyAfterMultipliers = baseMonthly * coverMultiplier * coverageMultiplier * excessMultiplier

  // Add additional options
  let additionalMonthly = 0
  if (additionalOptions.includes('accessories')) additionalMonthly += 1.50
  if (additionalOptions.includes('worldwide')) additionalMonthly += 2.00
  if (additionalOptions.includes('loan-equipment')) additionalMonthly += 1.00

  const totalMonthly = monthlyAfterMultipliers + additionalMonthly

  // Add some variance for realism (10% variance)
  const monthlyVariance = totalMonthly * 0.10

  return {
    monthly: { low: Math.floor(totalMonthly - monthlyVariance), high: Math.ceil(totalMonthly + monthlyVariance) },
    annual: { low: Math.floor((totalMonthly - monthlyVariance) * 12), high: Math.ceil((totalMonthly + monthlyVariance) * 12) }
  }
}

function formatCurrency(amount: number) {
  return `£${amount.toFixed(0)}`
}

export function QuoteCalculator() {
  const [step, setStep] = useState(1)
  const [deviceType, setDeviceType] = useState('pump-and-cgm')
  const [pumpBrand, setPumpBrand] = useState('medtronic')
  const [cgmBrand, setCgmBrand] = useState('dexcom')
  const [coverType, setCoverType] = useState('comprehensive')
  const [coverageAmount, setCoverageAmount] = useState('5000')
  const [excess, setExcess] = useState('25')
  const [additionalOptions, setAdditionalOptions] = useState<string[]>([])
  const [showEstimate, setShowEstimate] = useState(false)

  const premium = useMemo(
    () => estimatePremium(coverType, coverageAmount, excess, additionalOptions),
    [coverType, coverageAmount, excess, additionalOptions]
  )

  const canProceed = () => {
    switch (step) {
      case 1: return deviceType && pumpBrand && cgmBrand
      case 2: return coverType && coverageAmount && excess
      default: return true
    }
  }

  const toggleAdditionalOption = (value: string) => {
    setAdditionalOptions(prev =>
      prev.includes(value)
        ? prev.filter(o => o !== value)
        : [...prev, value]
    )
  }

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Progress Steps */}
      <div className="flex items-center justify-center mb-8">
        {[1, 2, 3].map((s) => (
          <div key={s} className="flex items-center">
            <button
              onClick={() => s < step && setStep(s)}
              className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-all ${
                s === step
                  ? 'bg-cyan-500 text-white'
                  : s < step
                  ? 'bg-cyan-500/30 text-cyan-400 cursor-pointer hover:bg-cyan-500/50'
                  : 'bg-slate-700 text-slate-400'
              }`}
            >
              {s < step ? (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              ) : (
                s
              )}
            </button>
            {s < 3 && (
              <div className={`w-16 sm:w-24 h-1 mx-2 rounded ${s < step ? 'bg-cyan-500/50' : 'bg-slate-700'}`} />
            )}
          </div>
        ))}
      </div>

      {/* Step Labels */}
      <div className="flex justify-between mb-8 text-sm text-slate-400 px-2">
        <span className={step === 1 ? 'text-cyan-400' : ''}>Your Devices</span>
        <span className={step === 2 ? 'text-cyan-400' : ''}>Coverage Options</span>
        <span className={step === 3 ? 'text-cyan-400' : ''}>Quote Summary</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Form Section */}
        <div className="lg:col-span-2 space-y-6">
          {/* Step 1: Device Selection */}
          {step === 1 && (
            <div className="space-y-6">
              <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
                <h3 className="text-lg font-semibold text-white mb-4">What Device Are You Insuring?</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {DEVICE_TYPES.map((type) => (
                    <button
                      key={type.value}
                      onClick={() => setDeviceType(type.value)}
                      className={`p-4 rounded-xl text-left transition-all relative ${
                        deviceType === type.value
                          ? 'bg-cyan-500/20 border-2 border-cyan-500'
                          : 'bg-slate-700/30 border-2 border-transparent hover:bg-slate-700/50'
                      }`}
                    >
                      {type.popular && (
                        <span className="absolute -top-2 right-2 px-2 py-0.5 bg-cyan-500 text-white text-xs font-semibold rounded-full">
                          Popular
                        </span>
                      )}
                      <span className="text-sm font-medium text-white block">{type.label}</span>
                      <span className="text-xs text-slate-400 mt-1 block">{type.description}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
                <h3 className="text-lg font-semibold text-white mb-4">Insulin Pump Brand</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {PUMP_BRANDS.map((brand) => (
                    <button
                      key={brand.value}
                      onClick={() => setPumpBrand(brand.value)}
                      className={`p-4 rounded-xl text-left transition-all ${
                        pumpBrand === brand.value
                          ? 'bg-cyan-500/20 border-2 border-cyan-500'
                          : 'bg-slate-700/30 border-2 border-transparent hover:bg-slate-700/50'
                      }`}
                    >
                      <span className="text-sm font-medium text-white block">{brand.label}</span>
                      <span className="text-xs text-slate-400 mt-1 block">{brand.description}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
                <h3 className="text-lg font-semibold text-white mb-4">CGM System</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {CGM_BRANDS.map((brand) => (
                    <button
                      key={brand.value}
                      onClick={() => setCgmBrand(brand.value)}
                      className={`p-4 rounded-xl text-left transition-all ${
                        cgmBrand === brand.value
                          ? 'bg-cyan-500/20 border-2 border-cyan-500'
                          : 'bg-slate-700/30 border-2 border-transparent hover:bg-slate-700/50'
                      }`}
                    >
                      <span className="text-sm font-medium text-white block">{brand.label}</span>
                      <span className="text-xs text-slate-400 mt-1 block">{brand.description}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Coverage Options */}
          {step === 2 && (
            <div className="space-y-6">
              <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
                <h3 className="text-lg font-semibold text-white mb-4">Choose Your Coverage Type</h3>
                <div className="space-y-3">
                  {COVER_TYPES.map((type) => (
                    <button
                      key={type.value}
                      onClick={() => setCoverType(type.value)}
                      className={`w-full text-left p-4 rounded-xl transition-all relative ${
                        coverType === type.value
                          ? 'bg-cyan-500/20 border-2 border-cyan-500'
                          : 'bg-slate-700/30 border-2 border-transparent hover:bg-slate-700/50'
                      }`}
                    >
                      {type.popular && (
                        <span className="absolute -top-2 right-4 px-2 py-0.5 bg-cyan-500 text-white text-xs font-semibold rounded-full">
                          Most Popular
                        </span>
                      )}
                      <div className="font-medium text-white">{type.label}</div>
                      <div className="text-sm text-slate-400">{type.description}</div>
                    </button>
                  ))}
                </div>
              </div>

              <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
                <h3 className="text-lg font-semibold text-white mb-4">Coverage Amount</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {COVERAGE_AMOUNTS.map((amount) => (
                    <button
                      key={amount.value}
                      onClick={() => setCoverageAmount(amount.value)}
                      className={`p-4 rounded-xl text-left transition-all ${
                        coverageAmount === amount.value
                          ? 'bg-cyan-500/20 border-2 border-cyan-500'
                          : 'bg-slate-700/30 border-2 border-transparent hover:bg-slate-700/50'
                      }`}
                    >
                      <span className="text-sm font-medium text-white block">{amount.label}</span>
                      <span className="text-xs text-slate-400 mt-1 block">Coverage limit</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
                <h3 className="text-lg font-semibold text-white mb-4">Excess Amount</h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {EXCESS_OPTIONS.map((exc) => (
                    <button
                      key={exc.value}
                      onClick={() => setExcess(exc.value)}
                      className={`p-3 rounded-xl text-center transition-all ${
                        excess === exc.value
                          ? 'bg-cyan-500/20 border-2 border-cyan-500'
                          : 'bg-slate-700/30 border-2 border-transparent hover:bg-slate-700/50'
                      }`}
                    >
                      <span className="text-sm font-medium text-white block">{exc.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
                <h3 className="text-lg font-semibold text-white mb-4">Add Optional Extras</h3>
                <div className="space-y-3">
                  {ADDITIONAL_OPTIONS.map((opt) => (
                    <label key={opt.value} className="flex items-start gap-4 cursor-pointer group">
                      <div className="relative mt-1">
                        <input
                          type="checkbox"
                          checked={additionalOptions.includes(opt.value)}
                          onChange={() => toggleAdditionalOption(opt.value)}
                          className="sr-only"
                        />
                        <div className={`w-6 h-6 rounded-lg border-2 flex items-center justify-center transition-all ${
                          additionalOptions.includes(opt.value) ? 'bg-cyan-500 border-cyan-500' : 'border-slate-500 group-hover:border-slate-400'
                        }`}>
                          {additionalOptions.includes(opt.value) && (
                            <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                          )}
                        </div>
                      </div>
                      <div>
                        <div className="text-white font-medium">{opt.label}</div>
                        <div className="text-sm text-slate-400">{opt.description}</div>
                      </div>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Summary */}
          {step === 3 && (
            <div className="space-y-6">
              <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
                <h3 className="text-lg font-semibold text-white mb-4">Your Quote Summary</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Device Type</span>
                    <span className="text-white">{DEVICE_TYPES.find(t => t.value === deviceType)?.label}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Pump Brand</span>
                    <span className="text-white">{PUMP_BRANDS.find(b => b.value === pumpBrand)?.label}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">CGM System</span>
                    <span className="text-white">{CGM_BRANDS.find(b => b.value === cgmBrand)?.label}</span>
                  </div>
                  <div className="border-t border-slate-700 my-3"></div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Coverage Type</span>
                    <span className="text-white">{COVER_TYPES.find(c => c.value === coverType)?.label}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Coverage Amount</span>
                    <span className="text-white">{COVERAGE_AMOUNTS.find(a => a.value === coverageAmount)?.label}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Excess</span>
                    <span className="text-white">{EXCESS_OPTIONS.find(e => e.value === excess)?.label}</span>
                  </div>
                  {additionalOptions.length > 0 && (
                    <div className="flex justify-between">
                      <span className="text-slate-400">Extra Coverage</span>
                      <span className="text-cyan-400">{additionalOptions.length} option(s) selected</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex gap-4">
            {step > 1 && (
              <button
                onClick={() => setStep(step - 1)}
                className="flex-1 py-4 rounded-xl font-semibold bg-slate-700 text-white hover:bg-slate-600 transition-colors"
              >
                Back
              </button>
            )}
            {step < 3 ? (
              <button
                onClick={() => canProceed() && setStep(step + 1)}
                disabled={!canProceed()}
                className={`flex-1 py-4 rounded-xl font-semibold transition-colors ${
                  canProceed()
                    ? 'bg-cyan-500 text-white hover:bg-cyan-600'
                    : 'bg-slate-700 text-slate-400 cursor-not-allowed'
                }`}
              >
                Continue
              </button>
            ) : (
              <button
                onClick={() => setShowEstimate(true)}
                className="flex-1 py-4 rounded-xl font-semibold bg-cyan-500 text-white hover:bg-cyan-600 transition-colors"
              >
                Get Quote Estimates
              </button>
            )}
          </div>
        </div>

        {/* Estimate Panel */}
        <div className="lg:col-span-1">
          <div className="sticky top-24">
            <div className="bg-gradient-to-br from-cyan-500/20 to-teal-600/20 rounded-2xl p-6 border border-cyan-500/30">
              <div className="text-center">
                <div className="text-sm text-slate-400 mb-1">Estimated Monthly Premium</div>
                <div className="text-4xl font-bold text-white mb-1">
                  {formatCurrency(premium.monthly.low)} - {formatCurrency(premium.monthly.high)}
                </div>
                <div className="text-sm text-cyan-400">per month</div>
                <div className="text-xs text-slate-500 mt-2">
                  ({formatCurrency(premium.annual.low)} - {formatCurrency(premium.annual.high)} per year)
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-slate-600/50 space-y-3 text-sm">
                <div className="flex items-center gap-2 text-slate-300">
                  <svg className="w-5 h-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Accidental damage cover
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <svg className="w-5 h-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Theft & loss protection
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <svg className="w-5 h-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Fast claims processing
                </div>
              </div>

              <p className="text-xs text-slate-500 mt-4">
                *Indicative pricing only. Actual premiums depend on individual circumstances.
              </p>
            </div>

            {showEstimate && (
              <div className="mt-4 bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
                <h4 className="font-semibold text-white mb-3">Get Accurate Quotes</h4>
                <p className="text-sm text-slate-400 mb-4">
                  Compare quotes from specialist insulin pump insurance providers in the UK.
                </p>
                <a
                  href="#providers"
                  className="block w-full text-center py-3 rounded-xl font-semibold bg-cyan-500 text-white hover:bg-cyan-600 transition-colors"
                >
                  Get Full Quotes
                </a>
                <p className="text-xs text-slate-500 mt-3 text-center">
                  View detailed quotes from insurance specialists
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
