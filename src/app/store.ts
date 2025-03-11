import {configureStore} from "@reduxjs/toolkit";
import {weatherApi} from "../features/Api/WeatherApi.ts";
import city from "../features/slices/citySlice.ts";

export const store = configureStore({
    reducer: {
        city,
        [weatherApi.reducerPath]: weatherApi.reducer,
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(weatherApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;