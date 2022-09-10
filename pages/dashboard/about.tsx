import React, { useEffect } from 'react';
import { Input, Heading } from '../../components';
import { useAuth } from '../../context/AuthContext';
import { useRouter } from 'next/router';
function About() {
  const router = useRouter();

  const { user, logout } = useAuth();

  useEffect(() => {
    !user && router.push('/login');
  }, [user, router]);

  return (
    <div className="without_avatar">
      <Heading type="big">
        <>Data&apos;s for Home page</>
      </Heading>
      <br />
      <br />
      <Input
        placeholder="Name"
        label="Name"
        onChange={() => {}}
        type="text"
        value={'Eljan Simuratli'}
      />
    </div>
  );
}

export default About;
