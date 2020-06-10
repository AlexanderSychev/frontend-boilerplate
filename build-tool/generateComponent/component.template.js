'use strict';

/**
 * @param {string} componentName
 */
const component = (componentName) => `import React, { FunctionComponent } from 'react';
import classnames from 'classnames';

import styles from './styles.scss';
import { Props } from './types';
import componentDisplayName from '../componentDisplayName';

const Component: FunctionComponent<Props> = ({ className, children }) => {
    return (
        <div className={classnames(styles.root, className)}>
            {children}
        </div>
    );
};

Component.displayName = componentDisplayName('${componentName}', __filename);

export default Component;
`;

module.exports = component;
