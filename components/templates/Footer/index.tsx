type Props = {
  lng: string
}

export const Footer = (props: Props) => {
  return (
    <footer className="footer footer-center p-10 bg-base-300 mt-20">
      <aside>
        <p className="text-primary">Copyright © 2024 - All right reserved</p>
      </aside>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <div className="grid rounded place-content-center">
            <a
              className="link"
              href="https://www.linkedin.com/in/naoya-ishizaka-a1898a292/"
              target="_blank"
            >
              <div className="h-6 w-6 bg-primary hover:bg-secondary i-ion-logo-linkedin"></div>
            </a>
          </div>
          <div className="grid rounded place-content-center">
            <a className="link" href="https://github.com/noah-00" target="_blank">
              <div className="h-6 w-6 bg-primary hover:bg-secondary i-ion-logo-github"></div>
            </a>
          </div>
          <div className="grid rounded place-content-center">
            <a className="link" href={`/resume_${props.lng}.pdf`} target="_blank">
              <div className="h-6 w-6 bg-primary hover:bg-secondary i-ion-document-text"></div>
            </a>
          </div>
        </div>
      </nav>
    </footer>
  )
}
