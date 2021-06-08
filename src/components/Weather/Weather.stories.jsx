import React from 'react';
import Weather from './Weather';


export default {
    title: "Weather",
    component: Weather
}

export const WeatherSunny = () => <Weather temperature={22} state="sunny"></Weather>
export const WeatherCloud = () => <Weather temperature={22} state="cloud"></Weather>
export const WeatherCloudy = () => <Weather temperature={22} state="cloudy"></Weather>
export const WeatherFog = () => <Weather temperature={22} state="fog"></Weather>
export const WeatherRain = () => <Weather temperature={22} state="rain"></Weather>