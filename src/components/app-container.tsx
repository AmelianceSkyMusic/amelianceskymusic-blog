import { Container } from '~/submodules/ameliance-ui/components/blocks';

import c from './app-container.module.scss';

type AppContainerProps = {
	children: React.ReactNode;
};

export function AppContainer({ children }: AppContainerProps) {
	return <Container className={c.root}>{children}</Container>;
}
