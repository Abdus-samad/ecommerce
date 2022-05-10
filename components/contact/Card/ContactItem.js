import PropTypes from "prop-types";
import { PencilIcon, XIcon } from "@heroicons/react/solid";
import { useProfile } from "../../../context/firebase/database";

const ContactItem = ({ contact, setOpen, setActive, active }) => {
  const { id, number, type, timestamp } = contact;

  const { setContact, deleteContact } = useProfile();

  const Delete = (e) => {
    deleteContact(id, e);
  };

  return (
    <label
      onClick={() => setActive(contact)}
      className={
        active === contact ? "contact label nb active" : "contact label nb"
      }
    >
      <span className="mb-1 text-sm font-bold text-gray-800">{type}</span>

      {number && (
        <span className="text-base font-normal text-gray-600">{number}</span>
      )}
      <span className="btn wrap">
        <span
          onClick={() => {
            setOpen(true);
            setContact({ id, number, type, timestamp });
          }}
          className="bg-green-600 contactBtn"
        >
          <PencilIcon className="h-4" />{" "}
        </span>
        <span className="bg-red-500 contactBtn" onClick={Delete}>
          <XIcon className="h-4" />{" "}
        </span>
      </span>
    </label>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.object.isRequired,
  setOpen: PropTypes.func.isRequired,
  active: PropTypes.any.isRequired,
  setActive: PropTypes.func.isRequired,
};

export default ContactItem;
