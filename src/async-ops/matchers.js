import * as actionTypes from './actionTypes'

const actionMatcherBuilder = actionType => name => action => {
  return action.type === actionType && action.name === name
}

export const matchStartAction = actionMatcherBuilder(actionTypes.START)

export const matchCompleteAction = actionMatcherBuilder(actionTypes.COMPLETE)

export const matchFailAction = actionMatcherBuilder(actionTypes.FAIL)
