import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  if (request.url.includes('/api/')) {
    const origin = request.headers.get('origin')
    const allowedOrigin = process.env.ORIGIN || ''

    if (!origin) {
      return NextResponse.json(
        { erro: 'Operação não autorizada' },
        { status: 401 },
      )
    }

    const response = NextResponse.next()
    response.headers.append('Access-Control-Allow-Origin', allowedOrigin)
    response.headers.append('Access-Control-Allow-Credentials', 'true')
    response.headers.append('Access-Control-Allow-Methods', 'GET, POST')
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
