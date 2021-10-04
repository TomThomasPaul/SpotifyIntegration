import { createStore,applyMiddleware } from "redux";

import createSagaMiddleware from "@redux-saga/core";

import rootReducer from "./root-reducer";

import logger from "redux-logger";

import RootSaga from "./sagas/RootSaga";

import thunk from "redux-thunk";

const sagaMiddleware = createSagaMiddleware();


const middlewares = [thunk,sagaMiddleware,logger];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

sagaMiddleware.run(RootSaga);

export default store;