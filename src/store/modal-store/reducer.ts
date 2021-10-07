import { createSlice } from "@reduxjs/toolkit";
import { IModalState } from "./types";

const STORE_NAME = '@modal';
const initialState: IModalState = {
  isOpen: false
};

const modalStore = createSlice({
  name: STORE_NAME,
  initialState,
  reducers: {
    openModal(state) {
      state.isOpen = true;
    },
    closeModal(state) {
      state.isOpen = false;
    }
  }
});

export const modalActions = {
  ...modalStore.actions
};

export const modalReducer = modalStore.reducer;
