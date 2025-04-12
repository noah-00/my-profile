import React from 'react'

import Link from 'next/link'

import { MotionFadeIn } from '@/components/motion/MotionFadeIn'
import { MotionFadeInFromTop } from '@/components/motion/MotionFadeInFromTop'
import { HeaderMenuItem } from '@/components/parts/HeaderMenuItem'
import { LngButton } from '@/components/parts/LangButton'
import { ThemeSwitcher } from '@/components/parts/ThemeSwitcher'
import { HamburgerMenu } from '@/components/templates/HamburgerMenu'

import { getTranslationInSSR } from '@/app/i18n/index'
import { HEADER_MENU } from '@/utils/MtData'

type LngButtonProps = {
  lng: string
}

export const Header = async ({ lng }: LngButtonProps) => {
  const { t } = await getTranslationInSSR(lng)

  return (
    <div className="navbar sticky top-0 z-30 backdrop-blur-sm">
      <div className="navbar-start">
        <MotionFadeIn>
          <Link className="btn btn-ghost normal-case text-xl" href={`/${lng}`}>
            {t('header.name')}
          </Link>
        </MotionFadeIn>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal">
          {HEADER_MENU.map((item, index) => {
            return (
              <li className="px-4" key={item}>
                <MotionFadeInFromTop delay={index / 10}>
                  <HeaderMenuItem label={t(item)} index={index + 1} />
                </MotionFadeInFromTop>
              </li>
            )
          })}
        </ul>
      </div>
      <div className="navbar-end">
        <MotionFadeIn>
          <ul className="menu menu-horizontal px-1 text-lg">
            <li className="justify-center hidden lg:flex">
              <LngButton lng={lng} />
            </li>
            <div className="divider divider-horizontal hidden lg:flex" />
            <li>
              <ThemeSwitcher />
            </li>
            <li className="ml-3 lg:hidden">
              <HamburgerMenu lng={lng} />
            </li>
          </ul>
        </MotionFadeIn>
      </div>
    </div>
  )
}
