/**
 * @file Application state reducer. This file is automatically updating. Please, don't edit it manually.
 */

import { combineReducers } from 'redux';

import AppState from './AppState';
import { reducer as article } from './article';

export default combineReducers<AppState>({
    article,
});
