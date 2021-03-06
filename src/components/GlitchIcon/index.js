import React from 'react'
import Eye from '@material-ui/icons/VisibilityOutlined'
import Star from '@material-ui/icons/StarsSharp'
import './index.scss'

const DEFAULT_SIZE = '1'
const DEFAULT_UNIT = 'em'

const GlitchIcon = ({ color, opens, size = DEFAULT_SIZE, unit = DEFAULT_UNIT }) =>
  <div className={`glitch-icon ${opens ? 'opens' : ''}`} style={iconStyle({ size, unit })}>
    <Eye className='eye-icon' style={eyeStyle({ color, size, unit })} />
    <Star className='star-icon' style={starStyle({ color, size, unit })} />
  </div>

const iconStyle = ({ size, unit }) => ({
  height: size + unit,
  width: size + unit
})

const eyeStyle = ({ color, size, unit }) => ({
  color,
  left: 0,
  top: 0,
  height: size + unit,
  width: size + unit
})

const starStyle = ({ size, unit, color }) => ({
  color,
  left: (size / 2) - (size / 2.7 / 2) + unit,
  top: (size / 2) * 0.95 - (size / 2.7 / 2) + unit,
  height: (size / 2.7) + unit,
  width: (size / 2.7) + unit
})

export default GlitchIcon
