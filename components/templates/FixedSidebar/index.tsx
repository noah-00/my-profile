'use client'

import React from 'react'

import { MotionFadeInFromTop } from '@/components/motion/MotionFadeInFromTop'

type Props = {
  lng: string
}

export const FixedSidebar = (props: Props) => {
  return (
    <div className="fixed left-16 bottom-0 space-y-4 hidden md:block">
      <MotionFadeInFromTop delay={1.5}>
        <div className="grid rounded place-content-center my-3">
          <a
            className="link"
            href="https://www.linkedin.com/in/naoya-ishizaka-a1898a292/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <div className="h-6 w-6 hover:bg-primary i-ion-logo-linkedin" />
          </a>
        </div>
        <div className="grid rounded place-content-center my-3">
          <a
            className="link"
            href="https://github.com/noah-00"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <div className="h-6 w-6 hover:bg-primary i-ion-logo-github" />
          </a>
        </div>
        <div className="grid rounded place-content-center my-3">
          <a
            className="link"
            href={`/resume_${props.lng}.pdf`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Resume"
          >
            <div className="h-6 w-6 hover:bg-primary i-ion-document-text" />
          </a>
        </div>
      </MotionFadeInFromTop>
      <MotionFadeInFromTop delay={1.5}>
        <div className="flex justify-center" rel="noopener noreferrer">
          <div className="w-[1px] h-20 bg-secondary" />
        </div>
      </MotionFadeInFromTop>
    </div>
  )
}
