import React from "react";
import classes from "../styles/containers/contact.module.scss";
import { Avatar, ContactLink, Heading } from "../components";
import ContactImage from "../public/assets/avatar/contact.png";
const contactData = [
  {
    icon: "📧",
    link: "mailto: simuratli@gmail.com",
    text: "simuratli.com",
  },
  {
    icon: "🖥️",
    link: "https://github.com/simuratli",
    text: "Github.com",
  },
  {
    icon: "🐦",
    link: "https://twitter.com/Simuratli1",
    text: "Twitter.com",
  },
  {
    icon: "📱",
    link: "tel:+99450826906",
    text: "+994508269067",
  },
  {
    icon: "🔗",
    link: "https://www.linkedin.com/in/simuratli",
    text: "Linkedin.com",
  },
  {
    icon: "✉️",
    link: "https://www.linkedin.com/in/simuratli",
    text: "Telegram",
  },
  {
    icon: "📘",
    link: "https://medium.com/@simuratli",
    text: "Medium.com",
  },
];

function Contact() {
  return (
    <div className={classes.contact}>
      <Avatar image={ContactImage} />
      <Heading type="big">
        <>Contact with me</>
      </Heading>
      <div className={classes.contact__content}>
        {contactData.map((item) => {
          return <ContactLink key={item.text} {...item} />;
        })}
      </div>
    </div>
  );
}

export default Contact;
