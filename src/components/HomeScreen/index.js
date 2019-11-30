import React from 'react'
import { Link } from 'react-router-dom'
import CharacterManifest from '../CharacterManifest'
import './index.scss'

const HomeScreen = () =>
  <div className='home-screen'>
    <h1>A Bleak Roster</h1>
    <p>A character generator for the <span className='highlight'>Glitch RPG</span> by Jenna Moran</p>

    <Link to='/character'>Register a New Student</Link>
    <h3>Most Recent Students</h3>

    <CharacterManifest limit={5} />
  </div>

export default HomeScreen
