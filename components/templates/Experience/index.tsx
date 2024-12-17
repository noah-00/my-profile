import { MotionFadeInFromBottomWithScroll } from '@/components/motion/MotionFadeInFromBottomWithScroll'
import { SectionTitle } from '@/components/parts/SectionTitle'

import { TimeLine } from '../TimeLine'

type Props = {
  lng: string
}

export const Experience = (props: Props) => {
  return (
    <section id="Experience">
      <MotionFadeInFromBottomWithScroll>
        <SectionTitle title="Experience" index="02" />
      </MotionFadeInFromBottomWithScroll>
      <MotionFadeInFromBottomWithScroll>
        <TimeLine lng={props.lng} />
      </MotionFadeInFromBottomWithScroll>
    </section>
  )
}
