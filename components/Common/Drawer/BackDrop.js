const BackDrop = (props) => {
	return (
		<div
			className='h-screen w-full bg-[#0b0b0b] fixed top-0 left-0 z-[1042] overflow-hidden opacity-[0.8]'
			onClick={props.showDrawer}
			onClick={props.showCart}
		/>
	);
};

export default BackDrop;
