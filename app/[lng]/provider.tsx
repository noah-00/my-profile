'use client'

import { FC, PropsWithChildren } from 'react'

import { ThemeProvider } from 'next-themes'

import { THEME_DARK } from '@/utils/Const'

export const Providers: FC<PropsWithChildren> = ({ children }) => {
  return <ThemeProvider defaultTheme={THEME_DARK}>{children}</ThemeProvider>
}
