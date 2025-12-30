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

const initialLang = store.getState().localisation.language;
i18n.changeLanguage(initialLang);
document.documentElement.lang = initialLang;
document.documentElement.dir = initialLang === "ar" ? "rtl" : "ltr";

let prevLang = initialLang;

store.subscribe(() => {
  const currentLang = store.getState().localisation.language;

  if (currentLang !== prevLang) {
    localStorage.setItem("language", currentLang);
    i18n.changeLanguage(currentLang);
    document.documentElement.lang = currentLang;
    document.documentElement.dir = currentLang === "ar" ? "rtl" : "ltr";
    prevLang = currentLang;
  }
 });

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch