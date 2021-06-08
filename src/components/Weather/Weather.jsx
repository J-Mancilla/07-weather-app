import React from 'react'
import PropTypes from 'prop-types'
import { Typography } from '@material-ui/core'
import {WiCloud, WiDayCloudy, WiDayFog, WiDaySunny, WiRain} from "react-icons/wi"
import { IconContext } from 'react-icons'
import { Grid } from '@material-ui/core'

const stateByName = {
    cloud: WiCloud,
    cloudy: WiDayCloudy,
    fog: WiDayFog,
    sunny: WiDaySunny,
    rain: WiRain,
    default: WiDaySunny
}

const renderState = state => {
    const IconState = stateByName[state] || stateByName["default"]
    return <IconState  />
}

const Weather = ({temperature, state}) => {
    return (
        <Grid container item direction='row' justify='center' alignItems='center' spacing={1}>
            <IconContext.Provider value={{size: '6em', display: 'inline'}}>
                {renderState(state)}
            </IconContext.Provider>
            <Typography display="inline" variant="h2">{temperature}</Typography>
        </Grid>
    )
}

const validValues = [
    'cloud',
    'cloudy',
    'fog',
    'sunny',
    'rain'
]

Weather.propTypes = {
    temperature: PropTypes.number.isRequired,
    state: PropTypes.oneOf(validValues).isRequired
}

export default Weather
