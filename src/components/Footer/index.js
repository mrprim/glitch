import React from 'react'
import './index.scss'

const Footer = () =>

  <footer className='footer'>
    <p>
      A character generator for the <span className='highlight'>Glitch RPG</span> by Jenna Moran (<KickstarterLink />).
    </p>
  </footer>

const KickstarterLink = () =>
  <a href='https://www.kickstarter.com/projects/jennamoran/glitchrpg' target='_blank' rel='noopener noreferrer'>
    Now Kickstarting!
  </a>

export default Footer
