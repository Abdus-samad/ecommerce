import {  PlusIcon } from '@heroicons/react/solid';
import { useState, useEffect, useContext } from 'react';
import Modal from '../contact/Modal';
import CheckOutItem from './Card/CheckOutItem';
import ProfileContext from '../../context/Profile/profileContext';

const Address = () => {
	const [open, setOpen] = useState(false);
	const [active, setActive] = useState(false);

	const profileContext = useContext(ProfileContext);
	const { contacts, getContacts } = profileContext;

	useEffect(() => {
		getContacts();
		setActive(contacts);
	}, []);

	return (
		<>
			{contacts !== null && (
				<div className='addressContainer'>
					<h3 className='text-xl font-normal text-[#0d1136] mb-[30px] flex items-center iD'>
						Contact Number
					</h3>
					<div className='flex flex-col'>
						<div className='flex flex-wrap justify-start flex-grow'>
							{contacts.map((contact) => (
								<CheckOutItem
									key={contact.id}
									contact={contact}
									setOpen={setOpen}
									active={active}
									setActive={setActive}
								/>
							))}
							<button
								onClick={() => setOpen(true)}
								className='ContactBtn'>
								<div className='box-border mt-0 mb-0 ml-0 mr-2'>
									<PlusIcon className='h-[20px]' />
								</div>
								Add Contact
							</button>
						</div>
					</div>
					<Modal open={open} setOpen={setOpen} />
				</div>
			)}
		</>
	);
};

export default Address;
