import React, { useEffect } from "react";
import {
  setChangeValueOfContact,
  setAddNewContact,
  setContact,
  setRemoveContact,
} from "../../redux/reducers/contact";
import { useDispatch } from "react-redux";
import { getDatabase, ref, child, get } from "firebase/database";

export function useContact() {
  const dispatch = useDispatch();
  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    id: number
  ) => {
    dispatch(
      setChangeValueOfContact({
        id: id,
        name: event.target.name,
        value: event.target.value,
      })
    );
  };

  const getContactData = async () => {
    const dbRef = ref(getDatabase());
    const snapshot = await get(child(dbRef, `contact/`));
    if (snapshot.exists()) {
      dispatch(setContact(snapshot.val()));
    } else {
      console.log("No data available");
    }
  };

  useEffect(() => {
    getContactData();
  }, []);

  const addNewContact = () => {
    dispatch(setAddNewContact());
  };

  const handleRemove = (id: number) => {
    dispatch(setRemoveContact(id));
  };

  return {
    addNewContact,
    getContactData,
    handleChange,
    handleRemove,
  };
}
