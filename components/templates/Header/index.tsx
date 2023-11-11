import React from 'react'

import { HeaderMenuItem } from '@/components/parts/HeaderMenuItem'
import { LngButton } from '@/components/parts/LangButton'
import { ThemeSwitcher } from '@/components/parts/ThemeSwitcher'
import { HamburgerMenu } from '@/components/templates/HamburgerMenu'

import { useTranslation } from '@/app/i18n/index'
import { HeaderMenuSet } from '@/utils/MtData'

type LngButtonProps = {
  lng: string
}

export const Header = async ({ lng }: LngButtonProps) => {
  const { t } = await useTranslation(lng)

  return (
    <div className="navbar sticky top-0 z-30 bg-base-100 bg-opacity-90">
      <div className="navbar-start">
        <a className="btn btn-ghost normal-case text-xl">{t('header.name')}</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal">
          {HeaderMenuSet.map((item, index) => {
            return <HeaderMenuItem label={t(item)} index={index + 1} key={item} />
          })}
        </ul>
      </div>
      <div className="navbar-end">
        <ul className="menu menu-horizontal px-1 text-lg">
          <li className="justify-center hidden lg:flex">
            <LngButton lng={lng} />
          </li>
          <div className="divider divider-horizontal hidden lg:flex"></div>
          <li>
            <ThemeSwitcher />
          </li>
          <li className="ml-3 lg:hidden">
            <HamburgerMenu lng={lng} />
          </li>
        </ul>
      </div>
    </div>
  )
}
