import { NextRequest, NextResponse } from 'next/server';
import { getLanguageFrom } from './source/instances/Translation/languages';

export default async function middleware(req: NextRequest) {
  const url = `${req.nextUrl.pathname}${req.nextUrl.search}`;

  const currentLanguage = getLanguageFrom(url);
  if (!currentLanguage) return NextResponse.redirect(new URL(`/en/${url}`, req.url));
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    '/((?!api|images|_next/static|_next/image|favicon.ico).*)'
    // Optional: only run on root (/) URL
    // '/'
  ]
};
