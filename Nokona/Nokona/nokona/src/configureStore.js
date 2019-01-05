import { createStore, applyMiddleware } from 'redux';
import combinedReducers from './Redux/Reducers/combinedReducers'
import thunk from 'redux-thunk';




export default function configureStore() {
    return createStore (
        combinedReducers,
        applyMiddleware(thunk)


    );
}

