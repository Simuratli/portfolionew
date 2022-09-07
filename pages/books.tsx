import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import React from 'react';
import classes from '../styles/containers/books.module.scss';
import { AvatarPropTypes } from '../components/Avatar/Avatar.types'
import { HeadingPropTypes } from '../components/Heading/Heading.types'
import { TogglePropTypes } from '../components/Toggle/toggle.types'

const DynamicAvatar = dynamic<AvatarPropTypes>(() =>
  import('../components').then((mod) => mod.Avatar)
);
const DynamicHeading = dynamic<HeadingPropTypes>(() =>
  import('../components').then((mod) => mod.Heading)
);
const DynamicToggle = dynamic<TogglePropTypes>(() =>
  import('../components').then((mod) => mod.Toggle)
);

function Books() {
  return (
    <div className={classes.books}>
      <Suspense fallback={`Loading...`}>
        <DynamicAvatar image={require('../public/assets/avatar/books.png')} />
      </Suspense>
      <Suspense fallback={`Loading...`}>
        <DynamicHeading type="big">
          <>📚 Books should be read</>
        </DynamicHeading>
      </Suspense>

      <div className={classes.books__content}>
        <Suspense fallback={`Loading...`}>
          <DynamicToggle header="Fyodor Dostoevsky">
            <DynamicHeading type="medium">
              <>Crime and Punishment</>
            </DynamicHeading>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt
              fugit quasi eius repellendus tenetur veniam illo ipsa amet
              aspernatur quae obcaecati, id odio aliquid impedit, expedita quis
              voluptate animi facere.
            </p>
          </DynamicToggle>
        </Suspense>
      </div>
    </div>
  );
}

export default React.memo(Books);
