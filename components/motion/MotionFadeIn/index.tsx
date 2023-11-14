'use client'

import { useEffect, useState } from 'react'

import { motion, AnimatePresence } from 'framer-motion'

type Props = {
  children: React.ReactNode
  delay?: number
}

export const MotionFadeIn = (props: Props) => {
  const [key, setKey] = useState(Math.random())

  useEffect(() => {
    setKey(Math.random())
  }, [])

  return (
    <AnimatePresence mode="popLayout">
      <motion.div
        key={key}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: props.delay ? props.delay : 0 } }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4 }}
      >
        {props.children}
      </motion.div>
    </AnimatePresence>
  )
}
