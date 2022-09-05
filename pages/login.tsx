import React from 'react';
import useLogin from '../hooks/useLogin';
import { Heading } from '../components';
import classes from '../styles/containers/login.module.scss';


function Login() {
  const { handleInputChange, loginHandler } = useLogin();

  return (
    <div className="without_avatar">
      <form className={classes.form} onSubmit={loginHandler}>
        <Heading type="big" >LOGIN</Heading>
        <input name="email" onChange={handleInputChange} type="text" placeholder='Email' />
        <input name="password" onChange={handleInputChange} type="password" placeholder='Password' />
        <button onClick={loginHandler}>Login</button>
      </form>
    </div>
  )
}

export default React.memo(Login)