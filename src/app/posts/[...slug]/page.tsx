import { notFound } from 'next/navigation';

import { Divider } from '~/submodules/ameliance-ui/components/_LAB/divider/divider';
import { Breadcrumbs } from '~/submodules/ameliance-ui/components/_LAB/md/breadcrumbs/breadcrumbs';
import { Grid } from '~/submodules/ameliance-ui/components/grid';
import { Typography } from '~/submodules/ameliance-ui/components/typography';
import { getFormattedDate } from '~ameliance-scripts/get-formatted-date';
import { AppContainer } from '~components/app-container';
import { MDXContent } from '~components/mdx-content/mdx-content';
import { ROUTES } from '~constants/routes';
import { categories, posts } from '~site/content';

import c from './page.module.scss';

type PostPageProps = {
	params: {
		slug: string[];
	};
};

async function getPostFromParams(params: PostPageProps['params']) {
	const slug = params?.slug?.join('/');
	const currentPost = posts.find((post) => post.slugAsParams === slug);
	return currentPost;
}

export async function generateStaticParams(): Promise<PostPageProps['params'][]> {
	const staticParams = posts.map((post) => ({ slug: post.slugAsParams.split('/') }));
	return staticParams;
}

export default async function PostPage({ params }: PostPageProps) {
	const post = await getPostFromParams(params);
	if (!post || !post.published) notFound();
	const formattedDate = getFormattedDate(post.date);

	const postCategorySlug = post.slug.split('/').at(-2) || '';

	const postCategoryTitle = categories.filter((category) => category.slug === postCategorySlug)[0]
		.name;

	return (
		<AppContainer>
			<Breadcrumbs
				crumbs={[
					{ slug: ROUTES.categories, title: 'Categories' },
					{ slug: `${ROUTES.category}/${postCategorySlug}`, title: postCategoryTitle },
				]}
			/>
			<Grid component="article" container className={c.root}>
				<Typography component="h1">{post.title}</Typography>

				{formattedDate && <Typography component="p2">{formattedDate}</Typography>}
				{post.description ? (
					<Typography component="caption">{post.description}</Typography>
				) : null}
				<Divider />

				<MDXContent code={post.content} />
			</Grid>
		</AppContainer>
	);
}
