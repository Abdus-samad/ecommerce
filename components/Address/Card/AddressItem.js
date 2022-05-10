import React, { useContext } from "react";
import { PencilIcon, XIcon } from "@heroicons/react/solid";
import PropTypes from "prop-types";
import AddressContext from "../../../context/Address/addressContext";
import { useProfile } from "../../../context/firebase/database";

const AddressItem = ({ detail, setActive, active, setOpen }) => {
  const { id, text, type, timestamp } = detail;
  const { deleteAddress, setAddress } = useProfile();

  const Delete = (e) => {
    deleteAddress(id, e);
  };

  return (
    <label
      onClick={() => setActive(detail)}
      className={
        active === detail ? "contact label nb active" : "contact label nb"
      }>
      <span className='mb-1 text-sm font-bold text-gray-800'>{type}</span>
      {text && (
        <span className='text-base font-normal text-gray-600'>{text}</span>
      )}
      <span className='btn wrap'>
        <span
          onClick={() => {
            setOpen(true);
            setAddress({ id, timestamp, type, text });
          }}
          className='bg-green-600 contactBtn'>
          <PencilIcon className='h-4' />{" "}
        </span>
        <span className='bg-red-500 contactBtn'>
          <XIcon className='h-4' onClick={Delete} />{" "}
        </span>
      </span>
    </label>
  );
};

AddressItem.propTypes = {
  detail: PropTypes.object.isRequired,
  setOpen: PropTypes.func.isRequired,
  active: PropTypes.any.isRequired,
  setActive: PropTypes.func.isRequired,
};
export default AddressItem;
