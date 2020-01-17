import React from 'react'
import { Route, Switch } from 'react-router-dom'
import HomeScreen from '../HomeScreen'
import CharacterScreen from '../CharacterScreen'
import UserScreen from '../UserScreen'
import LoginScreen from '../LoginScreen'
import Header from '../Header'
import Footer from '../Footer'
import './index.css'

const Body = () =>
  <div className='body'>
    <Switch>
      <Route exact path='/'>
        <HomeScreen />
      </Route>
      <Route path='/character'>
        <CharacterScreen />
      </Route>
      <Route path='/login'>
        <LoginScreen />
      </Route>
      <Route path='/user'>
        <UserScreen />
      </Route>
    </Switch>
  </div>

export default () =>
  <div className='layout'>
    <Header />
    <Body />
    <Footer />
  </div>
