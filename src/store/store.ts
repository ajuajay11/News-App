import { configureStore } from '@reduxjs/toolkit'
import localisationReducer from "./features/LanguageSlice";
import i18n from "../i18n/i18n";
import { newsApi } from './features/api/NewsApi';
export const store = configureStore({
  reducer: {
     localisation: localisationReducer,
     [newsApi.reducerPath]:newsApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(newsApi.middleware),
})
let prevLang = store.getState().localisation.language;

store.subscribe(() => {
  const currentLang = store.getState().localisation.language;

  if (currentLang !== prevLang) {
    localStorage.setItem("language", currentLang);
    i18n.changeLanguage(currentLang);
    prevLang = currentLang;
  }
 });

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch