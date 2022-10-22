import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import classes from '../styles/containers/login.module.scss';
import { Heading, Input } from '../components';

function SignUp() {
  const { signup } = useAuth();
  const [data, setData] = useState({
    email: '',
    password: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const signupHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signup(data.email, data.password);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='without_avatar'>
      <form className={classes.form} onSubmit={signupHandler}>
        <Heading type='big'>SIGNUP</Heading>
        <Input
          label='Email'
          name='email'
          onChange={handleInputChange}
          type='text'
          placeholder='Email'
          value={data.email}
        />
        <Input
          label='Password'
          name='password'
          onChange={handleInputChange}
          type='password'
          placeholder='Password'
          value={data.password}
        />
        <button onClick={signupHandler}>Sign up</button>
      </form>
    </div>
  );
}

export default SignUp;
