import { createSelector } from 'reselect';

import AppState from '../AppState';
import { Article } from './types';

export const getArticle = (state: AppState): Article => state.article;

export const getTitle = createSelector(getArticle, ({ title }) => title);

export const getContent = createSelector(getArticle, ({ content }) => content);
