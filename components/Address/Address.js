import { useState, useEffect, useContext } from "react";
import { useProfile } from "../../context/firebase/database";
import Modal from "../Address/Modal";
import AddressItem from "./Card/AddressItem";

const Address = () => {
  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false);
  const { fetchAddress, details } = useProfile();

  useEffect(() => {
    fetchAddress();
  }, []);
  return (
    <>
      <div className='box-border flex-row flex-wrap flex-initial mb-10 -mx-2'>
        <div className='box-border relative px-2 flex-4 dp'>
          <h3 className='flex items-center mb-6 text-base font-semibold text-gray-800'>
            Delivery Address
          </h3>
          <div className='flex flex-col'>
            <div className='flex flex-wrap justify-between flex-grow'>
              {details.map((detail, index) => (
                <AddressItem
                  key={index}
                  detail={detail}
                  setOpen={setOpen}
                  active={active}
                  setActive={setActive}
                />
              ))}
              <button onClick={() => setOpen(true)} className='button add'>
                Add Address
              </button>
            </div>
          </div>
        </div>
        {open && <Modal open={open} setOpen={setOpen} />}
      </div>
    </>
  );
};

export default Address;
