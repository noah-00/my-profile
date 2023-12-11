'use client'

import React from 'react'

import Image from 'next/image'

import { MotionFadeInFromBottomWithScroll } from '@/components/motion/MotionFadeInFromBottomWithScroll'
import { SectionTitle } from '@/components/parts/SectionTitle'

import { useTranslation } from '@/app/i18n/index'
import myPicture from '@/public/images/me.png'
import { MAIL_ADDRESS } from '@/utils/MtData'

type Props = {
  lng: string
}

export const Contact = async (props: Props) => {
  const { t } = await useTranslation(props.lng, 'main')

  const handleEmail = () => {
    window.location.href = `mailto:${MAIL_ADDRESS}`
  }

  return (
    <section id="Contact">
      <MotionFadeInFromBottomWithScroll>
        <SectionTitle title="Contact" index="04" />
      </MotionFadeInFromBottomWithScroll>
      <MotionFadeInFromBottomWithScroll>
        <div className="hero">
          <div className="hero-content flex-col lg:flex-row space-x-8 space-y-8">
            <Image width={400} height={400} alt="me" src={myPicture} className="rounded-lg" />
            <div className="space-y-10">
              <h1 className="text-5xl font-bold">{t('contact.title')}</h1>
              <p>
                {t('contact.content')}
                <br />
                {t('contact.content-2')}
              </p>
              <button onClick={handleEmail} className="btn btn-primary btn-outline">
                <span className="h-4 w-4 i-ion-mail"></span>
                {t('contact.button')}
              </button>
            </div>
          </div>
        </div>
      </MotionFadeInFromBottomWithScroll>
    </section>
  )
}
