import { Accordion } from '@/components/parts/Accordion.ts'

import { useTranslation } from '@/app/i18n/index'

type Props = {
  organizationKey: string
  lng: string
}

export const Accordions = async (props: Props) => {
  const { t } = await useTranslation(props.lng, 'main')

  const projectsCount = Number(t(`experience.items.${props.organizationKey}.projectsCount`))

  if (projectsCount > 0) {
    return (
      <>
        {Array.from({ length: projectsCount }).map((project, index) => (
          <Accordion
            organizationKey={props.organizationKey}
            index={index}
            title={t(`experience.items.${props.organizationKey}.projects.${index}.title`)}
            year={t(`experience.items.${props.organizationKey}.projects.${index}.year`)}
            description={t(
              `experience.items.${props.organizationKey}.projects.${index}.description`
            )}
            techStackKeys={t(
              `experience.items.${props.organizationKey}.projects.${index}.techStackKeys`
            )}
            key={props.organizationKey + index}
          />
        ))}
      </>
    )
  } else {
    return null
  }
}
