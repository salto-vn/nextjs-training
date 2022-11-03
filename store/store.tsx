import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { createWrapper } from 'next-redux-wrapper'

import user from "store/slices/userSlice"
import counter from "store/slices/counterSlice"

const combineReducer = combineReducers({
  user,
  counter
})

export const makeStore = () => 
configureStore({
  reducer: combineReducer,
})

export const wrapper = createWrapper(makeStore, { debug: true })
