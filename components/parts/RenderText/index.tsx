'use client'

import type { ReactNode } from 'react'

import { MotionFadeInFromBottom } from '@/components/motion/MotionFadeInFromBottom'

import useMediaQuery from '@/hooks/useMediaQuery'

type Props = {
  delay: number
  children: ReactNode
  className?: string
}

export const RenderText = ({ delay, children, className }: Props) => {
  const isPc = useMediaQuery(648)
  const actualDelay = isPc ? delay : delay - 0.3

  return (
    <MotionFadeInFromBottom delay={actualDelay}>
      <div className={className}>{children}</div>
    </MotionFadeInFromBottom>
  )
}
