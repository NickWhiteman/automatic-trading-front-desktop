import { createSlice } from "@reduxjs/toolkit";

const STORE_NAME = '@app';
const initialState = {
  isReady: false,
  isUnavailable: false,
  isUnauthorized: false,
  isLoginRedirect: true,
  config: null,
};

const app = createSlice({
  name: STORE_NAME,
  initialState,
  reducers: {
    init: (state, action) => {
      state.isLoginRedirect = action.payload.isLoginRedirect;
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
    setConfig: (state, action) => {
      state.config = action.payload;
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
    setConfig: appSetConfig,
  },
} = app;

export const appReducer = app.reducer;
