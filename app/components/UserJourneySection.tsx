/**
 * UserJourneySection.tsx
 * ---------------------------------------
 * Title: User Journey Visualization
 * Description: Renders a more pronounced curved path using a cubic Bézier curve
 * and places user journey steps along it. The text labels and circles adapt to
 * both light and dark modes.
 */

"use client";

import React, { useState } from "react";

type StepInfo = {
  title: string;
  description: string;
};

export default function UserJourneySection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // The steps in the user journey
  const journeySteps: StepInfo[] = [
    { title: "User Need", description: "Understand real user pain points." },
    { title: "Problem Framing", description: "Align scope & problem statement." },
    { title: "Empathy Mapping", description: "Walk in user’s shoes, gather insights." },
    { title: "Hypothesis Testing", description: "Prototype quickly, iterate on feedback." },
    { title: "Launch", description: "Ship MVP, gather real-world data." },
    { title: "Iterate", description: "Refine solution, pivot as needed." },
  ];

  // Adjusted cubic Bézier control points [640 x 400] space for a more visible arc
  const P0 = { x: 40,  y: 340 };
  const P1 = { x: 160, y: 380 };
  const P2 = { x: 480, y: 40 };
  const P3 = { x: 600, y: 80 };

  // Computes a point (x, y) at parameter t on our Bézier curve
  function interpolateCubicBezier(t: number) {
    const mt = 1 - t;
    const x =
      mt * mt * mt * P0.x +
      3 * mt * mt * t * P1.x +
      3 * mt * t * t * P2.x +
      t * t * t * P3.x;

    const y =
      mt * mt * mt * P0.y +
      3 * mt * mt * t * P1.y +
      3 * mt * t * t * P2.y +
      t * t * t * P3.y;

    return { x, y };
  }

  // Calculate circle positions for each journey step
  const circlePositions = journeySteps.map((_, i) => {
    const t = i / (journeySteps.length - 1);
    return interpolateCubicBezier(t);
  });

  return (
    <section className="max-w-4xl mx-auto px-4 py-10 animate-fadeIn">
      <h2 className="text-xl font-semibold mb-6 text-center text-neutral-900 dark:text-white">
        My Approach to Building Products
      </h2>

      <div className="relative w-full h-[400px] overflow-hidden">
        <svg
          width="100%"
          height="400"
          viewBox="0 0 640 400"
          className="bg-white dark:bg-black border border-gray-200 dark:border-gray-700 rounded"
        >
          {/* Draw the path */}
          <path
            d={`M${P0.x},${P0.y} C ${P1.x},${P1.y} ${P2.x},${P2.y} ${P3.x},${P3.y}`}
            stroke="#888"
            strokeWidth="2"
            fill="none"
          />

          {/* Circles and text labels */}
          {circlePositions.map((pos, i) => (
            <g key={i}>
              <circle
                cx={pos.x}
                cy={pos.y}
                r={12}
                fill={hoveredIndex === i ? "#aaa" : "#ccc"}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
                style={{ cursor: "pointer" }}
              />
              <text
                x={pos.x}
                y={pos.y - 24}
                fontSize="12"
                textAnchor="middle"
                className="fill-current text-neutral-700 dark:text-neutral-300"
                style={{ pointerEvents: "none" }}
              >
                {journeySteps[i].title}
              </text>
            </g>
          ))}
        </svg>

        {/* Hover detail tooltip */}
        {hoveredIndex !== null && (
          <div
            className="
              absolute
              top-0
              right-0
              w-56
              p-4
              bg-white dark:bg-neutral-900
              border border-gray-200 dark:border-gray-700
              rounded
              shadow-lg
              transition-all
            "
            style={{ transform: "translateY(60px)" }}
          >
            <h3 className="font-semibold text-neutral-900 dark:text-white mb-1">
              {journeySteps[hoveredIndex].title}
            </h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-300">
              {journeySteps[hoveredIndex].description}
            </p>
          </div>
        )}
      </div>

      <p className="mt-6 text-neutral-700 dark:text-neutral-300 leading-relaxed text-center max-w-3xl mx-auto">
        Whether I’m coding from scratch or managing a large product launch, I start
        by asking the right questions and walking in the user’s shoes. This empathy-first
        approach ensures we understand the “why” behind each pain point. Then we frame
        the problem, hypothesize solutions, and test rapidly. Once live, we iterate based
        on feedback—always centering on user needs and tangible impact.
      </p>
    </section>
  );
}