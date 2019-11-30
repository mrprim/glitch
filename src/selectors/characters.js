import { createSelector } from 'reselect'

const charactersSelector = s => s.characters

const calculate = characters => Object.entries(characters).map(([id, c]) => ({ id, ...c }))

export default createSelector(
  charactersSelector,
  calculate

)
