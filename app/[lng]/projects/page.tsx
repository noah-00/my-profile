import { MotionFadeIn } from '@/components/motion/MotionFadeIn'
import { BackLink } from '@/components/parts/BackLink'
import { Projects } from '@/components/templates/Projects/indext'

import { getTranslationInSSR } from '@/app/i18n'
import { PROJECTS } from '@/utils/MtData'

export default async function Page({ params: { lng } }: { params: { lng: string } }) {
  const { t } = await getTranslationInSSR(lng, 'main')

  const projects = PROJECTS.map((image, index) => {
    return {
      image,
      title: t(`portfolio.items.${index}.title`),
      description: t(`portfolio.items.${index}.description`),
      technologies: t(`portfolio.items.${index}.technologies`).split(','),
      type: t(`portfolio.items.${index}.type`),
      github: t(`portfolio.items.${index}.github`),
      demo: t(`portfolio.items.${index}.demo`)
    }
  })

  return (
    <div className="w-4/5 md:w-3/4 mx-auto">
      <MotionFadeIn delay={0.25}>
        <BackLink href={`/${lng}`}>{t('header.name')}</BackLink>
        <h1 className="lg:text-5xl text-4xl font-bold mt-4">Projects</h1>
        <Projects projects={projects} />
      </MotionFadeIn>
    </div>
  )
}
