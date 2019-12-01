import { createSelector } from 'reselect'

const charactersSelector = s => s.characters

const sortByDescendingUpdated = (a, b) => a.updated < b.updated ? 1 : -1

const calculate = characters => Object.entries(characters)
  .map(([id, c]) => ({ id, ...c }))
  .sort(sortByDescendingUpdated)

export default createSelector(
  charactersSelector,
  calculate

)
