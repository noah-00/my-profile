import { MotionFadeInFromBottomWithScroll } from '@/components/motion/MotionFadeInFromBottomWithScroll'
import { MoreLink } from '@/components/parts/MoreLink'
import { PortfolioItem } from '@/components/parts/PortfolioItem'
import { SectionTitle } from '@/components/parts/SectionTitle'

// eslint-disable-next-line import/order
import { getTranslationInSSR } from '@/app/i18n/index'
import { PROJECTS } from '@/utils/MtData'

type Props = {
  lng: string
}

export const Portfolio = async (props: Props) => {
  const { t } = await getTranslationInSSR(props.lng, 'main')

  return (
    <section id="Projects">
      <MotionFadeInFromBottomWithScroll>
        <SectionTitle title="Projects" index="03" />
      </MotionFadeInFromBottomWithScroll>
      {PROJECTS.map((image, index) => {
        return (
          <MotionFadeInFromBottomWithScroll key={index}>
            <PortfolioItem
              subTitle={t(`portfolio.items.${index}.subTitle`)}
              title={t(`portfolio.items.${index}.title`)}
              description={t(`portfolio.items.${index}.description`)}
              image={image}
              technologies={t(`portfolio.items.${index}.technologies`)}
              github={t(`portfolio.items.${index}.github`)}
              demo={t(`portfolio.items.${index}.demo`)}
              index={index}
            />
          </MotionFadeInFromBottomWithScroll>
        )
      })}
      <MotionFadeInFromBottomWithScroll>
        <MoreLink href={`/${props.lng}/projects`}>{t('portfolio.viewAllProjects')}</MoreLink>
      </MotionFadeInFromBottomWithScroll>
    </section>
  )
}
