import React from 'react'
import { cn } from '@/lib/utils'

export interface ArrowProps extends React.ComponentPropsWithoutRef<'svg'> {
  variant?: 'dynamic' | 'bullet' | 'flow-right' | 'flow-down'
  size?: number
  strokeWidth?: number
}

export function Arrow({
  variant = 'dynamic',
  size = 18,
  strokeWidth = 2,
  className,
  ...props
}: ArrowProps) {
  if (variant === 'flow-right') {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={strokeWidth + 0.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        className={cn("animate-bounce-right shrink-0", className)}
        {...props}
      >
        <path d="M6 17l5-5-5-5M13 17l5-5-5-5" />
      </svg>
    )
  }

  if (variant === 'flow-down') {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={strokeWidth + 0.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        className={cn("animate-bounce-down shrink-0", className)}
        {...props}
      >
        <path d="M6 17l5-5-5-5M13 17l5-5-5-5" />
      </svg>
    )
  }

  if (variant === 'bullet') {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        className={cn("transition-transform duration-300 ease-out group-hover:translate-x-1 group-hover/button:translate-x-1 shrink-0", className)}
        {...props}
      >
        <line x1="4" y1="12" x2="20" y2="12" />
        <polyline points="14 6 20 12 14 18" />
      </svg>
    )
  }

  // Default 'dynamic' variant:
  // Shows arrowhead, slides stem out on hover.
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("overflow-visible shrink-0 transition-all duration-300", className)}
      {...props}
    >
      {/* Arrowhead: slides from -4px translation to 0px on hover */}
      <path
        d="M13 5l7 7-7 7"
        className="transition-transform duration-300 ease-out translate-x-[-4px] group-hover:translate-x-0 group-hover/button:translate-x-0"
      />
      {/* Stem: scales from 0 to 1 and fades in on hover */}
      <line
        x1="4"
        y1="12"
        x2="19"
        y2="12"
        className="transition-all duration-300 ease-out origin-left scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100 group-hover/button:scale-x-100 group-hover/button:opacity-100"
      />
    </svg>
  )
}
