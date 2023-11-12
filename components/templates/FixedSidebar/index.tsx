import React from 'react'

const links = [
  { icon: 'i-ion-logo-github', link: '#' },
  { icon: 'i-ion-logo-linkedin', link: '#' },
  { icon: 'i-ion-mail', link: '#' }
]

export const FixedSidebar = () => {
  return (
    <div className="fixed left-16 bottom-0 space-y-4 hidden md:block">
      {links.map((link) => (
        <div className="grid rounded place-content-center" key={link.icon}>
          <a className="link">
            <div className={`h-6 w-6 hover:bg-primary ${link.icon}`}></div>
          </a>
        </div>
      ))}
      <div className="flex justify-center">
        <div className="w-[1px] h-20 bg-secondary"></div>
      </div>
    </div>
  )
}
