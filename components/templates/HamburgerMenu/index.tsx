import Link from 'next/link'

import { HeaderMenuItem } from '@/components/parts/HeaderMenuItem'

import { useTranslation } from '@/app/i18n/index'
import { labels } from '@/app/i18n/setting'
import { HeaderMenuSet } from '@/utils/MtData'

type TypeProps = {
  lng: string
}

export const HamburgerMenu = async (props: TypeProps) => {
  const { t } = await useTranslation(props.lng)

  return (
    <div className="drawer drawer-end p-0 m-0">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
      <label
        className="btn btn-outline btn-primary flex items-center flex-nowrap px-3"
        htmlFor="my-drawer-4"
      >
        <div className="i-ion-menu h-5 w-5"></div>
      </label>

      <div className="drawer-side">
        <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
        <ul className="menu w-80 min-h-full bg-base-200 text-base-content pt-6">
          <label
            className="btn btn-square btn-outline btn-primary self-end mx-3 mb-3"
            htmlFor="my-drawer-4"
          >
            <div className="i-ion-close h-5 w-5"></div>
          </label>
          {HeaderMenuSet.map((item, index) => {
            return <HeaderMenuItem label={t(item)} index={index + 1} key={item} />
          })}
          <div className="divider"></div>
          <p className="px-4 my-2">translations</p>
          {Object.keys(labels).map((label) => {
            const isCurrentLang = props.lng === (label as keyof typeof labels)
            return (
              <li key={label} className="px-4">
                <Link
                  href={`/${label}`}
                  className={`flex justify-between ${isCurrentLang && 'bg-base-100'}`}
                >
                  <div className="flex items-center">
                    <div className="badge badge-sm badge-primary badge-outline mr-2 uppercase">
                      {label}
                    </div>
                    <button className={`${isCurrentLang && 'underline'}`}>
                      {labels[label as keyof typeof labels]}
                    </button>
                  </div>
                  {!isCurrentLang && (
                    <div className="i-ion-md-arrow-round-up bg-gray-500 rotate-45"></div>
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
