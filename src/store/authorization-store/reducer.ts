import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthData, IAuthState } from "./types";

const STORE_NAME = '@authorization';
const initialState: IAuthState = {
  data: {
    login: '',
    password: ''
  }
};

const AuthStore = createSlice({
  name: STORE_NAME,
  initialState,
  reducers: {
    takeData(state, {payload}: PayloadAction<AuthData>) {
      state.data = payload;
    }
  }
});

export const authAction = {
  ...AuthStore.actions
};

export const authReducer = AuthStore.reducer;
