import { applyMiddleware, combineReducers, createStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { appReducer } from "./app-store/reducer";
import { IAppState } from "./app-store/types";
import { rootSaga } from "./root-saga";

export interface IRootState {
  appStore: IAppState
}

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

const store = createStore<IRootState, any, any, any>(
  combineReducers({
    appStore: appReducer
  }),
  undefined,
  applyMiddleware(...middleware)
);

sagaMiddleware.run(rootSaga);

export default store;