'use client'

import React, { useRef, useEffect, useState } from 'react'

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
 * A dot-grid background that highlights around the cursor,
 * and automatically follows OS-level dark/light preference
 * with a fade near the edges in both modes.
 */
export default function InteractiveGrid({
  width,
  height,
  lineSpacing = 25,     // smaller spacing for a denser grid
  highlightRadius = 50, // bigger highlight radius
}: InteractiveGridProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mousePos = useRef({ x: -9999, y: -9999 })

  // Detect system dark mode with matchMedia
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)')

    const handleChange = (e: MediaQueryListEvent | MediaQueryList) => {
      setIsDark(e.matches)
    }

    // Init on mount
    handleChange(mq)
    
    mq.addEventListener('change', handleChange as EventListener)
    
    return () => {
      mq.removeEventListener('change', handleChange as EventListener)
    }
  }, [])

  function drawDots() {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    ctx.clearRect(0, 0, width, height)

    for (let y = 0; y <= height; y += lineSpacing) {
      for (let x = 0; x <= width; x += lineSpacing) {
        const dx = mousePos.current.x - x
        const dy = mousePos.current.y - y
        const dist = Math.sqrt(dx * dx + dy * dy)

        const highlightColor = '#47a3f3'

        // highlight region around cursor
        if (dist < highlightRadius) {
          ctx.fillStyle = highlightColor
        } else {
          // Fading near the edges in BOTH light & dark
          // We'll do separate logic for the "base" color, then fade to an edge color
          const edgeDistance = Math.min(x, width - x, y, height - y)
          const edgeThreshold = 100 // how many pixels from the edge
          const factor = Math.min(edgeDistance / edgeThreshold, 1)

          if (isDark) {
            // #444 = rgb(68,68,68), fade to #000
            const baseGrayValue = 68
            const edgeGrayValue = 0   // black
            const dotGray = Math.round(
              baseGrayValue + (edgeGrayValue - baseGrayValue) * (1 - factor)
            )
            ctx.fillStyle = `rgb(${dotGray}, ${dotGray}, ${dotGray})`
          } else {
            // #E0 = 224 fade to #FFF
            // Actually we used #E0 -> #FFF before, but you had #224 => #255 logic
            // Let's do #E0 => #FFF
            const baseGrayValue = 224
            const edgeGrayValue = 255
            const dotGray = Math.round(
              baseGrayValue + (edgeGrayValue - baseGrayValue) * (1 - factor)
            )
            ctx.fillStyle = `rgb(${dotGray}, ${dotGray}, ${dotGray})`
          }
        }

        ctx.beginPath()
        ctx.arc(x, y, 1.5, 0, 2 * Math.PI)
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

  // Re-draw on dimension or dark-mode change
  useEffect(() => {
    drawDots()
    window.addEventListener('mousemove', handleMouseMove)
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [width, height, isDark, lineSpacing, highlightRadius])

  return (
    <canvas
      ref={canvasRef}
      width={width}
      height={height}
      className="pointer-events-none absolute top-0 left-0"
      style={{ 
        width: '100%', 
        height: '100%' 
      }}
    />
  )
}