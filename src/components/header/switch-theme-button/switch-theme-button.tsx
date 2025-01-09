import { useEffect, useState } from 'react';

import { Button } from '~/submodules/ameliance-ui/components/button';
import { CheckIcon } from '~/submodules/ameliance-ui/components/icons/svg/check';
import { MoonIcon } from '~/submodules/ameliance-ui/components/icons/svg/moon';
import { Menu, MenuContainer, MenuItem } from '~/submodules/ameliance-ui/components/menu';
import { Typography } from '~/submodules/ameliance-ui/components/typography';
import { getThemeState } from '~/submodules/ameliance-ui/scripts/get-theme-state';
import { setTheme } from '~/submodules/ameliance-ui/scripts/set-theme';

export function SwitchThemeButton() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [userTheme, setUserTheme] = useState<string>();

	useEffect(() => {
		let currentTheme = getThemeState();
		if (!currentTheme) currentTheme = 'auto';
		setTheme(currentTheme);
		setUserTheme(currentTheme);
	}, []);

	const setThemeAuto = () => {
		setTheme('auto');
		setUserTheme('auto');
	};
	const setThemeDark = () => {
		setTheme('dark');
		setUserTheme('dark');
	};
	const setThemeLight = () => {
		setTheme('light');
		setUserTheme('light');
	};

	const closeMenu = () => setIsMenuOpen(false);
	const openMenu = () => setIsMenuOpen(true);

	const addCheck = (theme: string) => {
		if (userTheme === theme) return <CheckIcon size="sm" />;
	};
	return (
		<MenuContainer>
			<Menu
				isOpen={isMenuOpen}
				onClick={closeMenu}
				anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
				menuOrigin={{ horizontal: 'right', vertical: 'top' }}
				preventItemClickClose
			>
				<MenuItem onClick={setThemeAuto}>
					<Typography>Auto</Typography>
					{addCheck('auto')}
				</MenuItem>
				<MenuItem onClick={setThemeDark}>
					<Typography>Dark</Typography>
					{addCheck('dark')}
				</MenuItem>
				<MenuItem onClick={setThemeLight}>
					<Typography>Light</Typography>
					{addCheck('light')}
				</MenuItem>
			</Menu>
			<Button type="text" onClick={openMenu}>
				<MoonIcon />
			</Button>
		</MenuContainer>
	);
}
