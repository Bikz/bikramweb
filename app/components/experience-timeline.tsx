'use client'
import React, { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

type TimelineItem = {
  title: string
  company?: string
  dateRange: string
  bullets: string[]
}

const timelineData: TimelineItem[] = [
  {
    title: 'Independent Product Developer & AI Experimenter',
    company: '',
    dateRange: 'Jan 2024 - Present',
    bullets: [
      'Dedicated 2024 to deepening AI expertise and building real-world software solutions.',
      'Created apps (Mysti.ai, Dayplan App, RepoPrompter.com) that addressed personal pain points and delivered real utility.',
      'Integrated cutting-edge technologies using retrieval-augmented generation (RAG), agent-based systems, and multi-model orchestration to power AI-driven experiences.',
    ],
  },
  {
    title: 'Senior Product Manager',
    company: 'ODAIA Intelligence',
    dateRange: 'Dec 2022 - Dec 2023',
    bullets: [
      'Delivered first 3rd-party integration (Veeva CRM), boosting sales rep efficiency by 10–20%.',
      'Led development of a curated scheduling engine used by thousands of pharma sales reps weekly.',
      'Built product capabilities that increased revenue, improved user experience, and supported Series B funding efforts.',
    ],
  },
  {
    title: 'Manager, Technology',
    company: 'Gale Partners / Hard Rock',
    dateRange: 'Dec 2020 - Nov 2022',
    bullets: [
      'Consulted as a Product Manager across multiple clients (Hard Rock, CPPIB, Quest, etc.).',
      'Helped unify Hard Rock’s hotels, cafes, and casinos under one global loyalty program (600k+ downloads).',
      'Oversaw end-to-end product delivery—from requirements gathering to user testing—for Hard Rock’s mobile app.',
    ],
  },
  {
    title: 'Product Manager, Group Benefits',
    company: 'Empire Life',
    dateRange: 'Mar 2020 - Dec 2020',
    bullets: [
      'Quickly scaled up digital capabilities amidst COVID-19',
      'Created group benefits portal for plan admins',
    ],
  },
  {
    title: 'Senior Business Analyst, Digital Acceleration',
    company: 'Bank of Montreal',
    dateRange: 'Jun 2017 - Mar 2020',
    bullets: [
      'Sudo APM supporting new mobile banking app',
      'Various projects across peer-to-peer payments, AI, personal finance, open banking, and more',
    ],
  },
]

export default function ExperienceTimeline() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const elements = containerRef.current.querySelectorAll('.timeline-item')
    gsap.from(elements, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 80%',
      },
      y: 50,
      opacity: 0,
      stagger: 0.2,
      duration: 0.8,
      ease: 'power2.out',
    })
  }, [])

  return (
    <div ref={containerRef} className="space-y-6">
      {timelineData.map((item, index) => (
        <div key={index} className="timeline-item flex flex-col">
          <div className="flex flex-row items-baseline gap-2">
            <h3 className="font-semibold text-lg">{item.title}</h3>
            {item.company && (
              <span className="text-sm text-neutral-500 dark:text-neutral-400">
                @ {item.company}
              </span>
            )}
          </div>
          {/* Date line now uses dark:text-neutral-300 */}
          <p className="text-sm text-neutral-600 dark:text-neutral-300 mb-2">
            {item.dateRange}
          </p>
          <ul className="list-disc list-inside text-neutral-800 dark:text-neutral-200">
            {item.bullets.map((bullet, bIndex) => (
              <li key={bIndex}>{bullet}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}