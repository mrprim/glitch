import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import Hidden from '@material-ui/core/Hidden'
import IconButton from '@material-ui/core/IconButton'
import { useHistory } from 'react-router-dom'
import UserControl from '../UserControl'
import GlitchIcon from '../GlitchIcon'

const Header = () =>
  <AppBar color='inherit' position='sticky'>
    <Toolbar variant='dense'>
      <HomeButton />
      <div style={{ flexGrow: 1 }} />
      <UserControl />
    </Toolbar>
  </AppBar>

const HomeButton = () => {
  const { push } = useHistory()

  return (
    <>
      <IconButton edge='start' onClick={() => push('/')} color='inherit'>
        <GlitchIcon color='black' />
      </IconButton>
      <Hidden xsDown>
        <Button color='inherit' onClick={() => push('/')}>
        The Riders' Abstinence Society
        </Button>
      </Hidden>
    </>
  )
}

export default Header
