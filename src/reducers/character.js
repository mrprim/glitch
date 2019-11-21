import * as actionTypes from '../constants/actionTypes'

const initialState = {
  name: '',
  gender: '',
  hat: '',
  eide: 0,
  flore: 0,
  lore: 0,
  wyrd: 0,
  ability: 0
}

const setCharacter = (state, action) => ({
  ...state,
  ...action.character
})

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_CHARACTER: return setCharacter(state, action)
    default: return state
  }
}
