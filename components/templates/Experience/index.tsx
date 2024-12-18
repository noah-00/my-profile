import { MotionFadeInFromBottomWithScroll } from '@/components/motion/MotionFadeInFromBottomWithScroll'
import { MoreLink } from '@/components/parts/MoreLink'
import { SectionTitle } from '@/components/parts/SectionTitle'

import { getTranslationInSSR } from '@/app/i18n'

import { TimeLine } from '../TimeLine'

type Props = {
  lng: string
}

export const Experience = async (props: Props) => {
  const { t } = await getTranslationInSSR(props.lng)

  return (
    <section id="Experience">
      <MotionFadeInFromBottomWithScroll>
        <SectionTitle title="Experience" index="02" />
      </MotionFadeInFromBottomWithScroll>
      <MotionFadeInFromBottomWithScroll>
        <TimeLine lng={props.lng} />
        <MoreLink href={`/resume_${props.lng}.pdf`} isATag>
          {t('experience.viewResume')}
        </MoreLink>
      </MotionFadeInFromBottomWithScroll>
    </section>
  )
}
