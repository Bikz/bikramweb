/**
 * experience-timeline.tsx
 * Title: Experience Timeline
 * Description: A timeline component showing work experience with bullet points, logos, and highlight transitions.
 */

'use client'

import React, { useRef, useEffect } from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

type TimelineItem = {
  title: string
  company?: string
  dateRange: string
  bullets: string[]
  logo?: string
  transitionHighlight?: boolean
}

const timelineData: TimelineItem[] = [
  {
    title: 'Independent Product Developer & AI Experimenter',
    dateRange: 'Jan 2024 - Present',
    bullets: [
      'Dedicated 2024 to deepening AI expertise and building real-world software solutions.',
      'Created apps (Mysti.ai, Dayplan App, RepoPrompter.com) that addressed personal pain points.',
      '**Integrated cutting-edge AI** (RAG, GPT APIs) to deliver innovative features.',
    ],
    logo: '/companies/independent.png',
    transitionHighlight: true,
  },
  {
    title: 'Senior Product Manager',
    company: 'ODAIA Intelligence',
    dateRange: 'Dec 2022 - Dec 2023',
    bullets: [
      'Delivered first 3rd-party integration (Veeva CRM), boosting sales rep efficiency by **10–20%**.',
      'Led development of a scheduling engine used by thousands of pharma sales reps weekly.',
      'Built product capabilities that increased revenue and supported Series B funding.',
    ],
    logo: '/companies/odaia.png',
    transitionHighlight: false,
  },
  {
    title: 'Manager, Technology (Product)',
    company: 'Gale Partners / Hard Rock',
    dateRange: 'Dec 2020 - Nov 2022',
    bullets: [
      'Consulted as a Product Manager across multiple clients (Hard Rock, CPPIB, Quest).',
      'Unified Hard Rock’s hotels, cafes, and casinos under one loyalty program (600k+ downloads).',
      'Oversaw end-to-end product delivery for Hard Rock’s mobile app, increasing adoption by **20%**.',
    ],
    logo: '/companies/hard-rock.png',
    transitionHighlight: false,
  },
  {
    title: 'Product Manager, Group Benefits',
    company: 'Empire Life',
    dateRange: 'Mar 2020 - Dec 2020',
    bullets: [
      'Scaled up digital capabilities amidst COVID-19.',
      'Created group benefits portal, achieving **30%** faster enrollment processes.',
    ],
    logo: '/companies/empire.png',
    transitionHighlight: false,
  },
  {
    title: 'Senior Business Analyst, Digital Acceleration',
    company: 'Bank of Montreal',
    dateRange: 'Jun 2017 - Mar 2020',
    bullets: [
      'Worked on new mobile banking app, peer-to-peer payments, and AI features.',
      'Supported open banking initiatives, driving a **15%** increase in digital adoption.',
    ],
    logo: '/companies/bmo.png',
    transitionHighlight: false,
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
      {timelineData.map((item, index) => {
        const highlightClass = item.transitionHighlight
          ? 'border-l-4 border-blue-600 bg-blue-50 dark:bg-neutral-900 dark:border-blue-400'
          : ''
        return (
          <div
            key={index}
            className={`
              timeline-item
              p-4
              text-neutral-800 dark:text-neutral-100
              rounded
              ${highlightClass}
            `}
          >
            <div className="flex flex-col md:flex-row items-start md:items-center md:justify-between gap-4 mb-2">
              <div className="flex flex-row items-center gap-3">
                {item.logo && (
                  <div className="relative w-10 h-10">
                    <Image
                      src={item.logo}
                      alt={`${item.company || 'Independent'} logo`}
                      fill
                      className="object-contain"
                    />
                  </div>
                )}
                <div>
                  <h3 className="font-semibold text-lg">
                    {item.title}
                    {item.company && (
                      <span className="ml-2 text-sm">@ {item.company}</span>
                    )}
                  </h3>
                </div>
              </div>
              <p className="text-sm whitespace-nowrap">{item.dateRange}</p>
            </div>

            <ul className="list-disc list-inside text-sm">
              {item.bullets.map((bullet, bIndex) => (
                <li
                  key={bIndex}
                  dangerouslySetInnerHTML={{ __html: bullet }}
                  className="leading-relaxed"
                />
              ))}
            </ul>
          </div>
        )
      })}
    </div>
  )
}