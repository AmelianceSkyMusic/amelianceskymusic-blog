import { atom, useAtom } from 'jotai';

export const isAuthAtom = atom('false');

export function useIsAuthAtom() {
	const [isAuth, setIsAuth] = useAtom(isAuthAtom);
	return isAuthAtom;
}
