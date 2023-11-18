'use client'

import { useEffect, useState, useRef } from 'react'

import { motion, AnimatePresence, useInView, useAnimation } from 'framer-motion'

type Props = {
  children: React.ReactNode
}

export const MotionFadeInFromBottomWithScroll = (props: Props) => {
  const mainControls = useAnimation()

  const [key, setKey] = useState(Math.random())

  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    setKey(Math.random())
  }, [])

  useEffect(() => {
    isInView && mainControls.start({ opacity: 1, y: 0, transition: { delay: 0.5, duration: 0.3 } })
  }, [isInView])

  return (
    <AnimatePresence mode="wait">
      <div ref={ref}>
        <motion.div
          key={key}
          initial={{ opacity: 0, y: 50 }}
          animate={mainControls}
          exit={{ opacity: 0 }}
        >
          {props.children}
        </motion.div>
      </div>
    </AnimatePresence>
  )
}
