import { combineReducers } from "@reduxjs/toolkit";

import authReducer from "../features/auth/authSlice";
import toggleReducer from "../features/toggle/toggleSlice";

import { api } from "../services/api";

const rootReducer = combineReducers({
  auth: authReducer,
  toggle: toggleReducer,
  [api.reducerPath]: api.reducer,
});

export default rootReducer;
