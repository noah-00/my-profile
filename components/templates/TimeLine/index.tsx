'use client'

import React, { useState } from 'react'

import { Accordions } from '@/components/templates/Accordions.ts'

import { useTranslation } from '@/app/i18n/client'
import { TIME_LINE_ITEM_KEYS } from '@/utils/MtData'

import { TimeLineItem } from '../../parts/TimeLineItem'

type Props = {
  lng: string
}

export const TimeLine = (props: Props) => {
  const { t } = useTranslation(props.lng, 'main')

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <ul className="timeline timeline-snap-icon timeline-compact timeline-vertical md:px-8">
      {TIME_LINE_ITEM_KEYS.map((organizationKey, index) => {
        return (
          <TimeLineItem
            key={organizationKey}
            year={t(`experience.items.${organizationKey}.year`)}
            title={t(`experience.items.${organizationKey}.title`)}
            index={index}
            description={t(`experience.items.${organizationKey}.description`)}
            isLast={index === TIME_LINE_ITEM_KEYS.length - 1}
            setHoveredIndex={setHoveredIndex}
            hoveredIndex={hoveredIndex}
          >
            <Accordions lng={props.lng} organizationKey={organizationKey} />
          </TimeLineItem>
        )
      })}
    </ul>
  )
}
