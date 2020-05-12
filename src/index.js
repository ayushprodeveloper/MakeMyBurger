import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk'

import burgerBuilderReducer from './store/reducers/burgerBuilder';
import orderReducer from './store/reducers/orders';
import auth from './store/reducers/auth'

import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';


import './index.css';
import App from './App';

const rootReducer =  combineReducers({
        
        burger: burgerBuilderReducer,
        order: orderReducer,
        auth: auth,     
    });

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store=createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

const app=(
    
    <BrowserRouter>
    <Provider store={store}>
        <App />
        </Provider>  
    </BrowserRouter>
    
)

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
