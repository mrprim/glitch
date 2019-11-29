import React from 'react'
import { Provider } from 'react-redux'
import store from '../../store'
import Header from '../Header'
import CharacterForm from '../CharacterForm'
import CharacterDisplay from '../CharacterDisplay'
import Container from '@material-ui/core/Container'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { AsyncOpsContextProvider } from '../../hooks/useAsyncOps'
import './index.css'

const App = () =>
  <AsyncOpsContextProvider>
    <Provider store={store}>
      <Container>
        <Router>
          <Header />
          <CharacterForm />
          <Route path='/:id'>
            <CharacterDisplay />
          </Route>
        </Router>
      </Container>
    </Provider>
  </AsyncOpsContextProvider>

export default App
