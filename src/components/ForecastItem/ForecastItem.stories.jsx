import React from 'react';
import ForecastItem from './ForecastItem';

export default{
    title: 'ForecastItem',
    component: ForecastItem
}

export const ForecastItemExample = () => <ForecastItem weekDay="Jueves" hour={9} state= "cloudy" temperature={26} />