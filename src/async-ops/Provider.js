import React, { createContext, useReducer } from 'react'
import * as actionTypes from './actionTypes'

export const Context = createContext()

const reducer = (state = {}, { name, type, error }) => {
  switch (type) {
    case actionTypes.START:
      return { ...state, [name]: { loading: true } }
    case actionTypes.COMPLETE:
      return { ...state, [name]: { loading: false } }
    case actionTypes.FAIL:
      return { ...state, [name]: { loading: false, error: error } }
    default: return state
  }
}

export default ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {})
  const value = { state, dispatch }

  return (
    <Context.Provider value={value}>
      {children}
    </Context.Provider>
  )
}
