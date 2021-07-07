module.exports = {
	mode: 'jit',
	purge: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			gridTemplateColumns: {
				gr: '300px minmax(0px, 1fr)',
				sm: 'minmax(0px, 1fr)'
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
