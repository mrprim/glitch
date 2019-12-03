import * as actionTypes from '../constants/actionTypes'

const initialState = {}

const initialCharacter = {
  name: '',
  pronouns: '',
  hat: '',
  eide: 0,
  flore: 0,
  lore: 0,
  wyrd: 0,
  ability: 0,
  bonds: [],
  gifts: [],
  geasa: [],
  costs: {},
  points: {}
}

const setCharacters = (state, action) => ({
  ...state,
  ...action.characters
})

const setCharacter = (state, action) => ({
  ...state,
  [action.id]: {
    ...initialCharacter,
    ...action.character
  }
})

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_CHARACTERS: return setCharacters(state, action)
    case actionTypes.SET_CHARACTER: return setCharacter(state, action)
    default: return state
  }
}
