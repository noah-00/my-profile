import Image from 'next/image'

import { MotionFadeInFromBottomWithScroll } from '@/components/motion/MotionFadeInFromBottomWithScroll'
import { SectionTitle } from '@/components/parts/SectionTitle'
import { Window } from '@/components/parts/Window'

import { useTranslation } from '@/app/i18n/index'
import myPicture from '@/public/images/me.png'

type Props = {
  lng: string
}

const aboutDataSet = ['yearsOfExperience', 'typeOfOccupation', 'skills', 'hobby']

export const About = async (props: Props) => {
  const { t } = await useTranslation(props.lng, 'main')

  return (
    <section id="About">
      <MotionFadeInFromBottomWithScroll>
        <SectionTitle title="About" index="01" />
      </MotionFadeInFromBottomWithScroll>
      <MotionFadeInFromBottomWithScroll>
        <div className="md:px-8">
          <Window>
            <div className="flex justify-center">
              <Image
                className="mask mask-circle"
                alt="me"
                src={myPicture}
                height="140"
                width="140"
              />
            </div>
            <div className="md:m-0 mt-6">
              <h2 className="text-[30px] text-secondary font-bold">Naoya Ishizaka</h2>
              <h3 className="mb-10">Web Developer</h3>

              <div className="space-y-4">
                {aboutDataSet.map((data) => (
                  <div className="grid lg:grid-cols-3 grid-cols-1" key={data}>
                    <div className="col-span-1 text-secondary mb-2 lg:mb-0 font-bold">
                      {t(`about.information.${data}Label`)}
                    </div>
                    <div className="col-span-2">{t(`about.information.${data}`)}</div>
                  </div>
                ))}
              </div>
            </div>
          </Window>
        </div>
      </MotionFadeInFromBottomWithScroll>
    </section>
  )
}
