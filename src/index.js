import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import {takeEvery, put} from 'redux-saga/effects';
import axios from 'axios';

// Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery('GET_MOVIES', getMovies)
    yield takeEvery('GET_DETAILS', getDetails)
    yield takeEvery('UPDATE_MOVIE', updateMovie)
}

//create getMovies saga to initialize get request using axios
function* getMovies() {
    try{
        //get movie data from database
        let response = yield axios.get(`/movies`)
        console.log('in get movies saga:', response.data)
        //trigger and store response data in SET_MOVIES reducer
        yield put({
            type: 'SET_MOVIES',
            payload: response.data
        })
    } catch(error) {
        console.log('problem with get saga', error)
    }
}

function* getDetails(action) {
    try{
        //get movie data from database
        let response = yield axios.get('/movies/' + action.payload)
        //trigger and store response data in SET_DETAILS
        yield put({
            type: 'SET_DETAILS',
            payload: response.data
        })
    } catch(error) {
        console.log('problem with get details saga', error)
    }
}

// put call to update movie and description
function* updateMovie(action) {
    try {
        console.log(action.payload);
        let movie = action.payload;
        yield axios.put('/movies', movie)
        yield getDetails();
    } catch (error) {
        console.log('error in update', error);
    }
}


// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Used to store movies returned from the server
const moviesReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            return action.payload;
        default:
            return state;
    }
}

// Used to store the movie genres
const genresReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_GENRES':
            return action.payload;
        default:
            return state;
    }
}

const detailsReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_DETAILS':
            return action.payload;
        default:
            return state;
    }
}

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        moviesReducer,
        genresReducer,
        detailsReducer
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, 
    document.getElementById('root'));
registerServiceWorker();
