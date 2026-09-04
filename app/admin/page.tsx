'use client'

import { useState, FormEvent } from 'react'
import Link from 'next/link'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { Card } from '@/components/ui/card'
import { ShieldCheck, Lock, Mail, ArrowRight, ArrowLeft } from 'lucide-react'

export default function AdminPortalPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleLogin = (e: FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    setTimeout(() => {
      setStatus('error')
    }, 1200)
  }

  return (
    <div className="min-h-screen bg-white text-[#5a5a5a] flex flex-col font-sans">
      <Navbar />

      <main className="flex-1 flex items-center justify-center pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-[4px] bg-[#f5f5f5] text-[#080808] mb-4 border border-[#d8d8d8] shadow-sm">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h1 className="text-3xl font-semibold text-[#080808] tracking-[-0.8px]">Admin Portal</h1>
            <p className="text-sm text-[#5a5a5a] mt-2">
              IEEE CIS Summer School Administration
            </p>
            <p className="text-xs text-[#080808] font-medium mt-0.5">
              hosted by Dept. of CSE (AI &amp; ML), PCCoE
            </p>
          </div>

          <Card className="p-8 border border-[#d8d8d8] shadow-layered bg-white rounded-[8px]">
            <form onSubmit={handleLogin} className="space-y-5">
              <div>
                <label className="block text-xs font-medium uppercase tracking-[1.5px] text-[#080808] mb-2">
                  Administrator Email
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-[#888888] absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="admin@pccoepune.org"
                    className="w-full pl-10 pr-4 py-2 bg-white border border-[#d8d8d8] rounded-[4px] text-[#080808] placeholder-[#888888] text-sm focus:outline-none focus:border-[#080808] focus:ring-1 focus:ring-[#080808] transition-all"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="block text-xs font-medium uppercase tracking-[1.5px] text-[#080808]">
                    Password
                  </label>
                  <span className="text-xs text-[#080808] cursor-pointer hover:underline font-medium">
                    Forgot password?
                  </span>
                </div>
                <div className="relative">
                  <Lock className="w-4 h-4 text-[#888888] absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••••••"
                    className="w-full pl-10 pr-4 py-2 bg-white border border-[#d8d8d8] rounded-[4px] text-[#080808] placeholder-[#888888] text-sm focus:outline-none focus:border-[#080808] focus:ring-1 focus:ring-[#080808] transition-all"
                  />
                </div>
              </div>

              <div className="flex items-center gap-2 text-sm text-[#5a5a5a]">
                <input
                  type="checkbox"
                  id="remember"
                  className="rounded-[2px] border-[#d8d8d8] text-[#080808] focus:ring-[#080808]"
                />
                <label htmlFor="remember" className="text-xs cursor-pointer select-none text-[#5a5a5a]">
                  Keep me signed in for 30 days
                </label>
              </div>

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full py-2.5 bg-[#080808] text-white font-medium rounded-[4px] hover:bg-[#222222] transition-all duration-150 flex items-center justify-center gap-2 shadow-sm disabled:opacity-70 text-sm cursor-pointer"
              >
                {status === 'loading' ? 'Authenticating...' : 'Sign In to Admin Portal'}
                <ArrowRight size={16} />
              </button>

              {status === 'error' && (
                <div className="p-3 bg-red-50 border border-red-200 rounded-[4px] text-red-600 text-xs text-center">
                  Invalid administrative credentials or account not provisioned for v1 portal access.
                </div>
              )}
            </form>

            <div className="mt-6 pt-6 border-t border-[#d8d8d8] text-center text-xs text-[#888888]">
              Authorized personnel only. All access attempts are logged and monitored for security.
            </div>
          </Card>

          <div className="mt-8 text-center">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-xs text-[#5a5a5a] hover:text-[#080808] transition-colors font-medium"
            >
              <ArrowLeft size={14} /> Back to Event Home
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
