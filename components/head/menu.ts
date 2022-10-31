export interface Menu extends MenuItems {
	subs?: MenuItems[];
}
interface MenuItems {
	label: string;
	link: string;
}

export const menus: Menu[] = [
	{
		label: "Home",
		link: "/",
	},
	{
		label: "Karya",
		link: "#",
		subs: [
			{
				label: "fiksi",
				link: "/fiction",
			},
			{
				label: "nonfiksi",
				link: "/non-fiction",
			},
		],
	},
	{
		label: "E-book",
		link: "/e-book",
	},

	{
		label: "About",
		link: "/about",
	},
	{
		label: "Donasi",
		link: "#",
	},
];
