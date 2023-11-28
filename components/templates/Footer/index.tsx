import { links } from '@/utils/MtData'

type Props = {
  lng: string
}

export const Footer = (props: Props) => {
  return (
    <footer className="footer footer-center p-10 bg-base-300 mt-20">
      <aside>
        <p className="text-primary">Copyright © 2023 - All right reserved</p>
      </aside>
      <nav>
        <div className="grid grid-flow-col gap-4">
          {links.map((link) => (
            <div className="grid rounded place-content-center" key={link.link}>
              <a className="link">
                <div className={`h-6 w-6 bg-primary hover:bg-secondary ${link.icon}`}></div>
              </a>
            </div>
          ))}
        </div>
      </nav>
    </footer>
  )
}
