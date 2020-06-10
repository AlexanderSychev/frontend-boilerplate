import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { article } from '@store';

import { Behavior } from './types';

/** Component's behavior hook */
const useBehavior = (): Behavior => {
    const dispatch = useDispatch();

    const title = useSelector(article.selectors.getTitle);
    const content = useSelector(article.selectors.getContent);

    const setTitle = useCallback((title: string) => dispatch(article.actions.setTitle(title)), [dispatch]);
    const setContent = useCallback((title: string) => dispatch(article.actions.setContent(title)), [dispatch]);

    return { title, content, setTitle, setContent };
};

export default useBehavior;
