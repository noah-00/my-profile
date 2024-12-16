import Image from 'next/image'

import { MotionFadeInFromBottom } from '@/components/motion/MotionFadeInFromBottom'
import { DownloadPdfButton } from '@/components/parts/DownloadPdfButton'

import { getTranslationInSSR } from '@/app/i18n/index'
import myPicture from '@/public/images/me_1.png'

type TypeProps = {
  lng: string
}

export const Top = async (props: TypeProps) => {
  const { t } = await getTranslationInSSR(props.lng, 'main')

  const renderText = (delay: number, children: React.ReactNode, className?: string) => (
    <MotionFadeInFromBottom delay={delay}>
      <div className={className}>{children}</div>
    </MotionFadeInFromBottom>
  )

  const renderImage = (delay: number, children: React.ReactNode) => (
    <MotionFadeInFromBottom delay={delay}>{children}</MotionFadeInFromBottom>
  )

  return (
    <div className="hero-content flex-col lg:flex-row-reverse lg:mt-32 lg:mb-20 mt-4 gap-6">
      {renderImage(
        0.4,
        <Image
          src={myPicture}
          className="rounded-lg shadow-2xl max-w-[300px] md:max-w-[500px]"
          width={650}
          height={650}
          alt="Naoya Ishizaka"
        />
      )}
      <div className="space-y-3">
        {renderText(0.5, <p className="text-primary">Hi, my name is</p>)}
        {renderText(
          0.6,
          <h1 className="lg:text-[70px] text-[50px] font-bold bg-gradient-to-r from-primary via-[#939393] to-[#e2e2e2] bg-clip-text text-transparent">
            Naoya Ishizaka
          </h1>
        )}
        {renderText(0.7, <h2 className="text-[30px] font-semibold">Web developer</h2>)}
        {renderText(
          0.8,
          <p>
            {t('top.introduction-1')}
            <br />
            {t('top.introduction-2')}
          </p>
        )}
        {renderText(0.9, <DownloadPdfButton content={t('top.resume')} lng={props.lng} />, 'pt-10')}
      </div>
    </div>
  )
}
