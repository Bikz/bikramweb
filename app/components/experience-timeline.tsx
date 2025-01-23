'use client'
import React from 'react'

type TimelineItem = {
  title: string
  company?: string
  dateRange: string
  bullets: string[]
}

const timelineData: TimelineItem[] = [
  {
    title: 'Independent Product Developer & AI Researcher',
    company: '',
    dateRange: 'Jan 2024 - Present',
    bullets: [
      'Developed AI-powered apps: Mysti.ai & Dayplan',
      'Led full-stack dev from design to deployment',
      'Integrating GPT-4, LangChain, Pinecone, etc.',
    ],
  },
  {
    title: 'Senior Product Manager',
    company: 'ODAIA Intelligence',
    dateRange: 'Dec 2022 - Dec 2023',
    bullets: [
      'Delivered first 3rd-party integration (Veeva CRM)',
      'Improved sales rep efficiency by 10-20% via AI',
      'Supported Series B funding efforts ($25M)',
    ],
  },
  {
    title: 'Product Manager',
    company: 'Gale Partners / Hard Rock',
    dateRange: 'Dec 2020 - Nov 2022',
    bullets: [
      'Spearheaded a global loyalty program, 600k+ downloads',
      'Unified customer experience across multiple lines',
      'Launched enterprise portals, cutting costs & boosting ROI',
    ],
  },
  {
    title: 'Product Manager, Group Benefits',
    company: 'Empire Life',
    dateRange: 'Mar 2020 - Dec 2020',
    bullets: [
      'Enhanced employee benefits portal',
      'Improved user onboarding & termination flows',
    ],
  },
  {
    title: 'Junior Product Manager, Digital Acceleration',
    company: 'Bank of Montreal',
    dateRange: 'Jun 2017 - Mar 2020',
    bullets: [
      'Launched new peer-to-peer payments app',
      'Built predictive models generating millions in new loans',
    ],
  },
]

export default function ExperienceTimeline() {
  return (
    <div className="space-y-6">
      {timelineData.map((item, index) => (
        <div key={index} className="flex flex-col">
          <div className="flex flex-row items-baseline gap-2">
            <h3 className="font-semibold text-lg">{item.title}</h3>
            {item.company && (
              <span className="text-sm text-neutral-500 dark:text-neutral-400">
                @ {item.company}
              </span>
            )}
          </div>
          <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-2">
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