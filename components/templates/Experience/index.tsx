import { MotionFadeInFromBottomWithScroll } from '@/components/motion/MotionFadeInFromBottomWithScroll'
import { SectionTitle } from '@/components/parts/SectionTitle'
import { TechBadge } from '@/components/parts/TechBadge'
import { TimeLineItem } from '@/components/parts/TimeLineItem'

type Props = {
  lng: string
}

const timelineItems = [
  {
    year: '1984',
    title: 'First Macintosh computer',
    description:
      'The Apple Macintosh—later rebranded as the Macintosh 128K—is the original Apple Macintosh personal computer. It played a pivotal role in establishing desktop publishing as a general office function. The motherboard, a 9 in (23 cm) CRT monitor, and a floppy drive were housed in a beige case with integrated carrying handle; it came with a keyboard and single-button mouse.',
    techStack: [
      { name: 'TypeScript', icon: 'i-nonicons-typescript-16' },
      { name: 'Vue.js', icon: 'i-nonicons-vue-16' }
    ]
  },
  {
    year: '1998',
    title: 'iMac',
    description:
      'iMac is a family of all-in-one Mac desktop computers designed and built by Apple Inc. It has been the primary part of Apples consumer desktop offerings since its debut in August 1998, and has evolved through seven distinct forms',
    techStack: [
      { name: 'TypeScript', icon: 'i-nonicons-typescript-16' },
      { name: 'Vue.js', icon: 'i-nonicons-vue-16' },
      { name: 'AWS', icon: 'i-fa6-brands-aws' }
    ]
  },
  {
    year: '2001',
    title: 'iPod',
    description:
      'The iPod is a discontinued series of portable media players and multi-purpose mobile devices designed and marketed by Apple Inc. The first version was released on October 23, 2001, about 8+1⁄2 months after the Macintosh version of iTunes was released. Apple sold an estimated 450 million iPod products as of 2022. Apple discontinued the iPod product line on May 10, 2022. At over 20 years, the iPod brand is the oldest to be discontinued by Apple',
    techStack: [
      { name: 'TypeScript', icon: 'i-nonicons-typescript-16' },
      { name: 'Vue.js', icon: 'i-nonicons-vue-16' },
      { name: 'AWS', icon: 'i-fa6-brands-aws' }
    ]
  },
  {
    year: '2007',
    title: 'iPhone',
    description:
      'iPhone is a line of smartphones produced by Apple Inc. that use Apples own iOS mobile operating system. The first-generation iPhone was announced by then-Apple CEO Steve Jobs on January 9, 2007. Since then, Apple has annually released new iPhone models and iOS updates. As of November 1, 2018, more than 2.2 billion iPhones had been sold. As of 2022, the iPhone accounts for 15.6% of global smartphone market share',
    techStack: [
      { name: 'TypeScript', icon: 'i-nonicons-typescript-16' },
      { name: 'Vue.js', icon: 'i-nonicons-vue-16' },
      { name: 'AWS', icon: 'i-fa6-brands-aws' }
    ]
  },
  {
    year: '2015',
    title: 'Apple Watch',
    description:
      'The Apple Watch is a line of smartwatches produced by Apple Inc. It incorporates fitness tracking, health-oriented capabilities, and wireless telecommunication, and integrates with iOS and other Apple products and services',
    techStack: [
      { name: 'TypeScript', icon: 'i-nonicons-typescript-16' },
      { name: 'Vue.js', icon: 'i-nonicons-vue-16' },
      { name: 'AWS', icon: 'i-fa6-brands-aws' }
    ]
  }
]

export const Experience = (props: Props) => {
  return (
    <>
      <MotionFadeInFromBottomWithScroll>
        <SectionTitle title="Experience" index="02" />
      </MotionFadeInFromBottomWithScroll>
      <MotionFadeInFromBottomWithScroll>
        <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical md:px-8">
          {timelineItems.map((item, index) => {
            return (
              <TimeLineItem
                key={item.description}
                year={item.year}
                title={item.title}
                index={index}
                isLast={index === timelineItems.length - 1}
              >
                {item.description}
                <div className="my-4">
                  {item.techStack.map((tech) => {
                    return <TechBadge name={tech.name} icon={tech.icon} key={tech.name} />
                  })}
                </div>
              </TimeLineItem>
            )
          })}
        </ul>
      </MotionFadeInFromBottomWithScroll>
    </>
  )
}
