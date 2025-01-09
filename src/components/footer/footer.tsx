'use client';

import NextLink from 'next/link';

import { Block } from '~/submodules/ameliance-ui/components/blocks';
import { Grid } from '~/submodules/ameliance-ui/components/grid';
import { Link } from '~/submodules/ameliance-ui/components/link';

import c from './footer.module.scss';

export function Footer() {
	return (
		<Block component="footer" className={c.footer}>
			<Grid container component="section" className={c.container}>
				<Link
					display="caption"
					component={NextLink}
					href={'https://github.com/AmelianceSkyMusic'}
					underline={false}
				>
					AmelianceSkyMusic | 2025
				</Link>
			</Grid>
		</Block>
	);
}
