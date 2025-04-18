'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { labels } from '@/app/i18n/setting'

type LngButtonProps = {
  lng: string
}

export const LngButton = ({ lng }: LngButtonProps) => {
  const pathName = usePathname()
  const splittedUrlByLng = pathName.split(lng)
  const pathWithoutLng = splittedUrlByLng.slice(1).join('')

  return (
    <>
      <details>
        <summary className="flex items-center justify-center w-16 h-12">
          <span className="i-ion-language-sharp bg-primary" />
        </summary>
        <ul className="w-44 border-[1px] border-gray-700 bg-base-200 !mt-1">
          {Object.keys(labels).map((label) => {
            const isCurrentLang = lng === (label as keyof typeof labels)

            return (
              <li key={label}>
                <Link
                  href={`/${label}${pathWithoutLng && pathWithoutLng}`}
                  className={`flex justify-between ${isCurrentLang && 'bg-base-100'}`}
                >
                  <div className="flex items-center">
                    <div className="badge badge-sm badge-primary badge-outline mr-2 uppercase">
                      {label}
                    </div>
                    <span className={`${isCurrentLang && 'underline'}`}>
                      {labels[label as keyof typeof labels]}
                    </span>
                  </div>
                  {!isCurrentLang && (
                    <div className="i-ion-md-arrow-round-up bg-gray-500 rotate-45" />
                  )}
                </Link>
              </li>
            )
          })}
        </ul>
      </details>
    </>
  )
}
