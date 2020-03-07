import React from 'react'
import { Link } from 'react-router-dom'
import Grid from '@material-ui/core/Grid'
import CharacterManifest from '../CharacterManifest'
import Screen from '../Screen'
import GlitchIcon from '../GlitchIcon'
import './index.scss'

const HomeScreen = () => {
  return (
    <Screen className='home-screen'>
      <GlitchIcon opens size='100' unit='px' />

      <Link to='/characters'>Enroll a New Member</Link>

      <Grid container className='character-manifest' justify='center'>
        <Grid item sm={8} md={6}>
          <CharacterManifest limit={5} />
        </Grid>
      </Grid>
    </Screen>
  )
}

export default HomeScreen
