/**
 * UserJourneySection.tsx
 * ---------------------------------------
 * Title: User Journey Visualization
 * Description: Renders a pronounced cubic Bézier path and places user
 * journey steps along it with glassmorphism styling and subtle animations.
 */

"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

type StepInfo = {
  title: string;
  description: string;
};

export default function UserJourneySection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // The journey steps
  const journeySteps: StepInfo[] = [
    { title: "User Need", description: "Understand real user pain points." },
    { title: "Problem Framing", description: "Align scope & problem statement." },
    { title: "Empathy Mapping", description: "Walk in user's shoes, gather insights." },
    { title: "Hypothesis Testing", description: "Prototype quickly, iterate on feedback." },
    { title: "Launch", description: "Ship MVP, gather real-world data." },
    { title: "Iteratation", description: "Refine solution, pivot as needed." },
  ];

  // Cubic Bézier control points for a smooth arc in a 640 x 400 SVG
  const P0 = { x: 40,  y: 340 };
  const P1 = { x: 160, y: 380 };
  const P2 = { x: 480, y: 40 };
  const P3 = { x: 600, y: 80 };

  // Compute (x, y) at parameter t
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

  // Determine where to place each circle
  const circlePositions = journeySteps.map((_, i) => {
    const t = i / (journeySteps.length - 1);
    return interpolateCubicBezier(t);
  });

  return (
    <section className="max-w-4xl mx-auto px-6 py-16 relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="mb-12 text-center"
      >
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2">
          My Approach to Building Products
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          From ideas to implementation to iteration
        </p>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm rounded-xl p-8 border border-gray-200/50 dark:border-gray-800/50 shadow-md relative overflow-hidden mb-8"
      >
        <div className="relative w-full h-[400px] overflow-hidden">
          <svg
            width="100%"
            height="400"
            viewBox="0 0 640 400"
            className="bg-transparent"
          >
            {/* Draw Bézier curve */}
            <path
              d={`M${P0.x},${P0.y} C ${P1.x},${P1.y} ${P2.x},${P2.y} ${P3.x},${P3.y}`}
              stroke="rgba(150,150,150,0.5)"
              strokeWidth="2"
              strokeDasharray="5,5"
              fill="none"
            />

            {/* Circles + labels */}
            {circlePositions.map((pos, i) => (
              <g key={i}>
                <motion.circle
                  cx={pos.x}
                  cy={pos.y}
                  r={12}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  fill={hoveredIndex === i ? "rgba(180,180,180,0.6)" : "rgba(200,200,200,0.4)"}
                  stroke={hoveredIndex === i ? "rgba(150,150,150,0.8)" : "rgba(150,150,150,0.4)"}
                  strokeWidth="1"
                  onMouseEnter={() => setHoveredIndex(i)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  style={{ cursor: "pointer" }}
                  className="dark:fill-gray-700 dark:stroke-gray-600"
                />
                <motion.text
                  initial={{ opacity: 0, y: -5 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 + 0.2 }}
                  x={pos.x}
                  y={pos.y - 46}
                  fontSize="12"
                  fontWeight={hoveredIndex === i ? "bold" : "normal"}
                  textAnchor="middle"
                  className="fill-current text-gray-700 dark:text-gray-300"
                  style={{ pointerEvents: "none" }}
                >
                  {journeySteps[i].title}
                </motion.text>
              </g>
            ))}
          </svg>

          {/* Hover detail tooltip with glassmorphism */}
          {hoveredIndex !== null && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.2 }}
              className="
                absolute
                top-0
                left-0
                w-56
                p-4
                bg-white/80 dark:bg-gray-900/80
                backdrop-blur-md
                border border-gray-200/50 dark:border-gray-700/50
                rounded-lg
                shadow-lg
              "
              style={{ transform: "translate(20px, 60px)" }}
            >
              <h3 className="font-semibold text-gray-800 dark:text-white mb-1">
                {journeySteps[hoveredIndex].title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                {journeySteps[hoveredIndex].description}
              </p>
            </motion.div>
          )}
        </div>
      </motion.div>

      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-gray-700 dark:text-gray-300 leading-relaxed text-center max-w-3xl mx-auto bg-white/40 dark:bg-gray-900/40 backdrop-blur-sm p-6 rounded-xl border border-gray-200/30 dark:border-gray-800/30 italic"
      >
        My product philosophy begins with deep user empathy. Whether developing code or orchestrating complex launches, I immerse myself in the user experience to uncover the "why" behind each challenge. This foundation allows for precise problem framing and hypothesis development. I believe in rapid prototyping and validation, gathering meaningful feedback early and often. Post-launch, I focus on data-informed iteration that balances user delight with business impact—ensuring every product not only solves problems but creates genuine value in people's lives.
      </motion.p>
    </section>
  );
}