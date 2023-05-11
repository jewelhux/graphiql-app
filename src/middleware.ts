// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const loginUrl = new URL('/', request.url);
  if (pathname === '/signin') {
    return NextResponse.redirect(loginUrl);
  }
  return NextResponse.next();
}
