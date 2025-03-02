import {useAppDispatch, useAppSelector} from "../app/hooks.ts";
import {fetchWeather} from "../features/Api/asyncWeatherAction.ts";
import {weather_cache_time} from "../utils/constants.ts";
import {FormEvent} from "react";

const Form = () => {
    const {timeStamp, city: name} = useAppSelector(state => state.weatherInfo)
    const dispatch = useAppDispatch();

    const handleClickGetWeather = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;
        const input = form.elements.namedItem("city") as HTMLInputElement;
        const city = input.value.trim().toLowerCase();
        if (city !== name.toLowerCase() || Date.now() - timeStamp > weather_cache_time) {
            dispatch(fetchWeather(city));
        }
        input.value = '';
    }

    return (
        <form onSubmit={handleClickGetWeather}>
            <input type={'text'} name={'city'}/>
            <button type={'submit'}>Get Weather</button>
        </form>
    );
};

export default Form;
