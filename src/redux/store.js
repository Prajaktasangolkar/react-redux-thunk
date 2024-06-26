import {legacy_createStore as createStore,applyMiddleware} from 'redux';
import {thunk} from 'redux-thunk';
import newsReducer from './newsReducer.js'


const store=createStore(newsReducer,applyMiddleware(thunk));

export default store;


/*
news app
news item 1 (title,content)
news itm 2 

*/