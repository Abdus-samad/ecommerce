import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { useState, useContext, createContext } from "react";
import { db } from "./DB";

const profileContext = createContext();

export const ProfileState = ({ children }) => {
  // State
  const [contacts, setContacts] = useState([]);
  const [details, setDetails] = useState([]);
  const [contact, setContact] = useState({
    number: "",
    type: "Primary",
  });
  const [address, setAddress] = useState({
    text: "",
    type: "",
  });

  // Contacts
  const addandupdateContact = async () => {
    if (contact?.hasOwnProperty("timestamp")) {
      const updata = doc(db, "contacts", contact.id);
      const contactUpdate = { ...contact, timestamp: serverTimestamp() };
      updateDoc(updata, contactUpdate);
      setContact({ number: "", type: "Primary" });
    } else {
      const data = collection(db, "contacts");
      const res = await addDoc(data, {
        ...contact,
        timestamp: serverTimestamp(),
      });
      console.log(res.id);
      setContact({ number: "", type: "Primary" });
    }
  };

  const fetchContacts = () => {
    const res = collection(db, "contacts");
    const req = query(res, orderBy("timestamp", "desc"));
    const data = onSnapshot(req, (querySnapshot) => {
      setContacts(
        querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
          timestamp: doc.data().timestamp?.toDate().getTime(),
        }))
      );
    });
    return data;
  };

  const deleteContact = async (id, e) => {
    e.stopPropagation();
    const data = doc(db, "contacts", id);
    await deleteDoc(data);
  };

  // Address

  const fetchAddress = () => {
    const res = collection(db, "address");
    const req = query(res, orderBy("timestamp", "desc"));
    const data = onSnapshot(req, (querySnapshot) => {
      setDetails(
        querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
          timestamp: doc.data().timestamp?.toDate().getTime(),
        }))
      );
    });
    return data;
  };

  const addandupdateAddress = async () => {
    if (address?.hasOwnProperty("timestamp")) {
      const updata = doc(db, "address", address.id);
      const addressUpdate = { ...address, timestamp: serverTimestamp() };
      updateDoc(updata, addressUpdate);
      setContact({ text: "", type: "Home" });
    } else {
      const data = collection(db, "address");
      const res = await addDoc(data, {
        ...address,
        timestamp: serverTimestamp(),
      });
      console.log(res.id);
      setContact({ text: "", type: "Home" });
    }
  };

  const deleteAddress = async (id, e) => {
    e.stopPropagation();
    const data = doc(db, "address", id);
    await deleteDoc(data);
  };

  return (
    <profileContext.Provider
      value={{
        contacts,
        fetchContacts,
        contact,
        setContact,
        addandupdateContact,
        deleteContact,
        addandupdateAddress,
        details,
        address,
        setAddress,
        fetchAddress,
        deleteAddress,
      }}>
      {children}
    </profileContext.Provider>
  );
};

export const useProfile = () => useContext(profileContext);
