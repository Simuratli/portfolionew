import React from "react";
import classes from "../styles/containers/books.module.scss";
import { Avatar, Heading, Toggle } from "../components";
import BooksImage from "../public/assets/avatar/books.png";
function Books() {
  return (
    <div className={classes.books}>
      <Avatar image={BooksImage} />
      <Heading type="big">
        <>📚 Books should be read</>
      </Heading>

      <div className={classes.books__content}>
        <Toggle header="Fyodor Dostoevsky">
          <Heading type="medium">
            <>Crime and Punishment</>
          </Heading>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt
            fugit quasi eius repellendus tenetur veniam illo ipsa amet
            aspernatur quae obcaecati, id odio aliquid impedit, expedita quis
            voluptate animi facere.
          </p>
        </Toggle>
      </div>
    </div>
  );
}

export default React.memo(Books);
