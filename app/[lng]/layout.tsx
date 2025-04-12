import { dir } from 'i18next'

import './globals.css'
import { MotionCursorFollower } from '@/components/motion/MotionCursorFollower'
import { FixedSidebar } from '@/components/templates/FixedSidebar'
import { Footer } from '@/components/templates/Footer'
import { Header } from '@/components/templates/Header'

import { getTranslationInSSR } from '@/app/i18n/index'
import { languages } from '@/app/i18n/setting'
import Favicon from '@/public/favicon.png'

import { Providers } from './provider'

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }))
}

const GetMetaData = async (lng: string) => {
  const { t } = await getTranslationInSSR(lng, 'main')

  return {
    title: t('title'),
    description: t('description'),
    icons: [{ rel: 'icon', url: Favicon.src }]
  }
}

export async function generateMetadata({ params: { lng } }: { params: { lng: string } }) {
  return GetMetaData(lng)
}

type Props = {
  params: {
    lng: string
  }
  children: React.ReactNode
}
export default function RootLayout({ children, params: { lng } }: Props) {
  return (
    <html lang={lng} dir={dir(lng)} suppressHydrationWarning>
      <body className="font-mono">
        <Providers>
          <MotionCursorFollower>
            <Header lng={lng} />
            {children}
            <Footer lng={lng} />
            <FixedSidebar lng={lng} />
          </MotionCursorFollower>
        </Providers>
      </body>
    </html>
  )
}
