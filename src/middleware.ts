import { cookies } from 'next/headers';
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

import { ROUTES } from '~constants/routes';

const protectedRoutes = '/private';

export default async function middleware(req: NextRequest) {
	const path = req.nextUrl.pathname;
	const isProtectedRoute = path.startsWith(protectedRoutes);

	const cookie = cookies().get('amelianceskymusic blog session')?.value;
	const isAuth = cookie === process.env.AUTH_CODE_MATCH;

	if (isProtectedRoute && !isAuth) {
		return NextResponse.redirect(new URL(ROUTES.pageNotFound, req.nextUrl));
	}

	return NextResponse.next();
}

//* Routes Middleware should not run on
export const config = {
	matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};
