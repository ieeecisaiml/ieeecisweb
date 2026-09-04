import { Card } from '@/components/ui/card'
import { RegistrationTier } from '@/data/registration'
import { CheckCircle2 } from 'lucide-react'

interface RegistrationCardProps {
  tier: RegistrationTier
  mode: 'online' | 'offline'
  onRegisterClick: () => void
}

export function RegistrationCard({ tier, mode, onRegisterClick }: RegistrationCardProps) {
  const priceData = tier.prices[mode]
  const currencySymbol = tier.currency === 'USD' ? '$' : '₹'
  const isFree = priceData.earlyBird === 0 && priceData.standard === 0

  return (
    <Card
      className={`flex flex-col h-full border transition-all duration-200 rounded-[8px] overflow-hidden bg-white hover:shadow-layered ${
        tier.highlighted ? 'border-[#080808] shadow-layered' : 'border-[#d8d8d8] hover:border-[#080808]'
      }`}
    >
      {tier.highlighted && (
        <div className="bg-[#080808] text-white py-1.5 px-4 text-center font-medium text-[11px] uppercase tracking-[1.5px]">
          Most Popular
        </div>
      )}

      <div className="p-8 flex-1 flex flex-col">
        <h3 className="text-2xl font-semibold text-[#080808] mb-2">{tier.name}</h3>
        <p className="text-sm text-[#5a5a5a] mb-6">{tier.targetAudience}</p>

        {/* Price Section */}
        <div className="mb-6">
          {!isFree ? (
            <>
              <div className="flex items-baseline gap-2 mb-1">
                <span className="text-4xl font-semibold text-[#080808]">
                  {currencySymbol}{priceData.earlyBird}
                </span>
                <span className="text-2xl text-[#888888] line-through font-normal">
                  {currencySymbol}{priceData.standard}
                </span>
              </div>
              <p className="text-xs text-[#5a5a5a] font-medium">
                Early bird: Until June 5, 2026
              </p>
            </>
          ) : (
            <div className="text-4xl font-semibold text-[#080808] mb-1">Free</div>
          )}
          <p className="text-xs text-[#5a5a5a]/80">per person ({mode === 'online' ? 'Online/Virtual' : 'Offline/In-person'})</p>
        </div>

        {/* Features List */}
        <div className="space-y-3 mb-8 flex-1">
          {tier.features.map((feature, idx) => (
            <div key={idx} className="flex gap-2 text-sm">
              <CheckCircle2 className="w-4 h-4 text-[#080808] flex-shrink-0 mt-0.5" />
              <span className="text-[#5a5a5a]">{feature}</span>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <button
          onClick={onRegisterClick}
          className={`w-full py-2.5 px-4 rounded-[4px] font-medium text-sm text-center transition-all duration-150 cursor-pointer ${
            tier.highlighted
              ? 'bg-[#080808] text-white hover:bg-[#222222] shadow-sm'
              : 'bg-white text-[#080808] hover:bg-[#f5f5f5] border border-[#d8d8d8]'
          }`}
        >
          Register Now
        </button>
      </div>
    </Card>
  )
}
