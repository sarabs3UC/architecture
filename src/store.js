import { createStore } from "redux";
import CommonReducer from "./reducer";
import { combineReducers, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import { helloSaga } from "./sagas";
const sagaMiddleware = createSagaMiddleware();

export default createStore(
  combineReducers({ CommonReducer }),
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(helloSaga);
