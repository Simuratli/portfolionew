import React, { useEffect } from 'react';
import { AboutMe, Experience } from '../../containers/Dashboard';
import { useAuth } from '../../context/AuthContext';
import { useRouter } from 'next/router';

function About() {
  const router = useRouter();
  const { user } = useAuth();

  useEffect(() => {
    !user && router.push('/login');
  }, [user, router]);

  return (
    <div className='without_avatar'>
      <AboutMe />
      <Experience />
    </div>
  );
}

export default About;
