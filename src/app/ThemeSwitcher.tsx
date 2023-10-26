'use client'
import React, { useState, useEffect } from 'react'

import { useTheme } from 'next-themes'

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <>
      <h1>theme is {theme}</h1>
      <button onClick={() => setTheme('winter')}>Light</button>
      <button onClick={() => setTheme('myDark')}>Dark</button>
    </>
  )
}

export default ThemeSwitcher
