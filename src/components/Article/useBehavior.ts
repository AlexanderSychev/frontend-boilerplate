import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { article } from '@store';

import { Behavior } from './types';

/** Component's behavior hook */
const useBehavior = (): Behavior => {
    const dispatch = useDispatch();

    const title = useSelector(article.selectors.getTitle);
    const content = useSelector(article.selectors.getContent);

    const setTitle = useCallback((value: string) => dispatch(article.actions.setTitle(value)), [dispatch]);
    const setContent = useCallback((value: string) => dispatch(article.actions.setContent(value)), [dispatch]);

    return { title, content, setTitle, setContent };
};

export default useBehavior;
