import PropTypes from "prop-types";
import { PencilIcon, XIcon } from "@heroicons/react/solid";
import { useProfile } from "../../../context/firebase/database";

const CheckOutItem = ({ add, setActive, active, setOpen }) => {
  const { id, text, type, timestamp } = add;
  const { deleteAddress, setAddress } = useProfile();
  const Delete = (e) => {
    deleteAddress(id, e);
  };

  return (
    <label
      onClick={() => setActive(add)}
      className={
        active === add ? "dv CheckoutAdress active nb" : "dv CheckoutAdress nb"
      }>
      <span className='text-[13px] font-medium text-[#0d1136] mb-[5px]'>
        {type}
      </span>
      {text && (
        <span className='text-base font-normal text-[#424561] break-all'>
          {text}
        </span>
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

CheckOutItem.propTypes = {
  add: PropTypes.object.isRequired,
  setOpen: PropTypes.func.isRequired,
  active: PropTypes.any.isRequired,
  setActive: PropTypes.func.isRequired,
};
export default CheckOutItem;
