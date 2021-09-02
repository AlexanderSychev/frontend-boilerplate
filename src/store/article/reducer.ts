import { combineReducers } from 'redux';
import { reducerWithInitialState } from 'typescript-fsa-reducers';

import * as actions from './actions';
import resetStore from '../resetStore';
import { Article } from './types';

const title = reducerWithInitialState<string>('')
    .cases([resetStore, actions.clear], () => '')
    .case(actions.setTitle, (_, value) => value);

const content = reducerWithInitialState<string>('')
    .cases([resetStore, actions.clear], () => '')
    .case(actions.setContent, (_, value) => value);

export default combineReducers<Article>({ title, content });
