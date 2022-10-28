import React from "react";
import { Heading, Button, Input } from "../../components";
import { ButtonColorEnum } from "../../utils/global.types";
import classes from "../../styles/containers/contact.module.scss";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useSave } from "../../hooks/DashboardHooks/useSave";
import { useContact } from "../../hooks/DashboardHooks/useContact";

function Contact() {
  const { addNewContact, handleChange } = useContact();
  const contactState = useTypedSelector((state) => state.contact.data);
  const { handleSaveButton, saved } = useSave();

  return (
    <div className="without_avatar">
      <Heading type="big">Contact</Heading>

      <div className={classes.dashboard__contact__main}>
        <div className={classes.dashboard__contact__main__button}>
          <Button
            color={ButtonColorEnum.Success}
            onClick={addNewContact}
            text="Add New"
          />
        </div>

        <div className={classes.dashboard__contact__main__content}>
          {contactState.map((contact) => {
            return (
              <div
                key={contact.id}
                className={classes.dashboard__contact__main__inputs}
              >
                <Input
                  name="icon"
                  onChange={(e) => {
                    handleChange(e, contact.id);
                  }}
                  type="text"
                  placeholder="Icon"
                  value={contact.icon}
                  label="Icon"
                />
                <Input
                  name="link"
                  onChange={(e) => {
                    handleChange(e, contact.id);
                  }}
                  type="text"
                  placeholder="Link"
                  value={contact.link}
                  label="Link"
                />
                <Input
                  name="text"
                  onChange={(e) => {
                    handleChange(e, contact.id);
                  }}
                  type="text"
                  placeholder="Name"
                  value={contact.text}
                  label="Text"
                />
              </div>
            );
          })}
        </div>
        <br />
        <Button
          text={saved ? "Saved" : "Save contact data"}
          color={saved ? ButtonColorEnum.Success : ButtonColorEnum.Black}
          onClick={() => {
            handleSaveButton("contact/", contactState);
          }}
        />
      </div>
    </div>
  );
}

export default Contact;
