import React from 'react'

import Image from 'next/image'

import { MotionFadeInFromBottomWithScroll } from '@/components/motion/MotionFadeInFromBottomWithScroll'
import { SectionTitle } from '@/components/parts/SectionTitle'

import myPicture from '@/public/images/me.png'

type Props = {
  lng: string
}

export const Contact = (props: Props) => {
  return (
    <>
      <MotionFadeInFromBottomWithScroll>
        <SectionTitle title="Contact" index="04" />
      </MotionFadeInFromBottomWithScroll>
      <MotionFadeInFromBottomWithScroll>
        <div className="hero">
          <div className="hero-content flex-col lg:flex-row">
            <Image width={400} height={400} alt="me" src={myPicture} className="rounded-lg" />
            <div>
              <h1 className="text-5xl font-bold">Contact me</h1>
              <p className="py-6">
                test test test test test test test test test test test test test
              </p>
              <button className="btn btn-primary btn-outline">Say hello</button>
            </div>
          </div>
        </div>
      </MotionFadeInFromBottomWithScroll>
    </>
  )
}
