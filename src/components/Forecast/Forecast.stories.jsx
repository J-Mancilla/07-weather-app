import React from 'react';
import Forecast from './Forecast'

export default{
    title: 'Forecast',
    component: Forecast
}

const forecastItemList = [
    {weekDay:'Lunes', hour:18, state:'sunny', temperature:27},
    {weekDay:'Martes', hour:6, state:'cloudy', temperature:17},
    {weekDay:'Miércoles', hour:12, state:'cloud', temperature:21},
    {weekDay:'Jueves', hour:4, state:'sunny', temperature:19},
    {weekDay:'Viernes', hour:11, state:'rain', temperature:20},
    {weekDay:'Sábado', hour:22, state:'cloud', temperature:25},
    {weekDay:'Domingo', hour:18, state:'sunny', temperature:29},
]

export const ForecastExample = () => <Forecast forecastItemList={forecastItemList}  />