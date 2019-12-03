import React from 'react'

const Invisible = ({ children }) =>
  <div style={{ visibility: 'hidden' }}>
    {children}
  </div>

export default Invisible
