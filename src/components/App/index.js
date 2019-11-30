import React from 'react'
import { Provider } from 'react-redux'
import store from '../../store'
import CharacterForm from '../CharacterForm'
import CharacterDisplay from '../CharacterDisplay'
import Container from '@material-ui/core/Container'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { AsyncOpsContextProvider } from '../../hooks/useAsyncOps'
import HomeScreen from '../HomeScreen'
import './index.css'

const App = () =>
  <AsyncOpsContextProvider>
    <Provider store={store}>
      <Container>
        <Router>
          <Switch>
            <Route exact path='/'>
              <HomeScreen />
            </Route>
            <Route path='/character'>
              <CharacterForm />
              <Route path='/character/:id'>
                <CharacterDisplay />
              </Route>
            </Route>
          </Switch>
        </Router>
      </Container>
    </Provider>
  </AsyncOpsContextProvider>

export default App
