import type { Metadata } from 'next';
import localFont from 'next/font/local';

import { Container, Main } from '~/submodules/ameliance-ui/components/blocks';
import { Footer } from '~components/footer/footer';
import { Header } from '~components/header/header';

import { Providers } from './(providers)/providers';

import './globals.scss';

import c from './layout.module.scss';

const geistMono = localFont({
	src: './fonts/GeistMonoVF.woff',
	variable: '--font--geist-mono',
	weight: '100 900',
	display: 'swap',
});

const montserrat = localFont({
	src: './fonts/Montserrat-VariableFont_wght.ttf',
	variable: '--font--montserrat',
	weight: '500 700',
	display: 'swap',
});

export const metadata: Metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			{/* TODO: ad min hight dvh */}
			<head>
				<style>
					{`
						:root {
							--a--font--primary: ${montserrat.style.fontFamily.replaceAll("'", '')};
							--a--font--secondary: ${montserrat.style.fontFamily.replaceAll("'", '')};
							--a--font--monospace: ${geistMono.style.fontFamily.replaceAll("'", '')};
						}
					`}
				</style>
			</head>
			<body className={c.body}>
				<Providers>
					<Header />

					<Main className={c.main}>{children}</Main>

					<Footer />
				</Providers>
			</body>
		</html>
	);
}
