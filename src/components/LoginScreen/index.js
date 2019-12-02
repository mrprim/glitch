import React, { useEffect } from 'react'
import firebase from 'firebase'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import Screen from '../Screen'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import uiConfig from '../../firebase/firebaseUiAuthConfig'
import './index.scss'

const LoginScreen = () => {
  const history = useHistory()
  const user = useSelector(s => s.user)
  useEffect(() => {
    if (user.uid) {
      history.push('/')
    }
  }, [history, user])

  if (user.uid) {
  }

  return (
    <Screen className='login-screen'>
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
    </Screen>
  )
}

export default LoginScreen
