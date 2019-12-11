import { useCallback, useContext } from 'react'
import { useDispatch } from 'react-redux'
import * as actionTypes from './actionTypes'
import { Context } from './Provider'
import registry from './registry'

export default ({ name }) => {
  const reduxDispatch = useDispatch()
  const { state, dispatch } = useContext(Context)

  const call = useCallback(async (...args) => {
    const asyncOp = registry[name]

    if (!asyncOp) {
      console.error(`Async-Op [${name}] not registered`)
      return
    }

    reduxDispatch({ type: actionTypes.START, name, args })
    dispatch({ type: actionTypes.START, name })
    try {
      const result = await asyncOp(...args)
      reduxDispatch({ type: actionTypes.COMPLETE, name, args, result })
      dispatch({ type: actionTypes.COMPLETE, name })
      return result
    } catch (error) {
      reduxDispatch({ type: actionTypes.FAIL, name, args, error })
      dispatch({ type: actionTypes.FAIL, name, error })
    }
  }, [name, dispatch, reduxDispatch])

  return {
    loading: !!(state[name] || {}).loading,
    error: (state[name] || {}).error,
    call
  }
}
