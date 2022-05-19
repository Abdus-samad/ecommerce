import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { XIcon } from "@heroicons/react/solid";
import { useEffect, useRef } from "react";
import { badSuspension } from "../../animation";
import { useProfile } from "../../context/firebase/database";

const Modal = ({ open, setOpen }) => {
  const { addandupdateAddress, setAddress, address } = useProfile();

  const onChange = (e) =>
    setAddress({ ...address, [e.target.name]: e.target.value });

  const { type, text } = address;

  const addressRef = useRef();
  useEffect(() => {
    const checkIfClickedAddress = (e) => {
      if (!addressRef.current.contains(e.target)) {
        console.log("Outside input area");
        setAddress({ number: "", type: "" });
      } else {
        console.log("Inside input area");
      }
      document.addEventListener("mousedown", checkIfClickedAddress);
      return () => {
        document.removeEventListener("mousedown", checkIfClickedAddress);
      };
    };
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    addandupdateAddress();
    setOpen(false);
  };

  if (!open) return null;

  return (
    <div style={{ overflow: "hidden" }}>
      <div className='h-full w-full bg-[#0b0b0b] fixed top-0 left-0 z-[1042] overflow-hidden opacity-[0.8]' />
      <button onClick={() => setOpen(false)} className='Close'>
        <XIcon className='w-8 h-8' />
      </button>
      <div className='top-0 left-0 w-full h-full z-[1042] overflow-hidden fixed'>
        <div className='top-0 left-0 w-full h-full z-[1042] overflow-hidden fixed'>
          <div className='max-w-full mx-auto z-[1045] align-middle relative'>
            <motion.div
              variants={badSuspension}
              initial='hidden'
              animate='visible'
              exit='exit'
              className='absolute w-full md:w-[400px] md:left-[25%] lg:w-[400px] h-auto bg-primary-100
							 mt-[150px] p-[30px] lg:left-[35%] transition-all duration-500 ease-in-out'>
              <form onSubmit={onSubmit} ref={addressRef}>
                <h2 className='mb-4 text-xl font-bold text-gray-800'>
                  {address.hasOwnProperty("timestamp")
                    ? "Update Address"
                    : "Add Address"}
                </h2>

                <div className='flex flex-col justify-center'>
                  <div className='flex items-center'>
                    <div className='flex items-center mb-4 mr-4'>
                      <input
                        id='radio1'
                        type='radio'
                        name='type'
                        value='Home'
                        checked={type === "Home"}
                        onChange={onChange}
                        className='hidden'
                      />
                      <label
                        for='radio1'
                        className='flex items-center cursor-pointer'>
                        <span className='inline-block w-4 h-4 mr-1 border rounded-full border-grey'></span>
                        Home
                      </label>
                    </div>
                    <div className='flex items-center mb-4 mr-4'>
                      <input
                        id='radio2'
                        type='radio'
                        name='type'
                        value='Office'
                        checked={type === "Office"}
                        onChange={onChange}
                        className='hidden'
                      />
                      <label
                        for='radio2'
                        className='flex items-center cursor-pointer'>
                        <span className='inline-block w-4 h-4 mr-1 border rounded-full border-grey'></span>
                        Office
                      </label>
                    </div>
                  </div>

                  <textarea
                    placeholder='Enter Address'
                    value={address.text}
                    onChange={(e) =>
                      setAddress({
                        ...address,
                        text: e.target.value,
                      })
                    }
                    className='w-full rounded-[6px] border border-primary-primary 
										text-gray-900 font-normal text-base px-[18px] focus:outline-none h-auto
										 min-h-[171px] pt-[15px] resize-none'></textarea>
                </div>
                <input
                  type='submit'
                  style={{ width: "100%", height: "44px" }}
                  className='ModalBtn'
                  value={
                    address.hasOwnProperty("timestamp")
                      ? "Update Address"
                      : "Add Address"
                  }
                />
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  setOpen: PropTypes.func.isRequired,
};

export default Modal;

/* 


*/
