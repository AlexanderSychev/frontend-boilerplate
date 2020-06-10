import React, { FunctionComponent, useCallback, ChangeEvent } from 'react';
import classnames from 'classnames';

import styles from './styles.scss';
import { Props } from './types';
import componentDisplayName from '../componentDisplayName';

const Component: FunctionComponent<Props> = ({ className, value, disabled, maxLength, placeholder, onChange }) => {
    const onChangeInternal = useCallback(
        (event: ChangeEvent<HTMLTextAreaElement>) => {
            if (onChange) {
                onChange(event.target.value);
            }
        },
        [onChange],
    );
    return (
        <textarea
            className={classnames(styles.root, className)}
            value={value}
            disabled={disabled}
            maxLength={maxLength}
            placeholder={placeholder}
            onChange={onChangeInternal}
        />
    );
};

Component.displayName = componentDisplayName('TextArea', __filename);

export default Component;
