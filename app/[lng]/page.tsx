// import Link from 'next/link'

// import { LngButton } from '@/components/parts/LangButton'
// import { ThemeSwitcher } from '@/components/parts/ThemeSwitcher'

// import { useTranslation } from '@/app/i18n/index'

export default async function Home({ params: { lng } }: { params: { lng: string } }) {
  console.log(lng)
  // const { t } = await useTranslation(lng, 'main')
  return <main>Home</main>
}
