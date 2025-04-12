'use client'

import { useEffect, useState } from 'react'
import {
  type UseTranslationOptions,
  initReactI18next,
  useTranslation as useTranslationOrg
} from 'react-i18next'

import i18next from 'i18next'
import resourcesToBackend from 'i18next-resources-to-backend'

import { getOptions } from '@/app/i18n/setting'

i18next
  .use(initReactI18next)
  .use(
    resourcesToBackend(
      (language: string, namespace: string) => import(`./languages/${language}/${namespace}.json`)
    )
  )
  .init(getOptions())

export function useTranslation(
  lng: string,
  ns?: string,
  options?: UseTranslationOptions<undefined> | undefined
) {
  const [ready, setReady] = useState(i18next.resolvedLanguage === lng)

  useEffect(() => {
    if (i18next.resolvedLanguage !== lng) {
      i18next.changeLanguage(lng).then(() => {
        setReady(true)
      })
    } else {
      setReady(true)
    }
  }, [lng])

  const translation = useTranslationOrg(ns, options)

  return {
    ...translation,
    isLoading: !ready
  }
}
