import React from 'react'
import { Provider } from 'react-redux'
import store from '../../store'
import Header from '../Header'
import CharacterForm from '../CharacterForm'
import CharacterDisplay from '../CharacterDisplay'
import Container from '@material-ui/core/Container'
import { BrowserRouter as Router, Route } from 'react-router-dom'

const App = () =>
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

export default App
