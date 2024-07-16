import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from 'types/redux';

type InitialState = {
    modeTheme?: string;
    language: string;
    isMultipleLanguage: boolean;
};

const initialState: InitialState = {
    language: 'vn',
    isMultipleLanguage: true
};

export const appSlice = createSlice({
    name: 'app-container',
    initialState,
    reducers: {
        setModeTheme: (state, action: PayloadAction<string>) => {
            state.modeTheme = action.payload;
        },
        setLanguage: (state, action: PayloadAction<string>) => {
            console.log(action.payload);

            state.language = action.payload;
        },
        setIsMultipleLanguage: (state, action: PayloadAction<boolean>) => {
            state.isMultipleLanguage = action.payload;
        }
    }
});

export const { setModeTheme, setLanguage, setIsMultipleLanguage } = appSlice.actions;

export const appSelector = (state: RootState): typeof state.appReducer => state.appReducer;

export default appSlice.reducer;
