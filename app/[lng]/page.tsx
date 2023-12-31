import { About } from '@/components/templates/About'
import { Contact } from '@/components/templates/Contact'
import { Experience } from '@/components/templates/Experience'
import { Portfolio } from '@/components/templates/Portfolio'
import { Top } from '@/components/templates/Top'

export default async function Home({ params: { lng } }: { params: { lng: string } }) {
  return (
    <div className="w-4/5 md:w-3/4 mx-auto">
      <Top lng={lng} />
      <About lng={lng} />
      <Experience lng={lng} />
      <Portfolio lng={lng} />
      <Contact lng={lng} />
    </div>
  )
}
