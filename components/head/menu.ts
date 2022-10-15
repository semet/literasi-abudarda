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
		link: "#",
	},
	{
		label: "Karya",
		link: "#",
		subs: [
			{
				label: "Cerpen",
				link: "#",
			},
			{
				label: "Ilmiah",
				link: "#",
			},
			{
				label: "Lain-lain",
				link: "#",
			},
		],
	},
	{
		label: "Bahasa",
		link: "#",
	},
	{
		label: "Sains",
		link: "#",
	},

	{
		label: "Digital",
		link: "#",
	},
	{
		label: "About",
		link: "#",
	},
];
