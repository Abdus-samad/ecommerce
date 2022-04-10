import { useState } from 'react';
import Head from 'next/head';
import Header from '../components/Home/Header';
import Home from '../components/Home/Body';
import BackDrop from '../components/Common/Drawer/BackDrop';
import Drawer from '../components/Common/Drawer/Drawer';

export default function Index() {
	const [drawer, setDrawer] = useState(false);

	const showDrawer = () => setDrawer(!drawer);

	let backdrop;

	if (drawer) {
		backdrop = <BackDrop showDrawer={showDrawer} />;
	}
	return (
		<div>
			<Head>
				<title>My Store</title>
				<meta
					name='description'
					content='Generated by create next app'
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Header showDrawer={showDrawer} />
			<Drawer drawer={drawer} showDrawer={showDrawer} />
			{backdrop}

			<div className='bg-gray-100'>
				<Home />
			</div>
		</div>
	);
}
