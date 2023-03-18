import { createSlice } from '@reduxjs/toolkit'

const localStorageUser = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null;

const initialState = {
  user: localStorageUser,
}
const saveToLocalStorage = (state) => {
  localStorage.setItem("user", JSON.stringify(state.user))
}

const withSaveToLocalStorage = (reducer) => {
  return (state, action) => {
    const newState = reducer(state, action);
    saveToLocalStorage(newState);
    return newState;
  }
}

export const userSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    login: (state,action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
  },
})


export const { login, logout } = userSlice.actions

export default withSaveToLocalStorage(userSlice.reducer);