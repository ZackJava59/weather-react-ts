import {createSlice} from "@reduxjs/toolkit";
import {fetchWeather} from "../Api/asyncWeatherAction.ts";

const messageSlice = createSlice({
    name: 'message',
    initialState: 'Enter City name',
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchWeather.pending, () => 'Pending Weather')
            .addCase(fetchWeather.fulfilled, () => '')
            .addCase(fetchWeather.rejected, (_state, action) => action.error.message)
    }
})

export default messageSlice.reducer