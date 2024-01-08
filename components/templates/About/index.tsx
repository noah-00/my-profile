import Image from 'next/image'

import { MotionFadeInFromBottomWithScroll } from '@/components/motion/MotionFadeInFromBottomWithScroll'
import { SectionTitle } from '@/components/parts/SectionTitle'
import { Skills } from '@/components/parts/Skills'
import { Window } from '@/components/parts/Window'

import { useTranslation } from '@/app/i18n/index'
import myPicture from '@/public/images/me.jpeg'

type Props = {
  lng: string
}

const aboutDataSet = ['yearsOfExperience', 'typeOfOccupation', 'hobby', 'skills']

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
            <div className="md:m-0 mt-6">
              <div className="grid lg:grid-cols-4 grid-cols-1 mb-8">
                <div className="col-span-1 flex justify-center">
                  <Image
                    className="mask mask-circle"
                    alt="me"
                    src={myPicture}
                    height="140"
                    width="140"
                  />
                </div>
                <div className="col-span-3 flex items-center">
                  <div>
                    <h2 className="text-[50px] text-secondary font-bold">Naoya Ishizaka</h2>
                    <h3>Web Developer</h3>
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                {aboutDataSet.map((data) => (
                  <div className="grid lg:grid-cols-4 grid-cols-1" key={data}>
                    <div className="col-span-1 text-secondary mb-4 lg:mb-0 font-bold border-l-[4px] border-primary pl-5 items-center flex">
                      {t(`about.information.${data}Label`)}
                    </div>
                    <div className="col-span-3">
                      {data === 'skills' ? (
                        <Skills lng={props.lng} />
                      ) : (
                        t(`about.information.${data}`)
                      )}
                    </div>
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
