import React from 'react'
import { Heading, Input, Button } from '../../../components';
import classes from '../../../styles/containers/experience.module.scss'
import { ButtonColorEnum } from '../../../utils/global.types'
import { useTypedSelector } from '../../../hooks/useTypedSelector'
import { useExperience } from '../../../hooks/DashboardHooks/useExperience'

function Experience() {
  const { handleChange, addNewJob, handleSave, saved } = useExperience()
  const ExperienceState = useTypedSelector((state) => state.experience.data)

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