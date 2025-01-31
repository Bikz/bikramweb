'use client'

import React, { useRef, useEffect } from 'react'
import { useTheme } from 'next-themes'

// How much of the line around the mouse pointer to highlight
const HIGHLIGHT_SPAN = 40 // px on each side of the pointer

interface InteractiveGridProps {
  // The width/height for drawing (one screen or hero only)
  width: number
  height: number
  lineSpacing?: number
  highlightRadius?: number
}

export default function InteractiveGrid({
  width,
  height,
  lineSpacing = 50,
  highlightRadius = 10,
}: InteractiveGridProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mousePos = useRef({ x: -9999, y: -9999 })

  // Access the current theme to pick line colors
  const { resolvedTheme } = useTheme()
  // Subtle gray lines that differ for dark mode
  const normalColor = resolvedTheme === 'dark' ? '#444' : '#ccc'
  // Neon-ish highlight color
  const highlightColor = '#0ff'

  function drawGrid() {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Clear the entire canvas
    ctx.clearRect(0, 0, width, height)
    ctx.lineWidth = 1

    // Compute how many lines to draw
    const numVLines = Math.ceil(width / lineSpacing)
    const numHLines = Math.ceil(height / lineSpacing)

    // 1) Draw vertical lines
    for (let i = 0; i <= numVLines; i++) {
      const xPos = i * lineSpacing
      const distX = Math.abs(mousePos.current.x - xPos)

      // If the mouse is near this line, do partial highlight around the mouse Y
      if (distX < highlightRadius) {
        // Draw normal line from top to (mouseY - highlightSpan)
        let topHighlight = mousePos.current.y - HIGHLIGHT_SPAN
        let bottomHighlight = mousePos.current.y + HIGHLIGHT_SPAN

        if (topHighlight < 0) topHighlight = 0
        if (bottomHighlight > height) bottomHighlight = height

        // Segment 1 (top normal)
        ctx.strokeStyle = normalColor
        ctx.beginPath()
        ctx.moveTo(xPos, 0)
        ctx.lineTo(xPos, topHighlight)
        ctx.stroke()

        // Segment 2 (highlight)
        ctx.strokeStyle = highlightColor
        ctx.beginPath()
        ctx.moveTo(xPos, topHighlight)
        ctx.lineTo(xPos, bottomHighlight)
        ctx.stroke()

        // Segment 3 (bottom normal)
        ctx.strokeStyle = normalColor
        ctx.beginPath()
        ctx.moveTo(xPos, bottomHighlight)
        ctx.lineTo(xPos, height)
        ctx.stroke()
      } else {
        // Entire line normal color
        ctx.strokeStyle = normalColor
        ctx.beginPath()
        ctx.moveTo(xPos, 0)
        ctx.lineTo(xPos, height)
        ctx.stroke()
      }
    }

    // 2) Draw horizontal lines
    for (let j = 0; j <= numHLines; j++) {
      const yPos = j * lineSpacing
      const distY = Math.abs(mousePos.current.y - yPos)

      if (distY < highlightRadius) {
        // For horizontal lines, we do partial highlight near mouseX
        let leftHighlight = mousePos.current.x - HIGHLIGHT_SPAN
        let rightHighlight = mousePos.current.x + HIGHLIGHT_SPAN

        if (leftHighlight < 0) leftHighlight = 0
        if (rightHighlight > width) rightHighlight = width

        // Segment 1 (left normal)
        ctx.strokeStyle = normalColor
        ctx.beginPath()
        ctx.moveTo(0, yPos)
        ctx.lineTo(leftHighlight, yPos)
        ctx.stroke()

        // Segment 2 (highlight)
        ctx.strokeStyle = highlightColor
        ctx.beginPath()
        ctx.moveTo(leftHighlight, yPos)
        ctx.lineTo(rightHighlight, yPos)
        ctx.stroke()

        // Segment 3 (right normal)
        ctx.strokeStyle = normalColor
        ctx.beginPath()
        ctx.moveTo(rightHighlight, yPos)
        ctx.lineTo(width, yPos)
        ctx.stroke()
      } else {
        // Entire line normal color
        ctx.strokeStyle = normalColor
        ctx.beginPath()
        ctx.moveTo(0, yPos)
        ctx.lineTo(width, yPos)
        ctx.stroke()
      }
    }
  }

  function handleMouseMove(e: MouseEvent) {
    const rect = canvasRef.current?.getBoundingClientRect()
    if (!rect) return
    // Update the mouse position relative to canvas
    mousePos.current.x = e.clientX - rect.left
    mousePos.current.y = e.clientY - rect.top
    drawGrid()
  }

  useEffect(() => {
    // On mount or when theme changes, do the initial draw
    drawGrid()

    // Listen to global mouse moves so we can highlight lines
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [width, height, resolvedTheme])

  return (
    <canvas
      ref={canvasRef}
      width={width}
      height={height}
      className="pointer-events-none absolute top-0 left-0"
      style={{
        width: '100%',
        height: '100%',
      }}
    />
  )
}