import React from 'react';
import { useAuth } from '../../context/AuthContext';
import { FiLogOut } from 'react-icons/fi';
import classes from '../../styles/components/logout.module.scss'

function LogoutButton() {
  const { user, logout } = useAuth();
  return user ? <button className={classes.logoutButton} onClick={logout}><FiLogOut /></button> : null
}

export default LogoutButton