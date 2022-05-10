import PropTypes from "prop-types";
import { useEffect, useRef } from "react";
import { XIcon } from "@heroicons/react/solid";
import { motion } from "framer-motion";
import { badSuspension } from "../../animation";
import { useProfile } from "../../context/firebase/database";

const Modal = ({ open, setOpen }) => {
  const { contact, setContact, addandupdateContact } = useProfile();
  const inputRef = useRef();

  useEffect(() => {
    const checkIfClicked = (e) => {
      if (!inputRef.current.contains(e.target)) {
        console.log("Outside input area");
        setContact({ number: "", type: "Primary" });
      } else {
        console.log("Inside input area");
      }
      document.addEventListener("mousedown", checkIfClicked);
      return () => {
        document.removeEventListener("mousedown", checkIfClicked);
      };
    };
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    addandupdateContact();
    setOpen(false);
  };
  if (!open) return null;

  return (
    <>
      <main style={{ oveflow: "hidden" }}>
        <div className='h-screen w-full bg-[#0b0b0b] fixed top-0 left-0 z-[1042] overflow-hidden opacity-[0.8]' />
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
                className='absolute lg:w-[400px] h-auto bg-primary-100 mt-[290px] p-[30px] lg:left-[37%] w-full md:w-[400px] md:left-[25%]'>
                <form onSubmit={onSubmit} ref={inputRef}>
                  <h2 className='mb-4 text-xl font-bold text-gray-800'>
                    {contact.hasOwnProperty("timestamp")
                      ? "Update Contact"
                      : "Add Contact"}
                  </h2>
                  <div className='flex flex-col w-full mb-4'>
                    <label>Type</label>
                    <p className='text-xs bg-gray-100'>Primary or Secondary</p>
                    <input
                      type='text'
                      value={contact.type}
                      onChange={(e) =>
                        setContact({
                          ...contact,
                          type: e.target.value,
                        })
                      }
                      className='w-full mb-3 h-[54px] rounded-[6px] border border-primary-primary text-gray-900 font-normal text-base px-[18px] focus:outline-none'
                    />
                    <label>Phone</label>
                    <input
                      type='text'
                      value={contact.number}
                      onChange={(e) =>
                        setContact({
                          ...contact,
                          number: e.target.value,
                        })
                      }
                      className='w-full mb-3 h-[54px] rounded-[6px] border border-primary-primary text-gray-900 font-normal text-base px-[18px] focus:outline-none'
                    />
                  </div>
                  <input
                    type='submit'
                    style={{ width: "100%", height: "44px" }}
                    className='ModalBtn'
                    value={
                      contact.hasOwnProperty("timestamp")
                        ? "Update Contact"
                        : "Add Contact"
                    }
                  />
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

Modal.propTypes = {
  setOpen: PropTypes.func.isRequired,
};

export default Modal;
