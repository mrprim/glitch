import * as actionTypes from '../constants/actionTypes'

const initialState = {
  id: '',
  displayName: ''
}

const setUser = (state, { uid, displayName }) => ({
  ...state,
  uid,
  displayName
})

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_USER: return setUser(state, action)
    default: return state
  }
}
