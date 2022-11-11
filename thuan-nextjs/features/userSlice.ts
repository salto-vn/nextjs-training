import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import { IUser } from '../type/type'
import {AppState} from '../store';

const isLocal = typeof window !== 'undefined';
const CLIENT_USER_KEY = "client_user"
const userClient = isLocal ? JSON.parse(localStorage.getItem(CLIENT_USER_KEY) || null) : null
const userData = JSON.stringify(userClient,null, 2)
console.log(userData)

export type UserStateType = {
    user: null | IUser,
    isLoggedIn: boolean,
    isLoading: boolean,
    isError: boolean,
    errorMessages: IUser | null
  }

const initialState = {
    user: userData ?? null,
    isLoggedIn: userData != null,
    isLoading: false,
    isError: false,
    errorMessages: {}
} as unknown as UserStateType

export const userSlice = createSlice({
    name: 'detect',
    initialState: initialState,
    reducers: {
        logout: state => {
            state.isLoggedIn = false,
            state.user = null,
            localStorage.removeItem(CLIENT_USER_KEY)
        },
        test: state => {
            state.user = null,
            state.isError = false,
            localStorage.removeItem(CLIENT_USER_KEY)

        }
    }
})

export const userSelector = (state: AppState) => state.user;
export default userSlice.reducer