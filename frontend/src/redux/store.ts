import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { AuthReducer } from "./reducers";

const allReducers = combineReducers({
  auth: AuthReducer,
});

const store = configureStore({
  reducer: allReducers,
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
