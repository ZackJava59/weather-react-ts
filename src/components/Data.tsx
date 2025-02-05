import Form from "./Form.tsx";
import Weather from "./Weather.tsx";
import {useRef, useState} from "react";
import {weather_cache_time} from "../utils/constants.ts";
import {City} from "../utils/types";

const Data = () => {
        const [city, setCity] = useState<City>({name: '', timeStamp: 0});
        const lastRequest = useRef<City>({name: '', timeStamp: 0});

        const handleCityChange = (newCity: City) => {
            const currentTime = Date.now();
            if (newCity.name !== lastRequest.current.name || currentTime - lastRequest.current.timeStamp > weather_cache_time) {
                setCity(newCity);
                lastRequest.current = {...newCity, timeStamp: currentTime};
            }
        };

        return (
            <div className={'col-sm-7 form'}>
                <Form setCity={handleCityChange}/>
                {city && <Weather city={city}/>}
            </div>
        );
    }
;

export default Data;