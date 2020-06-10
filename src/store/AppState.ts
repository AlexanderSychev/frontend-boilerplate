/**
 * @file Application state signature. This file is automatically updating. Please, don't edit it manually.
 */

import { types as articleTypes } from './article';

export default interface AppState {
    article: articleTypes.Article;
}
