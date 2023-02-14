import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";

import storage from "redux-persist/lib/storage";
import { siteSettingsReducer } from "./reducers/siteSettingsReducer.js";

// persist configuration
const persistConfig = {
  key: "root",
  storage,
};

// combine all existing reducers in the app
const rootReducer = combineReducers({
  siteSettings: siteSettingsReducer,
});

// persisting all reducers
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

const persistor = persistStore(store);

export { store, persistor };
