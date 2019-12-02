import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import store from '../../store'
import { AsyncOpsContextProvider } from '../../hooks/useAsyncOps'
import useLoadSignedInUser from './useLoadSignedInUser'
import HomeScreen from '../HomeScreen'
import CharacterScreen from '../CharacterScreen'
import UserScreen from '../UserScreen'
import LoginScreen from '../LoginScreen'
import './index.css'

const App = () =>
  <AsyncOpsContextProvider>
    <Provider store={store}>
      <Body />
    </Provider>
  </AsyncOpsContextProvider>

const Body = () => {
  useLoadSignedInUser()
  return (
    <Router>
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
    </Router>

  )
}
export default App
