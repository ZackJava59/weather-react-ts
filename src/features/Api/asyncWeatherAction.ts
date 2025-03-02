import {createAsyncThunk} from "@reduxjs/toolkit";
import {api_key, base_url} from "../../utils/constants.ts";
import {WeatherInfo} from "../../utils/types";

export const fetchWeather = createAsyncThunk<WeatherInfo, string>(
    'weather/fetchWeather',
    async (city) => {
        const response = await fetch(`${base_url}?q=${city}&appid=${api_key}&units=metric`)
        if (!response.ok) {
            throw new Error('Enter correct city name');
        }
        const data  = await response.json();
        return {
            city: data.name,
            country: data.sys.country,
            temp: data.main.temp,
            pressure: data.main.pressure,
            sunset: data.sys.sunset * 1000,
            timeStamp: Date.now()
        } as WeatherInfo
    },
)