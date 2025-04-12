'use client'

import { useRef } from 'react'
import { Link as Scroll } from 'react-scroll'

import { usePathname, useRouter } from 'next/navigation'

import useMediaQuery from '@/hooks/useMediaQuery'

type HeaderMenuItemProps = {
  label: string
  index: number
}

export const HeaderMenuItem = (props: HeaderMenuItemProps) => {
  const ref = useRef<HTMLLabelElement>(null)
  const isPC = useMediaQuery(648)

  const pathName = usePathname()
  const router = useRouter()

  const closeDrawer = () => {
    const splitPath = pathName.split('/')
    const isRoot = splitPath.length === 2
    if (!isRoot) router.push(`/${splitPath[1]}#${props.label}`)

    if (ref.current && !isPC) {
      ref.current.click()
    }
  }

  return (
    <>
      <label htmlFor="my-drawer" className="hidden" ref={ref} />
      <Scroll
        to={props.label}
        smooth={true}
        offset={-100}
        duration={600}
        onClick={closeDrawer}
        href={`#${props.label}`}
      >
        <span className="text-primary">0{props.index}.</span>
        {props.label}
      </Scroll>
    </>
  )
}
