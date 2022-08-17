import React from 'react';
import { Heading, ExperienceCard } from '../../components';
import classes from '../../styles/containers/experience.module.scss'

function Experience() {
  return (
    <div className={classes.experience}>
      <Heading type="medium">👨‍💻 Work experience</Heading>
      <ExperienceCard title="Frontend (React) developer" whereRed='UDS Systems' where=", Ukraine, Kiev - (02/08/2021 - present)" text="As a react developer in UDS Systems company, we develop different Tools for MS Dynamics. Until today I had created 4 tools from  start to end and I gave support to the 2 different tools. Currently, I am working on a new Tool for Dynamics. These tools which I create  are Migration Calculator, Storage Analyzer, and Busines Data Masking Tool. which I support License Calculator. Data Migration Tool.  We deploy These tools successfully to the App Store of MS Dynamics" />
      <ExperienceCard title="Frontend developer" whereRed='Pragmatech' where=", Azerbaijan, Baku - (05/06/2019 - 04/01/2020)smtg" text="Here I have mainly developed e-commerce projects and made support for available apps. And also teach students how to become a front-end developer." />
      <ExperienceCard title="Frontend developer" whereRed='Freelance' where=" , Azerbaijan, Baku - (20/11/2018 - 12/02/2019)" text="When I work freelance in Baku I made different websites for different costumers. For example, I made a website for a big ship company in   Baku Techmarine LTD. And also I have side projects for the Data Development course called DataStat and I made a website for big Wallpaper  holding a TVB group." />
    </div>
  )
}

export default Experience