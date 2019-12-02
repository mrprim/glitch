import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import authSignOut from '../../async/authSignOut'

const UserControl = ({ displayName }) => {
  const user = useSelector(s => s.user)

  if (user.uid) {
    return <LoggedIn {...user} logout={authSignOut} />
  }
  return <NotLoggedIn />
}

const LoggedIn = ({ displayName, logout }) =>
  <div><Link to='/user'>{displayName || 'Anonymous'}</Link> <button onClick={logout}>Logout</button></div>

const NotLoggedIn = ({ login }) =>
  <div><Link to='/login'>Log In</Link></div>

export default UserControl
