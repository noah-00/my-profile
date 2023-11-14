'use client'

import { useEffect, useState } from 'react'

import { motion, AnimatePresence } from 'framer-motion'

type Props = {
  children: React.ReactNode
  delay?: number
}

export const MotionFadeInFromTop = (props: Props) => {
  const [key, setKey] = useState(Math.random())

  useEffect(() => {
    setKey(Math.random())
  }, [])

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={key}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0, transition: { delay: props.delay ? props.delay : 0 } }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {props.children}
      </motion.div>
    </AnimatePresence>
  )
}
