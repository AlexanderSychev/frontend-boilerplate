import { combineReducers } from 'redux';
import { reducerWithInitialState } from 'typescript-fsa-reducers';

import * as actions from './actions';
import resetStore from '../resetStore';
import { Article } from './types';

const title = reducerWithInitialState<string>('')
    .cases([resetStore, actions.clear], () => '')
    .case(actions.setTitle, (_, title) => title);

const content = reducerWithInitialState<string>('')
    .cases([resetStore, actions.clear], () => '')
    .case(actions.setContent, (_, title) => title);

export default combineReducers<Article>({ title, content });
