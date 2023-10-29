'use client'
import Link from 'next/link'

import { LngButton } from '@/components/parts/LangButton/client'

// import { useTranslation } from '@/app/i18n/client'

export default function Client({ params: { lng } }: { params: { lng: string } }) {
  // const { t } = useTranslation(lng, 'main')

  return (
    <main>
      <h1>{lng}</h1>
      <Link href={`/${lng}`}>back</Link>
      <br />
      <LngButton lng={lng} />
      <br />
    </main>
  )
}
