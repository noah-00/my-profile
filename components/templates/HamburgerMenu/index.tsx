'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { HeaderMenuItem } from '@/components/parts/HeaderMenuItem'

import { useTranslation } from '@/app/i18n/client'
import { labels } from '@/app/i18n/setting'
import { HEADER_MENU } from '@/utils/MtData'

type TypeProps = {
  lng: string
}

export const HamburgerMenu = (props: TypeProps) => {
  const { t } = useTranslation(props.lng)

  const pathName = usePathname()
  const splittedUrlByLng = pathName.split(props.lng)
  const pathWithoutLng = splittedUrlByLng.slice(1).join('')

  return (
    <div className="drawer drawer-end p-0 m-0">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <label
        className="btn btn-outline btn-primary flex items-center flex-nowrap px-3"
        htmlFor="my-drawer"
      >
        <div className="i-ion-menu h-5 w-5" />
      </label>

      <div className="drawer-side">
        <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay" />
        <ul className="menu w-80 min-h-full bg-base-200 text-base-content pt-6">
          <label
            className="btn btn-square btn-outline btn-primary self-end mx-3 mb-3"
            htmlFor="my-drawer"
          >
            <div className="i-ion-close h-5 w-5" />
          </label>
          {HEADER_MENU.map((item, index) => {
            return (
              <li className="px-4" key={item}>
                <HeaderMenuItem label={t(item)} index={index + 1} />
              </li>
            )
          })}
          <div className="divider" />
          <p className="px-4 my-2">translations</p>
          {Object.keys(labels).map((label) => {
            const isCurrentLang = props.lng === (label as keyof typeof labels)
            return (
              <li key={label} className="px-4">
                <Link
                  href={`/${label}${pathWithoutLng && pathWithoutLng}`}
                  className={`flex justify-between ${isCurrentLang && 'bg-base-100'}`}
                >
                  <div className="flex items-center">
                    <div className="badge badge-sm badge-primary badge-outline mr-2 uppercase">
                      {label}
                    </div>
                    <button className={`${isCurrentLang && 'underline'}`} type="button">
                      {labels[label as keyof typeof labels]}
                    </button>
                  </div>
                  {!isCurrentLang && (
                    <div className="i-ion-md-arrow-round-up bg-gray-500 rotate-45" />
                  )}
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}
