// This file is part of redux-actions-mod
// Copyright (C) 2018-present Dario Giovannetti <dev@dariogiovannetti.net>
// Licensed under MIT
// https://github.com/kynikos/redux-actions-mod/blob/master/LICENSE

import * as ReduxActions from 'redux-actions'
export {createAction, createActions} from 'redux-actions'


export function createActionsWithMeta(meta, actionMap, ...identityActions) {
  const actionMapWithMeta = {}
  for (const type in actionMap) {
    const payloadCreator = actionMap[type]
    actionMapWithMeta[type] = [
      payloadCreator,
      () => meta,
    ]
  }
  return ReduxActions.createActions(actionMapWithMeta, ...identityActions)
}


export function combineActions(...args) {
  const adjustedLength = Math.max(args.length, 1)
  const actions = args.slice(0, adjustedLength - 1)
  const reducer = args[adjustedLength - 1]
  return {[ReduxActions.combineActions(...actions)]: reducer}
}


export function handleAction(defaultState, type, reducer) {
  return ReduxActions.handleAction(type, reducer, defaultState)
}


export function handleActions(defaultState, reducerMap) {
  return ReduxActions.handleActions(reducerMap, defaultState)
}
