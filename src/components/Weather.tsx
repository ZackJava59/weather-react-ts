import {api_key, base_url} from "../utils/constants.ts";
import {useEffect, useState} from "react";
import {City, WeatherInfo} from "../utils/types";

interface Props {
    city: City,
}

const Weather = ({city}: Props) => {
    const [weather, setWeather] = useState<WeatherInfo>({} as WeatherInfo);
    const [message, setMessage] = useState('Enter city name');

    const getWeather = async () => {
        try {
            const response = await fetch(`${base_url}?q=${city.name}&appid=${api_key}&units=metric`);
            if (!response.ok) {
                throw new Error('Enter correct city name');
            }
            const data = await response.json();
            setWeather({
                city: data.name,
                country: data.sys.country,
                temp: data.main.temp,
                pressure: data.main.pressure,
                sunset: data.sys.sunset * 1000
            })
            setMessage('');
        } catch (e) {
            if (e instanceof Error) {
                setMessage(e.message);
            }
        }
    }

    useEffect(() => {
        if (city) {
            getWeather();
        }
    }, [city]);

    return (
        <div className={'infoWeath'}>
            {!message &&
                <>
                    <p>Location: {weather.country}, {weather.city}</p>
                    <p>Temp: {weather.temp}</p>
                    <p>Pressure: {weather.pressure}</p>
                    <p>Sunset: {new Date(weather.sunset).toLocaleTimeString()}</p>
                </>
            }
            {message}
        </div>
    );
};

export default Weather;