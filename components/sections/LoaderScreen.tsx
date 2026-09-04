'use client'

import React, { useState, useEffect } from 'react'

export function LoaderScreen() {
  const [isVisible, setIsVisible] = useState(true)
  const [isMounted, setIsMounted] = useState(true)

  useEffect(() => {
    // Fade out start after 9 seconds (takes 1s to fade out)
    const fadeTimer = setTimeout(() => {
      setIsVisible(false)
    }, 9000)

    // Unmount from DOM after 10 seconds
    const mountTimer = setTimeout(() => {
      setIsMounted(false)
      // Enable scroll on body once loader is gone
      document.body.style.overflow = 'unset'
    }, 10000)

    // Disable scroll on body while loader is active
    document.body.style.overflow = 'hidden'

    return () => {
      clearTimeout(fadeTimer)
      clearTimeout(mountTimer)
      document.body.style.overflow = 'unset'
    }
  }, [])

  if (!isMounted) return null

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-[#dddddd] transition-opacity duration-1000 ease-out ${
        isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      <video
        src="/images/pccoeloader.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="w-72 h-72 sm:w-80 sm:h-80 object-contain"
        style={{
          maskImage: 'radial-gradient(circle, black 45%, transparent 68%)',
          WebkitMaskImage: 'radial-gradient(circle, black 45%, transparent 68%)',
        }}
      />
    </div>
  )
}
