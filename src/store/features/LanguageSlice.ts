import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export type Language = "eng" | "ar";
export type LocalisationState ={
    language:Language
}
const initialState: LocalisationState  = {
  language: 'eng',
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