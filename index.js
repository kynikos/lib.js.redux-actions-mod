'use strict';

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

// Generated by CoffeeScript 2.1.1
(function () {
  // This file is part of redux-actions-mod
  // Copyright (C) 2018-present Dario Giovannetti <dev@dariogiovannetti.net>
  // Licensed under MIT
  // https://github.com/kynikos/redux-actions-mod/blob/master/LICENSE
  var combineActions,
      createActionsWithMeta,
      handleAction,
      handleActions,
      redux_actions,
      slice = [].slice;

  redux_actions = require('redux-actions');

  createActionsWithMeta = function createActionsWithMeta(meta, actionMap) {
    var _redux_actions;

    var actionMapWithMeta, payloadCreator, type;
    actionMapWithMeta = {};
    for (type in actionMap) {
      payloadCreator = actionMap[type];
      actionMapWithMeta[type] = [payloadCreator, function () {
        return meta;
      }];
    }

    for (var _len = arguments.length, identityActions = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      identityActions[_key - 2] = arguments[_key];
    }

    return (_redux_actions = redux_actions).createActions.apply(_redux_actions, [actionMapWithMeta].concat(identityActions));
  };

  combineActions = function combineActions() {
    var _redux_actions2;

    for (var _len2 = arguments.length, actions = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      actions[_key2] = arguments[_key2];
    }

    var i, reducer, ref;
    ref = actions, actions = 2 <= ref.length ? slice.call(ref, 0, i = ref.length - 1) : (i = 0, []), reducer = ref[i++];
    return _defineProperty({}, (_redux_actions2 = redux_actions).combineActions.apply(_redux_actions2, _toConsumableArray(actions)), reducer);
  };

  handleAction = function handleAction(defaultState, type, reducer) {
    return redux_actions.handleAction(type, reducer, defaultState);
  };

  handleActions = function handleActions(defaultState, reducerMap) {
    return redux_actions.handleActions(reducerMap, defaultState);
  };

  module.exports = {
    createAction: redux_actions.createAction,
    createActions: redux_actions.createActions,
    createActionsWithMeta: createActionsWithMeta,
    combineActions: combineActions,
    handleAction: handleAction,
    handleActions: handleActions
  };
}).call(undefined);