import { createStore, applyMiddleware, compose } from 'redux'
import reducer from './reducers'
import invariant from 'redux-immutable-state-invariant'
import { createLogger } from 'redux-logger'

const configureStore = () => {
  const isDevelopment = process.env.NODE_ENV === 'development'

  const loggerInstance = createLogger({
    level: 'log',
    duration: true,
    collapsed: true,
    diff: true
  })

  const middleware = []

  if (isDevelopment) {
    middleware.push(invariant())
  }

  if (isDevelopment) {
    middleware.push(loggerInstance)
  }

  const store = createStore(reducer, compose(applyMiddleware(...middleware)))

  if (isDevelopment) {
    window.store = store
  }

  return store
}

export default configureStore()
