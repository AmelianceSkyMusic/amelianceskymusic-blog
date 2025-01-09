import { defineCollection, defineConfig, s } from 'velite';

const computedFields = <T extends { slug: string }>(data: T) => ({
	...data,
	slugAsParams: data.slug.split('/').slice(1).join('/'),
});

const categories = defineCollection({
	name: 'Category',
	pattern: 'categories/*.yml',
	schema: s.object({
		slug: s.slug('posts', ['admin', 'login']),
		name: s.string(),
		description: s.string(),
	}),
});

const posts = defineCollection({
	name: 'Post',
	pattern: 'posts/**/*.md',
	schema: s
		.object({
			slug: s.path(),
			title: s.string().max(99),
			categories: s.array(s.string()),
			description: s.string().max(999).optional(),
			date: s.isodate(),
			published: s.boolean().default(true),
			toc: s.toc(),
			content: s.mdx(),
		})
		.transform(computedFields),
});

export default defineConfig({
	root: 'content',
	output: {
		data: '.velite',
		assets: 'public/static',
		base: '/static/',
		name: '[name]-[hash:6].ext',
		clean: true,
	},
	collections: { categories, posts },
	// mdx: {
	// 	rehypePlugins: [],
	// 	remarkPlugins: [],
	// },
});
