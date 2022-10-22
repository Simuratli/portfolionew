import React from 'react';
import useLogin from '../hooks/useLogin';
import { Heading, Input } from '../components';
import classes from '../styles/containers/login.module.scss';

function Login() {
  const { handleInputChange, loginHandler, data } = useLogin();

  return (
    <div className='without_avatar'>
      <form className={classes.form} onSubmit={loginHandler}>
        <Heading type='big'>LOGIN</Heading>
        <Input
          value={data.email}
          name='email'
          onChange={handleInputChange}
          type='text'
          placeholder='Email'
          label={'Email'}
        />
        <Input
          value={data.password}
          name='password'
          onChange={handleInputChange}
          type='password'
          placeholder='Password'
          label={'Password'}
        />
        <button onClick={loginHandler}>Login</button>
      </form>
    </div>
  );
}

export default React.memo(Login);
