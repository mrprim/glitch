import React from 'react'
import { Route, Switch } from 'react-router-dom'
import HomeScreen from '../HomeScreen'
import CharacterScreen from '../CharacterScreen'
import UserScreen from '../UserScreen'
import LoginScreen from '../LoginScreen'
import Header from '../Header'
import Footer from '../Footer'
import './index.css'
import QuestScreen from '../QuestScreen'

const Body = () =>
  <div className='body'>
    <Switch>
      <Route exact path='/'>
        <HomeScreen />
      </Route>
      <Route path='/characters'>
        <CharacterScreen />
      </Route>
      <Route path='/login'>
        <LoginScreen />
      </Route>
      <Route path='/user'>
        <UserScreen />
      </Route>
      <Route path='/quests'>
        <QuestScreen />
      </Route>
    </Switch>
  </div>

export default () =>
  <div className='layout'>
    <Header />
    <Body />
    <Footer />
  </div>
