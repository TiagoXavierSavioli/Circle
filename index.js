import React from 'react';
import { AppRegistry } from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { Provider } from 'react-redux'
import ReduxThunk from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware } from 'redux'

import momentsReducer from './src/store/reducers/moments'
import mapsReducer from './src/store/reducers/maps'
import authReducer from './src/store/reducers/auth'
import usersReducer from './src/store/reducers/users'

const rootReducer = combineReducers({
    moments: momentsReducer,
    maps: mapsReducer,
    auth: authReducer,
    users: usersReducer
});

const store = createStore(
    rootReducer,
    applyMiddleware(ReduxThunk)
    // composeWithDevTools()
);

const AppRedux = () => {

    return(
        <Provider store={store}>
            <App/>
        </Provider>        
    )

}

AppRegistry.registerComponent(appName, () => AppRedux);
