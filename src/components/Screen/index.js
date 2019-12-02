import React from 'react'
import Container from '@material-ui/core/Container'
import Header from '../Header'
import './index.scss'

const Screen = ({ className, children, hideHeader }) =>
  <div className={`screen ${className || ''}`}>
    {!hideHeader ? <Header /> : null}
    <Container>
      {children}
    </Container>
  </div>

export default Screen
