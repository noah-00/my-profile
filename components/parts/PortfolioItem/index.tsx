import Image, { StaticImageData } from 'next/image'

type Props = {
  subTitle: string
  title: string
  description: string
  image: StaticImageData
  technologies: string
  github: string
  demo: string
}

export const PortfolioItem = (props: Props) => {
  return (
    <>
      <div className="px-8 lg:flex hidden">
        <Image alt="AnkiQuikcer" src={props.image} className="w-2/4" />
        <div className="w-2/4 relative">
          <div className="w-full p-1 absolute -left-10 -top-4 text-right space-y-5">
            <p className="text-primary text-sm">{props.subTitle}</p>
            <h2 className="text-2xl text-secondary font-bold">{props.title}</h2>
            <div className="p-2 rounded-md bg-base-100">{props.description}</div>
            <div className="text-sm space-x-2 space-y-2">
              {props.technologies.split(',').map((technology, index) => {
                return (
                  <span key={index} className="badge">
                    {technology}
                  </span>
                )
              })}
            </div>
            <div className="space-x-4 pl-2">
              <a className="link" href={props.github} target="_blank">
                <div className="h-7 w-7 hover:bg-primary i-ion-logo-github"></div>
              </a>
              <a className="link" href={props.demo} target="_blank">
                <div className="h-7 w-7 hover:bg-primary i-clarity-pop-out-line"></div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:hidden">
        <Image alt="AnkiQuikcer" src={props.image} className="w-full" />
        <div className="mt-4 mx-4">
          <div className="p-1 space-y-6">
            <p className="text-primary text-sm">{props.subTitle}</p>
            <h2 className="text-2xl text-secondary font-bold">{props.title}</h2>
            <div className="rounded-md">{props.description}</div>
            <div className="text-sm space-x-2 space-y-2">
              {props.technologies.split(',').map((technology, index) => {
                return (
                  <span key={index} className="badge">
                    {technology}
                  </span>
                )
              })}
            </div>
            <div className="space-x-4">
              <a className="link" href={props.github} target="_blank">
                <div className="h-7 w-7 hover:bg-primary i-ion-logo-github"></div>
              </a>
              <a className="link" href={props.demo} target="_blank">
                <div className="h-7 w-7 hover:bg-primary i-clarity-pop-out-line"></div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
