import { createSelector } from 'reselect'

const userSelector = s => s.user

const charactersSelector = s => s.characters

const sortByDescendingUpdated = (a, b) => a.updated < b.updated ? 1 : -1

const calculate = (characters, user) => Object.entries(characters)
  .map(([id, c]) => ({ id, ...c }))
  .filter(c => c.createdBy === user.uid)
  .sort(sortByDescendingUpdated)

export default createSelector(
  charactersSelector,
  userSelector,
  calculate

)
