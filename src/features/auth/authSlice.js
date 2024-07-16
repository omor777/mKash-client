import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
  isUserExist: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginUser(state, action) {
      state.user = action.payload;
      state.isUserExist = true;
    },
    logoutUser(state) {
      state.user = {};
      state.isUserExist = false;
    },
  },
});

export const { loginUser, logoutUser } = authSlice.actions;

export default authSlice.reducer;
