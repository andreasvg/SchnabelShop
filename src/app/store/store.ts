import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import freeze from 'redux-freeze';
import { reducer } from './reducer';

export const store = createStore(reducer, composeWithDevTools(applyMiddleware(freeze)));
