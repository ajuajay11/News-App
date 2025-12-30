import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export type Language = "ar" | "en";
export type LocalisationState ={
    language:Language
}
const savedLang = localStorage.getItem("language") as Language | null;

const initialState: LocalisationState  = {
  language: savedLang === 'ar' ? 'ar' : 'en',
}
export const languageSlice = createSlice({
  name: 'localisation',
  initialState,
  reducers: {
    changeLanguage: (state, action: PayloadAction<Language>) => {
      state.language = action.payload
    },
  },
})

export const { changeLanguage } = languageSlice.actions
export default languageSlice.reducer;