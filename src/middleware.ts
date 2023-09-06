import { NextResponse } from 'next/server'

// const allowedOrigins = [process.env.PATHNAME]

export function middleware(request: Request) {
  if (request.url.includes('/api/')) {
    const origin = request.headers.get('host') || '' // origin não funciona

    // if (!origin || !allowedOrigins.includes(origin)) {
    //   return NextResponse.json(
    //     { error: 'Unauthorized operation' },
    //     { status: 400 },
    //   )
    // }

    const response = NextResponse.next()
    response.headers.append('Access-Control-Allow-Origin', origin)
    response.headers.append('Access-Control-Allow-Credentials', 'true')
    response.headers.append('Access-Control-Allow-Methods', 'GET')
    response.headers.append(
      'Access-Control-Allow-Headers',
      'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version',
    )

    return response
  }
}

export const config = {
  matcher: ['/api/:path*'],
}
