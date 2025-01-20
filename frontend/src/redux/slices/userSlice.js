import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoggidIn: false,
  token: '',
  user: null,

}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setCurrentUser(state, action) {
      state.user = action.payload
    },
    setLoggedInOut(state, action) {
      state.isLoggidIn = action.payload
    },
    setToken(state, action) {
      state.token = action.payload
    }
  }
});

const userReducer = userSlice.reducer;

export const { setCurrentUser, setLoggedInOut, setToken } = userSlice.actions;

export default userReducer;
