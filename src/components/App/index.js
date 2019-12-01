import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import store from '../../store'
import { AsyncOpsContextProvider } from '../../hooks/useAsyncOps'
import HomeScreen from '../HomeScreen'
import CharacterScreen from '../CharacterScreen'
import './index.css'

const App = () =>
  <AsyncOpsContextProvider>
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path='/'>
            <HomeScreen />
          </Route>
          <Route path='/character'>
            <CharacterScreen />
          </Route>
        </Switch>
      </Router>
    </Provider>
  </AsyncOpsContextProvider>

export default App
