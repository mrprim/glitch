import { matchCompleteAction } from '../async-ops/matchers'
import * as asyncTypes from '../constants/asyncTypes'

const initialState = {}

const initialCharacter = {
  name: '',
  pronouns: '',
  bane: '',
  hat: '',
  technique: '',
  destruction: '',
  sphere: '',
  sanctuary: '',
  eide: 0,
  flore: 0,
  lore: 0,
  wyrd: 0,
  ability: 0,
  bonds: [],
  gifts: [],
  geasa: [],
  treasures: [],
  arcana: [],
  costs: {},
  points: {}
}

const setCharacters = (state, action) => ({
  ...state,
  ...action.result
})

const getCharacter = (state, action) => ({
  ...state,
  [action.args[0]]: {
    ...initialCharacter,
    ...action.result
  }
})

const postCharacter = (state, action) => ({
  ...state,
  [action.args[0]]: {
    ...initialCharacter,
    ...action.args[1]
  }
})

export default (state = initialState, action) => {
  if (matchCompleteAction(asyncTypes.GET_CHARACTERS)(action)) {
    return setCharacters(state, action)
  }
  if (matchCompleteAction(asyncTypes.GET_CHARACTER)(action)) {
    return getCharacter(state, action)
  }
  if (matchCompleteAction(asyncTypes.POST_CHARACTER)(action)) {
    return postCharacter(state, action)
  }

  return state
}
