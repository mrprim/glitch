import React from 'react'
import { useSelector } from 'react-redux'
import Screen from '../Screen'
import UserUpdateForm from '../UserUpdateForm'
import GlitchIcon from '../GlitchIcon'
import './index.scss'

const UserScreen = () => {
  const user = useSelector(s => s.user)
  return (
    <Screen className='user-screen'>
      {user.uid ? <UserUpdateForm /> : <GlitchIcon />}
    </Screen>
  )
}

export default UserScreen
