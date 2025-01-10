import NextLink from 'next/link';
import { notFound } from 'next/navigation';

import { Breadcrumbs } from '~/submodules/ameliance-ui/components/_LAB/md/breadcrumbs/breadcrumbs';
import { Link } from '~/submodules/ameliance-ui/components/link';
import { List, ListItem } from '~/submodules/ameliance-ui/components/list';
import { Typography } from '~/submodules/ameliance-ui/components/typography';
import { getFormattedDate } from '~ameliance-scripts/get-formatted-date';
import { AppContainer } from '~components/app-container';
import { ROUTES } from '~constants/routes';
import { categories, posts } from '~site/content';

import c from './page.module.scss';

function getPostsByCategorySlug(categorySlug: string) {
	return posts.filter((post) => post.categories.includes(categorySlug));
}

type CategoryPage = {
	params: {
		slug: string;
	};
};

//* Page with list of articles in target category
export default function CategoryPage({ params }: CategoryPage) {
	const { slug } = params;

	const targetCategory = categories.find((category) => category.slug === slug)?.slug;

	if (!targetCategory) notFound();

	const filteredPosts = getPostsByCategorySlug(targetCategory);

	return (
		<AppContainer>
			<Breadcrumbs crumbs={[{ slug: ROUTES.categories, title: 'Categories' }]} />
			<List variant="plain" className={c.root}>
				{filteredPosts.map(({ title, date, description, slugAsParams, published }) => {
					if (!published) return null;
					const formattedDate = getFormattedDate(date);
					return (
						<ListItem key={slugAsParams}>
							<Link
								className={c.post}
								component={NextLink}
								href={`${ROUTES.posts}/${slugAsParams}`}
								underline={false}
							>
								{`${title} →`}
								{formattedDate && (
									<Typography component="subtitle2">{formattedDate}</Typography>
								)}
								{description && <Typography component="caption">{description}</Typography>}
							</Link>
						</ListItem>
					);
				})}
			</List>
		</AppContainer>
	);
}
