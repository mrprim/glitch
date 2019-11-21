import React from 'react'
import { Provider } from 'react-redux'
import store from '../../store'
import Header from '../Header'
import CharacterForm from '../CharacterForm'
import CharacterDisplay from '../CharacterDisplay'

const App = () =>
  <Provider store={store}>
    <Header />
    <CharacterForm />
    <CharacterDisplay />
  </Provider>

export default App
