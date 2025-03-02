import {createSlice} from "@reduxjs/toolkit";
import {fetchWeather} from "../Api/asyncWeatherAction.ts";
import {WeatherInfo} from "../../utils/types";

const weatherSlice = createSlice({
    name: "weather",
    initialState: {
        country: '',
        city: '',
        temp: 0,
        pressure: 0,
        sunset: 0,
        timeStamp: 0
    } as WeatherInfo,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchWeather.fulfilled, (_state, action) => action.payload)
            .addCase(fetchWeather.rejected, (state) => state)
    }
})

export default weatherSlice.reducer