import { applyMiddleware, combineReducers, createStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
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
}

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

const store = createStore<IRootState, any, any, any>(
  combineReducers({
    appStore: appReducer,
    modalStore: modalReducer,
    authStore: authReducer,
  }),
  undefined,
  applyMiddleware(...middleware)
);

sagaMiddleware.run(rootSaga);

export default store;