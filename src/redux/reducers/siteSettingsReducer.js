import {
  SITE_SETTINGS_FULLFILLED,
  SITE_SETTINGS_LOADING,
  SITE_SETTINGS_REJECTED,
} from "../name_variables/reduxNameVariables.js";

export const siteSettingsReducer = (state = {}, action) => {
  switch (action.type) {
    case SITE_SETTINGS_LOADING:
      return {
        loading: true,
      };
    case SITE_SETTINGS_FULLFILLED:
      return {
        loading: false,
        siteSettings: action.payload,
      };
    case SITE_SETTINGS_REJECTED:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
