import React from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import ExitToAppRoundedIcon from '@material-ui/icons/ExitToAppRounded'
import { useAsyncOps } from '../../async-ops'
import * as asyncTypes from '../../constants/asyncTypes'

const UserControl = ({ displayName }) => {
  const user = useSelector(s => s.user)

  if (user.uid) {
    return <LoggedIn {...user} />
  }
  return <NotLoggedIn />
}

const LoggedIn = ({ displayName }) => {
  const { push } = useHistory()
  const { call: logout } = useAsyncOps({ name: asyncTypes.AUTH_SIGN_OUT })

  return (
    <>
      <Button color='inherit' onClick={() => push('/user')}>{displayName || 'Click Here to Create a Nickname'}</Button>
      <IconButton color='inherit' onClick={logout}>
        <ExitToAppRoundedIcon />
      </IconButton>
    </>
  )
}

const NotLoggedIn = ({ login }) => {
  const { push } = useHistory()

  return (
    <Button color='inherit' onClick={() => push('/login')}>
    Login
    </Button>
  )
}

export default UserControl
