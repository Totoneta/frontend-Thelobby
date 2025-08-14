import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { AuthReducer, InfoUserReducer } from "./reducers";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth", "info"],
  blacklist: ['register2'],
};

const allReducers = combineReducers({
  auth: AuthReducer,
  info: InfoUserReducer,
});

const persistedReducer = persistReducer(persistConfig, allReducers);

const store = configureStore({
  reducer: persistedReducer,
});

const persistor = persistStore(store);

export { store, persistor };

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
