import Image, { type StaticImageData } from 'next/image'

type Props = {
  subTitle: string
  title: string
  description: string
  image: StaticImageData
  technologies: string
  github: string
  demo: string
  index: number
}

export const PortfolioItem = (props: Props) => {
  const isOdd = props.index % 2 === 1

  return (
    <>
      <div className={`px-8 py-16 lg:flex hidden ${isOdd ? 'flex-row-reverse' : 'flex-row'}`}>
        <Image alt="AnkiQuikcer" src={props.image} className="w-2/4" />
        <div className="w-2/4 relative">
          <div
            className={`w-full p-1 absolute -left-10 -top-4 space-y-5 ${
              isOdd ? 'text-left' : 'text-right'
            }`}
          >
            <p className="text-primary text-sm">{props.subTitle}</p>
            <h2 className="text-2xl text-secondary font-bold">{props.title}</h2>
            <div className="p-2 rounded-md bg-base-100">{props.description}</div>
            <div className="text-sm space-x-2 space-y-2">
              {props.technologies.split(',').map((technology, index) => {
                return (
                  <span
                    key={`${technology}-${index}`}
                    className="badge badge-primary badge-outline"
                  >
                    {technology}
                  </span>
                )
              })}
            </div>
            <div className="space-x-4 pl-2">
              <a
                className="link"
                href={props.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Link to GitHub"
              >
                <div className="h-7 w-7 hover:bg-primary i-ion-logo-github" />
              </a>
              <a
                className="link"
                href={props.demo}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Link to Demo"
              >
                <div className="h-7 w-7 hover:bg-primary i-clarity-pop-out-line" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:hidden py-4">
        <Image alt="AnkiQuikcer" src={props.image} className="w-full" />
        <div className="mt-4 mx-4">
          <div className="p-1 space-y-6">
            <p className="text-primary text-sm">{props.subTitle}</p>
            <h2 className="text-2xl text-secondary font-bold">{props.title}</h2>
            <div className="rounded-md">{props.description}</div>
            <div className="text-sm space-x-2 space-y-2">
              {props.technologies.split(',').map((technology, index) => {
                return (
                  <span
                    key={`${technology}-${index}`}
                    className="badge badge-primary badge-outline"
                  >
                    {technology}
                  </span>
                )
              })}
            </div>
            <div className="space-x-4">
              <a className="link" href={props.github} target="_blank" rel="noreferrer">
                <div className="h-7 w-7 hover:bg-primary i-ion-logo-github" />
              </a>
              <a className="link" href={props.demo} target="_blank" rel="noreferrer">
                <div className="h-7 w-7 hover:bg-primary i-clarity-pop-out-line" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
