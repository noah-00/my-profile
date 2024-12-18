import React from 'react'

import Link from 'next/link'

type Props = {
  href: string
  children: React.ReactNode
  isATag?: boolean
}

export const MoreLink = (props: Props) => {
  return (
    <div className="lg:mt-16 mt-6 flex justify-end font-semibold text-primary">
      {props.isATag ? (
        <a
          href={props.href}
          className="flex items-center space-x-2 pr-2 hover:pr-0 hover:space-x-4 hover:underline decoration-primary underline-offset-4"
        >
          <span>{props.children}</span>
          <span className="i-ion-arrow-right-b"></span>
        </a>
      ) : (
        <Link
          href={props.href}
          className="flex items-center space-x-2 pr-2 hover:pr-0 hover:space-x-4 hover:underline decoration-primary underline-offset-4"
        >
          <span>{props.children}</span>
          <span className="i-ion-arrow-right-b"></span>
        </Link>
      )}
    </div>
  )
}
