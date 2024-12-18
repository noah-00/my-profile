import { Dispatch, SetStateAction } from 'react'

import { useTheme } from 'next-themes'

import useMediaQuery from '@/hooks/useMediaQuery'
import { THEME_DARK } from '@/utils/Const'

type Props = {
  children: React.ReactNode
  year: string
  title: string
  index: number
  description: string
  isLast?: boolean
  setHoveredIndex: Dispatch<SetStateAction<number | null>>
  hoveredIndex: number | null
}

export const TimeLineItem = ({
  children,
  year,
  title,
  index,
  description,
  isLast,
  setHoveredIndex,
  hoveredIndex
}: Props) => {
  const isPc = useMediaQuery(648)
  const { theme } = useTheme()

  const isDark = theme === THEME_DARK
  const isHovered = hoveredIndex === index
  const isNotHovered = hoveredIndex !== null && !isHovered

  const hoverShadowClass = isPc
    ? isDark
      ? 'hover:shadow-[0_2px_4px_rgba(94,_234,_212,_0.7)]'
      : 'hover:shadow-[0_2px_4px_rgba(77,_110,_212,_0.7)]'
    : null

  const handleMouseEnter = () => {
    if (isPc) setHoveredIndex(index)
  }

  const handleMouseLeave = () => {
    setHoveredIndex(null)
  }

  return (
    <li
      className={[
        isHovered && 'opacity-100',
        isNotHovered && 'opacity-50',
        hoverShadowClass,
        'rounded-lg',
        isPc && 'hover:bg-base-200'
      ]
        .filter(Boolean)
        .join(' ')}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <hr className="bg-primary" />
      <div className="timeline-middle">
        <div className="bg-primary p-1 flex items-center rounded-full">
          <div className="h-4 w-4" />
        </div>
      </div>
      <div className="space-y-2 timeline-start mb-12 px-2">
        <time className="font-mono italic pb-1">{year}</time>
        <div className="text-2xl pb-1 text-secondary font-bold">{title}</div>
        <div className="pb-2">{description}</div>
        <div className="pb-2">{children}</div>
      </div>
      {!isLast && <hr className="bg-primary" />}
    </li>
  )
}
