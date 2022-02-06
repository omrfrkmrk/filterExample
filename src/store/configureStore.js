import {applyMiddleware, compose, createStore} from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers';
import rootSaga from './sagas';

const sagaMiddlerware = createSagaMiddleware();

export default initialState => {
    const middleware = [sagaMiddlerware];
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const store = createStore(rootReducer, initialState, composeEnhancers(applyMiddleware(...middleware)));

    var sagaTask = sagaMiddlerware.run(rootSaga);

    sagaTask.toPromise().catch(error =>{

    });

    return store;
}

