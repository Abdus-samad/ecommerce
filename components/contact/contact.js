import { useState, useEffect, useContext } from 'react';
import Modal from './Modal';
import { AnimatePresence } from 'framer-motion';
import ProfileContext from '../../context/Profile/profileContext';
import ContactItem from './ContactItem';

const contact = () => {
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
				<div className='box-border flex-row flex-wrap flex-initial mb-10 -mx-2'>
					<div className='px-2 box-boder flex-4 dp'>
						<h3 className='flex items-center mb-6 text-base font-semibold text-gray-800'>
							Contact Number
						</h3>
						<div className='flex flex-col flex-wrap'>
							<div className='flex flex-wrap justify-between flex-grow'>
								{contacts.map((contact) => (
									<ContactItem
										key={contact.type}
										contact={contact}
										setOpen={setOpen}
										active={active}
										setActive={setActive}
									/>
								))}
								<button
									onClick={() => setOpen(true)}
									className='button add'>
									Add Contact
								</button>
							</div>
						</div>
					</div>

					<AnimatePresence exitBeforeEnter>
						{open && <Modal open={open} setOpen={setOpen} />}
					</AnimatePresence>
				</div>
			)}
		</>
	);
};

export default contact;
