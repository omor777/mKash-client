import storage from "redux-persist/lib/storage";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";
// import rootReducer from "../reducer";
import authReducer from "../features/auth/authSlice";
import toggleReducer from "../features/toggle/toggleSlice";
import sendMoneyReducer from "../features/send-money/sendMoneySlice";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { api } from "../services/api";
import cashOutReducer from "../features/cashout/cashoutSlice";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
  blacklist: [api.reducerPath, "sendMoney", "cashOut"],
};

const rootReducer = combineReducers({
  auth: authReducer,
  toggle: toggleReducer,
  sendMoney: sendMoneyReducer,
  cashOut: cashOutReducer,
  [api.reducerPath]: api.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(api.middleware),
});

const persistor = persistStore(store);

export { store, persistor };
