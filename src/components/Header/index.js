import React from 'react'
import { Link } from 'react-router-dom'
import UserControl from '../UserControl'

const Header = () =>
  <div>
    <Link to='/'>Home</Link>
    <UserControl />
  </div>

export default Header
