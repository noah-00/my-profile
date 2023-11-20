import { MotionFadeInFromBottomWithScroll } from '@/components/motion/MotionFadeInFromBottomWithScroll'
import { PortfolioItem } from '@/components/parts/PortfolioItem'
import { SectionTitle } from '@/components/parts/SectionTitle'

type Props = {
  lng: string
}

import AnkiQuikcer from '@/public/images/AnkiQuikcer.png'

const portfolioItems = [
  {
    subTitle: 'Google extension',
    title: 'Anki Quicker',
    description:
      'Anki Quicker is a Google Chrome extension that allows you to quickly add cards to Anki.',
    image: AnkiQuikcer,
    technologies: ['TypeScript', 'React', 'Next.js', 'Tailwind', 'Anki-Connect-API'],
    github: '#',
    demo: '#'
  }
]

export const Portfolio = async (props: Props) => {
  return (
    <>
      <MotionFadeInFromBottomWithScroll>
        <SectionTitle title="Portfolio" index="03" />
      </MotionFadeInFromBottomWithScroll>
      {portfolioItems.map((item, index) => {
        return (
          <MotionFadeInFromBottomWithScroll key={index}>
            <PortfolioItem
              subTitle={item.subTitle}
              title={item.title}
              description={item.description}
              image={item.image}
              technologies={item.technologies}
              github={item.github}
              demo={item.demo}
            />
          </MotionFadeInFromBottomWithScroll>
        )
      })}
    </>
  )
}
