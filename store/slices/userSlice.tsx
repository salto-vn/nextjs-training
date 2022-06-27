import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  users: []
}

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state: any, action: any) => {
      state.users = [...state.users, action.payload]
    }
  }
})

export const { addUser } = userSlice.actions

export default userSlice.reducer
