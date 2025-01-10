import NextLink from 'next/link';

import { Link } from '~/submodules/ameliance-ui/components/link';
import { List, ListItem } from '~/submodules/ameliance-ui/components/list';
import { Typography } from '~/submodules/ameliance-ui/components/typography';
import { AppContainer } from '~components/app-container';
import { ROUTES } from '~constants/routes';
import { categories, posts } from '~site/content';

import c from './page.module.scss';

export default function Page() {
	posts;
	return (
		<AppContainer>
			<List variant="plain" className={c.root}>
				{categories.map(({ slug, name, description }) => {
					const postsInCategoryCount = posts.filter(
						(post) => post.published && post.categories.includes(slug),
					).length;
					if (!postsInCategoryCount) return null;
					return (
						<ListItem key={slug}>
							<Link
								className={c.category}
								component={NextLink}
								href={`${ROUTES.category}/${slug}`}
								underline={false}
							>
								{`${name} (${postsInCategoryCount}) →`}
								<Typography component="caption">{description}</Typography>
							</Link>
						</ListItem>
					);
				})}
			</List>
		</AppContainer>
	);
}
