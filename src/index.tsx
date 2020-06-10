import React from 'react';
import ReactDOM from 'react-dom';

import { App } from '@components';

import styles from './index.scss';

window.addEventListener('load', () => {
    const root = document.getElementById(styles.app);
    if (root) {
        ReactDOM.render(<App />, root);
    }
});
