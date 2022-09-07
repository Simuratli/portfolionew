import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import React from 'react';
import classes from '../styles/containers/contact.module.scss';

const DynamicAvatar = dynamic(() =>
  import('../components').then((mod) => mod.Avatar)
);
const DynamicHeading = dynamic(() =>
  import('../components').then((mod) => mod.Heading)
);
const DynamicContactLink = dynamic(() =>
  import('../components').then((mod) => mod.ContactLink)
);

const contactData = [
  {
    icon: '📧',
    link: 'mailto: simuratli@gmail.com',
    text: 'simuratli.com',
  },
  {
    icon: '🖥️',
    link: 'https://github.com/simuratli',
    text: 'Github.com',
  },
  {
    icon: '🐦',
    link: 'https://twitter.com/Simuratli1',
    text: 'Twitter.com',
  },
  {
    icon: '📱',
    link: 'tel:+99450826906',
    text: '+994508269067',
  },
  {
    icon: '🔗',
    link: 'https://www.linkedin.com/in/simuratli',
    text: 'Linkedin.com',
  },
  {
    icon: '✉️',
    link: 'https://www.linkedin.com/in/simuratli',
    text: 'Telegram',
  },
  {
    icon: '📘',
    link: 'https://medium.com/@simuratli',
    text: 'Medium.com',
  },
];

function Contact() {
  return (
    <div className={classes.contact}>
      <Suspense fallback={`Loading...`}>
        <DynamicAvatar image={require('../public/assets/avatar/contact.png')} />
      </Suspense>
      <Suspense fallback={`Loading...`}>
        <DynamicHeading type="big">
          <>Contact with me</>
        </DynamicHeading>
      </Suspense>
      <div className={classes.contact__content}>
        {contactData.map((item) => {
          return (
            <Suspense key={item.text} fallback={`Loading...`}>
              <DynamicContactLink {...item} />
            </Suspense>
          );
        })}
      </div>
    </div>
  );
}

export default Contact;
