import React from 'react'

import Link from 'next/link'

type Props = {
  href: string
  children: React.ReactNode
}

export const BackLink = (props: Props) => {
  return (
    <div className="lg:mt-16 mt-6 flex justify-start font-semibold text-primary">
      <Link
        href={props.href}
        className="flex items-center space-x-2 pl-2 hover:pl-0 hover:space-x-4 hover:underline decoration-primary underline-offset-4"
      >
        <span className="i-ion-arrow-left-b"></span>
        <span>{props.children}</span>
      </Link>
    </div>
  )
}
