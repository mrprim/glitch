import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import { useHistory } from 'react-router-dom'
import Grid from '@material-ui/core/Grid'
import UserControl from '../UserControl'
import GlitchIcon from '../GlitchIcon'

const Header = () =>
// <Grid container className='header'>
//   <Grid className='left' item xs={6}>

//   </Grid>
//   <Grid className='right' item xs={6}>
//
//   </Grid>
// </Grid>

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
    <IconButton edge='start' onClick={() => push('/')} color='inherit'>
      <GlitchIcon color='black' />
    </IconButton>
  )
}

export default Header
