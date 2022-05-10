import { PlusIcon } from "@heroicons/react/solid";
import { useState, useEffect, useContext } from "react";

import AddressContext from "../../context/Address/addressContext";
import { useProfile } from "../../context/firebase/database";
import CheckOutItem from "./Card/CheckOutItem";

import Modal from "./Modal";

const Address = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(false);

  const { fetchAddress, details } = useProfile();

  useEffect(() => {
    fetchAddress();
  }, []);

  return (
    <>
      <div className='addressContainer'>
        <h3 className='text-xl font-normal text-[#0d1136] mb-[35px] flex items-center iD'>
          Delivery Address
        </h3>
        <div className='flex flex-col'>
          <div className='flex flex-wrap justify-start flex-grow'>
            {details.map((add) => (
              <CheckOutItem
                key={add.id}
                add={add}
                setOpen={setOpen}
                active={active}
                setActive={setActive}
              />
            ))}
            <button onClick={() => setOpen(true)} className='checkoutBtn'>
              <div className='box-border mt-0 mb-0 ml-0 mr-2'>
                <PlusIcon className='h-[20px]' />
              </div>
              Add Address
            </button>
          </div>
        </div>
        <Modal open={open} setOpen={setOpen} />
      </div>
    </>
  );
};

export default Address;
