import { FiUser } from 'react-icons/fi';
import { BsBag } from 'react-icons/bs';
import { VscSearch } from 'react-icons/vsc';

export const navLinks = [
	{
		name: 'Home',
		path: '/',
	},
	{
		name: 'About',
		path: '/about',
	},
	{
		name: 'Pages',
		path: '/pages',
	},
	{
		name: 'Shope',
		path: '/shope',
	},
	{
		name: 'Articles',
		path: '/articles',
	},
	{
		name: 'Contact',
		path: '/contact',
	},
];

// navRight links Data..............................
export const navRight = {
	managements: [
		{
			id: 1,
			icon: FiUser,
			link: '*',
		},
		{
			id: 2,
			icon: BsBag,
			link: '*',
		},
		{
			id: 3,
			icon: VscSearch,
			link: '*',
		},
	],
};
