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
    title: 'Independent Product & AI Developer',
    dateRange: 'Jan 2024 - Present',
    bullets: [
      'Took a sabbatical to dive deep into Large Language Models (LLMs) and Generative AI, expanding my technical skillset beyond traditional product management.',
      'Created Mysti.ai, a hybrid mobile app using React Native, Node.js, and TypeScript on AWS to help Canadians interpret blood test results with advanced LLM workflows.',
      'Built tryDayplan.com, a personal AI planning & task prioritization app for iOS in Swift, demonstrating full-stack capabilities from UI/UX through development.'
    ],
    logo: '/companies/mysti.png',
    transitionHighlight: true,
  },
  {
    title: 'Senior Product Manager',
    company: 'ODAIA Intelligence',
    dateRange: 'Dec 2022 - Dec 2023',
    bullets: [
      'Owned the user facing product roadmap for AI-powered solutions serving pharmaceutical sales teams, contributing to the company\'s growth from Series A to Series B.',
      'Spearheaded the integration of GPT-based curated insights and advanced AI features that meaningfully improved sales rep efficiency across thousands of users.',
      'Built meaningful key relationships with industry technology partners (Veeva, etc.) to deliver seamless integrations.'
    ],
    logo: '/companies/odaia.png',
    transitionHighlight: false,
  },
  {
    title: 'Product Manager',
    company: 'Gale Partners',
    dateRange: 'Dec 2020 - Nov 2022',
    bullets: [
      'Oversaw end-to-end mobile app development for Hard Rock\'s global loyalty program "Unity," connecting hotels, casinos, and cafes under one unified brand centric digital experience.',
      'Implemented Salesforce solutions for HomeCare Assistance that dramatically improved customer experience and employee satisfaction.',
      'Launched a transformative careers portal for CPPIB that significantly enhanced their recruitment process and candidate experience.'
    ],
    logo: '/companies/gale.png',
    transitionHighlight: false,
  },
  {
    title: 'Product Manager, Group Benefits',
    company: 'Empire Life',
    dateRange: 'Mar 2020 - Dec 2020',
    bullets: [
      'Scaled up digital capabilities amidst COVID-19 through supporting development of an employee benefits management portal, streamlining HR workflows.'
    ],
    logo: '/companies/empire.png',
    transitionHighlight: false,
  },
  {
    title: 'Senior Business Analyst, Digital Acceleration',
    company: 'Bank of Montreal',
    dateRange: 'Jun 2017 - Mar 2020',
    bullets: [
      'Shaped the transformation of BMO\'s personal banking app through initiatives in AI-driven personal finance, open banking, and digital payments.',
      'Developed deep customer empathy through extensive field research in branches and contact centers, balancing user needs with complex organizational requirements.',
      'Built foundational product development skills in an Agile environment, creating epics and stories while learning to effectively prioritize feature backlogs.'
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
      <div className="text-sm text-gray-600 dark:text-gray-400 italic text-center mt-8">
        For more specific details and metrics about my experience, please <a href="mailto:mail@bikrambrar.com" className="text-blue-600 dark:text-blue-400 hover:underline">email me</a> for a copy of my resume.
      </div>
    </div>
  )
}