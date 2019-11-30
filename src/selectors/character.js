import { createSelector } from 'reselect'

const charactersSelector = s => s.characters

const calculate = (id, characters) => characters[id]

export default id => createSelector(
  () => id,
  charactersSelector,
  calculate

)
