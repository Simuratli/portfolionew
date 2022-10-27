import React, { useEffect, useState } from 'react';
import { useTypedSelector } from '../useTypedSelector';
import { useDispatch } from 'react-redux'
import { setAddNewExperience, setChangeExperienceValue } from '../../redux/reducers/experience'
import { getDatabase, ref, set, child, get } from "firebase/database";

export function useExperience() {
    const [saved, setSaved] = useState(false)
    const dispatch = useDispatch();
    const ExperienceState = useTypedSelector((state) => state.experience.data)

    const db = getDatabase();
    const getWorkPlacesData = async () => {
        const dbRef = ref(getDatabase());
        const snapshot = await get(child(dbRef, `experience/`));
        if (snapshot.exists()) {
            console.log(snapshot.val(), 'experience');
        } else {
            console.log("No data available");
        }
    }

    useEffect(() => {
        getWorkPlacesData()
    }, [db])

    const addNewJob = () => {
        dispatch(setAddNewExperience())
    }


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>, id: number) => {
        dispatch(setChangeExperienceValue({
            id: id,
            name: e.target.name,
            value: e.target.value
        }))
    }


    const handleSave = () => {
        const db = getDatabase();
        set(ref(db, 'experience/'), ExperienceState);
        setSaved(true);

        setTimeout(() => {
            setSaved(false)
        }, 1500);

    }

    return {
        addNewJob,
        handleSave,
        handleChange,
        saved
    }
}
