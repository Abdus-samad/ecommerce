import Head from 'next/head';
import {useState} from 'react';
import BackDrop from '../components/Drawer/BackDrop';
import Drawer from '../components/Drawer/Drawer';
import Header from '../components/Reuseables/Header';
import {PlusIcon, MinusIcon} from '@heroicons/react/outline';
import Accordion from '../components/Accordion/Accordion';

const Help = () => {
	const [drawer, setDrawer] = useState(false);
	const showDrawer = () => setDrawer(!drawer);
	const [show, setShow] = useState(false);

	const dropDown = () => {
		setShow(!show);
	};
	let backdrop;

	if (drawer) {
		backdrop = <BackDrop showDrawer={showDrawer} />;
	}
	return (
		<div>
			<Head>
				<title>F.A.Q</title>
				<meta
					name='description'
					content='Generated by create next app'
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Header showDrawer={showDrawer} />
			<Drawer drawer={drawer} showDrawer={showDrawer} />
			{backdrop}
			<div className='bg-[#f7f7f7] relative pt-[130px] pb-[60px] min-h-screen flex flex-col justify-between'>
				<div className='lg:w-[870px] lg:ml-auto lg:mr-auto rounded-[6px] overflow-hidden relative lg:p-[0px] p-[30px]'>
					<h3 className='text-[21px] font-bold text-[#0d1136] leading-5 mb-[25px] w-full text-center'>
						F.A.Q
					</h3>
					<div>
						<Accordion />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Help;
/* 
margin-top: 0px;
    margin-bottom: 0px;
    font-family: Lato, sans-serif;
    font-size: 15px;
    font-weight: 700;
    color: rgb(13, 17, 54);
    line-height: 1.5;
}*/
