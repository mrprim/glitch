import React from 'react'
import { Provider, useSelector } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import store from '../../store'
import { AsyncOpsContextProvider } from '../../hooks/useAsyncOps'
import useLoadSignedInUser from './useLoadSignedInUser'
import HomeScreen from '../HomeScreen'
import CharacterScreen from '../CharacterScreen'
import UserScreen from '../UserScreen'
import LoginScreen from '../LoginScreen'
import LoadScreen from '../LoadScreen'
import './index.css'

const App = () =>
  <AsyncOpsContextProvider>
    <Provider store={store}>
      <Session>
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
      </Session>
    </Provider>
  </AsyncOpsContextProvider>

const Session = ({ children }) => {
  useLoadSignedInUser()
  const { loading } = useSelector(s => s.user)

  if (loading) return <LoadScreen />

  return children
}
export default App
