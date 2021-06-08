import React from 'react'
import PropTypes from 'prop-types'
import CityInfo from '../CityInfo/CityInfo'
import Weather from '../Weather/Weather'
import {Grid, List, ListItem} from '@material-ui/core'


const renderAndCityCountry = eventOnClickCity => cityAndCountry => {
    const {city, country} = cityAndCountry;
    return (
        <ListItem  key={city} onClick = {eventOnClickCity} button>
            <Grid container item   justify =  'space-between'  alignItems = 'center' >
                <Grid  item md={8} xs={12}>
                    <CityInfo city = {city} country = {country}  />
                </Grid>
                <Grid  item md={4} xs={12}>
                    <Weather temperature = {30} statse = 'sunny'  />
                </Grid>
            </Grid>
        </ListItem>
    )
}

const CityList = ({cities, onClickCity}) => {
    return (
        <List>
            <Grid container >
                {
                    cities.map(cityAndCountry => renderAndCityCountry(onClickCity)(cityAndCountry))
                }
            </Grid>
        </List>
    )
}

CityList.propTypes = {
    cities: PropTypes.array.isRequired,
    onClickCity: PropTypes.func.isRequired
}

export default CityList
