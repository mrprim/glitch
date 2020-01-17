import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import './index.scss'

const Footer = () =>

  <AppBar className='footer' position='relative'>
    <p>
      A character generator for the <span className='highlight'>Glitch RPG</span> by Jenna Moran (<KickstarterLink />).
    </p>
  </AppBar>

const KickstarterLink = () =>
  <a href='https://www.kickstarter.com/projects/jennamoran/glitchrpg' target='_blank' rel='noopener noreferrer'>
    Now Kickstarting!
  </a>

export default Footer
