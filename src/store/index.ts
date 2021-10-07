import { applyMiddleware, combineReducers, createStore, Reducer } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { routerReducer } from "react-router-redux";
import { appReducer } from "./app-store/reducer";
import { IAppState } from "./app-store/types";
import { authReducer } from "./authorization-store/reducer";
import { IAuthState } from "./authorization-store/types";
import { modalReducer } from "./modal-store/reducer";
import { IModalState } from "./modal-store/types";
import { rootSaga } from "./root-saga";

export interface IRootState {
  appStore: IAppState
  modalStore: IModalState
  authStore: IAuthState
  routing: any
}

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

const store = createStore<IRootState, any, any, any>(
  combineReducers({
    appStore: appReducer,
    modalStore: modalReducer,
    authStore: authReducer,
    routing: routerReducer,
  }),
  applyMiddleware(...middleware)
);

sagaMiddleware.run(rootSaga);

export default store;