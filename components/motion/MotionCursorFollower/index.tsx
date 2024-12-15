'use client'

import React, { ReactNode, useCallback, useEffect, useRef, useState } from 'react'

import useMouse from '@react-hook/mouse-position'
import { motion } from 'framer-motion'
import { useTheme } from 'next-themes'

type Props = {
  children: ReactNode
}

export const MotionCursorFollower = ({ children }: Props) => {
  const ref = useRef(null)
  const mouse = useMouse(ref, {
    enterDelay: 0,
    leaveDelay: 0
  })

  const [lastMousePosition, setLastMousePosition] = useState({
    x: 0,
    y: 0
  })

  useEffect(() => {
    if (mouse.clientX !== null && mouse.clientY !== null) {
      setLastMousePosition({
        x: mouse.clientX,
        y: mouse.clientY
      })
    }
  }, [mouse.clientX, mouse.clientY])

  const { theme } = useTheme()

  const isDark = theme === 'myDark'
  const SPOTLIGHT_COLOR = isDark ? '#2e3c4a' : '#4d6eff'

  const SPOTLIGHT_OPACITY = isDark ? 0.5 : 0.35
  const SPOTLIGHT_SIZE = 1000
  const SPOTLIGHT_TRANSITION = { type: 'tween', duration: 0.1 }
  const SPOTLIGHT_Z_INDEX = -1

  const cursorVariants = useCallback(() => {
    return {
      default: {
        opacity: SPOTLIGHT_OPACITY,
        height: SPOTLIGHT_SIZE,
        width: SPOTLIGHT_SIZE,
        background: `radial-gradient(circle, ${SPOTLIGHT_COLOR} 0%, rgba(0, 0, 0, 0) 60%)`,
        x: lastMousePosition.x - SPOTLIGHT_SIZE / 2,
        y: lastMousePosition.y - SPOTLIGHT_SIZE / 2,
        transition: SPOTLIGHT_TRANSITION,
        zIndex: SPOTLIGHT_Z_INDEX
      }
    }
  }, [lastMousePosition, SPOTLIGHT_COLOR])

  return (
    <div className="relative h-screen" ref={ref}>
      <motion.div
        className="pointer-events-none fixed"
        variants={cursorVariants()}
        animate="default"
      />
      {children}
    </div>
  )
}
