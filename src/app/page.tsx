import { redirect } from 'next/navigation';

import { ROUTES } from '~constants/routes';

export default function Home() {
	return redirect(ROUTES.categories);
}
