import React from 'react'

import { MotionFadeInFromTop } from '@/components/motion/MotionFadeInFromTop'

const links = [
  { icon: 'i-ion-logo-github', link: '#' },
  { icon: 'i-ion-logo-linkedin', link: '#' },
  { icon: 'i-ion-mail', link: '#' }
]

export const FixedSidebar = () => {
  return (
    <div className="fixed left-16 bottom-0 space-y-4 hidden md:block">
      {links.map((link) => (
        <MotionFadeInFromTop key={link.icon} delay={1.5}>
          <div className="grid rounded place-content-center">
            <a className="link">
              <div className={`h-6 w-6 hover:bg-primary ${link.icon}`}></div>
            </a>
          </div>
        </MotionFadeInFromTop>
      ))}
      <MotionFadeInFromTop delay={1.5}>
        <div className="flex justify-center">
          <div className="w-[1px] h-20 bg-secondary"></div>
        </div>
      </MotionFadeInFromTop>
    </div>
  )
}
