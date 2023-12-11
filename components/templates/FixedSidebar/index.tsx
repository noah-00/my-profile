'use client'

import React from 'react'

import { MotionFadeInFromTop } from '@/components/motion/MotionFadeInFromTop'

import { SNS_LINKS } from '@/utils/MtData'

export const FixedSidebar = () => {
  return (
    <div className="fixed left-16 bottom-0 space-y-4 hidden md:block">
      {SNS_LINKS.map((link) => (
        <MotionFadeInFromTop key={link.icon} delay={1.5}>
          <div className="grid rounded place-content-center">
            <a className="link" href={link.link} target="_blank">
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
