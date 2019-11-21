import React from 'react'
import { Provider } from 'react-redux'
import store from '../../store'
import Header from '../Header'
import CharacterForm from '../CharacterForm'
import CharacterDisplay from '../CharacterDisplay'
import Container from '@material-ui/core/Container'

const App = () =>
  <Provider store={store}>
    <Container>
      <Header />
      <CharacterForm />
      <CharacterDisplay />
    </Container>
  </Provider>

export default App
