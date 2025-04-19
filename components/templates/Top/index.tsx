import Image from 'next/image'

import { DownloadPdfButton } from '@/components/parts/DownloadPdfButton'
import { RenderImage } from '@/components/parts/RenderImage'
import { RenderText } from '@/components/parts/RenderText'

import { getTranslationInSSR } from '@/app/i18n/index'
import myPicture from '@/public/images/me_1.png'
import { getExperienceYears } from '@/utils/Utils'

type TypeProps = {
  lng: string
}

export const Top = async (props: TypeProps) => {
  const { t } = await getTranslationInSSR(props.lng, 'main')

  const experienceYears = getExperienceYears()

  return (
    <div className="hero-content flex-col lg:flex-row-reverse lg:mt-24 lg:mb-20 mt-4 gap-6">
      <RenderImage delay={0.4}>
        <div className="relative rounded-lg">
          <div className="absolute inset-0 m-auto md:w-[300px] md:h-[300px] w-44 h-44 border-2 border-primary rounded-full pointer-events-none -z-10 shadow-[inset_0_0_30px,_0_0_30px] shadow-primary" />
          <Image
            src={myPicture}
            className="max-w-[300px] md:max-w-[500px] z-10 rounded-lg"
            width={650}
            height={650}
            alt="Naoya Ishizaka"
          />
        </div>
      </RenderImage>
      <div className="space-y-3">
        <RenderText delay={0.5}>
          <p className="text-primary">Hi, my name is</p>
        </RenderText>
        <RenderText delay={0.6}>
          <h1 className="lg:text-[70px] text-[50px] font-bold bg-gradient-to-r from-primary via-[#939393] to-[#e2e2e2] bg-clip-text text-transparent">
            Naoya Ishizaka
          </h1>
        </RenderText>
        <RenderText delay={0.7}>
          <h2 className="text-[30px] font-semibold">Frontend developer</h2>
        </RenderText>
        <RenderText delay={0.8}>
          <p>
            {t('top.introduction-1', { experienceYears })}
            <br />
            {t('top.introduction-2')}
          </p>
        </RenderText>
        <RenderText delay={0.9} className="pt-10">
          <DownloadPdfButton content={t('top.resume')} lng={props.lng} />
        </RenderText>
      </div>
    </div>
  )
}
