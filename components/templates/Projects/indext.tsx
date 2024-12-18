'use client'

import React, { useState } from 'react'

import Image from 'next/image'
import { useTheme } from 'next-themes'

import { useTranslation } from '@/app/i18n/client'
import { THEME_DARK } from '@/utils/Const'
import { PROJECTS } from '@/utils/MtData'

const TABS = ['Web Services', 'Web Sites']

type Props = {
  lng: string
}

export const Projects = (props: Props) => {
  const { theme } = useTheme()

  const isDark = theme === THEME_DARK
  const shadowClass = isDark
    ? 'shadow-[0_3px_6px_rgba(94,_234,_212,_0.7)]'
    : 'shadow-[0_3px_6px_rgba(77,_110,_212,_0.7)]'

  const [tab, setTab] = useState(TABS[0])
  const { t } = useTranslation(props.lng, 'main')

  return (
    <>
      {/* Tabs */}
      <div role="tablist" className="tabs tabs-boxed mt-8 lg:mx-20 mx-4 lg:tabs-lg p-2">
        {TABS.map((t) => (
          <a
            role="tab"
            className={`tab ${tab === t && 'tab-active'}`}
            onClick={() => setTab(t)}
            key={t}
          >
            {t}
          </a>
        ))}
      </div>

      {/* Tab contents */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-8">
        {PROJECTS.map(
          (image, index) =>
            t(`portfolio.items.${index}.type`) === tab && (
              <div className={`card bg-base-100 ${shadowClass}`} key={index}>
                <figure>
                  <Image src={image} alt={`Project Image ${index}`} />
                </figure>
                <div className="card-body">
                  <h2 className="card-title text-2xl">{t(`portfolio.items.${index}.title`)}</h2>
                  <p>{t(`portfolio.items.${index}.description`)}</p>
                  <div className="text-sm space-x-2 space-y-2">
                    {t(`portfolio.items.${index}.technologies`)
                      .split(',')
                      .map((technology, index) => {
                        return (
                          <span key={index} className="badge badge-primary badge-outline">
                            {technology}
                          </span>
                        )
                      })}
                  </div>
                  <div className="space-x-4 mt-2">
                    <a className="link" href={t(`portfolio.items.${index}.github`)} target="_blank">
                      <div className="h-7 w-7 hover:bg-primary i-ion-logo-github"></div>
                    </a>
                    <a className="link" href={t(`portfolio.items.${index}.demo`)} target="_blank">
                      <div className="h-7 w-7 hover:bg-primary i-clarity-pop-out-line"></div>
                    </a>
                  </div>
                </div>
              </div>
            )
        )}
      </div>
    </>
  )
}
