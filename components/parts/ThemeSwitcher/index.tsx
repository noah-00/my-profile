'use client'
import React, { useState, useEffect } from 'react'

import { useTheme } from 'next-themes'

import { THEME_DARK, THEME_LIGHT } from '@/utils/Const'

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
      {theme === THEME_DARK && (
        <button
          type="button"
          onClick={() => toggleTheme(THEME_LIGHT)}
          className="btn btn-square btn-active bg-yellow-200 hover:bg-yellow-200/75 flex items-center flex-nowrap p-0"
          aria-label="Switch to light theme"
        >
          <div className="i-ion-sunny-outline bg-base-100 h-5 w-5" />
        </button>
      )}
      {theme === THEME_LIGHT && (
        <button
          onClick={() => toggleTheme(THEME_DARK)}
          className="btn btn-square btn-active bg-purple-600 hover:bg-purple-600/75 flex items-center flex-nowrap p-0 no-animation"
          type="button"
          aria-label="Switch to dark theme"
        >
          <div className="i-ion-moon h-5 w-5" />
        </button>
      )}
    </>
  )
}
