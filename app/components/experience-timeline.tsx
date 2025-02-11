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
    dateRange: 'Jan 2024 - Present',
    bullets: [
      'Dedicated 2024 to deepening AI expertise and building real-world software solutions.',
      'Created apps (Mysti.ai, Dayplan App, RepoPrompter.com) that addressed personal pain points.',
      'Integrated cutting-edge technologies like RAG, multi-agent orchestration, GPT APIs, etc.',
    ],
  },
  {
    title: 'Senior Product Manager',
    company: 'ODAIA Intelligence',
    dateRange: 'Dec 2022 - Dec 2023',
    bullets: [
      'Delivered first 3rd-party integration (Veeva CRM), boosting sales rep efficiency 10–20%.',
      'Led development of a scheduling engine used by thousands of pharma sales reps weekly.',
      'Built product capabilities that increased revenue and supported Series B funding efforts.',
    ],
  },
  {
    title: 'Manager, Technology',
    company: 'Gale Partners / Hard Rock',
    dateRange: 'Dec 2020 - Nov 2022',
    bullets: [
      'Consulted as a Product Manager across multiple clients (Hard Rock, CPPIB, Quest, etc.).',
      'Helped unify Hard Rock’s hotels, cafes, and casinos under one loyalty program (600k+ downloads).',
      'Oversaw end-to-end product delivery—from requirements gathering to user testing—for Hard Rock’s mobile app.',
    ],
  },
  {
    title: 'Product Manager, Group Benefits',
    company: 'Empire Life',
    dateRange: 'Mar 2020 - Dec 2020',
    bullets: [
      'Scaled up digital capabilities amidst COVID-19.',
      'Created group benefits portal for plan admins.',
    ],
  },
  {
    title: 'Senior Business Analyst, Digital Acceleration',
    company: 'Bank of Montreal',
    dateRange: 'Jun 2017 - Mar 2020',
    bullets: [
      'Worked on new mobile banking app, peer-to-peer payments, AI features, personal finance, etc.',
      'Supported open banking initiatives and key digital transformation projects.',
    ],
  },
]

export default function ExperienceTimeline() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const ctx = gsap.context(() => {
      gsap.from('.timeline-item', {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 90%',
        },
        opacity: 0,
        y: 20,
        stagger: 0.15,
        duration: 0.6,
        ease: 'power2.out',
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={containerRef} className="space-y-6 mt-4">
      {timelineData.map((item, index) => (
        <div
          key={index}
          className="
            timeline-item 
            p-4 
            text-neutral-800 dark:text-neutral-100
            rounded 
          "
        >
          <div className="flex flex-row flex-wrap items-baseline gap-2 mb-1">
            <h3 className="font-semibold text-lg">{item.title}</h3>
            {item.company && <span className="text-sm">@ {item.company}</span>}
          </div>
          <p className="text-sm mb-2">{item.dateRange}</p>
          <ul className="list-disc list-inside">
            {item.bullets.map((bullet, bIndex) => (
              <li key={bIndex}>{bullet}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}