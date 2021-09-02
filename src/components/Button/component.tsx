import React, { FunctionComponent } from 'react';
import classnames from 'classnames';

import styles from './styles.scss';
import { Props } from './types';
import componentDisplayName from '../componentDisplayName';

const Component: FunctionComponent<Props> = ({ className, children, onClick }) => (
    <button type="button" className={classnames(styles.root, className)} onClick={onClick}>
        {children}
    </button>
);

Component.displayName = componentDisplayName('Button', __filename);

export default Component;
