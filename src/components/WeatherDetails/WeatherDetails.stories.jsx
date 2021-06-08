import React from 'react';
import WeatherDetails from './WetherDetails';


export default {
    title: "Weather Details",
    component: WeatherDetails
}

export const WeatherSunny = () => <WeatherDetails humidity={10} wind={26}/>