import { Dispatch, SetStateAction } from 'react'

import { useTheme } from 'next-themes'

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

export const TimeLineItem = (props: Props) => {
  const { theme } = useTheme()

  const isDark = theme === THEME_DARK
  const hoverShadowClass = isDark
    ? 'hover:shadow-[0_2px_4px_rgba(94,_234,_212,_0.7)]'
    : 'hover:shadow-[0_2px_4px_rgba(77,_110,_212,_0.7)]'

  const isHovered = props.hoveredIndex !== null && props.hoveredIndex === props.index
  const isNotHovered = props.hoveredIndex !== null && props.hoveredIndex !== props.index

  return (
    <li
      className={`${isHovered && 'opacity-100'} ${isNotHovered && 'opacity-50'} ${hoverShadowClass} rounded-lg hover:bg-base-200 `}
      onMouseEnter={() => props.setHoveredIndex(props.index)}
      onMouseLeave={() => props.setHoveredIndex(null)}
    >
      <hr className="bg-primary" />
      <div className="timeline-middle">
        <div className="bg-primary p-1 flex items-center rounded-full">
          <div className="h-4 w-4" />
        </div>
      </div>
      <div className="space-y-2 timeline-start mb-12 px-2">
        <time className="font-mono italic pb-1">{props.year}</time>
        <div className="text-2xl pb-1 text-secondary font-bold">{props.title}</div>
        <div className="pb-2">{props.description}</div>
        <div className="pb-2">{props.children}</div>
      </div>
      {!props.isLast && <hr className="bg-primary" />}
    </li>
  )
}
