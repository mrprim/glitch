import React from 'react'
import Screen from '../Screen'
import GlitchIcon from '../GlitchIcon'
import './index.scss'

const LoadScreen = () =>
  <Screen hideHeader className='load-screen'>
    <GlitchIcon opens size='100' unit='px' />
  </Screen>

export default LoadScreen
