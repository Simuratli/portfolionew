import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import classes from '../styles/containers/login.module.scss';
import { Heading } from '../components';

function SignUp() {

  const { signup } = useAuth();
  const [data, setData] = useState({
    email: '',
    password: '',
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {

    setData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const signupHandler = async (e: any) => {
    e.preventDefault();
    try {
      await signup(data.email, data.password)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className="without_avatar">
      <form className={classes.form} onSubmit={signupHandler}>
        <Heading type="big" >SIGNUP</Heading>
        <input name="email" onChange={handleInputChange} type="text" placeholder='Email' />
        <input name="password" onChange={handleInputChange} type="password" placeholder='Password' />
        <button onClick={signupHandler}>Sign up</button>
      </form>
    </div>
  )
}

export default SignUp