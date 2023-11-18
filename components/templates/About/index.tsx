import Image from 'next/image'

import { MotionFadeInFromBottomWithScroll } from '@/components/motion/MotionFadeInFromBottomWithScroll'
import { SectionTitle } from '@/components/parts/SectionTitle'
import { Window } from '@/components/parts/Window'

import myPicture from '@/public/images/me.png'

type Props = {
  lng: string
}

export const About = (props: Props) => {
  return (
    <>
      <MotionFadeInFromBottomWithScroll>
        <SectionTitle title="About" index="01" />
      </MotionFadeInFromBottomWithScroll>
      <MotionFadeInFromBottomWithScroll>
        <Window>
          <div className="flex justify-center">
            <Image className="mask mask-circle" alt="me" src={myPicture} height="140" width="140" />
          </div>
          <div className="md:m-0 mt-6">
            <h2 className="text-[30px] text-secondary font-bold">Naoya Ishizaka</h2>
            <h3>Digital Craftsman ( Developer / Designer )</h3>
            <p className="mt-10">
              test test test test test test test test test test test test test test test test test
              test test test test test test test test test test test test test test test test test
              test
            </p>
          </div>
        </Window>
      </MotionFadeInFromBottomWithScroll>
    </>
  )
}
