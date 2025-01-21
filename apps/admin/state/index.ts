import { createSlice } from "@reduxjs/toolkit"

export interface ModalState {
  isOpen: boolean
}

const initialState: ModalState = {
  isOpen: false,
}

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state: ModalState): void => {
      state.isOpen = true
    },
    closeModal: (state: ModalState): void => {
      state.isOpen = false
    },
  },
})

export const { openModal, closeModal } = modalSlice.actions

export default modalSlice.reducer
