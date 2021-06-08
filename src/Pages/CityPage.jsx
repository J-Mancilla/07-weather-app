import React from 'react'
import { Grid } from '@material-ui/core'
import CityInfo from '../components/CityInfo/CityInfo'
import Weather from '../components/Weather/Weather'
import WeatherDetails from '../components/WeatherDetails/WetherDetails'
import ForecastChart from '../components/ForecastChart/ForecastChart'
import Forecast from '../components/Forecast/Forecast'
import AppFrame from '../components/AppFrame/AppFrame'
import { Paper } from '@material-ui/core'

const city = 'Morelia'
const country = 'México'
const temperature = 32
const state = 'sunny'
const humidity = 30
const wind = 16
const data = [
    {
        dayHour: 'Jue 18',
        maxTem: 28,
        minTem: 12
    },
    {
        dayHour: 'Jue 20',
        maxTem: 20,
        minTem: 11
    },
    {
        dayHour: 'Jue 22',
        maxTem: 18,
        minTem: 10
    },
    {
        dayHour: 'Vie 00',
        maxTem: 12,
        minTem: 9
    }
]
const forecastItemList = [
    {weekDay:'Lunes', hour:18, state:'sunny', temperature:27},
    {weekDay:'Martes', hour:6, state:'cloudy', temperature:17},
    {weekDay:'Miércoles', hour:12, state:'cloud', temperature:21},
    {weekDay:'Jueves', hour:4, state:'sunny', temperature:19},
    {weekDay:'Viernes', hour:11, state:'rain', temperature:20},
    {weekDay:'Sábado', hour:22, state:'cloud', temperature:25},
    {weekDay:'Domingo', hour:18, state:'sunny', temperature:29},
]
const CityPage = () => {
    return (
        <AppFrame>
            <Paper elevation = {3} >
                <Grid container justify='space-around'  spacing={2}>
                    <Grid container item xs={12} justify='center' alignItems='flex-end'>
                        <CityInfo country={country} city={city}  />
                    </Grid>
                    <Grid container item xs={12} justify='center'>
                            <Weather state={state} temperature={temperature}  />
                            <WeatherDetails wind={wind} humidity={humidity}  />
                    </Grid>
                    <Grid item xs={12}>
                        <ForecastChart data={data}/>
                    </Grid>
                    <Grid item xs={12}>
                        <Forecast forecastItemList={forecastItemList} />
                    </Grid>
                </Grid>
            </Paper>
        </AppFrame>
    )
}

export default CityPage
