import {useAppSelector} from "../app/hooks.ts";

interface WeatherObj {
    country: string,
    city: string,
    temp: number,
    pressure: number,
    sunset: number,
}

const Weather = () => {
    const message = useAppSelector(state => state.message);
    const weather = useAppSelector(state => state.weather as WeatherObj);
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
    )
}

export default Weather;