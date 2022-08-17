import styles from '../styles/Home.module.scss';
import { Heading, GrayBox, Avatar } from '../components';
import { Resume, Experience, More } from '../containers';
import classes from '../styles/components/graybox.module.scss';


export default function Home() {
  return (
    <div className={styles.container}>
      <Avatar image={require('../public/assets/avatar/me.png')} />
      <Heading type="big">Simuratli Eljan</Heading>
      <GrayBox >
        <p>
          I am a Front-end developer with 4 years of experience.  Interested in the entire Front-end spectrum and working on ambitious projects with positive people. Able to effectively self-manage during independent projects, as well as collaborate as part of a productive team.
        </p>
        <br />
        <ul className={classes.graybox__list}>
          <li>Building stable and maintainable web applications (SPA) using React,js </li>
          <li>Web page development from design to test and up to production deployment.</li>
          <li>Worked in both Agile and Waterfall settings. (Jira, Trello)</li>
          <li>Tested front-end code in multiple browsers to ensure cross-browser compatibility.</li>
          <li>Testing to identify bugs and technical issues before and after deploying.</li>
          <li>Implementing web design and development principles to build stable software.</li>
          <li>Can write solutions for Microsoft Dynamics</li>
        </ul>
      </GrayBox>
      <Resume />
      <Experience />
      <More />
    </div>
  )
}
