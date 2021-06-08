import React from 'react';
import ForecastChart from './ForecastChart'

export default{
    title: 'ForecastChart',
    component: ForecastChart
}
// Día y hora: DDD HH
// Min : Temperatura mínima
// Max : Temperatura máxima
const data = [
    {
        dayHour: 'Jue 18',
        maxTem: 28,
        minTem: 12
    },
    {
        dayHour: 'Jue 18',
        maxTem: 28,
        minTem: 12
    },
    {
        dayHour: 'Jue 18',
        maxTem: 28,
        minTem: 12
    },
    {
        dayHour: 'Jue 18',
        maxTem: 28,
        minTem: 12
    }
]


export const ForecastChartExample = () => <ForecastChart data={data}/>