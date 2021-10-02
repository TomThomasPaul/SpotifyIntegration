import { createStore,applyMiddleware } from "redux";

import createSagaMiddleware from "@redux-saga/core";

import rootReducer from "./root-reducer";

import logger from "redux-logger";

import RootSaga from "./sagas/RootSaga";

const sagaMiddleware = createSagaMiddleware();


const middlewares = [logger,sagaMiddleware];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

sagaMiddleware.run(RootSaga);

export default store;