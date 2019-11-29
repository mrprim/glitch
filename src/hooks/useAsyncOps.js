import React, { useCallback, createContext, useReducer, useContext } from 'react'

const AsyncOpsContext = createContext()

const actionTypes = {
  START: 'ASYNC_OPS.START',
  COMPLETE: 'ASYNC_OPS.COMPLETE',
  FAIL: 'ASYNC_OPS.ERROR'
}

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

export const AsyncOpsContextProvider = props => {
  const [state, dispatch] = useReducer(reducer, {})
  const value = { state, dispatch }

  return (
    <AsyncOpsContext.Provider value={value}>{props.children}</AsyncOpsContext.Provider>
  )
}

export default (name, asyncMethod) => {
  const { state, dispatch } = useContext(AsyncOpsContext)

  const callAsync = useCallback(async params => {
    dispatch({ type: actionTypes.START, name })
    try {
      const r = await asyncMethod(params)
      dispatch({ type: actionTypes.COMPLETE, name })
      return r
    } catch (error) {
      dispatch({ type: actionTypes.ERROR, name, error })
    }
  }, [name, asyncMethod, dispatch])

  return {
    loading: !!(state[name] || {}).loading,
    error: (state[name] || {}).error,
    callAsync
  }
}
