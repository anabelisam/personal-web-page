export const SITE = {
	name: 'anabelisa.co',

	origin: 'https://anabelisa.co',
	basePathname: '/',

	title: 'Ana Belisa Martínez — Blog',
	description: 'Recursos y blog para aprender management y pensamiento lógico',

	googleAnalyticsId: false, // or "G-XXXXXXXXXX",
	googleSiteVerificationId: 'orcPxI47GSa-cRvY11tUe6iGg2IO_RPvnA1q95iEM3M',
};

export const BLOG = {
	disabled: false,
	postsPerPage: 6,

	post: {
		disabled: true,
		pathname: '', // empty for /some-post, value for /pathname/some-post 
	},

	category: {
		disabled: true,
		pathname: 'category', // set empty to change from /category/some-category to /some-category
	},

	tag: {
		disabled: false,
		pathname: 'tag', // set empty to change from /tag/some-tag to /some-tag
	},
};
