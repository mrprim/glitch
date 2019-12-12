import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { useAsyncOps } from '../../async-ops'
import * as asyncTypes from '../../constants/asyncTypes'

const UserControl = ({ displayName }) => {
  const user = useSelector(s => s.user)
  const { call } = useAsyncOps({ name: asyncTypes.AUTH_SIGN_OUT })

  if (user.uid) {
    return <LoggedIn {...user} logout={call} />
  }
  return <NotLoggedIn />
}

const LoggedIn = ({ displayName, logout }) =>
  <div><Link to='/user'>{displayName || 'Click Here to Create a Nickname'}</Link> <button onClick={logout}>Logout</button></div>

const NotLoggedIn = ({ login }) =>
  <div><Link to='/login'>Log In</Link></div>

export default UserControl
