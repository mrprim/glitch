import { matchCompleteAction } from '../async-ops/matchers'
import * as asyncTypes from '../constants/asyncTypes'

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
  ...action.result
})

const setCharacter = (state, action) => ({
  ...state,
  [action.args[0]]: {
    ...initialCharacter,
    ...action.result
  }
})

export default (state = initialState, action) => {
  if (matchCompleteAction(asyncTypes.GET_CHARACTERS)(action)) {
    return setCharacters(state, action)
  } else if (matchCompleteAction(asyncTypes.GET_CHARACTER)(action)) {
    return setCharacter(state, action)
  }

  return state
}
