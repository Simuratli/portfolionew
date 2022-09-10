import React, { useEffect } from 'react';
import { Heading } from '../../components';
import { AboutMe } from '../../containers';
import { useAuth } from '../../context/AuthContext';
import { useRouter } from 'next/router';

function About() {
  const router = useRouter();

  const { user } = useAuth();

  useEffect(() => {
    !user && router.push('/login');
  }, [user, router]);

  return (
    <div className="without_avatar">
      <AboutMe />

      <Heading type="big">
        <br />
        <>👨‍💻 Work experience</>
        <br />
      </Heading>
    </div>
  );
}

export default About;
