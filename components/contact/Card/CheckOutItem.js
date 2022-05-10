import { PencilIcon,  XIcon } from "@heroicons/react/solid";
import PropTypes from "prop-types";
import { useProfile } from "../../../context/firebase/database";

const CheckOutItem = ({ contact, setOpen, setActive, active }) => {
  const { id, number, type, timestamp } = contact;

  const { setContact, deleteContact } = useProfile();

  const Delete = (e) => {
    deleteContact(id, e);
  };
  return (
    <label
      onClick={() => setActive(contact)}
      className={
        active === contact ? "dv ContactA active nb" : "dv ContactA nb"
      }>
      <span className='text-[13px] font-medium text-[#0d1136] mb-[5px]'>
        {type}
      </span>
      {number && (
        <span className='text-base font-normal text-[#424561]'>{number}</span>
      )}
      <span className='btn wrap'>
        <span
          onClick={() => {
            setOpen(true);
            setContact({ id, timestamp, type, number });
          }}
          className='bg-green-600 contactBtn'>
          <PencilIcon className='h-4' />{" "}
        </span>
        <span className='bg-red-500 contactBtn' onClick={Delete}>
          <XIcon className='h-4' />{" "}
        </span>
      </span>
    </label>
  );
};

CheckOutItem.propTypes = {
  contact: PropTypes.object.isRequired,
  setOpen: PropTypes.func.isRequired,
  active: PropTypes.string.isRequired,
  setActive: PropTypes.func.isRequired,
};

export default CheckOutItem;
