'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { useTranslation } from '@/app/i18n/client'
import { labels } from '@/app/i18n/setting'

type LngButtonProps = {
  lng: string
}

export const LngButton = ({ lng }: LngButtonProps) => {
  const { t } = useTranslation(lng)
  const path = usePathname()

  const getLink = (label: string) => {
    let reg = new RegExp(Object.keys(labels).join('|'))
    let np = path.replace(reg, label)
    return np
  }

  return (
    <>
      <p>{t('switch')}client</p>
      {Object.keys(labels).map((label) => (
        <Link key={label} href={getLink(label)}>
          <button disabled={lng === (label as keyof typeof labels)}>
            {labels[label as keyof typeof labels]}
          </button>
        </Link>
      ))}
    </>
  )
}
