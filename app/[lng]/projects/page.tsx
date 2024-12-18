import { MotionFadeIn } from '@/components/motion/MotionFadeIn'
import { BackLink } from '@/components/parts/BackLink'
import { Projects } from '@/components/templates/Projects/indext'

import { getTranslationInSSR } from '@/app/i18n'

export default async function Page({ params: { lng } }: { params: { lng: string } }) {
  const { t } = await getTranslationInSSR(lng, 'main')

  return (
    <div className="w-4/5 md:w-3/4 mx-auto">
      <MotionFadeIn delay={0.25}>
        <BackLink href={`/${lng}`}>{t('header.name')}</BackLink>
        <h1 className="lg:text-5xl text-4xl font-bold mt-4">Projects</h1>
        <Projects lng={lng} />
      </MotionFadeIn>
    </div>
  )
}
