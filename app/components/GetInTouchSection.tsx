/**
 * GetInTouchSection.tsx
 * ---------------------------------------
 * Title: Call to Action
 * Description: Contact info and call to action for getting in touch.
 */

"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin } from "react-icons/fa";

export default function GetInTouchSection() {
  return (
    <section className="w-full relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="mb-10 text-center"
      >
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2">
          Get in Touch
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          I'm open to connecting and collaborating on interesting projects.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm rounded-xl p-8 border border-gray-200/50 dark:border-gray-800/50 shadow-md relative text-center"
      >
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
          Whether you're looking to discuss a potential project, collaboration, or 
          just want to say hi, feel free to reach out. I'm particularly interested 
          in projects where I can leverage my expertise in software development, 
          product management, and AI/ML implementation.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="mailto:mail@bikrambrar.com"
            className="flex items-center justify-center gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors shadow-md hover:scale-105 transform duration-200"
          >
            <FaEnvelope className="text-lg" />
            <span>Email Me</span>
          </a>
          <a
            href="https://linkedin.com/in/bikrambrar"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-6 py-3 bg-white/70 dark:bg-gray-800/60 text-gray-800 dark:text-gray-200 border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
          >
            <FaLinkedin className="text-lg" />
            <span>LinkedIn</span>
          </a>
        </div>
      </motion.div>
    </section>
  );
}