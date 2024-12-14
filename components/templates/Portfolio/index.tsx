import { MotionFadeInFromBottomWithScroll } from '@/components/motion/MotionFadeInFromBottomWithScroll'
import { PortfolioItem } from '@/components/parts/PortfolioItem'
import { SectionTitle } from '@/components/parts/SectionTitle'

// eslint-disable-next-line import/order
import { getTranslationInSSR } from '@/app/i18n/index'

type Props = {
  lng: string
}

import AnkiQuikcer from '@/public/images/anki_quikcer.png'

const portfolioItemsObImage = [AnkiQuikcer]

export const Portfolio = async (props: Props) => {
  const { t } = await getTranslationInSSR(props.lng, 'main')

  return (
    <section id="Portfolio">
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
    </section>
  )
}
