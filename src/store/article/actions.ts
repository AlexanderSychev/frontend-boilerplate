import { actionCreatorFactory } from 'typescript-fsa';

const action = actionCreatorFactory('ARTICLE');

export const clear = action('CLEAR');

export const setTitle = action<string>('SET_TITLE');

export const setContent = action<string>('SET_CONTENT');
