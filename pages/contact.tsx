import React from "react";
import classes from "../styles/containers/contact.module.scss";
import { Avatar, ContactLink, Heading } from "../components";
import ContactImage from "../public/assets/avatar/contact.png";
import { useTypedSelector } from "../hooks/useTypedSelector";

function Contact() {
  const contactState = useTypedSelector((state) => state.contact.data);
  return (
    <div className={classes.contact}>
      <Avatar image={ContactImage} />
      <Heading type="big">
        <>Contact with me</>
      </Heading>
      <div className={classes.contact__content}>
        {contactState.map((item) => {
          return <ContactLink key={item.text} {...item} />;
        })}
      </div>
    </div>
  );
}

export default Contact;
