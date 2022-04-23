export const fadeInUp = {
	initial: {
		opacity: 0,
		y: 60,
	},
	animate: {
		opacity: 1,
		y: 0,
	},
};

export const stagger = {
	initial: {},
	animate: {
		transition: {
			staggerChildren: 0.1,
		},
	},
};

export const routeAnimation = {
	initial: {
		opacity: 0,
	},
	animate: {
		opacity: 1,
		transition: {
			delay: 0.1,
			duration: 0.1,
		},
	},
	exit: {
		opacity: 0,
		transition: {
			delay: 0.1,
			ease: 'easeInOut',
		},
	},
};

export const dropIn = {
	hidden: {
		y: '-100vh',
		opacity: 0,
	},
	visible: {
		y: '0',
		opacity: 1,
		transition: {
			duration: 0.1,
			type: 'spring',
			damping: 25,
			stiffness: 500,
		},
	},
	exit: {
		y: '100vh',
		opacity: 0,
	},
};

export const badSuspension = {
	hidden: {
		y: '-100vh',
		opacity: 0,
		transform: 'scale(1) rotateX(-360deg)',
	},
	visible: {
		y: '0',
		opacity: 1,
		transition: {
			duration: 0.2,
			type: 'spring',
			damping: 15,
			stiffness: 500,
		},
	},
	exit: {
		y: '-100vh',
		opacity: 0,
	},
};
