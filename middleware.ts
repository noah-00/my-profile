import acceptLanguage from 'accept-language'
import { NextResponse, NextRequest } from 'next/server'

import { fallbackLng, languages } from '@/app/i18n/setting'
import { RESUME_URL } from '@/utils/MtData'

acceptLanguage.languages(languages)

export const config = {
  // matcher: ['/((?!api|_next/static|_next/image|assets|favicon.ico|sw.js).*)']
  matcher: '/:lng*'
}

const cookieName = 'i18next'

export function middleware(req: NextRequest) {
  // Skip if the request is for the resume
  if (req.nextUrl.pathname.startsWith(RESUME_URL)) {
    return NextResponse.next()
  }

  let lng
  if (req.cookies.has(cookieName)) lng = acceptLanguage.get(req.cookies.get(cookieName)?.value)
  if (!lng) lng = acceptLanguage.get(req.headers.get('Accept-Language'))
  if (!lng) lng = fallbackLng

  if (
    !languages.some((loc) => req.nextUrl.pathname.startsWith(`/${loc}`)) &&
    !req.nextUrl.pathname.startsWith('/_next')
  ) {
    return NextResponse.redirect(new URL(`/${lng}`, req.url))
  }

  const targetReferer = req.headers.get('referer')

  if (targetReferer) {
    const refererUrl = new URL(targetReferer)
    const lngInReferer = languages.find((l) => refererUrl.pathname.startsWith(`/${l}`))
    const response = NextResponse.next()
    if (lngInReferer) response.cookies.set(cookieName, lngInReferer)
    return response
  }

  return NextResponse.next()
}
