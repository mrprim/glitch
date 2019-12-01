import React from 'react'
import { Link } from 'react-router-dom'
import CharacterManifest from '../CharacterManifest'
import Screen from '../Screen'
import GlitchIcon from '../GlitchIcon'
import './index.scss'

const HomeScreen = () =>
  <Screen className='home'>
    <h1>A Bleak Roster</h1>
    <GlitchIcon size='100' unit='px' />
    <p>A character generator for the <span className='highlight'>Glitch RPG</span> by Jenna Moran</p>

    <Link to='/character'>Register a New Student</Link>
    <h3>Most Recent Students</h3>

    <CharacterManifest limit={5} />
  </Screen>

export default HomeScreen
