import React, { FunctionComponent } from 'react';
import classnames from 'classnames';

import styles from './styles.scss';
import { Props } from './types';
import componentDisplayName from '../componentDisplayName';
import useBehavior from './useBehavior';
import Input from '../Input';
import TextArea from '../TextArea';

const MAX_LENGTH = 5000;

const Component: FunctionComponent<Props> = ({ className }) => {
    const { title, content, setTitle, setContent } = useBehavior();
    return (
        <div className={classnames(styles.root, className)}>
            <h1 className={styles.title}>
                {process.env.APP_DESCRIPTION} - v{process.env.APP_VERSION} Build {process.env.BUILD_TIMESTAMP}
            </h1>
            <Input className={styles.input} placeholder="Title" value={title} onChange={setTitle} />
            <TextArea
                className={styles.textarea}
                placeholder="Content"
                maxLength={MAX_LENGTH}
                value={content}
                onChange={setContent}
            />
        </div>
    );
};

Component.displayName = componentDisplayName('Article', __filename);

export default Component;
