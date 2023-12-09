import { MotionFadeInFromBottomWithScroll } from '@/components/motion/MotionFadeInFromBottomWithScroll'
import { PortfolioItem } from '@/components/parts/PortfolioItem'
import { SectionTitle } from '@/components/parts/SectionTitle'

import { useTranslation } from '@/app/i18n/index'

type Props = {
  lng: string
}

import AnkiQuikcer from '@/public/images/AnkiQuikcer.png'

const portfolioItemsObImage = [AnkiQuikcer]

export const Portfolio = async (props: Props) => {
  const { t } = await useTranslation(props.lng, 'main')

  return (
    <>
      <MotionFadeInFromBottomWithScroll>
        <SectionTitle title="Portfolio" index="03" />
      </MotionFadeInFromBottomWithScroll>
      {portfolioItemsObImage.map((image, index) => {
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
            />
          </MotionFadeInFromBottomWithScroll>
        )
      })}
    </>
  )
}
