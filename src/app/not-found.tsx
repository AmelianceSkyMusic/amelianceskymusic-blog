import NextLink from 'next/link';

import { ROUTES } from '~/constants/routes';
import { Block, Container } from '~/submodules/ameliance-ui/components/blocks';
import { ButtonLink } from '~/submodules/ameliance-ui/components/button';
import { Typography } from '~/submodules/ameliance-ui/components/typography';

import c from './not-found.module.scss';

export default function NotFound() {
	return (
		<Container className={c.container}>
			<Block className={c.title}>
				<Typography component="h1" className={c.title40}>
					40
				</Typography>
				<Typography component="h1" className={c.title4}>
					4
				</Typography>
			</Block>
			<ButtonLink component={NextLink} href={ROUTES.home} className={c.goHome}>
				Go home →
			</ButtonLink>
		</Container>
	);
}
