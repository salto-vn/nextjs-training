import {configureStore, ThunkAction, Action} from '@reduxjs/toolkit';
import userReducer from '../features/userSlice';
import { authSlice } from '../features/authSlice';
import { createWrapper } from "next-redux-wrapper";

export function makeStore(){
   return configureStore({
        reducer: {
            user: userReducer,
            authState: authSlice.reducer
        },
        devTools: true
    })
}
const store = makeStore();

export type AppStore = ReturnType<typeof makeStore>

export type AppState = ReturnType<AppStore["getState"]>

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action
>

export const wrapper = createWrapper<AppStore>(makeStore);

export default store