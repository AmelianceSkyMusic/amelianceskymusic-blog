import NextLink from 'next/link';

import type { Column } from '~/submodules/ameliance-ui/components/_LAB/table/table';
import { Table } from '~/submodules/ameliance-ui/components/_LAB/table/table';
import { Block } from '~/submodules/ameliance-ui/components/blocks';
import { CalendarIcon } from '~/submodules/ameliance-ui/components/icons/svg/calendar';
import { Link } from '~/submodules/ameliance-ui/components/link';
import { Typography } from '~/submodules/ameliance-ui/components/typography';
import { getFormattedDate } from '~ameliance-scripts/get-formatted-date';

import c from './post-item.module.scss';

type PostItemProps = {
	slug: string;
	title: string;
	description?: string;
	date: string;
};

export function PostItem({ slug, title, description, date }: PostItemProps) {
	const tableData = [
		{
			slug,
			title,
			date: getFormattedDate(date),
			description,
		},
	];

	const columnsData: Column<(typeof tableData)[number]>[] = [
		{
			key: 'icon',
			width: '32px',
			cell: () => (
				<Typography>
					<CalendarIcon size="sm" />
				</Typography>
			),
		},
		{
			key: 'date',
			width: 9,
			cell: (row) => <Typography display="p2">{row?.rowCell?.value}</Typography>,
		},
	];

	return (
		<Block component="article" className={c.postItem}>
			<Typography component="h2" display="h4">
				<Link component={NextLink} display="h4" href={slug} underline={false}>
					{title}
				</Link>
			</Typography>

			<Typography display="p2">{description}</Typography>
			<Table columns={columnsData} data={tableData} header={false} />
			<Link component={NextLink} display="p2" href={slug} underline={false}>
				Read more →
			</Link>
		</Block>
	);
}
