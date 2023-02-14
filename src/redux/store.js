import { configureStore } from "@reduxjs/toolkit";
import { siteSettingsReducer } from "./reducers/siteSettingsReducer.js";

const store = configureStore({
  reducer: {
    siteSettings: siteSettingsReducer,
  },
});

export { store };
