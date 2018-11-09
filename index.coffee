# This file is part of redux-actions-mod
# Copyright (C) 2018-present Dario Giovannetti <dev@dariogiovannetti.net>
# Licensed under MIT
# https://github.com/kynikos/redux-actions-mod/blob/master/LICENSE

redux_actions = require('redux-actions')


createActionsWithMeta = (meta, actionMap, identityActions...) ->
    actionMapWithMeta = {}
    for type, payloadCreator of actionMap
        actionMapWithMeta[type] = [
            payloadCreator
            -> meta
        ]
    return redux_actions.createActions(actionMapWithMeta, identityActions...)


combineActions = (actions..., reducer) ->
    return { [redux_actions.combineActions(actions...)]: reducer }


handleAction = (defaultState, type, reducer) ->
    return redux_actions.handleAction(type, reducer, defaultState)


handleActions = (defaultState, reducerMap) ->
    return redux_actions.handleActions(reducerMap, defaultState)


module.exports = {
    createAction: redux_actions.createAction
    createActions: redux_actions.createActions
    createActionsWithMeta
    combineActions
    handleAction
    handleActions
}
