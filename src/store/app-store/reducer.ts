import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IAppState } from "./types";

const STORE_NAME = '@app';
const initialState: IAppState = {
  isReady: false,
  isUnavailable: false,
  isUnauthorized: false,
  isLoggerUser: true,
};

const app = createSlice({
  name: STORE_NAME,
  initialState,
  reducers: {
    init: (state, {payload}: PayloadAction<boolean>) => {
      state.isLoggerUser = payload;
    },
    finish: (state) => {
      state.isReady = true;
    },
    unavailable: (state) => {
      state.isUnavailable = true;
    },
    unauthorized: (state) => {
      state.isUnauthorized = true;
    },
  },
});

export const APP_START_INIT = app.actions.init.type;
export const APP_FINISH_INIT = app.actions.finish.type;
export const APP_UNAVAILABLE = app.actions.unavailable.type;

export const {
  actions: {
    finish: appFinishInit,
    init: appStartInit,
    unavailable: appUnavailable,
    unauthorized: appUnauthorized,
  },
} = app;

export const appReducer = app.reducer;
