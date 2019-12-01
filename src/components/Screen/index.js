import React from 'react'
import Container from '@material-ui/core/Container'
import './index.scss'

const Screen = ({ className, children }) =>
  <div className={`screen ${className || ''}`}>
    <Container>
      {children}
    </Container>
  </div>

export default Screen
