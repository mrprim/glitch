import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider, useSelector } from 'react-redux'
import store from '../../store'
import useLoadSignedInUser from './useLoadSignedInUser'
import Layout from '../Layout'
import LoadScreen from '../LoadScreen'
import NewAsyncOpsContextProvider from '../../async-ops/Provider'
import '../../async'
import './index.css'

const App = () =>
  <NewAsyncOpsContextProvider>
    <Provider store={store}>
      <Session>
        <Router>
          <Layout />
        </Router>
      </Session>
    </Provider>
  </NewAsyncOpsContextProvider>

const Session = ({ children }) => {
  useLoadSignedInUser()
  const { loading } = useSelector(s => s.user)

  if (loading) return <LoadScreen />

  return children
}
export default App
