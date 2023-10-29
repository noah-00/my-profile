import Link from 'next/link'

import { labels } from '@/app/i18n/setting'

type LngButtonProps = {
  lng: string
}

export const LngButton = async ({ lng }: LngButtonProps) => {
  return (
    <>
      <details>
        <summary>
          <button>
            <span className="i-ion-language-sharp bg-primary"></span>
          </button>
        </summary>
        <ul className="p-2 w-44 border-[1px] border-gray-700 bg-base-200">
          {Object.keys(labels).map((label) => {
            const isCurrentLang = lng === (label as keyof typeof labels)

            return (
              <li key={label}>
                <Link
                  href={`/${label}`}
                  className={`flex justify-between ${isCurrentLang && 'bg-base-100'}`}
                >
                  <div className="flex items-center">
                    <div className="badge badge-sm badge-primary badge-outline mr-2 uppercase">
                      {label}
                    </div>
                    <button className={`${isCurrentLang && 'underline'}`}>
                      {labels[label as keyof typeof labels]}
                    </button>
                  </div>
                  {!isCurrentLang && (
                    <div className="i-ion-md-arrow-round-up bg-gray-500 rotate-45"></div>
                  )}
                </Link>
              </li>
            )
          })}
        </ul>
      </details>
    </>
  )
}
