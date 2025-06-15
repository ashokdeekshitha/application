// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Runs for every request to these paths
export const config = {
  matcher: ['/dashboard/:path*', '/profile/:path*'], // Adjust as needed
};

export function middleware(request: NextRequest) {
  // Example: log path
  console.log('Middleware running at path:', request.nextUrl.pathname);

  // Optional: redirect example
  // if (!request.nextUrl.pathname.startsWith('/api')) {
  //   return NextResponse.redirect(new URL('/login', request.url));
  // }

  return NextResponse.next(); // Always required to continue
}
