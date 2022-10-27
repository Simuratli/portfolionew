import React, { useState, useEffect } from 'react'
import { Heading, Input, Button } from '../../../components';
import classes from '../../../styles/containers/experience.module.scss'
import { ButtonColorEnum } from '../../../utils/global.types'
import { getDatabase, ref, set, child, get } from "firebase/database";
import { useTypedSelector } from '../../../hooks/useTypedSelector'
import { setAddNewExperience, setChangeExperienceValue } from '../../../redux/reducers/experience'
import { useDispatch } from 'react-redux'

function Experience() {
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

  return (
    <div>
      <Heading type="big">
        <br />
        <div className={classes.experience__heading}>
          <span>👨‍💻 Work experience</span>
          <button onClick={addNewJob} className={classes.experience__add}>+</button>
        </div>
        <br />
      </Heading>

      {
        ExperienceState.map((item) => {
          return <div style={{ marginBottom: 30 }} key={item.id}>
            <Input name="title" onChange={(e) => { handleChange(e, item.id); }} value={item.title} type="text" placeholder={'Title'} label={'Title'} />
            <Input name="company" onChange={(e) => { handleChange(e, item.id); }} value={item.company} type="text" placeholder={'Company'} label={'Company'} />
            <Input name="placeAndTime" onChange={(e) => { handleChange(e, item.id); }} value={item.placeAndTime} type="text" placeholder={'Place and Time'} label={'Place and Time'} />
            <Input name="description" onChange={(e) => { handleChange(e, item.id); }} value={item.description} type="text" placeholder={'Description'} label={'Description'} />
          </div>
        })
      }

      <Button color={saved ? ButtonColorEnum.Success : ButtonColorEnum.Black} onClick={handleSave} text={saved ? "Saved" : 'Save About Me'} />
    </div>
  )
}

export default Experience