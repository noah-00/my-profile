'use client'
import React, { useState, useEffect } from 'react'

import { useTheme } from 'next-themes'

export const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  const toggleTheme = (targetTheme: string) => {
    setTheme(targetTheme)
  }

  return (
    <>
      {theme === 'myDark' && (
        <button
          onClick={() => toggleTheme('winter')}
          className="btn btn-square btn-active bg-yellow-200 hover:bg-yellow-200/75 flex items-center flex-nowrap p-0"
        >
          <div className="i-ion-sunny-outline bg-base-100 h-5 w-5"></div>
        </button>
      )}
      {theme === 'winter' && (
        <button
          onClick={() => toggleTheme('myDark')}
          className="btn btn-square btn-active bg-purple-600 hover:bg-purple-600/75 flex items-center flex-nowrap p-0 no-animation"
        >
          <div className="i-ion-moon h-5 w-5"></div>
        </button>
      )}
    </>
  )
}
