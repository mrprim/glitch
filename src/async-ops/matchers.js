import * as actionTypes from './actionTypes'

const actionMatcherBuilder = actionType => name => action => {
  console.log('MATCHER', { action, name, actionType })
  return action.type === actionType && action.name === name
}

export const matchStartAction = actionMatcherBuilder(actionTypes.START)

export const matchCompleteAction = actionMatcherBuilder(actionTypes.COMPLETE)

export const matchFailAction = actionMatcherBuilder(actionTypes.FAIL)
