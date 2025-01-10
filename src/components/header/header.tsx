'use client';

import { Block } from '~/submodules/ameliance-ui/components/blocks';
import { Grid } from '~/submodules/ameliance-ui/components/grid';
import { Logo } from '~components/logo/logo';

import { Navigation } from './navigation/navigation';
import { SwitchThemeButton } from './switch-theme-button/switch-theme-button';

import c from './header.module.scss';

export function Header() {
	return (
		<Block component="header" className={c.header}>
			<Grid container component="section" className={c.container}>
				<Logo />

				<Block className={c.controls}>
					<Navigation />
					<SwitchThemeButton />
				</Block>
			</Grid>
		</Block>
	);
}
