import React, { FunctionComponent, useCallback, ChangeEvent } from 'react';
import classnames from 'classnames';

import styles from './styles.scss';
import { Props } from './types';
import componentDisplayName from '../componentDisplayName';

const Component: FunctionComponent<Props> = ({ className, disabled, placeholder, value, onChange }) => {
    const onChangeInternal = useCallback(
        (event: ChangeEvent<HTMLInputElement>) => {
            if (onChange) {
                onChange(event.target.value);
            }
        },
        [onChange],
    );
    return (
        <input
            type="text"
            className={classnames(styles.root, className)}
            disabled={disabled}
            placeholder={placeholder}
            value={value}
            onChange={onChangeInternal}
        />
    );
};

Component.displayName = componentDisplayName('Input', __filename);

export default Component;
