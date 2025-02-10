'use client'

import React, { useRef, useEffect } from 'react'
import { useTheme } from 'next-themes'

interface InteractiveGridProps {
  width: number
  height: number
  /**
   * The spacing (in px) between adjacent dots in the grid.
   */
  lineSpacing?: number
  /**
   * The radius (in px) of the circular highlight region around the mouse.
   */
  highlightRadius?: number
}

/**
 * A dot-grid background that highlights a cluster around the cursor.
 */
export default function InteractiveGrid({
  width,
  height,
  lineSpacing = 25,        // smaller spacing for a denser grid
  highlightRadius = 50,   // bigger highlight radius for ~4x4 dot cluster
}: InteractiveGridProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mousePos = useRef({ x: -9999, y: -9999 })
  const { resolvedTheme } = useTheme()

  // Base and highlight colors:
  const normalColor = resolvedTheme === 'dark' ? '#444' : '#ccc'
  const highlightColor = '#47a3f3'
  // Slightly smaller dots for a more subtle effect:
  const dotRadius = 1.5

  function drawDots() {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    ctx.clearRect(0, 0, width, height)

    // Place a dot at each (x, y) intersection, spacing is lineSpacing
    for (let y = 0; y <= height; y += lineSpacing) {
      for (let x = 0; x <= width; x += lineSpacing) {
        // Distance from the mouse
        const dx = mousePos.current.x - x
        const dy = mousePos.current.y - y
        const dist = Math.sqrt(dx * dx + dy * dy)

        if (dist < highlightRadius) {
          ctx.fillStyle = highlightColor
        } else {
          if (resolvedTheme === 'dark') {
            ctx.fillStyle = normalColor
          } else {
            const edgeDistance = Math.min(x, width - x, y, height - y)
            const edgeThreshold = 100 // threshold in pixels for blending near the edge
            const factor = Math.min(edgeDistance / edgeThreshold, 1)
            const baseGrayValue = 224 // base gray for interior in light mode
            const dotGray = Math.round(baseGrayValue + (255 - baseGrayValue) * (1 - factor))
            ctx.fillStyle = `rgb(${dotGray}, ${dotGray}, ${dotGray})`
          }
        }

        ctx.beginPath()
        ctx.arc(x, y, dotRadius, 0, 2 * Math.PI)
        ctx.fill()
      }
    }
  }

  function handleMouseMove(e: MouseEvent) {
    const rect = canvasRef.current?.getBoundingClientRect()
    if (!rect) return
    mousePos.current.x = e.clientX - rect.left
    mousePos.current.y = e.clientY - rect.top
    drawDots()
  }

  useEffect(() => {
    drawDots()
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
    // Re-run drawDots if any dependencies change
  }, [width, height, resolvedTheme, lineSpacing, highlightRadius])

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