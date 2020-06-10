import reduxThunk from 'redux-thunk';
import { createStore, Store, compose, applyMiddleware } from 'redux';

import reducer from './reducer';
import AppState from './AppState';

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const composeEnhancers: typeof compose =
    (process.env.APP_ENV === 'development' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

export default (): Store<AppState> => createStore(reducer, composeEnhancers(applyMiddleware(reduxThunk)));
