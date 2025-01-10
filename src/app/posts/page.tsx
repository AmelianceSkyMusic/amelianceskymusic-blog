import NextLink from 'next/link';

import { Block } from '~/submodules/ameliance-ui/components/blocks';
import { CalendarIcon } from '~/submodules/ameliance-ui/components/icons/svg/calendar';
import { Link } from '~/submodules/ameliance-ui/components/link';
import { List, ListItem } from '~/submodules/ameliance-ui/components/list';
import { Typography } from '~/submodules/ameliance-ui/components/typography';
import { getFormattedDate } from '~ameliance-scripts/get-formatted-date';
import { AppContainer } from '~components/app-container';
import { ROUTES } from '~constants/routes';
import { posts } from '~site/content';

import c from './page.module.scss';

export default function PostsPage() {
	return (
		<AppContainer>
			<List variant="plain" className={c.root}>
				{posts.map(({ slug, title, date, description, categories, published }) => {
					if (!published) return null;
					const formattedDate = getFormattedDate(date);
					return (
						<ListItem key={slug}>
							<Link
								className={c.post}
								component={NextLink}
								href={`${slug}`}
								underline={false}
							>
								<Typography component="h2" display="h4">
									{`${title}`}
								</Typography>
								{description && <Typography component="p2">{description}</Typography>}
								<Block className={c.info}>
									{formattedDate && (
										<Block className={c.date}>
											<CalendarIcon size="sm" />
											<Typography component="subtitle1">{formattedDate}</Typography>
										</Block>
									)}
									{categories && (
										<Link
											display="subtitle1"
											component={NextLink}
											href={`${ROUTES.category}/${categories}`}
											underline={false}
										>
											{`#${categories} →`}
										</Link>
									)}
								</Block>
							</Link>
						</ListItem>
					);
				})}
			</List>
		</AppContainer>
	);
}
