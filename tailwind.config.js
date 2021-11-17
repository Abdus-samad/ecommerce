module.exports = {
	mode: 'jit',
	purge: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				primary: {
					DEFAULT: '#f1f1f1',
					primary: '#e6e6e6',
				},
				secondary: {
					main: '#009e7f',
					100: '#019376',
					shade1: '#f1f1f1',
					light: '#f7f7f7',
				},
			},
			gridTemplateColumns: {
				gr: '300px minmax(0px, 1fr)',
				sm: 'minmax(0px, 1fr)',
			},
			flex: {
				1: '0 0 100%',
				2: '1 1 100%',
				flow: 'row wrap',
				3: '1 1 calc(33.3333% - 10px)',
				4: '0 0 auto',
				5: '1 1 calc(50% - 10px)',
				0: '1 1 0%',
			},
			width: {
				calc: 'calc(100% - 330px)',
				cac: 'calc(100% - 30px)',
			},
			maxWidth: {
				4: 'calc(33.3333% - 10px)',
				5: 'calc(50% - 10px);',
			},
			inset: {
				top: 'calc(100% + 15px)',
			},
			fontFamily: {
				pop: ['Poppins'],
				rob: ['Roboto'],
				lato: ['Lato'],
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
