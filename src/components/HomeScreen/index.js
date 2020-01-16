import React from 'react'
import { Link } from 'react-router-dom'
import CharacterManifest from '../CharacterManifest'
import Screen from '../Screen'
import GlitchIcon from '../GlitchIcon'
import './index.scss'

const HomeScreen = () => {
  return (
    <Screen className='home-screen'>
      <h1>The Riders' Abstinence Society</h1>
      <GlitchIcon opens size='100' unit='px' />
      <p>A character generator for the <span className='highlight'>Glitch RPG</span> by Jenna Moran (<KickstarterLink />).</p>

      <Link to='/character'>Register a New Student</Link>
      <h3>Most Recent Students</h3>

      <CharacterManifest limit={5} />
    </Screen>
  )
}

const KickstarterLink = () =>
  <a href='https://www.kickstarter.com/projects/jennamoran/glitchrpg' target='_blank' rel='noopener noreferrer'>
    Now Kickstarting!
  </a>

export default HomeScreen
