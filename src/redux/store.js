import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

import {
  persistStore,
  persistReducer,
} from "redux-persist";

import homeReducer from "./slice/homeSlice";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
import localStorage from "redux-persist/es/storage";

const reducers = combineReducers({
  company: homeReducer,
});

const persistConfig = {
  key: "root",
  version: 1,
  timeout: null,
  storage: localStorage,
  stateReconciler: autoMergeLevel2,
  whitelist: ["company"], //Things u want to persist
  // blacklist: [], //Things u dont
};

const persistedReducer = persistReducer(persistConfig, reducers);

// export const store = createStore(persistedReducer, applyMiddleware(logger));

// export const store = configureStore({
//   reducer: persistedReducer,
//   // devTools: true
//   // middleware: [createLogger()],

// });

export const store = configureStore({
  reducer: persistedReducer,
  devTools: true,
  middleware: getDefaultMiddleware({
    serializableCheck: false,
    // serializableCheck: {
    //   ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    // },
  }),
});

export const persistor = persistStore(store);
