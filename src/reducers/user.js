import { matchCompleteAction } from '../async-ops/matchers'
import * as asyncTypes from '../constants/asyncTypes'

const initialState = {
  loading: true,
  id: '',
  displayName: ''
}

const getUser = (state, { args, result }) => ({
  ...state,
  loading: false,
  uid: args[0],
  ...result
})

const postUser = (state, { args }) => ({
  ...state,
  uid: args[0],
  ...args[1]
})

export default (state = initialState, action) => {
  if (matchCompleteAction(asyncTypes.GET_USER)(action)) {
    return getUser(state, action)
  }
  if (matchCompleteAction(asyncTypes.POST_USER)(action)) {
    return postUser(state, action)
  }
  return state
}
