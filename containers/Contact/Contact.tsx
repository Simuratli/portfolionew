import React, { useEffect } from "react";
import { Heading, Text, ContactLink } from "../../components";
import classes from "../../styles/containers/more.module.scss";
import { ContactPropTypes } from "./contact.types";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useContact } from "../../hooks/DashboardHooks/useContact";
import Link from "next/link";

function Contact({ headerTitle }: ContactPropTypes) {
  const { getContactData } = useContact();
  const contactState = useTypedSelector((state) => state.contact.data);

  useEffect(() => {
    getContactData();
  }, []);

  return (
    <div className={classes.more}>
      <Heading type="medium">
        <div className={classes.more__flex}>
          <span>{headerTitle}</span>
          <Link href="/contact">🔗</Link>
        </div>
      </Heading>
      <div className={classes.more__cards}>
        {contactState &&
          contactState.map((contact) => {
            return (
              <ContactLink
                key={contact.text}
                icon={contact.icon}
                link={contact.link}
                text={contact.text}
              />
            );
          })}
      </div>
    </div>
  );
}

export default Contact;
