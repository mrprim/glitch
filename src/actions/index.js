import * as actionTypes from '../constants/actionTypes'

export const setCharacter = (id, character) => ({
  type: actionTypes.SET_CHARACTER,
  id,
  character
})

export const setCharacters = characters => ({
  type: actionTypes.SET_CHARACTERS,
  characters
})
