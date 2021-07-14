import Head from 'next/head';
import Header from '../components/Reuseables/Header';
import SideBar from '../components/Profile/Sidebar';
import ProfileForm from '../components/Profile/ProfileForm';
import Drawer from '../components/Drawer/Drawer';
import BackDrop from '../components/Drawer/BackDrop';
import {useState} from 'react';
import Contact from '../components/contact/contact';
import Address from '../components/Address/Address';
import Payment from '../components/payment/Payment';

const profile = () => {
	const [drawer, setDrawer] = useState(false);

	const showDrawer = () => setDrawer(!drawer);

	let backdrop;

	if (drawer) {
		backdrop = <BackDrop showDrawer={showDrawer} />;
	}
	return (
		<div>
			<Head>
				<title>Profile</title>
				<meta
					name='description'
					content='Generated by create next app'
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Header showDrawer={showDrawer} />
			<Drawer drawer={drawer} showDrawer={showDrawer} />
			{backdrop}
			<div className='w-full h-auto min-h-screen flex flex-wrap bg-white lg lg:mh lg:xm lg:pb-8'>
				<SideBar />
				<div className='proContainer '>
					<div className='flex flex-col w-full'>
						<ProfileForm />
						<Contact />
						<Address />
						<Payment />
					</div>
				</div>
			</div>
		</div>
	);
};

export default profile;
