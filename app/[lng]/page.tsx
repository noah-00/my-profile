import { About } from '@/components/templates/About'
import { Top } from '@/components/templates/Top'

export default async function Home({ params: { lng } }: { params: { lng: string } }) {
  return (
    <div className="w-4/5 md:w-4/6 mx-auto">
      <Top lng={lng} />
      <About lng={lng} />
    </div>
  )
}
