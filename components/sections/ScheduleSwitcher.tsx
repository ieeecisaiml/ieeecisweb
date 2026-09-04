'use client'

import { useState } from 'react'
import { Card } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { schedules } from '@/data/schedule'
import { Clock, User } from 'lucide-react'

const sessionTypeConfig = {
  plenary: { badge: 'Plenary', color: 'bg-[#7a3dff]/10 text-[#7a3dff] border border-[#7a3dff]/25' },
  lecture: { badge: 'Lecture', color: 'bg-[#3b89ff]/10 text-[#006acc] border border-[#3b89ff]/25' },
  lab: { badge: 'Lab', color: 'bg-[#ff6b00]/10 text-[#ff6b00] border border-[#ff6b00]/25' },
  clinic: { badge: 'Clinic', color: 'bg-[#00d722]/15 text-[#080808] border border-[#00d722]/30 font-medium' },
  discussion: { badge: 'Discussion', color: 'bg-[#ed52cb]/10 text-[#ed52cb] border border-[#ed52cb]/25' },
  break: { badge: 'Break', color: 'bg-[#f5f5f5] text-[#5a5a5a] border border-[#d8d8d8]' },
  lunch: { badge: 'Lunch', color: 'bg-[#ffae13]/15 text-[#080808] border border-[#ffae13]/30' },
  reflection: { badge: 'Reflection', color: 'bg-[#146ef5]/10 text-[#146ef5] border border-[#146ef5]/25' },
  practical: { badge: 'Lab', color: 'bg-[#ff6b00]/10 text-[#ff6b00] border border-[#ff6b00]/25' },
}

export function ScheduleSwitcher() {
  const [selectedDay, setSelectedDay] = useState(0)
  const schedule = schedules[selectedDay]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white border-t border-[#d8d8d8]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <span className="eyebrow block mb-3">Curriculum</span>
          <h2 className="text-3xl sm:text-4xl font-semibold text-[#080808] tracking-tight mb-4">6-Day Program Schedule</h2>
          <p className="text-base sm:text-lg text-[#5a5a5a] font-normal">
            Carefully designed curriculum with expert instruction, hands-on labs, and networking opportunities
          </p>
        </div>

        {/* Day Tabs */}
        <Tabs value={`day-${selectedDay + 1}`} onValueChange={(v) => setSelectedDay(parseInt(v.split('-')[1]) - 1)} className="w-full">
          <TabsList className="grid w-full grid-cols-3 lg:grid-cols-6 gap-1.5 h-auto p-1.5 bg-[#f5f5f5] border border-[#d8d8d8] rounded-[4px]">
            {schedules.map((s, idx) => (
              <TabsTrigger
                key={idx}
                value={`day-${idx + 1}`}
                className={`flex flex-col gap-0.5 px-2 py-2 rounded-[4px] text-xs sm:text-sm font-medium transition-all ${
                  selectedDay === idx
                    ? 'bg-[#080808] text-white shadow-xs'
                    : 'bg-transparent text-[#5a5a5a] hover:text-[#080808] hover:bg-white/80'
                }`}
              >
                <span className="font-semibold">Day {s.dayNumber}</span>
                <span className="hidden sm:block text-[11px] opacity-80">{s.weekday}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value={`day-${selectedDay + 1}`} className="mt-8">
            {/* Day Header */}
            <div className="bg-white border border-[#d8d8d8] rounded-[8px] p-6 mb-6 shadow-layered">
              <div className="flex flex-col gap-1">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-semibold text-[#080808]">Day {schedule.dayNumber}</h3>
                  <span className="text-xs font-medium uppercase tracking-[1.5px] px-2.5 py-1 rounded-[4px] bg-[#f5f5f5] text-[#080808] border border-[#d8d8d8]">
                    {schedule.weekday}
                  </span>
                </div>
                <p className="text-xs text-[#5a5a5a]">
                  {schedule.date}
                </p>
                <p className="text-base font-medium text-[#080808] mt-3 border-t border-[#d8d8d8] pt-3">{schedule.theme}</p>
              </div>
            </div>

            {/* Sessions */}
            <div className="space-y-3">
              {schedule.sessions.map((session) => {
                const config = sessionTypeConfig[session.type as keyof typeof sessionTypeConfig] || sessionTypeConfig.lecture
                return (
                  <Card key={session.id} className="p-5 border border-[#d8d8d8] bg-white rounded-[8px] hover:border-[#080808]/40 transition-colors">
                    <div className="flex items-start gap-4">
                      {/* Time Column */}
                      <div className="flex-shrink-0 font-mono font-medium text-sm text-[#080808] w-16 pt-0.5">{session.time}</div>

                      {/* Content Column */}
                      <div className="flex-grow min-w-0">
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                          <div>
                            <h4 className="font-semibold text-[#080808] text-base leading-snug">{session.title}</h4>
                            {session.speaker && (
                              <div className="flex items-center gap-1.5 text-xs text-[#5a5a5a] mt-1">
                                <User size={13} className="text-[#080808] flex-shrink-0" />
                                <span>{session.speaker}</span>
                              </div>
                            )}
                          </div>
                          <div className={`self-start sm:self-auto px-2 py-0.5 rounded-[4px] text-[11px] font-medium whitespace-nowrap w-fit ${config.color}`}>
                            {config.badge}
                          </div>
                        </div>

                        {session.description && (
                          <p className="text-sm text-[#5a5a5a] mb-3 leading-relaxed">{session.description}</p>
                        )}

                        <div className="flex items-center gap-1 text-xs text-[#898989]">
                          <Clock size={12} className="text-[#5a5a5a] flex-shrink-0" />
                          <span>{session.duration} minutes</span>
                        </div>
                      </div>
                    </div>
                  </Card>
                )
              })}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
