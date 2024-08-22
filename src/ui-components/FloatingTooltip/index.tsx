import React, { useCallback, useEffect, useRef } from 'react'
import {
  VirtualElement,
  computePosition,
  flip,
  offset,
  shift,
} from '@floating-ui/react-dom'

interface FloatingTooltipProps {
  content: string | JSX.Element
  children: React.ReactNode
}

export const FloatingTooltip: React.FC<FloatingTooltipProps> = ({
  children,
  content,
}) => {
  const tooltipRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = useCallback(({ clientX, clientY }: MouseEvent) => {
    const virtualElement: VirtualElement = {
      getBoundingClientRect() {
        return {
          width: 0,
          height: 0,
          x: clientX,
          y: clientY,
          left: clientX,
          right: clientX,
          top: clientY,
          bottom: clientY,
        }
      },
    }

    if (!tooltipRef.current) return
    computePosition(virtualElement, tooltipRef.current, {
      placement: 'bottom-start',
      middleware: [offset(5), flip(), shift()],
    }).then(({ x, y }) => {
      tooltipRef.current.style.left = `${x + 10}px`
      tooltipRef.current.style.top = `${y + 15}px`
    })
  }, [])

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove)

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
    }
  }, [handleMouseMove])

  return (
    <div className="group/floating-tooltip">
      {children}
      <div
        ref={tooltipRef}
        className="bg-primary text-text-tertiary shadow-lg text-white-bee2pay text-[0.75rem] p-[0.375rem] absolute rounded-[4px] z-[10000] whitespace-nowrap hidden group-hover/floating-tooltip:flex"
      >
        {content}
      </div>
    </div>
  )
}
