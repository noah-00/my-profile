'use client'

import { useCallback, useEffect, useState } from 'react'

const useMediaQuery = (width: number) => {
  const [targetReached, setTargetReached] = useState(false)

  const updateTarget = useCallback(() => {
    if (typeof window !== 'undefined') {
      setTargetReached(window.innerWidth > width)
    }
  }, [width])

  useEffect(() => {
    if (typeof window === 'undefined') return () => null
    updateTarget()
    window.addEventListener('resize', updateTarget)
    return () => window.removeEventListener('resize', updateTarget)
  }, [updateTarget])

  return targetReached
}

export default useMediaQuery
