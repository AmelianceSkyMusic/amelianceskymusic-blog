'use client';
import * as runtime from 'react/jsx-runtime';

import { Divider } from '~/submodules/ameliance-ui/components/_LAB/divider/divider';
import { Callout } from '~/submodules/ameliance-ui/components/_LAB/md/callout';
import { Code } from '~/submodules/ameliance-ui/components/_LAB/md/code';
import { Link } from '~/submodules/ameliance-ui/components/_LAB/md/link';
import { Table } from '~/submodules/ameliance-ui/components/_LAB/md/table';
import { Typography } from '~/submodules/ameliance-ui/components/_LAB/md/typography';
import { ZoomImage } from '~/submodules/ameliance-ui/components/_LAB/md/zoom-image';
import { List } from '~/submodules/ameliance-ui/components/list';
import { ListItem } from '~/submodules/ameliance-ui/components/list';

const useMDXComponent = (code: string) => {
	const fn = new Function(code);
	return fn({ ...runtime }).default;
};

const components = {
	Callout,
	h1: ({ ...props }) => <Typography component="h1" {...props} />,
	h2: ({ ...props }) => <Typography component="h3" {...props} />,
	h3: ({ ...props }) => <Typography component="h4" {...props} />,
	h4: ({ ...props }) => <Typography component="h5" {...props} />,
	h5: ({ ...props }) => <Typography component="h6" {...props} />,
	h6: ({ ...props }) => <Typography component="h6" {...props} />,
	p: ({ ...props }) => <Typography component="p1" {...props} />,
	a: ({ ...props }) => <Link {...props} />,
	pre: ({ ...props }) => <Code {...props} />,
	table: ({ ...props }) => <Table {...props} />,
	ol: ({ ...props }) => <List variant="ordered" {...props} />,
	ul: ({ ...props }) => <List variant="unordered" {...props} />,
	dl: ({ ...props }) => <List variant="description" {...props} />,
	li: ({ ...props }) => <ListItem {...props} />,
	img: ({ ...props }) => <ZoomImage alt={props.alt} src={props.src} {...props} />,
	hr: ({ ...props }) => <Divider {...props} />,
};

type MdxProps = {
	code: string;
};

export function MDXContent({ code }: MdxProps) {
	const Component = useMDXComponent(code);
	return <Component components={{ ...components }} />;
}
