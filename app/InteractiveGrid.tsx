'use client'

import React, { useRef, useEffect } from 'react'

interface InteractiveGridProps {
  width: number
  height: number
  lineSpacing?: number
  highlightRadius?: number
}

/**
 * A component that draws a grid of lines on a canvas.
 * As the mouse moves, lines near the cursor get highlighted in neon blue.
 */
export default function InteractiveGrid({
  width,
  height,
  lineSpacing = 40,
  highlightRadius = 10,
}: InteractiveGridProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mousePos = useRef<{ x: number; y: number }>({ x: -9999, y: -9999 })

  const drawGrid = () => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Clear everything
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.lineWidth = 1

    // Calculate how many lines to draw based on spacing
    const numVLines = Math.ceil(width / lineSpacing)
    const numHLines = Math.ceil(height / lineSpacing)

    // Draw vertical lines
    for (let i = 0; i <= numVLines; i++) {
      const xPos = i * lineSpacing
      const distX = Math.abs(mousePos.current.x - xPos)
      // highlight if within highlightRadius
      ctx.strokeStyle = distX < highlightRadius ? '#0ff' : '#888'

      ctx.beginPath()
      ctx.moveTo(xPos, 0)
      ctx.lineTo(xPos, height)
      ctx.stroke()
    }

    // Draw horizontal lines
    for (let j = 0; j <= numHLines; j++) {
      const yPos = j * lineSpacing
      const distY = Math.abs(mousePos.current.y - yPos)
      ctx.strokeStyle = distY < highlightRadius ? '#0ff' : '#888'

      ctx.beginPath()
      ctx.moveTo(0, yPos)
      ctx.lineTo(width, yPos)
      ctx.stroke()
    }
  }

  // Track mouse movement (global) & redraw
  const handleMouseMove = (e: MouseEvent) => {
    const rect = canvasRef.current?.getBoundingClientRect()
    if (!rect) return

    mousePos.current.x = e.clientX - rect.left
    mousePos.current.y = e.clientY - rect.top
    drawGrid()
  }

  useEffect(() => {
    drawGrid() // initial draw
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [width, height])

  return (
    <canvas
      ref={canvasRef}
      width={width}
      height={height}
      className="pointer-events-none absolute top-0 left-0"
      style={{ width: '100%', height: '100%' }}
    />
  )
}
