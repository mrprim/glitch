import * as actionTypes from '../constants/actionTypes'

const initialState = {
  loading: true,
  id: '',
  displayName: ''
}

const setUser = (state, { uid, displayName }) => ({
  ...state,
  loading: false,
  uid,
  displayName
})

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_USER: return setUser(state, action)
    default: return state
  }
}
