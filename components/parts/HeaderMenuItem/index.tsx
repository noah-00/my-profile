'use client'

import { useRef } from 'react'
import { Link as Scroll } from 'react-scroll'

type HeaderMenuItemProps = {
  label: string
  index: number
}

export const HeaderMenuItem = (props: HeaderMenuItemProps) => {
  const ref = useRef<HTMLLabelElement>(null)

  const closeDrawer = () => {
    if (ref.current) {
      ref.current.click()
    }
  }

  return (
    <li className="px-4">
      <label htmlFor="my-drawer" className="hidden" ref={ref} />
      <Scroll to={props.label} smooth={true} offset={-100} duration={600} onClick={closeDrawer}>
        <span className="text-primary">0{props.index}.</span>
        {props.label}
      </Scroll>
    </li>
  )
}
