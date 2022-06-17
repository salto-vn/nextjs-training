import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
  message: string
}

const initialState: CounterState = {
  message: "",
}

export const counterSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    setNotification: (state, action: PayloadAction<string>) => {
      state.message = action.payload
    },
    clsNotification: (state) => {
      state.message = ""
    }
  },
})
export const getNotification = (state: any) => state.notification.message
export const { setNotification, clsNotification } = counterSlice.actions
export default counterSlice.reducer
