'use client'

import type { ReactNode } from 'react'

import { MotionFadeInFromBottom } from '@/components/motion/MotionFadeInFromBottom'

import useMediaQuery from '@/hooks/useMediaQuery'

type Props = {
  delay: number
  children: ReactNode
}

export const RenderImage = ({ delay, children }: Props) => {
  const isPc = useMediaQuery(648)
  const actualDelay = isPc ? delay : delay - 0.3

  return <MotionFadeInFromBottom delay={actualDelay}>{children}</MotionFadeInFromBottom>
}
