import React from 'react'
import PropTypes from 'prop-types'
import {Typography} from '@material-ui/core'

const WetherDetails = ({humidity, wind}) => {
    return (
        <>
             <Typography variant="h4" >Húmedad: {humidity}% </Typography>
             <Typography variant="h4" >Viento: {wind}km/hr </Typography>
        </>
    )
}

// dia hora estado temperatura

WetherDetails.propTypes = {
    humidity: PropTypes.number.isRequired,
    wind:     PropTypes.number.isRequired
}

export default WetherDetails
