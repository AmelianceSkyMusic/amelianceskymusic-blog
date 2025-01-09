'use client';

import NextLink from 'next/link';
import { usePathname } from 'next/navigation';

import { Nav } from '~/submodules/ameliance-ui/components/blocks';
import { Link } from '~/submodules/ameliance-ui/components/link';
import { ROUTES } from '~constants/routes';

import c from './navigation.module.scss';

export function Navigation() {
	const pathname = usePathname();
	const isActive = (href: string) => pathname === href;
	return (
		<Nav className={c.root}>
			<Link
				component={NextLink}
				href={ROUTES.categories}
				underline={false}
				active={isActive(ROUTES.categories)}
			>
				Категорії
			</Link>
			<Link
				component={NextLink}
				href={ROUTES.posts}
				underline={false}
				active={isActive(ROUTES.posts)}
			>
				Пости
			</Link>
		</Nav>
	);
}
