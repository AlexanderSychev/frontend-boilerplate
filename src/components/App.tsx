import React, { FunctionComponent } from 'react';
import { Provider } from 'react-redux';

import { store } from '@store';

import Article from './Article';
import componentDisplayName from './componentDisplayName';

const App: FunctionComponent = () => (
    <Provider store={store}>
        <Article />
    </Provider>
);

App.displayName = componentDisplayName('App', __filename);

export default App;
