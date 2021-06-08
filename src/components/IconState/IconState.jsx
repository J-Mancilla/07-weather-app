import React from 'react'
import PropTypes from 'prop-types'
import {WiCloud, WiDayCloudy, WiDayFog, WiDaySunny, WiRain} from "react-icons/wi"
import { IconContext } from 'react-icons'

const renderState = state => {
    const IconState = stateByName[state] || stateByName["default"]
    return <IconState  />
}

const stateByName = {
    cloud: WiCloud,
    cloudy: WiDayCloudy,
    fog: WiDayFog,
    sunny: WiDaySunny,
    rain: WiRain,
    default: WiDaySunny
}

const IconState = ({state, style}) => {
    return (
        <IconContext.Provider value={style}>
            {renderState(state)}
        </IconContext.Provider>
    )
}

export const validValues = [
    'cloud',
    'cloudy',
    'fog',
    'sunny',
    'rain'
]

IconState.propTypes = {
    state: PropTypes.oneOf(validValues).isRequired,
    style:  PropTypes.object.isRequired
}

export default IconState
