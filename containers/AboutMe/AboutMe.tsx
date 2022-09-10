import React from 'react'
import { Heading, Input, TextEditor } from '../../components';

function AboutMe() {
  return (
    <div>
      <Heading type="big">
        <>Data&apos;s for Home page</>
      </Heading>
      <br />
      <br />
      <Input
        placeholder="Name"
        label="Name"
        onChange={() => { }}
        type="text"
        value={'Eljan Simuratli'}
      />
      <Input
        placeholder="Age"
        label="Age"
        onChange={() => { }}
        type="text"
        value={'24'}
      />
      <Input
        placeholder="Experience"
        label="Experience"
        onChange={() => { }}
        type="text"
        value={'4 year'}
      />
      <Input
        placeholder="Work place"
        label="Work place"
        onChange={() => { }}
        type="text"
        value={'UDS Systems'}
      />
      <Input
        placeholder="Title"
        label="Title"
        onChange={() => { }}
        type="text"
        value={'Frontend developer'}
      />
      <Input
        placeholder="Currently Learning"
        label="Currently Learning"
        onChange={() => { }}
        type="text"
        value={'CI/CD'}
      />
      <TextEditor />
    </div>
  )
}

export default AboutMe