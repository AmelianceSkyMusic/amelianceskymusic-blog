'use client';

import { SnackBarProvider } from '~/submodules/ameliance-ui/components/snackbar';

type ProvidersProps = {
	children: React.ReactNode;
};

export function Providers({ children }: ProvidersProps) {
	return <SnackBarProvider maxSnack={5}>{children}</SnackBarProvider>;
}
