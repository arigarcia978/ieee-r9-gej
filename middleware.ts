import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export const locales = ["en", "es", "pt"]
export const defaultLocale = "en"

function getLocale(request: NextRequest) {
  const acceptLanguage = request.headers.get("accept-language")
  if (acceptLanguage) {
    const languages = acceptLanguage.split(",").map((lang) => lang.split(";")[0].trim())
    for (const lang of languages) {
      if (locales.includes(lang)) {
        return lang
      }
      const shortLang = lang.split("-")[0]
      if (locales.includes(shortLang)) {
        return shortLang
      }
    }
  }
  return defaultLocale
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname
  const pathnameIsMissingLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`,
  )

  if (pathnameIsMissingLocale) {
    const locale = getLocale(request)
    return NextResponse.redirect(new URL(`/${locale}${pathname}`, request.url))
  }
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
}
