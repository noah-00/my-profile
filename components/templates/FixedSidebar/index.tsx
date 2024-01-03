'use client'

import React from 'react'

import { MotionFadeInFromTop } from '@/components/motion/MotionFadeInFromTop'

export const FixedSidebar = () => {
  return (
    <div className="fixed left-16 bottom-0 space-y-4 hidden md:block">
      <MotionFadeInFromTop delay={1.5}>
        <div className="grid rounded place-content-center my-3">
          <a
            className="link"
            href="https://www.linkedin.com/in/naoya-ishizaka-a1898a292/"
            target="_blank"
          >
            <div className="h-6 w-6 hover:bg-primary i-ion-logo-linkedin"></div>
          </a>
        </div>
        <div className="grid rounded place-content-center my-3">
          <a className="link" href="https://github.com/noah-00" target="_blank">
            <div className="h-6 w-6 hover:bg-primary i-ion-logo-github"></div>
          </a>
        </div>
        {/* <div className="grid rounded place-content-center my-3">
          <a className="link" href="/resume.pdf" target="_blank">
            <div className="h-6 w-6 hover:bg-primary i-ion-document-text"></div>
          </a>
        </div> */}
      </MotionFadeInFromTop>
      <MotionFadeInFromTop delay={1.5}>
        <div className="flex justify-center">
          <div className="w-[1px] h-20 bg-secondary"></div>
        </div>
      </MotionFadeInFromTop>
    </div>
  )
}
