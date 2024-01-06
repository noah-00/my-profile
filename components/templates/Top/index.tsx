import { MotionFadeInFromBottom } from '@/components/motion/MotionFadeInFromBottom'
import { DownloadPdfButton } from '@/components/parts/DownloadPdfButton'

import { useTranslation } from '@/app/i18n/index'

type TypeProps = {
  lng: string
}

export const Top = async (props: TypeProps) => {
  const { t } = await useTranslation(props.lng, 'main')

  const renderText = (delay: number, children: React.ReactNode, className?: string) => (
    <MotionFadeInFromBottom delay={delay}>
      <div className={className}>{children}</div>
    </MotionFadeInFromBottom>
  )

  return (
    <div className="h-[95vh] md:h-[90vh] flex justify-center items-center stack">
      <div className="space-y-3">
        {renderText(0.5, <p className="text-primary">Hi, my name is</p>)}
        {renderText(0.6, <h1 className="text-[60px] font-bold text-secondary">Naoya Ishizaka</h1>)}
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
