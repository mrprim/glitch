import React from 'react'
import './index.scss'

const Screen = ({ className, children }) =>
  <div className={`screen ${className || ''}`}>
    {children}
  </div>

export default Screen
