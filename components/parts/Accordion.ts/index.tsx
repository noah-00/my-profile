'use client'

import { useState } from 'react'

import { TechBadge } from '@/components/parts/TechBadge'

import { TECH_STACKS } from '@/utils/MtData'

type Props = {
  organizationKey: string
  index: number
  title: string
  year: string
  description: string
  techStackKeys: string
}

export const Accordion = (props: Props) => {
  const [active, setActive] = useState(false)

  return (
    <div className="collapse collapse-arrow border-x-[3px] border-primary my-6 hover:opacity-70 bg-base-300">
      <input
        type="checkbox"
        name={`accordion-${props.organizationKey}-${props.index}`}
        checked={active}
        onChange={() => setActive(!active)}
        aria-label="Accordion"
      />
      <div className="collapse-title text-xl font-medium text-secondary">{props.title}</div>
      <div className="collapse-content">
        <div>({props.year})</div>
        <div className="my-6">{props.description}</div>
        <div>
          {props.techStackKeys.split(',').map((key) => {
            return <TechBadge name={TECH_STACKS[key].name} key={TECH_STACKS[key].name} />
          })}
        </div>
      </div>
    </div>
  )
}
