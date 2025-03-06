/**
 * InteractiveGrid.tsx
 * Title: Interactive Grid
 * Description: Draws a dot grid background that highlights near the cursor, adapting to dark/light mode.
 */

'use client'

import React, { useRef, useEffect, useState } from 'react'

interface InteractiveGridProps {
  width: number
  height: number
  lineSpacing?: number
  highlightRadius?: number
}

export default function InteractiveGrid({
  width,
  height,
  lineSpacing = 25,
  highlightRadius = 50,
}: InteractiveGridProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mousePos = useRef({ x: -9999, y: -9999 })
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)')

    const handleChange = (e: MediaQueryListEvent | MediaQueryList) => {
      setIsDark(e.matches)
    }

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

        if (dist < highlightRadius) {
          ctx.fillStyle = highlightColor
        } else {
          const edgeDistance = Math.min(x, width - x, y, height - y)
          const edgeThreshold = 100
          const factor = Math.min(edgeDistance / edgeThreshold, 1)

          if (isDark) {
            const baseGrayValue = 68
            const edgeGrayValue = 0
            const dotGray = Math.round(
              baseGrayValue + (edgeGrayValue - baseGrayValue) * (1 - factor)
            )
            ctx.fillStyle = `rgb(${dotGray}, ${dotGray}, ${dotGray})`
          } else {
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