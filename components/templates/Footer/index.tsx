export const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer footer-center p-10 mt-20">
      <aside>
        <p className="text-primary">Copyright © {currentYear} - All right reserved</p>
      </aside>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <div className="grid rounded place-content-center">
            <a
              className="link"
              href="https://www.linkedin.com/in/naoya-ishizaka-a1898a292/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Link to LinkedIn"
            >
              <div className="h-6 w-6 bg-primary hover:bg-secondary i-ion-logo-linkedin" />
            </a>
          </div>
          <div className="grid rounded place-content-center">
            <a
              className="link"
              href="https://github.com/noah-00"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Link to GitHub"
            >
              <div className="h-6 w-6 bg-primary hover:bg-secondary i-ion-logo-github" />
            </a>
          </div>
        </div>
      </nav>
    </footer>
  )
}
