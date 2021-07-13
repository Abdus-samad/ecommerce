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
				sm: 'minmax(0px, 1fr)',
			},
			flex: {
				1: '0 0 100%',
				2: '1 1 100%',
				flow: 'row wrap',
				3: '1 1 calc(33.3333% - 10px)',
				4: '0 0 auto'

			},
			width: {
				calc: 'calc(100% - 330px)',
			},
			maxWidth: {
				4: 'calc(33.3333% - 10px)',
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
