import { MotionFadeInFromBottomWithScroll } from '@/components/motion/MotionFadeInFromBottomWithScroll'
import { SectionTitle } from '@/components/parts/SectionTitle'
import { TimeLineItem } from '@/components/parts/TimeLineItem'
import { Accordions } from '@/components/templates/Accordions.ts'

import { getTranslationInSSR } from '@/app/i18n/index'
import { TIME_LINE_ITEM_KEYS } from '@/utils/MtData'

type Props = {
  lng: string
}

export const Experience = async (props: Props) => {
  const { t } = await getTranslationInSSR(props.lng, 'main')

  return (
    <section id="Experience">
      <MotionFadeInFromBottomWithScroll>
        <SectionTitle title="Experience" index="02" />
      </MotionFadeInFromBottomWithScroll>
      <MotionFadeInFromBottomWithScroll>
        <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical md:px-8">
          {TIME_LINE_ITEM_KEYS.map((organizationKey, index) => {
            return (
              <TimeLineItem
                key={organizationKey}
                year={t(`experience.items.${organizationKey}.year`)}
                title={t(`experience.items.${organizationKey}.title`)}
                index={index}
                description={t(`experience.items.${organizationKey}.description`)}
                isLast={index === TIME_LINE_ITEM_KEYS.length - 1}
              >
                <Accordions lng={props.lng} organizationKey={organizationKey} />
              </TimeLineItem>
            )
          })}
        </ul>
      </MotionFadeInFromBottomWithScroll>
    </section>
  )
}
