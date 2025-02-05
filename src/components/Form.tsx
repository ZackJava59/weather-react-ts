import {City} from "../utils/types";
import {FormEvent} from "react";

interface Props {
    setCity: (city: City) => void;
}

const Form = ({setCity}: Props) => {

    const handleClickGetWeather = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const cityName = e.currentTarget.city.value.trim();
        if (cityName) {
            setCity({name: cityName, timeStamp: Date.now()});
        }
        e.currentTarget.city.value = '';
    }

    return (
        <form onSubmit={handleClickGetWeather}>
            <input type={'text'} name={'city'}/>
            <button type={'submit'}>Get Weather</button>
        </form>
    );
};

export default Form;