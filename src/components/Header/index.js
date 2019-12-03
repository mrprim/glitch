import React from 'react'
import { Link } from 'react-router-dom'
import Grid from '@material-ui/core/Grid'
import UserControl from '../UserControl'
import GlitchIcon from '../GlitchIcon'
import './index.scss'

const Header = () =>
  <Grid container className='header'>
    <Grid className='left' item xs={6}>
      <Link title='Home' to='/'>
        <GlitchIcon size={1.25} />
      </Link>
    </Grid>
    <Grid className='right' item xs={6}>
      <UserControl />
    </Grid>
  </Grid>

export default Header
